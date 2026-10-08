import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export interface LiveBookItem {
  id: string;
  title: string;
  subtitle?: string;
  authors: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  thumbnail?: string;
  openLibraryUrl?: string;
  amazonUrl?: string;
  googleBooksUrl?: string;
  goodreadsUrl?: string;
  orcidUrl?: string;
  categories?: string[];
  isbn?: string;
  isbn13?: string;
  pages?: number | string;
  language?: string;
  edition?: string;
  isVerifiedLive?: boolean;
}

const AUTHOR_OL_ID = "OL16612687A";
const AUTHOR_NAME = "Bijoy Lohar";
const AMAZON_AUTHOR_URL = "https://www.amazon.com/author/bijoylohar";
const GOODREADS_AUTHOR_URL = "https://www.goodreads.com/bijoylohar";
const ORCID_ID = "0009-0004-5643-7612";
const ORCID_URL = `https://orcid.org/${ORCID_ID}`;

// Server-side in-memory cache for sub-millisecond instant responses
let serverMemoryCache: { data: any; timestamp: number } | null = null;
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 mins cache
let isUpdatingInBackground = false;

async function fetchLiveRegistries(): Promise<LiveBookItem[]> {
  const booksMap = new Map<string, LiveBookItem>();

  try {
    // 1. Run all primary registry queries in PARALLEL with Promise.allSettled
    const [authorWorksResult, orcidResult, searchResult, gbResult] = await Promise.allSettled([
      fetch(`https://openlibrary.org/authors/${AUTHOR_OL_ID}/works.json?limit=50`, {
        next: { revalidate: 1800 },
      }).then((r) => (r.ok ? r.json() : null)),
      fetch(`https://pub.orcid.org/v3.0/${ORCID_ID}/works`, {
        headers: { Accept: "application/json" },
        next: { revalidate: 1800 },
      }).then((r) => (r.ok ? r.json() : null)),
      fetch(`https://openlibrary.org/search.json?author=${encodeURIComponent(AUTHOR_NAME)}&mode=everything`, {
        next: { revalidate: 1800 },
      }).then((r) => (r.ok ? r.json() : null)),
      fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:%22Bijoy+Lohar%22&orderBy=newest&maxResults=10`, {
        next: { revalidate: 3600 },
      }).then((r) => (r.ok ? r.json() : null)),
    ]);

    // 2. Process Open Library Author Works
    const editionFetches: Promise<{ workId: string; ed: any }>[] = [];

    if (authorWorksResult.status === "fulfilled" && authorWorksResult.value?.entries) {
      for (const entry of authorWorksResult.value.entries) {
        const rawKey = entry.key || "";
        const workId = rawKey.replace("/works/", "");
        if (!workId) continue;

        let descText = "";
        if (typeof entry.description === "string") {
          descText = entry.description;
        } else if (entry.description?.value) {
          descText = entry.description.value;
        }

        let coverUrl: string | undefined = undefined;
        if (Array.isArray(entry.covers) && entry.covers.length > 0) {
          coverUrl = `https://covers.openlibrary.org/b/id/${entry.covers[0]}-L.jpg`;
        }

        const bookItem: LiveBookItem = {
          id: workId,
          title: entry.title || "Published Literature",
          authors: [AUTHOR_NAME],
          publisher: "Bijoy Lohar",
          publishedDate: "2026",
          description: descText,
          thumbnail: coverUrl,
          openLibraryUrl: `https://openlibrary.org${rawKey}`,
          amazonUrl: AMAZON_AUTHOR_URL,
          googleBooksUrl: `https://books.google.com/books?q=${encodeURIComponent(entry.title)}`,
          goodreadsUrl: GOODREADS_AUTHOR_URL,
          orcidUrl: ORCID_URL,
          categories: Array.isArray(entry.subjects) ? entry.subjects.slice(0, 6) : [],
          isVerifiedLive: true,
        };

        booksMap.set(workId, bookItem);

        // Queue edition fetch in parallel
        editionFetches.push(
          fetch(`https://openlibrary.org/works/${workId}/editions.json`, {
            next: { revalidate: 3600 },
          })
            .then((r) => (r.ok ? r.json() : null))
            .then((edData) => ({
              workId,
              ed: Array.isArray(edData?.entries) && edData.entries.length > 0 ? edData.entries[0] : null,
            }))
            .catch(() => ({ workId, ed: null }))
        );
      }
    }

    // 3. Process Edition Results in Parallel
    if (editionFetches.length > 0) {
      const editionResults = await Promise.allSettled(editionFetches);
      for (const res of editionResults) {
        if (res.status === "fulfilled" && res.value.ed) {
          const { workId, ed } = res.value;
          const existing = booksMap.get(workId);
          if (existing) {
            let isbnStr = "";
            if (Array.isArray(ed.isbn_13) && ed.isbn_13.length > 0) {
              isbnStr = ed.isbn_13[0];
            } else if (Array.isArray(ed.isbn_10) && ed.isbn_10.length > 0) {
              isbnStr = ed.isbn_10[0];
            }

            if (isbnStr) {
              existing.isbn = isbnStr;
              existing.isbn13 = isbnStr.replace(/[^0-9X]/gi, "");
              existing.amazonUrl = `https://www.amazon.com/s?k=${encodeURIComponent(isbnStr)}`;
            }
            if (ed.publish_date) existing.publishedDate = ed.publish_date;
            if (Array.isArray(ed.publishers) && ed.publishers.length > 0) existing.publisher = ed.publishers[0];
            if (!existing.thumbnail && Array.isArray(ed.covers) && ed.covers.length > 0) {
              existing.thumbnail = `https://covers.openlibrary.org/b/id/${ed.covers[0]}-L.jpg`;
            }
            if (isbnStr) booksMap.set(isbnStr, existing);
          }
        }
      }
    }

    // 4. Process ORCID Works
    if (orcidResult.status === "fulfilled" && Array.isArray(orcidResult.value?.group)) {
      for (const grp of orcidResult.value.group) {
        const summary = grp["work-summary"]?.[0];
        if (!summary) continue;

        const title = summary.title?.title?.value || "";
        if (!title) continue;

        let isbnVal: string | undefined = undefined;
        const extIds = summary["external-ids"]?.["external-id"];
        if (Array.isArray(extIds)) {
          const isbnObj = extIds.find(
            (ext: any) => ext["external-id-type"]?.toLowerCase() === "isbn"
          );
          if (isbnObj) isbnVal = isbnObj["external-id-value"];
        }

        const pubYear = summary["publication-date"]?.year?.value || "2026";
        const existing = (isbnVal && booksMap.get(isbnVal)) || booksMap.get(title);

        const updatedItem: LiveBookItem = {
          ...(existing || {
            id: isbnVal || title,
            title: title,
            authors: [AUTHOR_NAME],
            publisher: AUTHOR_NAME,
            publishedDate: pubYear,
            goodreadsUrl: GOODREADS_AUTHOR_URL,
            amazonUrl: isbnVal
              ? `https://www.amazon.com/s?k=${encodeURIComponent(isbnVal)}`
              : AMAZON_AUTHOR_URL,
            googleBooksUrl: `https://books.google.com/books?q=${encodeURIComponent(title)}`,
            orcidUrl: ORCID_URL,
            isVerifiedLive: true,
          }),
          title: title || existing?.title || "Published Work",
          publishedDate: pubYear || existing?.publishedDate,
          isbn: isbnVal || existing?.isbn,
          isbn13: isbnVal ? isbnVal.replace(/[^0-9X]/gi, "") : existing?.isbn13,
          orcidUrl: ORCID_URL,
          amazonUrl: existing?.amazonUrl || (isbnVal ? `https://www.amazon.com/s?k=${encodeURIComponent(isbnVal)}` : AMAZON_AUTHOR_URL),
          goodreadsUrl: GOODREADS_AUTHOR_URL,
          isVerifiedLive: true,
        };

        booksMap.set(isbnVal || title, updatedItem);
      }
    }

    // 5. Process Open Library broad search docs
    if (searchResult.status === "fulfilled" && Array.isArray(searchResult.value?.docs)) {
      for (const doc of searchResult.value.docs) {
        const isMatch =
          doc.author_name?.some((a: string) => a.toLowerCase().includes("bijoy lohar")) ||
          doc.author_key?.includes(AUTHOR_OL_ID);

        if (isMatch) {
          const workKey = doc.key ? doc.key.replace("/works/", "") : doc.title;
          const existing = booksMap.get(workKey);
          const isbnVal = Array.isArray(doc.isbn) ? doc.isbn[0] : existing?.isbn;
          const coverUrl = doc.cover_i
            ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`
            : existing?.thumbnail;

          booksMap.set(workKey, {
            id: workKey,
            title: doc.title || existing?.title || "Published Work",
            subtitle: doc.first_sentence || existing?.subtitle,
            authors: doc.author_name || [AUTHOR_NAME],
            publisher: Array.isArray(doc.publisher) ? doc.publisher[0] : (existing?.publisher || AUTHOR_NAME),
            publishedDate: doc.first_publish_year ? String(doc.first_publish_year) : (existing?.publishedDate || "2026"),
            description: doc.description || existing?.description,
            thumbnail: coverUrl,
            openLibraryUrl: doc.key ? `https://openlibrary.org${doc.key}` : `https://openlibrary.org/authors/${AUTHOR_OL_ID}`,
            amazonUrl: existing?.amazonUrl || (isbnVal ? `https://www.amazon.com/s?k=${encodeURIComponent(isbnVal)}` : AMAZON_AUTHOR_URL),
            googleBooksUrl: existing?.googleBooksUrl || `https://books.google.com/books?q=${encodeURIComponent(doc.title)}`,
            goodreadsUrl: GOODREADS_AUTHOR_URL,
            orcidUrl: ORCID_URL,
            categories: Array.isArray(doc.subject) ? doc.subject.slice(0, 6) : (existing?.categories || []),
            isbn: isbnVal,
            isbn13: isbnVal ? isbnVal.replace(/[^0-9X]/gi, "") : undefined,
            pages: doc.number_of_pages_median || existing?.pages,
            isVerifiedLive: true,
          });
        }
      }
    }

    // 6. Process Google Books
    if (gbResult.status === "fulfilled" && Array.isArray(gbResult.value?.items)) {
      for (const item of gbResult.value.items) {
        const info = item.volumeInfo;
        if (info?.authors?.some((a: string) => a.toLowerCase().includes("bijoy lohar"))) {
          const isbnObj = info.industryIdentifiers?.find((i: any) => i.type.includes("ISBN"));
          const isbnVal = isbnObj ? isbnObj.identifier : undefined;
          const existing = booksMap.get(item.id) || (isbnVal ? booksMap.get(isbnVal) : undefined);

          booksMap.set(item.id, {
            id: item.id,
            title: info.title || existing?.title || "Published Work",
            subtitle: info.subtitle || existing?.subtitle,
            authors: info.authors || [AUTHOR_NAME],
            publisher: info.publisher || existing?.publisher || AUTHOR_NAME,
            publishedDate: info.publishedDate || existing?.publishedDate,
            description: info.description || existing?.description,
            thumbnail: info.imageLinks?.thumbnail || info.imageLinks?.smallThumbnail || existing?.thumbnail,
            openLibraryUrl: existing?.openLibraryUrl || `https://openlibrary.org/authors/${AUTHOR_OL_ID}`,
            amazonUrl: existing?.amazonUrl || (isbnVal ? `https://www.amazon.com/s?k=${encodeURIComponent(isbnVal)}` : AMAZON_AUTHOR_URL),
            googleBooksUrl: info.infoLink || info.previewLink || `https://books.google.com/books?id=${item.id}`,
            goodreadsUrl: GOODREADS_AUTHOR_URL,
            orcidUrl: ORCID_URL,
            categories: info.categories || existing?.categories || [],
            isbn: isbnVal || existing?.isbn,
            isbn13: isbnVal ? isbnVal.replace(/[^0-9X]/gi, "") : existing?.isbn13,
            pages: info.pageCount || existing?.pages,
            isVerifiedLive: true,
          });
        }
      }
    }
  } catch (error) {
    console.error("Parallel Books Sync Error:", error);
  }

  const booksList = Array.from(booksMap.values());
  const deduplicated: LiveBookItem[] = [];
  const seenTitles = new Set<string>();

  for (const b of booksList) {
    const norm = b.title.toLowerCase().trim();
    if (!seenTitles.has(norm)) {
      seenTitles.add(norm);
      deduplicated.push(b);
    }
  }

  return deduplicated;
}

export async function GET() {
  const now = Date.now();

  // If server cache is warm and valid, return in < 1ms
  if (serverMemoryCache && now - serverMemoryCache.timestamp < CACHE_TTL_MS) {
    return NextResponse.json(serverMemoryCache.data, {
      headers: {
        "Cache-Control": "public, max-age=900, stale-while-revalidate=1800",
        "X-Cache-Status": "HIT",
      },
    });
  }

  // If cache is expired but exists, return stale cache immediately and update in background (SWR)
  if (serverMemoryCache && !isUpdatingInBackground) {
    isUpdatingInBackground = true;
    fetchLiveRegistries()
      .then((freshBooks) => {
        serverMemoryCache = {
          data: {
            author: AUTHOR_NAME,
            authorOpenLibraryId: AUTHOR_OL_ID,
            amazonAuthorUrl: AMAZON_AUTHOR_URL,
            goodreadsUrl: GOODREADS_AUTHOR_URL,
            orcidUrl: ORCID_URL,
            total: freshBooks.length,
            timestamp: new Date().toISOString(),
            books: freshBooks,
          },
          timestamp: Date.now(),
        };
      })
      .finally(() => {
        isUpdatingInBackground = false;
      });

    return NextResponse.json(serverMemoryCache.data, {
      headers: {
        "Cache-Control": "public, max-age=900, stale-while-revalidate=1800",
        "X-Cache-Status": "STALE",
      },
    });
  }

  // Cold start: perform parallel fetch
  const freshBooks = await fetchLiveRegistries();
  const responseData = {
    author: AUTHOR_NAME,
    authorOpenLibraryId: AUTHOR_OL_ID,
    amazonAuthorUrl: AMAZON_AUTHOR_URL,
    goodreadsUrl: GOODREADS_AUTHOR_URL,
    orcidUrl: ORCID_URL,
    total: freshBooks.length,
    timestamp: new Date().toISOString(),
    books: freshBooks,
  };

  serverMemoryCache = {
    data: responseData,
    timestamp: now,
  };

  return NextResponse.json(responseData, {
    headers: {
      "Cache-Control": "public, max-age=900, stale-while-revalidate=1800",
      "X-Cache-Status": "MISS",
    },
  });
}

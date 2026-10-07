export interface BookItem {
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
  categories?: string[];
  isbn?: string;
  isbn13?: string;
  pages?: number | string;
  language?: string;
  edition?: string;
  isVerifiedLive?: boolean;
  tableOfContents?: { chapter: string; title: string; desc: string }[];
}

// Verified default publications catalog for Bijoy Lohar
export const VERIFIED_PUBLICATIONS: BookItem[] = [
  {
    id: "OL46029039W",
    title: "Architecting Scalable Web Systems",
    subtitle: "A Practical Guide to Modern Full Stack Development, APIs, and Cloud Infrastructure",
    authors: ["Bijoy Lohar"],
    publisher: "Bijoy Lohar",
    publishedDate: "September 2026",
    edition: "First Edition / Technical Manual",
    language: "English",
    description:
      "Architecting Scalable Web Systems is an in-depth technical manual designed for software engineers building resilient web platforms, high-throughput APIs, and distributed cloud applications. Details modern system design, connection scaling, server-side caching, database connection pooling, microservices orchestration, and production edge architecture.",
    thumbnail: "https://covers.openlibrary.org/b/id/15259748-L.jpg",
    openLibraryUrl: "https://openlibrary.org/works/OL46029039W",
    amazonUrl: "https://www.amazon.com/s?k=9789334528954",
    googleBooksUrl: "https://books.google.com/books?vid=ISBN9789334528954",
    goodreadsUrl: "https://www.goodreads.com/bijoylohar",
    categories: [
      "Web Engineering",
      "Distributed Systems",
      "Cloud Infrastructure",
      "System Design",
      "API Architecture",
      "Full-Stack Engineering"
    ],
    isbn: "978-93-345-2895-4",
    isbn13: "9789334528954",
    isVerifiedLive: true,
    tableOfContents: [
      {
        chapter: "Part I",
        title: "Foundations of High-Throughput Web Systems",
        desc: "Latency profiles, thread pooling, event loops, and asynchronous I/O architectures."
      },
      {
        chapter: "Part II",
        title: "Resilient API Gateways & Edge Caching",
        desc: "Rate limiting, HTTP/3, reverse proxies, and multi-region cache invalidation."
      },
      {
        chapter: "Part III",
        title: "Database Scaling & Concurrency Models",
        desc: "Read replicas, indexing strategies, connection poolers, and distributed transactions."
      },
      {
        chapter: "Part IV",
        title: "Cloud Infrastructure & Edge Deployments",
        desc: "Serverless orchestration, micro-frontends, telemetry observability, and CI/CD pipelines."
      }
    ]
  }
];

export const AUTHOR_OPEN_LIBRARY_ID = "OL16612687A";
export const AUTHOR_NAME = "Bijoy Lohar";

/**
 * Automatically fetches books authored by Bijoy Lohar from Open Library & Google Books APIs.
 * Any new book added to Open Library (under author OL16612687A or Bijoy Lohar) will appear automatically.
 */
export async function fetchLiveAuthorBooks(): Promise<BookItem[]> {
  const booksMap = new Map<string, BookItem>();

  // 1. Initialize with verified default publications
  VERIFIED_PUBLICATIONS.forEach((book) => {
    booksMap.set(book.id, book);
    if (book.isbn13) booksMap.set(book.isbn13, book);
  });

  try {
    // 2. Fetch Open Library Author Works + Search queries in parallel
    const [authorWorksRes, searchRes, isbnRes] = await Promise.allSettled([
      fetch(`https://openlibrary.org/authors/${AUTHOR_OPEN_LIBRARY_ID}/works.json?limit=50`, {
        cache: "no-store",
      }).then((r) => (r.ok ? r.json() : null)),
      fetch(`https://openlibrary.org/search.json?author=${encodeURIComponent(AUTHOR_NAME)}&mode=everything`, {
        cache: "no-store",
      }).then((r) => (r.ok ? r.json() : null)),
      fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(AUTHOR_NAME)}`, {
        cache: "no-store",
      }).then((r) => (r.ok ? r.json() : null)),
    ]);

    // Helper to process Open Library Works entries
    if (authorWorksRes.status === "fulfilled" && authorWorksRes.value?.entries) {
      for (const entry of authorWorksRes.value.entries) {
        const rawKey = entry.key || "";
        const id = rawKey.replace("/works/", "");
        if (!id) continue;

        const existing = booksMap.get(id) || booksMap.get("OL46029039W");
        const title = entry.title || existing?.title || "Published Work";
        const desc =
          typeof entry.description === "string"
            ? entry.description
            : entry.description?.value || existing?.description;

        const coverId = entry.covers && entry.covers.length > 0 ? entry.covers[0] : null;
        const thumbnail = coverId
          ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
          : existing?.thumbnail || "https://covers.openlibrary.org/b/id/15259748-L.jpg";

        booksMap.set(id, {
          ...(existing || VERIFIED_PUBLICATIONS[0]),
          id,
          title,
          description: desc,
          thumbnail,
          publisher: existing?.publisher || "Bijoy Lohar",
          authors: [AUTHOR_NAME],
          openLibraryUrl: `https://openlibrary.org${rawKey}`,
          amazonUrl: existing?.amazonUrl || `https://www.amazon.com/s?k=${encodeURIComponent(title + " Bijoy Lohar")}`,
          googleBooksUrl: existing?.googleBooksUrl || `https://books.google.com/books?q=${encodeURIComponent(title)}`,
          isVerifiedLive: true,
        });
      }
    }

    // Helper to process Open Library Search docs
    const processSearchDoc = (doc: any) => {
      const isAuthorMatch = doc.author_name?.some((a: string) =>
        a.toLowerCase().includes("bijoy lohar")
      );
      const isKeyMatch = doc.author_key?.includes(AUTHOR_OPEN_LIBRARY_ID);
      const isIsbnMatch = doc.isbn?.some((i: string) => i.includes("9789334528954") || i.includes("9789334536065"));

      if (isAuthorMatch || isKeyMatch || isIsbnMatch) {
        const id = doc.key ? doc.key.replace("/works/", "") : doc.cover_edition_key || doc.title;
        const existing = booksMap.get(id);
        const isbnVal = doc.isbn ? doc.isbn[0] : existing?.isbn || "978-93-345-2895-4";
        const coverUrl = doc.cover_i
          ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`
          : existing?.thumbnail || "https://covers.openlibrary.org/b/id/15259748-L.jpg";

        booksMap.set(id, {
          ...(existing || VERIFIED_PUBLICATIONS[0]),
          id,
          title: doc.title || existing?.title || "Architecting Scalable Web Systems",
          subtitle: doc.first_sentence || existing?.subtitle || "A Practical Guide to Modern Full Stack Development, APIs, and Cloud Infrastructure",
          authors: doc.author_name || [AUTHOR_NAME],
          publisher: doc.publisher ? doc.publisher[0] : existing?.publisher || "Bijoy Lohar",
          publishedDate: doc.first_publish_year ? String(doc.first_publish_year) : existing?.publishedDate || "2026",
          description: doc.description?.value || doc.description || existing?.description,
          thumbnail: coverUrl,
          openLibraryUrl: doc.key ? `https://openlibrary.org${doc.key}` : `https://openlibrary.org/authors/${AUTHOR_OPEN_LIBRARY_ID}`,
          amazonUrl: existing?.amazonUrl || `https://www.amazon.com/s?k=${encodeURIComponent((doc.isbn?.[0] || doc.title) + " Bijoy Lohar")}`,
          googleBooksUrl: existing?.googleBooksUrl || `https://books.google.com/books?q=${encodeURIComponent(doc.title)}`,
          categories: doc.subject ? doc.subject.slice(0, 5) : existing?.categories,
          isbn: isbnVal,
          isbn13: isbnVal.replace(/-/g, ""),
          pages: doc.number_of_pages_median || existing?.pages,
          isVerifiedLive: true,
        });
      }
    };

    if (searchRes.status === "fulfilled" && searchRes.value?.docs) {
      searchRes.value.docs.forEach(processSearchDoc);
    }
    if (isbnRes.status === "fulfilled" && isbnRes.value?.docs) {
      isbnRes.value.docs.forEach(processSearchDoc);
    }

    // 3. Check Google Books API if accessible
    try {
      const googleRes = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:%22Bijoy+Lohar%22&orderBy=newest&maxResults=10`,
        { cache: "no-store" }
      );
      if (googleRes.ok) {
        const googleData = await googleRes.json();
        if (googleData.items && googleData.items.length > 0) {
          googleData.items.forEach((item: any) => {
            const info = item.volumeInfo;
            if (info?.authors?.some((a: string) => a.toLowerCase().includes("bijoy lohar"))) {
              const isbnObj = info.industryIdentifiers?.find((i: any) => i.type.includes("ISBN"));
              const isbnVal = isbnObj ? isbnObj.identifier : "9789334528954";
              const existing = booksMap.get(item.id) || booksMap.get("OL46029039W");

              booksMap.set(item.id, {
                ...(existing || VERIFIED_PUBLICATIONS[0]),
                id: item.id,
                title: info.title || existing?.title,
                subtitle: info.subtitle || existing?.subtitle,
                authors: info.authors || [AUTHOR_NAME],
                publisher: info.publisher || existing?.publisher || "Bijoy Lohar",
                publishedDate: info.publishedDate || existing?.publishedDate,
                description: info.description || existing?.description,
                thumbnail: info.imageLinks?.thumbnail || info.imageLinks?.smallThumbnail || existing?.thumbnail,
                openLibraryUrl: existing?.openLibraryUrl || `https://openlibrary.org/authors/${AUTHOR_OPEN_LIBRARY_ID}`,
                amazonUrl: existing?.amazonUrl || `https://www.amazon.com/s?k=${encodeURIComponent(info.title + " Bijoy Lohar")}`,
                googleBooksUrl: info.infoLink || info.previewLink || `https://books.google.com/books?id=${item.id}`,
                categories: info.categories || existing?.categories,
                isbn: isbnVal,
                isbn13: isbnVal.replace(/-/g, ""),
                pages: info.pageCount || existing?.pages,
                isVerifiedLive: true,
              });
            }
          });
        }
      }
    } catch {
      // Google Books rate limit fallback ignored silently
    }
  } catch (err) {
    console.warn("Live book sync fetch warning:", err);
  }

  const uniqueBooks = Array.from(booksMap.values());
  return uniqueBooks.length > 0 ? uniqueBooks : VERIFIED_PUBLICATIONS;
}

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
  orcidUrl?: string;
  categories?: string[];
  isbn?: string;
  isbn13?: string;
  pages?: number | string;
  language?: string;
  edition?: string;
  isVerifiedLive?: boolean;
}

export const AUTHOR_OPEN_LIBRARY_ID = "OL16612687A";
export const AUTHOR_NAME = "Bijoy Lohar";
export const AMAZON_AUTHOR_URL = "https://www.amazon.com/author/bijoylohar";
export const GOODREADS_AUTHOR_URL = "https://www.goodreads.com/bijoylohar";
export const ORCID_ID = "0009-0004-5643-7612";
export const ORCID_URL = `https://orcid.org/${ORCID_ID}`;

// Client-side memory cache for instantaneous 0ms transitions
let clientMemoryCache: BookItem[] | null = null;

/**
 * Returns cached books immediately (0ms) if available, while syncing in background.
 */
export async function fetchLiveAuthorBooks(): Promise<BookItem[]> {
  // 1. Check in-memory variable (0ms)
  if (clientMemoryCache && clientMemoryCache.length > 0) {
    // Fire background refresh without blocking
    refreshInBackground();
    return clientMemoryCache;
  }

  // 2. Check browser sessionStorage for instant tab navigation (0ms)
  if (typeof window !== "undefined") {
    try {
      const stored = sessionStorage.getItem("bijoy_books_cache");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          clientMemoryCache = parsed;
          refreshInBackground();
          return parsed;
        }
      }
    } catch {
      // ignore storage errors
    }
  }

  // 3. Fetch from internal high-speed cache API
  try {
    const res = await fetch("/api/books", { cache: "default" });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.books)) {
        clientMemoryCache = data.books;
        if (typeof window !== "undefined") {
          try {
            sessionStorage.setItem("bijoy_books_cache", JSON.stringify(data.books));
          } catch {
            // ignore
          }
        }
        return data.books;
      }
    }
  } catch (err) {
    console.warn("Client API fetch fallback to direct provider:", err);
  }

  // 4. Direct fetch fallback from Open Library
  const booksMap = new Map<string, BookItem>();

  try {
    const authorWorksRes = await fetch(
      `https://openlibrary.org/authors/${AUTHOR_OPEN_LIBRARY_ID}/works.json?limit=50`
    );

    if (authorWorksRes.ok) {
      const authorWorks = await authorWorksRes.json();
      if (Array.isArray(authorWorks.entries)) {
        for (const entry of authorWorks.entries) {
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

          const bookItem: BookItem = {
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
        }
      }
    }
  } catch (e) {
    console.warn("Direct Open Library fetch error:", e);
  }

  const result = Array.from(booksMap.values());
  if (result.length > 0) {
    clientMemoryCache = result;
  }
  return result;
}

function refreshInBackground() {
  if (typeof window === "undefined") return;
  fetch("/api/books")
    .then((r) => (r.ok ? r.json() : null))
    .then((data) => {
      if (Array.isArray(data?.books) && data.books.length > 0) {
        clientMemoryCache = data.books;
        try {
          sessionStorage.setItem("bijoy_books_cache", JSON.stringify(data.books));
        } catch {
          // ignore
        }
      }
    })
    .catch(() => {});
}

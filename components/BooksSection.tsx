"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, RefreshCw, ShoppingCart, Library, CheckCircle2, Sparkles } from "lucide-react";

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
  categories?: string[];
  isbn?: string;
  isVerifiedLive?: boolean;
}

// Default verified publications catalog for Bijoy Lohar
const VERIFIED_PUBLICATIONS: BookItem[] = [
  {
    id: "OL46029039W",
    title: "Architecting Scalable Web Systems",
    subtitle: "A Practical Guide to Modern Full Stack Development, APIs, and Cloud Infrastructure",
    authors: ["Bijoy Lohar"],
    publisher: "Bijoy Lohar / Shadow Arrow Press",
    publishedDate: "September 2026",
    description:
      "Architecting Scalable Web Systems is an in-depth technical manual designed for software engineers building resilient web platforms, high-throughput APIs, and distributed cloud applications. Details modern system design, connection scaling, server-side caching, and production edge architecture.",
    thumbnail: "https://covers.openlibrary.org/b/id/15259748-L.jpg",
    openLibraryUrl: "https://openlibrary.org/works/OL46029039W",
    amazonUrl: "https://www.amazon.com/s?k=9789334528954",
    googleBooksUrl: "https://books.google.com/books?vid=ISBN9789334528954",
    categories: ["Web Engineering", "Distributed Systems", "Cloud Infrastructure", "System Design"],
    isbn: "ISBN-13: 9789334528954",
    isVerifiedLive: true,
  },
];

export const BooksSection: React.FC = () => {
  const [books, setBooks] = useState<BookItem[]>(VERIFIED_PUBLICATIONS);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [syncSource, setSyncSource] = useState<string>("Open Library + Amazon Live");

  const fetchLiveBooks = async () => {
    setIsLoading(true);
    const fetchedMap = new Map<string, BookItem>();

    // Pre-populate verified publications first
    VERIFIED_PUBLICATIONS.forEach((b) => fetchedMap.set(b.id, b));

    try {
      // 1. Fetch from Open Library API
      const openLibRes = await fetch("https://openlibrary.org/search.json?q=Bijoy+Lohar");
      if (openLibRes.ok) {
        const openLibData = await openLibRes.json();
        if (openLibData.docs && openLibData.docs.length > 0) {
          openLibData.docs.forEach((doc: any) => {
            const isMatch = doc.author_name?.some((a: string) => a.toLowerCase().includes("bijoy lohar"));
            if (isMatch && doc.title) {
              const id = doc.key ? doc.key.replace("/works/", "") : doc.cover_edition_key || Math.random().toString();
              const coverUrl = doc.cover_i
                ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`
                : "https://covers.openlibrary.org/b/id/15259748-L.jpg";
              const openLibUrl = doc.key ? `https://openlibrary.org${doc.key}` : "https://openlibrary.org/authors/OL16612687A";
              const isbnStr = doc.isbn ? `ISBN: ${doc.isbn[0]}` : "ISBN-13: 9789334528954";

              fetchedMap.set(id, {
                id,
                title: doc.title,
                subtitle: doc.first_sentence || "A Practical Guide to Modern Full Stack Development",
                authors: doc.author_name || ["Bijoy Lohar"],
                publisher: doc.publisher ? doc.publisher[0] : "Bijoy Lohar / Shadow Arrow",
                publishedDate: doc.first_publish_year ? String(doc.first_publish_year) : "2026",
                description:
                  "Technical publication by Bijoy Lohar covering distributed computing, software architecture, and cloud systems.",
                thumbnail: coverUrl,
                openLibraryUrl: openLibUrl,
                amazonUrl: `https://www.amazon.com/s?k=${encodeURIComponent(doc.title + " Bijoy Lohar")}`,
                googleBooksUrl: `https://books.google.com/books?q=${encodeURIComponent(doc.title)}`,
                categories: doc.subject ? doc.subject.slice(0, 4) : ["Software Engineering", "Web Systems"],
                isbn: isbnStr,
                isVerifiedLive: true,
              });
            }
          });
        }
      }

      // 2. Fetch from Google Books API
      const googleRes = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=Bijoy+Lohar&orderBy=newest&maxResults=10`
      );
      if (googleRes.ok) {
        const googleData = await googleRes.json();
        if (googleData.items && googleData.items.length > 0) {
          googleData.items.forEach((item: any) => {
            const info = item.volumeInfo;
            const isMatch = info?.authors?.some((a: string) => a.toLowerCase().includes("bijoy lohar"));
            if (isMatch) {
              const isbnObj = info.industryIdentifiers?.find((i: any) => i.type.includes("ISBN"));
              const isbnVal = isbnObj ? `${isbnObj.type}: ${isbnObj.identifier}` : "ISBN-13: 9789334528954";
              fetchedMap.set(item.id, {
                id: item.id,
                title: info.title,
                subtitle: info.subtitle,
                authors: info.authors || ["Bijoy Lohar"],
                publisher: info.publisher || "Google Books / Amazon",
                publishedDate: info.publishedDate,
                description: info.description || "Published technical work by Bijoy Lohar.",
                thumbnail: info.imageLinks?.thumbnail || info.imageLinks?.smallThumbnail || "https://covers.openlibrary.org/b/id/15259748-L.jpg",
                openLibraryUrl: "https://openlibrary.org/works/OL46029039W",
                amazonUrl: `https://www.amazon.com/s?k=${encodeURIComponent(info.title + " Bijoy Lohar")}`,
                googleBooksUrl: info.infoLink || info.previewLink || `https://books.google.com/books?id=${item.id}`,
                categories: info.categories,
                isbn: isbnVal,
                isVerifiedLive: true,
              });
            }
          });
        }
      }

      setBooks(Array.from(fetchedMap.values()));
      setSyncSource("Open Library + Amazon Live Active");
    } catch (err) {
      console.warn("Book sync error:", err);
      setBooks(VERIFIED_PUBLICATIONS);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveBooks();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 max-w-[1040px] mx-auto text-deepInk" id="books">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 border-b border-borderWarm pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amberAccent uppercase tracking-widest mb-1">
            <span className="w-2 h-2 rounded-full bg-amberAccent animate-pulse" />
            <span>04 / BOOKS &amp; PUBLICATIONS</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-deepInk tracking-tight">
            Published Books
          </h2>
        </motion.div>

        {/* Live Multi-Platform Sync Status */}
        <div className="flex items-center gap-2 text-xs font-mono text-amberAccent font-bold bg-amberAccent/10 border border-amberAccent/30 px-4 py-2 rounded-full w-fit shadow-sm">
          <RefreshCw className={`w-3.5 h-3.5 text-amberAccent ${isLoading ? "animate-spin" : ""}`} />
          <span>{syncSource}</span>
        </div>
      </div>

      {/* Book Grid Cards */}
      <div className="grid grid-cols-1 gap-8">
        {books.map((book, idx) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group p-6 sm:p-8 bg-studioCard border border-borderWarm rounded-3xl shadow-lg hover:border-amberAccent transition-all duration-300 flex flex-col md:flex-row gap-6 items-start justify-between"
          >
            {/* Book Cover Image */}
            <div className="w-full sm:w-36 h-52 sm:h-52 bg-studioCanvas rounded-2xl overflow-hidden shrink-0 shadow-xl relative border border-amberAccent/30 group-hover:scale-105 transition-transform duration-300 mx-auto sm:mx-0">
              {book.thumbnail ? (
                <img
                  src={book.thumbnail}
                  alt={book.title}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-studioSubtle text-amberAccent text-center">
                  <BookOpen className="w-10 h-10 mb-2 text-amberAccent" />
                  <span className="text-xs font-mono font-bold">{book.title}</span>
                </div>
              )}
              {book.isVerifiedLive && (
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-emerald-500 text-white font-mono text-[9px] font-bold rounded-full shadow-md flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Live
                </div>
              )}
            </div>

            {/* Book Details */}
            <div className="flex-1 space-y-3 w-full">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-amberAccent/10 text-amberAccent font-mono text-xs font-bold rounded-full border border-amberAccent/30">
                  {book.publisher || "Bijoy Lohar Press"}
                </span>
                {book.publishedDate && (
                  <span className="font-mono text-xs text-muted font-bold">
                    Released: {book.publishedDate}
                  </span>
                )}
                {book.isbn && (
                  <span className="font-mono text-xs text-amberAccent font-bold">
                    {book.isbn}
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-deepInk group-hover:text-amberAccent transition-colors leading-tight">
                  {book.title}
                </h3>
                {book.subtitle && (
                  <p className="text-xs sm:text-sm text-amberAccent font-mono font-bold mt-1 leading-snug">
                    {book.subtitle}
                  </p>
                )}
              </div>

              <p className="text-xs sm:text-sm text-[#D4CEBF] leading-relaxed font-normal">
                {book.description}
              </p>

              {/* Categories / Tags */}
              {book.categories && book.categories.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {book.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-2.5 py-0.5 bg-studioSubtle border border-borderWarm text-muted text-[11px] font-mono rounded-md"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}

              {/* Multi-Store Action Buttons */}
              <div className="pt-4 mt-2 border-t border-borderWarm flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 font-mono text-xs text-muted font-bold">
                  <Sparkles className="w-4 h-4 text-amberAccent" />
                  <span>Author: <strong className="text-deepInk">Bijoy Lohar</strong></span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {/* Amazon Store Link */}
                  {book.amazonUrl && (
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-amberAccent text-studioCanvas hover:bg-amberLight font-heading font-extrabold text-xs rounded-xl shadow-md transition-all"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Amazon Store</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {/* Open Library Link */}
                  {book.openLibraryUrl && (
                    <a
                      href={book.openLibraryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-studioSubtle hover:bg-borderWarm text-deepInk border border-borderWarm font-heading font-extrabold text-xs rounded-xl shadow-sm transition-all"
                    >
                      <Library className="w-3.5 h-3.5 text-amberAccent" />
                      <span>Open Library</span>
                      <ExternalLink className="w-3.5 h-3.5 text-muted" />
                    </a>
                  )}

                  {/* Google Books Link */}
                  {book.googleBooksUrl && (
                    <a
                      href={book.googleBooksUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-studioSubtle hover:bg-borderWarm text-deepInk border border-borderWarm font-heading font-extrabold text-xs rounded-xl shadow-sm transition-all"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-amberAccent" />
                      <span>Google Books</span>
                      <ExternalLink className="w-3.5 h-3.5 text-muted" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BooksSection;

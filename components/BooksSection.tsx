"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, RefreshCw, Layers } from "lucide-react";

export interface BookItem {
  id: string;
  title: string;
  subtitle?: string;
  authors: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  thumbnail?: string;
  infoLink?: string;
  categories?: string[];
  isbn?: string;
}

export const BooksSection: React.FC = () => {
  const [books, setBooks] = useState<BookItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLiveSynced, setIsLiveSynced] = useState<boolean>(false);

  const fetchGoogleBooks = async () => {
    setIsLoading(true);
    try {
      // Live Query Google Books API strictly for author "Bijoy Lohar"
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:"Bijoy Lohar"&orderBy=newest&maxResults=10`
      );
      if (!res.ok) throw new Error("Google Books API response error");

      const data = await res.json();
      if (data.items && data.items.length > 0) {
        const verifiedBooks: BookItem[] = data.items
          .filter((item: any) =>
            item.volumeInfo?.authors?.some((author: string) =>
              author.toLowerCase().includes("bijoy lohar")
            )
          )
          .map((item: any) => {
            const info = item.volumeInfo;
            const isbnObj = info.industryIdentifiers?.find((i: any) => i.type.includes("ISBN"));
            return {
              id: item.id,
              title: info.title,
              subtitle: info.subtitle,
              authors: info.authors || ["Bijoy Lohar"],
              publisher: info.publisher || "Google Books / Amazon",
              publishedDate: info.publishedDate,
              description: info.description || "Published technical work by Bijoy Lohar.",
              thumbnail: info.imageLinks?.thumbnail || info.imageLinks?.smallThumbnail,
              infoLink: info.infoLink || info.previewLink || `https://books.google.com/books?id=${item.id}`,
              categories: info.categories,
              isbn: isbnObj ? `${isbnObj.type}: ${isbnObj.identifier}` : undefined,
            };
          });

        if (verifiedBooks.length > 0) {
          setBooks(verifiedBooks);
          setIsLiveSynced(true);
        } else {
          setBooks([]);
          setIsLiveSynced(false);
        }
      } else {
        setBooks([]);
        setIsLiveSynced(false);
      }
    } catch (err) {
      console.warn("Google Books API query error:", err);
      setBooks([]);
      setIsLiveSynced(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGoogleBooks();
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
            <span>04 / AUTHOR PUBLICATION PIPELINE</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-deepInk tracking-tight">
            Author Footprint &amp; Publications
          </h2>
        </motion.div>

        <div className="flex items-center gap-2 text-xs font-mono text-amberAccent font-bold bg-amberAccent/10 border border-amberAccent/30 px-3.5 py-1.5 rounded-full w-fit">
          <RefreshCw className={`w-3.5 h-3.5 text-amberAccent ${isLoading ? "animate-spin" : ""}`} />
          <span>{isLiveSynced ? "Live API Synced" : "Auto-Sync Listener Active"}</span>
        </div>
      </div>

      {/* Dynamic Display: Fetched Books OR Clean Live Auto-Sync Card */}
      {books.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book, idx) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 bg-studioCard border border-borderWarm rounded-3xl shadow-lg hover:border-amberAccent transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                {/* Book Thumbnail Cover */}
                <div className="w-28 h-40 bg-studioCanvas rounded-xl overflow-hidden shrink-0 shadow-md relative border border-amberAccent/30 group-hover:scale-105 transition-transform duration-300">
                  {book.thumbnail ? (
                    <img
                      src={book.thumbnail}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-3 bg-studioSubtle text-amberAccent text-center">
                      <BookOpen className="w-8 h-8 mb-2 text-amberAccent" />
                      <span className="text-[10px] font-mono leading-tight font-bold">{book.title}</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 bg-amberAccent/10 text-amberAccent font-mono text-[10px] font-bold rounded-full border border-amberAccent/30">
                        {book.publisher || "Google Books"}
                      </span>
                      {book.publishedDate && (
                        <span className="font-mono text-[10px] text-muted font-bold">
                          {book.publishedDate}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-black text-lg sm:text-xl text-deepInk group-hover:text-amberAccent transition-colors leading-snug">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <p className="text-xs text-amberAccent font-mono font-bold mt-0.5 line-clamp-1">
                        {book.subtitle}
                      </p>
                    )}

                    <p className="text-xs text-[#D4CEBF] mt-2 line-clamp-3 leading-relaxed font-normal">
                      {book.description}
                    </p>
                  </div>

                  {book.isbn && (
                    <p className="font-mono text-[10px] text-muted">
                      {book.isbn}
                    </p>
                  )}
                </div>
              </div>

              {/* Actions Bar */}
              <div className="pt-4 mt-4 border-t border-borderWarm flex items-center justify-between">
                <span className="font-mono text-xs text-muted flex items-center gap-1.5 font-bold">
                  <BookOpen className="w-3.5 h-3.5 text-amberAccent" />
                  Author: <strong className="text-deepInk">Bijoy Lohar</strong>
                </span>

                <a
                  href={book.infoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amberAccent text-studioCanvas hover:bg-amberLight font-heading font-black text-xs rounded-xl shadow-md transition-all"
                >
                  <span>View Book</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Clean Live Listener Card — Auto-Sync Active */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 bg-studioCard border border-borderWarm rounded-3xl shadow-lg relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-amberAccent/10 border border-amberAccent/30 text-amberAccent flex items-center justify-center shrink-0 shadow-sm">
              <Layers className="w-7 h-7" />
            </div>

            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amberAccent/10 border border-amberAccent/30 rounded-full text-xs font-mono font-bold text-amberAccent">
                <span className="w-2 h-2 rounded-full bg-amberAccent animate-pulse" />
                <span>Google Books &amp; ISBN Registry Auto-Sync Active</span>
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-3xl text-deepInk tracking-tight">
                Technical Publications Pipeline
              </h3>

              <p className="text-sm text-[#D4CEBF] leading-relaxed font-normal">
                This section is connected to the Google Books API &amp; ISBN Global Registry. When you publish a new book or monograph under author <strong className="text-amberAccent font-bold">&quot;Bijoy Lohar&quot;</strong>, it will automatically populate and render live here.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default BooksSection;

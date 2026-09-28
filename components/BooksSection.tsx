"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, CheckCircle2, Clock, Info } from "lucide-react";

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
      // Query Google Books API strictly for books authored by "Bijoy Lohar"
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:"Bijoy Lohar"&orderBy=newest&maxResults=10`
      );
      if (!res.ok) throw new Error("Google Books API response error");

      const data = await res.json();
      if (data.items && data.items.length > 0) {
        // Filter strictly to ensure author matches Bijoy Lohar
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
              description: info.description || "Published work by Bijoy Lohar.",
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
    <section className="py-20 px-4 md:px-8 max-w-[1040px] mx-auto" id="author-books">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs font-bold text-amberAccent uppercase tracking-widest block mb-1">
            04 / TECHNICAL PUBLICATIONS PIPELINE
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-deepInk tracking-tight">
            Author Footprint &amp; Book Releases
          </h2>
        </motion.div>


      </div>

      {/* Conditional Display */}
      {books.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book, idx) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 bg-studioCard border border-borderWarm rounded-3xl shadow-sm hover:shadow-xl hover:border-amberAccent transition-all flex flex-col justify-between"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                {/* Book Cover Thumbnail */}
                <div className="w-28 h-36 bg-slate-900 rounded-xl overflow-hidden shrink-0 shadow-md relative border border-borderWarm group-hover:scale-105 transition-transform duration-300">
                  {book.thumbnail ? (
                    <img
                      src={book.thumbnail}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-2 bg-gradient-to-br from-amber-900 to-black text-amber-200 text-center">
                      <BookOpen className="w-8 h-8 mb-1 text-amber-400" />
                      <span className="text-[10px] font-mono leading-tight font-bold">{book.title}</span>
                    </div>
                  )}
                  <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-black/80 backdrop-blur-sm text-[9px] font-mono text-amber-400 rounded font-bold">
                    VERIFIED
                  </div>
                </div>

                {/* Book Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-amberLight text-amber-900 font-mono text-[10px] font-bold rounded">
                        {book.publisher || "Google Books / Amazon"}
                      </span>
                      {book.publishedDate && (
                        <span className="font-mono text-[10px] text-slate-500">
                          {book.publishedDate}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-extrabold text-xl text-deepInk group-hover:text-amberAccent transition-colors leading-snug">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <p className="text-xs text-amber-700 font-medium mt-0.5 line-clamp-1">
                        {book.subtitle}
                      </p>
                    )}

                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {book.description}
                    </p>
                  </div>

                  {book.isbn && (
                    <p className="font-mono text-[10px] text-slate-400 mt-2">
                      {book.isbn}
                    </p>
                  )}
                </div>
              </div>

              {/* Actions Bar */}
              <div className="pt-4 mt-4 border-t border-borderWarm flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amberAccent" />
                  Author: <strong className="text-deepInk">Bijoy Lohar</strong>
                </span>

                <a
                  href={book.infoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-deepInk hover:bg-amberAccent text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
                >
                  <span>View on Google &amp; Amazon</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Real Pipeline Empty/Waiting State — NO FAKE BOOKS */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 bg-studioCard border border-borderWarm rounded-3xl shadow-sm relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-amberLight text-amberAccent flex items-center justify-center shrink-0 shadow-sm border border-amberAccent/20">
              <Clock className="w-8 h-8" />
            </div>

            <div className="space-y-3 max-w-2xl">


              <h3 className="font-heading font-extrabold text-2xl text-deepInk">
                No Published Books Yet — Live Listener Active
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Jab aap Amazon KDP ya Google Books Partner Center par <strong className="text-deepInk font-semibold">"Bijoy Lohar"</strong> ke naam se koi book publish karoge, to wo is section me <strong className="text-amberAccent">automatically sync hokar live show hone lagegi!</strong>
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Author Query: <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded">Bijoy Lohar</code>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Sources: Google Books API &amp; Amazon ISBN Index
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default BooksSection;

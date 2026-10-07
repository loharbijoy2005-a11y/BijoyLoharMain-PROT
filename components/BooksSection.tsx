"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Library,
  Globe,
  Layers,
  ExternalLink,
  ShoppingCart,
  RefreshCw,
  Bookmark,
  Check
} from "lucide-react";
import Link from "next/link";
import { BookItem, VERIFIED_PUBLICATIONS, fetchLiveAuthorBooks } from "@/lib/books";

export const BooksSection: React.FC = () => {
  const [books, setBooks] = useState<BookItem[]>(VERIFIED_PUBLICATIONS);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedIsbn, setCopiedIsbn] = useState<string | null>(null);

  const loadBooks = async () => {
    setIsLoading(true);
    try {
      const data = await fetchLiveAuthorBooks();
      if (data && data.length > 0) {
        setBooks(data);
      }
    } catch (err) {
      console.warn("Error loading live books on homepage:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const handleCopyIsbn = (isbn: string) => {
    navigator.clipboard.writeText(isbn);
    setCopiedIsbn(isbn);
    setTimeout(() => setCopiedIsbn(null), 2500);
  };

  const featuredBook = books[0] || VERIFIED_PUBLICATIONS[0];

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 max-w-[1080px] mx-auto text-deepInk" id="books">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-borderWarm pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amberAccent uppercase tracking-widest mb-1">
            <span className="w-2 h-2 rounded-full bg-amberAccent animate-pulse" />
            <span>04 / AUTHOR &amp; PUBLICATIONS</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-deepInk tracking-tight">
            Author &amp; Published Literature
          </h2>
        </motion.div>

        {/* Status Pill & Live Sync Action */}
        <div className="flex items-center gap-2">
          <button
            onClick={loadBooks}
            disabled={isLoading}
            title="Auto-fetch newest books from Open Library & ISBN index"
            className="flex items-center gap-1.5 text-xs font-mono text-amberAccent font-bold bg-amberAccent/10 border border-amberAccent/30 px-3.5 py-1.5 rounded-full hover:bg-amberAccent/20 transition-all shadow-sm"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-emerald-400 ${isLoading ? "animate-spin" : ""}`} />
            <span>{isLoading ? "Syncing Catalog..." : "Live Auto-Sync (Open Library)"}</span>
          </button>
        </div>
      </div>

      {/* Featured Book Showcase Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative group p-6 sm:p-10 bg-studioCard border border-borderWarm rounded-3xl shadow-2xl hover:border-amberAccent/70 transition-all duration-300 overflow-hidden mb-8"
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amberAccent/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 relative z-10">
          {/* 3D Stylized Book Cover Preview */}
          <div className="w-full sm:w-60 lg:w-64 shrink-0 flex flex-col items-center">
            <div className="relative group perspective-1000">
              <div className="w-44 sm:w-52 h-64 sm:h-72 bg-studioCanvas rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-amberAccent/40 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 relative">
                {featuredBook.thumbnail ? (
                  <img
                    src={featuredBook.thumbnail}
                    alt={featuredBook.title}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-studioSubtle text-amberAccent text-center">
                    <BookOpen className="w-12 h-12 mb-2 text-amberAccent" />
                    <span className="font-heading font-extrabold text-xs">{featuredBook.title}</span>
                  </div>
                )}

                {/* Verified Ribbon */}
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-emerald-500/90 backdrop-blur-md text-white font-mono text-[9px] font-extrabold rounded-full shadow-lg flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>ISBN VERIFIED</span>
                </div>
              </div>
            </div>

            {/* Quick ISBN Copy */}
            {featuredBook.isbn && (
              <div className="w-full mt-3 p-2.5 bg-studioSubtle border border-borderWarm rounded-xl flex items-center justify-between text-xs font-mono">
                <div className="overflow-hidden text-ellipsis">
                  <span className="text-muted block text-[9px] uppercase">ISBN-13</span>
                  <span className="font-bold text-amberAccent text-[11px]">{featuredBook.isbn}</span>
                </div>
                <button
                  onClick={() => handleCopyIsbn(featuredBook.isbn || "")}
                  className="px-2 py-1 bg-studioCard hover:bg-borderWarm border border-borderWarm rounded-lg text-muted hover:text-deepInk text-[10px] font-bold transition-all flex items-center gap-1 shrink-0"
                  title="Copy ISBN"
                >
                  {copiedIsbn === featuredBook.isbn ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Book Details Summary */}
          <div className="space-y-4 max-w-2xl flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-amberAccent/15 text-amberAccent font-mono text-xs font-bold rounded-full border border-amberAccent/30">
                Author: Bijoy Lohar
              </span>
              <span className="px-3 py-1 bg-studioSubtle text-muted font-mono text-xs font-bold rounded-full border border-borderWarm">
                {featuredBook.publisher || "Bijoy Lohar"}
              </span>
              {featuredBook.publishedDate && (
                <span className="px-2.5 py-1 bg-studioSubtle text-muted font-mono text-xs rounded-full border border-borderWarm">
                  {featuredBook.publishedDate}
                </span>
              )}
            </div>

            <div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-deepInk tracking-tight leading-tight">
                {featuredBook.title}
              </h3>
              {featuredBook.subtitle && (
                <p className="text-xs sm:text-sm text-amberAccent font-mono mt-1 leading-snug">
                  {featuredBook.subtitle}
                </p>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#D4CEBF] leading-relaxed line-clamp-3">
              {featuredBook.description}
            </p>

            {/* Quick Metadata Tags */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-muted">
              <span className="flex items-center gap-1">
                <Library className="w-3.5 h-3.5 text-amberAccent" /> Open Library Live Sync ({featuredBook.id})
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-amberAccent" /> Google Books Indexed
              </span>
              {featuredBook.pages ? (
                <>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-amberAccent" /> {featuredBook.pages} Pages
                  </span>
                </>
              ) : featuredBook.edition ? (
                <>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-amberAccent" /> {featuredBook.edition}
                  </span>
                </>
              ) : null}
            </div>

            {/* Platform Direct Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/books"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amberAccent hover:bg-amberLight text-studioCanvas font-heading font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all hover:scale-[1.02]"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Full Book &amp; Chapters</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {featuredBook.amazonUrl && (
                <a
                  href={featuredBook.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-studioSubtle hover:bg-borderWarm text-deepInk border border-borderWarm font-heading font-extrabold text-xs sm:text-sm rounded-xl shadow-sm transition-all"
                >
                  <ShoppingCart className="w-4 h-4 text-amberAccent" />
                  <span>Amazon Store</span>
                  <ExternalLink className="w-3 h-3 text-muted" />
                </a>
              )}

              {featuredBook.openLibraryUrl && (
                <a
                  href={featuredBook.openLibraryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-studioSubtle hover:bg-borderWarm text-deepInk border border-borderWarm font-heading font-extrabold text-xs sm:text-sm rounded-xl shadow-sm transition-all"
                >
                  <Library className="w-4 h-4 text-amberAccent" />
                  <span>Open Library</span>
                  <ExternalLink className="w-3 h-3 text-muted" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Multiple Books Grid if more than 1 exist */}
      {books.length > 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {books.slice(1).map((b) => (
            <div
              key={b.id}
              className="p-5 bg-studioCard border border-borderWarm rounded-2xl flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-amberAccent font-bold uppercase">
                  Published Literature
                </span>
                <h4 className="font-heading font-black text-base text-deepInk mt-1">
                  {b.title}
                </h4>
                <p className="text-xs text-muted mt-1 line-clamp-2">{b.description}</p>
              </div>
              <Link
                href="/books"
                className="mt-4 text-xs font-mono text-amberAccent hover:underline inline-flex items-center gap-1 font-bold"
              >
                <span>View Book Details</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default BooksSection;

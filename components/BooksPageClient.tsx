"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ExternalLink,
  RefreshCw,
  ShoppingCart,
  Library,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Search,
  BookMarked,
  Layers,
  Cpu,
  Globe2,
  Share2,
  Bookmark,
  FileText,
  Star,
  Compass,
  Check,
  ShieldCheck,
  Code2
} from "lucide-react";
import Link from "next/link";
import { BookItem, VERIFIED_PUBLICATIONS, fetchLiveAuthorBooks } from "@/lib/books";

export const BooksPageClient: React.FC = () => {
  const [books, setBooks] = useState<BookItem[]>(VERIFIED_PUBLICATIONS);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [syncSource, setSyncSource] = useState<string>("Open Library Live Active");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedIsbn, setCopiedIsbn] = useState<string | null>(null);

  const fetchLiveBooks = async () => {
    setIsLoading(true);
    try {
      const liveBooks = await fetchLiveAuthorBooks();
      if (liveBooks && liveBooks.length > 0) {
        setBooks(liveBooks);
      }
      setSyncSource("Open Library + Google Books Live Active");
    } catch (err) {
      console.warn("Live book sync error:", err);
      setBooks(VERIFIED_PUBLICATIONS);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveBooks();
  }, []);

  const handleCopyIsbn = (isbn: string) => {
    navigator.clipboard.writeText(isbn);
    setCopiedIsbn(isbn);
    setTimeout(() => setCopiedIsbn(null), 2500);
  };

  // Collect all unique categories
  const allCategories = Array.from(
    new Set(books.flatMap((b) => b.categories || []))
  );

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (book.subtitle && book.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (book.description && book.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (book.isbn && book.isbn.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "all" ||
      (book.categories && book.categories.includes(selectedCategory));

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-studioCanvas text-deepInk blueprint-grid relative overflow-x-hidden selection:bg-amberAccent selection:text-studioCanvas">
      <div className="grain-overlay" />

      {/* Floating Top Header Navigation */}
      <header className="sticky top-0 z-50 bg-studioCanvas/90 backdrop-blur-md border-b border-borderWarm/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-muted hover:text-amberAccent transition-colors px-3 py-1.5 rounded-full border border-borderWarm/70 hover:border-amberAccent/50 bg-studioCard/60"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Main Site</span>
            </Link>

            <span className="hidden sm:inline-block w-px h-4 bg-borderWarm" />

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amberAccent animate-pulse" />
              <span className="font-heading font-black text-sm tracking-wide text-deepInk">
                Bijoy Lohar
              </span>
              <span className="text-xs font-mono text-muted hidden md:inline">
                / Books &amp; Publications
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/biography"
              className="text-xs font-mono font-bold px-3 py-1.5 rounded-full text-amberAccent border border-amberAccent/30 hover:bg-amberAccent/10 transition-all flex items-center gap-1"
            >
              <span>Biography</span>
              <ExternalLink className="w-3 h-3" />
            </Link>

            <a
              href="https://www.amazon.com/author/bijoylohar"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-heading font-extrabold px-3.5 py-1.5 bg-amberAccent text-studioCanvas hover:bg-amberLight rounded-full transition-all shadow-md"
            >
              <ShoppingCart className="w-3 h-3" />
              <span>Amazon Profile</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        {/* Page Hero Banner */}
        <section className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amberAccent uppercase tracking-widest mb-3 bg-amberAccent/10 px-3.5 py-1 rounded-full border border-amberAccent/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OFFICIAL AUTHOR CATALOG &bull; ISBN INDEX</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-deepInk tracking-tight leading-tight">
                Published Books &amp; Literature
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#D4CEBF] max-w-2xl leading-relaxed">
                Technical manuals, architectural guides, and software engineering handbooks authored by{" "}
                <strong className="text-amberAccent font-semibold">Bijoy Lohar</strong>. Globally indexed across Open Library, Google Books, and Amazon.
              </p>
            </div>

            {/* Live Sync Status Pill */}
            <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto bg-studioCard border border-borderWarm px-4 py-2 rounded-2xl shadow-sm">
              <button
                onClick={fetchLiveBooks}
                disabled={isLoading}
                title="Force refresh live catalog from Open Library & Google Books"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-amberAccent font-bold hover:underline"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
                <span>{isLoading ? "Syncing..." : syncSource}</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-8 border-t border-borderWarm/60">
            <div className="p-4 bg-studioCard/80 border border-borderWarm rounded-2xl">
              <span className="block text-xs font-mono text-muted uppercase">Author</span>
              <span className="font-heading font-extrabold text-lg text-deepInk">Bijoy Lohar</span>
              <span className="block text-[11px] font-mono text-amberAccent">Shadow Arrow</span>
            </div>
            <div className="p-4 bg-studioCard/80 border border-borderWarm rounded-2xl">
              <span className="block text-xs font-mono text-muted uppercase">Primary ISBN-13</span>
              <span className="font-heading font-extrabold text-lg text-deepInk">978-93-345-2895-4</span>
              <span className="block text-[11px] font-mono text-emerald-400">Verified &amp; Assigned</span>
            </div>
            <div className="p-4 bg-studioCard/80 border border-borderWarm rounded-2xl">
              <span className="block text-xs font-mono text-muted uppercase">Open Library ID</span>
              <span className="font-heading font-extrabold text-lg text-deepInk">OL46029039W</span>
              <span className="block text-[11px] font-mono text-amberAccent">Live Record</span>
            </div>
            <div className="p-4 bg-studioCard/80 border border-borderWarm rounded-2xl">
              <span className="block text-xs font-mono text-muted uppercase">Global Indexing</span>
              <span className="font-heading font-extrabold text-lg text-deepInk">Google Books</span>
              <span className="block text-[11px] font-mono text-emerald-400">Active Distribution</span>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="mb-10 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search by book title, topic, or ISBN..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-studioCard border border-borderWarm rounded-2xl text-xs sm:text-sm text-deepInk placeholder:text-muted focus:outline-none focus:border-amberAccent focus:ring-1 focus:ring-amberAccent transition-all shadow-inner"
            />
          </div>

          {/* Category Filter Pills */}
          {allCategories.length > 0 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all shrink-0 ${
                  selectedCategory === "all"
                    ? "bg-amberAccent text-studioCanvas shadow-md"
                    : "bg-studioCard text-muted hover:text-deepInk border border-borderWarm"
                }`}
              >
                All Topics ({books.length})
              </button>
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all shrink-0 ${
                    selectedCategory === cat
                      ? "bg-amberAccent text-studioCanvas shadow-md"
                      : "bg-studioCard text-muted hover:text-deepInk border border-borderWarm"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Books Showcase List */}
        <section className="space-y-12">
          <AnimatePresence>
            {filteredBooks.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-12 text-center bg-studioCard border border-borderWarm rounded-3xl"
              >
                <BookOpen className="w-12 h-12 text-muted mx-auto mb-3" />
                <h3 className="font-heading font-bold text-lg text-deepInk">No books found</h3>
                <p className="text-xs text-muted mt-1">Try resetting your search query or filters.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="mt-4 px-4 py-2 bg-amberAccent text-studioCanvas font-mono text-xs font-bold rounded-xl"
                >
                  Reset Filters
                </button>
              </motion.div>
            ) : (
              filteredBooks.map((book, idx) => (
                <motion.article
                  key={book.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-studioCard border border-borderWarm hover:border-amberAccent/60 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Decorative Background Accent */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-amberAccent/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative z-10">
                    {/* Left Column: 3D-Styled Book Cover & Quick Meta */}
                    <div className="w-full sm:w-64 lg:w-72 shrink-0 flex flex-col items-center sm:items-start mx-auto sm:mx-0">
                      <div className="relative group perspective-1000">
                        {/* Book 3D Spine Mockup Shadow */}
                        <div className="w-48 sm:w-56 h-72 sm:h-80 bg-studioCanvas rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-amberAccent/40 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 relative">
                          {book.thumbnail ? (
                            <img
                              src={book.thumbnail}
                              alt={book.title}
                              className="w-full h-full object-cover object-center"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-studioSubtle text-amberAccent text-center">
                              <BookOpen className="w-16 h-16 mb-4 text-amberAccent" />
                              <span className="font-heading font-extrabold text-sm">{book.title}</span>
                              <span className="text-xs font-mono text-muted mt-2">{book.authors.join(", ")}</span>
                            </div>
                          )}

                          {/* Live Verified Ribbon */}
                          {book.isVerifiedLive && (
                            <div className="absolute top-3 right-3 px-2.5 py-1 bg-emerald-500/90 backdrop-blur-md text-white font-mono text-[10px] font-extrabold rounded-full shadow-lg flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5" />
                              <span>VERIFIED ISBN</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* ISBN Copy / Quick Actions */}
                      {book.isbn && (
                        <div className="w-full mt-4 p-3 bg-studioSubtle border border-borderWarm rounded-xl flex items-center justify-between text-xs font-mono">
                          <div className="overflow-hidden text-ellipsis">
                            <span className="text-muted block text-[10px] uppercase">ISBN-13</span>
                            <span className="font-bold text-amberAccent">{book.isbn}</span>
                          </div>
                          <button
                            onClick={() => handleCopyIsbn(book.isbn || "")}
                            className="px-2.5 py-1.5 bg-studioCard hover:bg-borderWarm border border-borderWarm rounded-lg text-muted hover:text-deepInk text-[11px] font-bold transition-all flex items-center gap-1 shrink-0"
                            title="Copy ISBN"
                          >
                            {copiedIsbn === book.isbn ? (
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

                    {/* Right Column: Detailed Book Information */}
                    <div className="flex-1 space-y-5">
                      {/* Meta Tags */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 bg-amberAccent/15 text-amberAccent font-mono text-xs font-bold rounded-full border border-amberAccent/30">
                          {book.publisher || "Bijoy Lohar"}
                        </span>
                        {book.publishedDate && (
                          <span className="px-2.5 py-1 bg-studioSubtle text-muted font-mono text-xs font-medium rounded-full border border-borderWarm">
                            Released: {book.publishedDate}
                          </span>
                        )}
                        {book.edition && (
                          <span className="px-2.5 py-1 bg-studioSubtle text-muted font-mono text-xs font-medium rounded-full border border-borderWarm hidden sm:inline-block">
                            {book.edition}
                          </span>
                        )}
                        {book.pages && (
                          <span className="px-2.5 py-1 bg-studioSubtle text-muted font-mono text-xs font-medium rounded-full border border-borderWarm">
                            {book.pages} Pages
                          </span>
                        )}
                      </div>

                      {/* Book Title & Subtitle */}
                      <div>
                        <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-deepInk tracking-tight leading-tight">
                          {book.title}
                        </h2>
                        {book.subtitle && (
                          <p className="text-sm sm:text-base text-amberAccent font-mono font-medium mt-1.5 leading-snug">
                            {book.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Author Line */}
                      <div className="flex items-center gap-2 text-xs font-mono text-muted">
                        <span>Authored by</span>
                        <strong className="text-deepInk text-sm font-heading font-bold">{book.authors.join(", ")}</strong>
                        <span>&bull; Founder of Shadow Arrow</span>
                      </div>

                      {/* Full Synopsis */}
                      <div className="prose prose-invert max-w-none text-xs sm:text-sm text-[#D4CEBF] leading-relaxed space-y-3 font-normal">
                        <p>{book.description}</p>
                      </div>

                      {/* Topics / Subject Tags */}
                      {book.categories && book.categories.length > 0 && (
                        <div className="space-y-1.5 pt-2">
                          <span className="text-[11px] font-mono text-muted uppercase tracking-wider block">
                            Key Subject Domains
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {book.categories.map((cat) => (
                              <span
                                key={cat}
                                className="px-2.5 py-1 bg-studioSubtle border border-borderWarm text-muted hover:text-amberAccent text-[11px] font-mono rounded-lg transition-colors"
                              >
                                #{cat}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Chapter / Syllabus Outline (If provided) */}
                      {book.tableOfContents && book.tableOfContents.length > 0 && (
                        <div className="pt-4 border-t border-borderWarm/70">
                          <h4 className="text-xs font-mono font-bold text-amberAccent uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5" />
                            <span>Syllabus &amp; Structural Outline</span>
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {book.tableOfContents.map((toc) => (
                              <div
                                key={toc.chapter}
                                className="p-3 bg-studioSubtle/80 border border-borderWarm/70 rounded-xl"
                              >
                                <div className="text-[10px] font-mono text-amberAccent font-bold">
                                  {toc.chapter}
                                </div>
                                <div className="text-xs font-heading font-extrabold text-deepInk mt-0.5">
                                  {toc.title}
                                </div>
                                <div className="text-[11px] text-muted mt-1 leading-snug">
                                  {toc.desc}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Platform Purchase & Read Actions */}
                      <div className="pt-6 border-t border-borderWarm flex flex-wrap items-center gap-3">
                        {book.amazonUrl && (
                          <a
                            href={book.amazonUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amberAccent hover:bg-amberLight text-studioCanvas font-heading font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all hover:scale-[1.02]"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            <span>Amazon Store</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {book.openLibraryUrl && (
                          <a
                            href={book.openLibraryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-studioSubtle hover:bg-borderWarm text-deepInk border border-borderWarm font-heading font-extrabold text-xs sm:text-sm rounded-xl shadow-sm transition-all"
                          >
                            <Library className="w-4 h-4 text-amberAccent" />
                            <span>Open Library (OL46029039W)</span>
                            <ExternalLink className="w-3.5 h-3.5 text-muted" />
                          </a>
                        )}

                        {book.googleBooksUrl && (
                          <a
                            href={book.googleBooksUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-studioSubtle hover:bg-borderWarm text-deepInk border border-borderWarm font-heading font-extrabold text-xs sm:text-sm rounded-xl shadow-sm transition-all"
                          >
                            <BookOpen className="w-4 h-4 text-amberAccent" />
                            <span>Google Books</span>
                            <ExternalLink className="w-3.5 h-3.5 text-muted" />
                          </a>
                        )}

                        {book.goodreadsUrl && (
                          <a
                            href={book.goodreadsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-studioSubtle hover:bg-borderWarm text-deepInk border border-borderWarm font-heading font-extrabold text-xs sm:text-sm rounded-xl shadow-sm transition-all"
                          >
                            <Star className="w-4 h-4 text-amberAccent" />
                            <span>Goodreads</span>
                            <ExternalLink className="w-3.5 h-3.5 text-muted" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))
            )}
          </AnimatePresence>
        </section>

        {/* Author Note & Publishing Philosophy */}
        <section className="mt-16 bg-studioSubtle border border-borderWarm rounded-3xl p-8 sm:p-10 shadow-sm">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amberAccent uppercase tracking-widest mb-2">
              <Code2 className="w-3.5 h-3.5" />
              <span>AUTHOR PHILOSOPHY</span>
            </div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-deepInk tracking-tight mb-3">
              Pragmatic Systems Engineering in Literature
            </h3>
            <p className="text-xs sm:text-sm text-[#D4CEBF] leading-relaxed">
              "Technical literature should cut through unnecessary abstractions and deliver battle-tested engineering decisions. When architecting scalable web applications, the difference between failure and resilient throughput lies in connection mechanics, memory profiling, and rigorous edge design."
            </p>
            <div className="mt-4 pt-4 border-t border-borderWarm/60 flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-muted">
              <div>
                <strong>Bijoy Lohar</strong> &bull; Founder of Shadow Arrow &bull; Systems Architect
              </div>
              <Link
                href="/biography"
                className="text-amberAccent hover:underline inline-flex items-center gap-1 font-bold"
              >
                <span>Read Full Biography</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Page Footer */}
      <footer className="mt-20 border-t border-borderWarm bg-studioCard/80 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <div>
            &copy; 2026 Bijoy Lohar &bull; Official Books &amp; Publications &bull; Bishnupur, West Bengal, India
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-amberAccent transition-colors">
              Home
            </Link>
            <Link href="/biography" className="hover:text-amberAccent transition-colors">
              Biography
            </Link>
            <a href="https://www.shadowarrow.in" target="_blank" rel="noopener noreferrer" className="hover:text-amberAccent transition-colors">
              Shadow Arrow
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BooksPageClient;

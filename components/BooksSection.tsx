"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Library,
  ShoppingCart,
  Bookmark
} from "lucide-react";
import Link from "next/link";

export const BooksSection: React.FC = () => {
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
            <span>04 / AUTHOR &amp; PUBLICATIONS</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-deepInk tracking-tight">
            Published Books &amp; Literature
          </h2>
        </motion.div>

        {/* Dedicated Page Link Badge */}
        <Link
          href="/books"
          className="inline-flex items-center gap-2 text-xs font-mono text-amberAccent font-bold bg-amberAccent/10 hover:bg-amberAccent/20 border border-amberAccent/30 px-4 py-2 rounded-full w-fit shadow-sm transition-all group"
        >
          <span>Open Dedicated Book Page</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Main Author & Book Spotlight Banner */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative group p-6 sm:p-8 md:p-10 bg-studioCard border border-borderWarm rounded-3xl shadow-xl hover:border-amberAccent/70 transition-all duration-300 overflow-hidden"
      >
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amberAccent/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-between relative z-10">
          {/* Left: Book Cover Preview */}
          <Link
            href="/books"
            className="w-44 sm:w-48 h-64 sm:h-72 bg-studioCanvas rounded-2xl overflow-hidden shrink-0 shadow-2xl relative border-2 border-amberAccent/40 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 block"
          >
            <img
              src="https://covers.openlibrary.org/b/id/15259748-L.jpg"
              alt="Architecting Scalable Web Systems by Bijoy Lohar"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-emerald-500 text-white font-mono text-[9px] font-bold rounded-full shadow-md flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Live ISBN
            </div>
          </Link>

          {/* Right: Author & Book Overview */}
          <div className="flex-1 space-y-4 text-center md:text-left w-full">
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="px-3 py-1 bg-amberAccent/15 text-amberAccent font-mono text-xs font-bold rounded-full border border-amberAccent/30">
                Author: Bijoy Lohar
              </span>
              <span className="px-3 py-1 bg-studioSubtle text-muted font-mono text-xs font-bold rounded-full border border-borderWarm">
                Shadow Arrow Press
              </span>
              <span className="px-3 py-1 bg-studioSubtle text-amberAccent font-mono text-xs font-bold rounded-full border border-borderWarm">
                ISBN: 978-93-345-2895-4
              </span>
            </div>

            {/* Title */}
            <div>
              <Link href="/books">
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-deepInk hover:text-amberAccent transition-colors leading-tight">
                  Architecting Scalable Web Systems
                </h3>
              </Link>
              <p className="text-xs sm:text-sm text-amberAccent font-mono font-medium mt-1 leading-snug">
                A Practical Guide to Modern Full Stack Development, APIs, and Cloud Infrastructure
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#D4CEBF] leading-relaxed font-normal">
              Official technical manual authored by <strong>Bijoy Lohar</strong>. Covers high-throughput web platforms, distributed systems, connection poolers, server-side caching, and resilient production edge infrastructure.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="p-2.5 bg-studioSubtle border border-borderWarm rounded-xl">
                <span className="block text-[10px] font-mono text-muted uppercase">Open Library ID</span>
                <span className="font-heading font-bold text-xs text-deepInk">OL46029039W</span>
              </div>
              <div className="p-2.5 bg-studioSubtle border border-borderWarm rounded-xl">
                <span className="block text-[10px] font-mono text-muted uppercase">Indexing</span>
                <span className="font-heading font-bold text-xs text-deepInk">Google Books</span>
              </div>
              <div className="p-2.5 bg-studioSubtle border border-borderWarm rounded-xl col-span-2 sm:col-span-1">
                <span className="block text-[10px] font-mono text-muted uppercase">Availability</span>
                <span className="font-heading font-bold text-xs text-emerald-400">Amazon &amp; Libraries</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-borderWarm flex flex-wrap items-center justify-between gap-3">
              {/* Primary Dedicated Page CTA */}
              <Link
                href="/books"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amberAccent text-studioCanvas hover:bg-amberLight font-heading font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-all hover:scale-105"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Full Book Details &amp; Library</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary External Links */}
              <div className="flex items-center gap-2">
                <a
                  href="https://www.amazon.com/s?k=9789334528954"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-studioSubtle hover:bg-borderWarm text-deepInk border border-borderWarm text-xs font-mono font-bold rounded-xl transition-all"
                  title="View on Amazon"
                >
                  <ShoppingCart className="w-3.5 h-3.5 text-amberAccent" />
                  <span>Amazon</span>
                  <ExternalLink className="w-3 h-3 text-muted" />
                </a>

                <a
                  href="https://openlibrary.org/works/OL46029039W"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-studioSubtle hover:bg-borderWarm text-deepInk border border-borderWarm text-xs font-mono font-bold rounded-xl transition-all"
                  title="View on Open Library"
                >
                  <Library className="w-3.5 h-3.5 text-amberAccent" />
                  <span>Open Library</span>
                  <ExternalLink className="w-3 h-3 text-muted" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BooksSection;

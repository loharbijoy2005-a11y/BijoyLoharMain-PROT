"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Library,
  Globe,
  Layers
} from "lucide-react";
import Link from "next/link";

export const BooksSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 max-w-[1040px] mx-auto text-deepInk" id="books">
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

        {/* Status Pill */}
        <div className="flex items-center gap-2 text-xs font-mono text-amberAccent font-bold bg-amberAccent/10 border border-amberAccent/30 px-3.5 py-1.5 rounded-full w-fit shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Verified ISBN Catalog</span>
        </div>
      </div>

      {/* Author Card & Books Page Trigger Button */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative group p-8 sm:p-10 bg-studioCard border border-borderWarm rounded-3xl shadow-xl hover:border-amberAccent/70 transition-all duration-300 overflow-hidden"
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amberAccent/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
          {/* Author Details Summary */}
          <div className="space-y-3 max-w-xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-amberAccent/15 text-amberAccent font-mono text-xs font-bold rounded-full border border-amberAccent/30">
                Author: Bijoy Lohar
              </span>
              <span className="px-3 py-1 bg-studioSubtle text-muted font-mono text-xs font-bold rounded-full border border-borderWarm">
                Shadow Arrow Press
              </span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-deepInk tracking-tight leading-tight">
              Technical Books &amp; Systems Manuals
            </h3>

            <p className="text-xs sm:text-sm text-[#D4CEBF] leading-relaxed">
              In-depth technical guides and systems architecture publications authored by <strong>Bijoy Lohar</strong>. Globally cataloged across Open Library, Google Books, and Amazon.
            </p>

            {/* Quick Metadata Tags */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-muted">
              <span className="flex items-center gap-1">
                <Library className="w-3.5 h-3.5 text-amberAccent" /> Open Library Live Sync
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-amberAccent" /> Google Books Indexed
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-amberAccent" /> Systems Architecture
              </span>
            </div>
          </div>

          {/* Prominent Action Button / Card */}
          <div className="w-full md:w-auto shrink-0">
            <Link
              href="/books"
              className="group/btn relative flex flex-col sm:flex-row items-center gap-4 p-5 sm:p-6 bg-gradient-to-br from-studioSubtle to-studioCanvas hover:from-amberAccent/15 hover:to-amberAccent/5 border-2 border-amberAccent/40 hover:border-amberAccent rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.03] text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-amberAccent text-studioCanvas flex items-center justify-center shrink-0 shadow-md group-hover/btn:rotate-6 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>

              <div>
                <div className="flex items-center gap-2 font-heading font-black text-sm sm:text-base text-deepInk group-hover/btn:text-amberAccent transition-colors">
                  <span>Explore Book Library</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform text-amberAccent" />
                </div>
                <p className="text-[11px] font-mono text-muted mt-0.5">
                  View full books, chapter syllabus &amp; store links &rarr;
                </p>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BooksSection;

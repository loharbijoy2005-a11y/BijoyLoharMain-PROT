"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ShieldCheck, ShoppingBag, ExternalLink } from "lucide-react";

export const ExpeditionEcosystem: React.FC = () => {
  const [hoveredVenture, setHoveredVenture] = useState<string | null>(null);

  return (
    <section className="py-24 px-4 md:px-8 border-y border-borderWarm bg-studioSubtle relative" id="expedition">
      <div className="max-w-[1040px] mx-auto relative z-10">
        
        <div className="mb-12">
          <span className="font-mono text-xs font-bold text-amberAccent uppercase tracking-widest block mb-1">
            01 / THE FOUNDER'S ECOSYSTEM
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-deepInk tracking-tight">
            Ventures & Software Expedition
          </h2>
        </div>

        {/* Giant Interactive Typography Links List */}
        <div className="flex flex-col gap-6">
          
          {/* Item 01: Shadow Arrow */}
          <div
            onMouseEnter={() => setHoveredVenture("shadowarrow")}
            onMouseLeave={() => setHoveredVenture(null)}
            className="group relative p-8 md:p-10 bg-studioCard border border-borderWarm rounded-3xl transition-all duration-300 hover:border-amberAccent hover:shadow-xl"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-amberAccent">01</span>
                  <span className="px-3 py-1 bg-amberLight text-amberAccent font-mono text-xs font-bold rounded-full">
                    Flagship Firm
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-4xl md:text-5xl text-deepInk group-hover:text-amberAccent transition-colors tracking-tight">
                  SHADOW ARROW
                </h3>
                
                <p className="font-mono text-xs text-slate-500 mt-2">
                  https://www.shadowarrow.in &bull; Registered Web Engineering Studio
                </p>
                <p className="text-sm text-slate-600 max-w-[640px] leading-relaxed mt-3">
                  Independent technology and software engineering flagship founded by Bijoy Lohar. Custom high-performance web systems, production SaaS architecture, and enterprise digital solutions.
                </p>
              </div>

              <a
                href="https://www.shadowarrow.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-deepInk group-hover:bg-amberAccent text-white text-xs font-bold rounded-full transition-all shrink-0"
              >
                <span>Visit Studio (shadowarrow.in)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Floating Preview Thumbnail Overlay on Hover */}
            <AnimatePresence>
              {hoveredVenture === "shadowarrow" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="hidden lg:flex absolute top-4 right-52 z-30 p-4 bg-deepInk text-white rounded-2xl shadow-2xl border border-amberAccent/40 pointer-events-none max-w-[280px]"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Live Preview</span>
                    </div>
                    <p className="text-xs text-slate-200">
                      High-throughput web systems & low-latency cloud infrastructure engineered by Bijoy Lohar.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Item 02: OmniKart */}
          <div
            onMouseEnter={() => setHoveredVenture("omnikart")}
            onMouseLeave={() => setHoveredVenture(null)}
            className="group relative p-8 md:p-10 bg-studioCard border border-borderWarm rounded-3xl transition-all duration-300 hover:border-amberAccent hover:shadow-xl"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-amberAccent">02</span>
                  <span className="px-3 py-1 bg-amberSubtle text-amber-700 font-mono text-xs font-bold rounded-full">
                    Powered by Shadow Arrow
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-4xl md:text-5xl text-deepInk group-hover:text-amberAccent transition-colors tracking-tight">
                  OMNIKART
                </h3>
                
                <p className="font-mono text-xs text-slate-500 mt-2">
                  Cloud Commerce Infrastructure & Storefront
                </p>
                <p className="text-sm text-slate-600 max-w-[640px] leading-relaxed mt-3">
                  All-in-one scalable e-commerce storefront engineered for instant page transitions, dynamic inventory tracking, and seamless checkout pipelines.
                </p>
              </div>

              <a
                href="https://www.shadowarrow.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-studioSubtle group-hover:bg-amberAccent hover:text-white text-deepInk text-xs font-bold rounded-full border border-borderWarm transition-all shrink-0"
              >
                <span>Explore OmniKart</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

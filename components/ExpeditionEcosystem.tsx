"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowUpRight, ShieldCheck, ShoppingBag } from "lucide-react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 24,
      stiffness: 200,
    },
  },
};

export const ExpeditionEcosystem: React.FC = () => {
  const [hoveredVenture, setHoveredVenture] = useState<string | null>(null);

  return (
    <section className="py-24 px-4 md:px-8 border-y border-borderWarm bg-studioCanvas relative overflow-hidden" id="expedition">
      <div className="max-w-[1040px] mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 border-l-2 border-amberAccent pl-5"
        >
          <span className="font-mono text-xs font-bold text-amberAccent uppercase tracking-widest block mb-1">
            01 / THE FOUNDER&apos;S ECOSYSTEM
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-deepInk tracking-tight">
            Ventures &amp; Software Expedition
          </h2>
        </motion.div>

        {/* Giant Interactive Typography Links List */}
        <div className="flex flex-col gap-6">
          
          {/* Item 01: Shadow Arrow */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.01, y: -4 }}
            onMouseEnter={() => setHoveredVenture("shadowarrow")}
            onMouseLeave={() => setHoveredVenture(null)}
            className="group relative p-8 md:p-10 bg-studioCard border border-borderWarm rounded-3xl transition-all duration-300 hover:border-amberAccent/60 hover:shadow-2xl shadow-md"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-amberAccent">01</span>
                  <span className="px-3.5 py-1 bg-amberAccent/10 text-amberAccent border border-amberAccent/30 font-mono text-xs font-bold rounded-full shadow-sm">
                    Flagship Firm
                  </span>
                </div>

                <h3 className="font-heading font-black text-4xl md:text-5xl text-deepInk group-hover:text-amberAccent transition-colors tracking-tight">
                  SHADOW ARROW
                </h3>
                
                <p className="font-mono text-xs text-amberAccent font-semibold mt-2">
                  https://www.shadowarrow.in &bull; Registered Web Engineering Studio (Est. 2025)
                </p>
                <p className="text-sm text-muted max-w-[640px] leading-relaxed mt-3 font-normal">
                  Independent technology and software engineering flagship founded by Bijoy Lohar in 2025. Custom high-performance web systems, production SaaS architecture, and enterprise digital solutions.
                </p>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.shadowarrow.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amberAccent hover:bg-amberLight text-studioCanvas font-heading font-extrabold text-xs rounded-full transition-all shrink-0 shadow-md"
              >
                <span>Visit Studio (shadowarrow.in)</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Floating Preview Thumbnail Overlay on Hover */}
            <AnimatePresence>
              {hoveredVenture === "shadowarrow" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="hidden lg:flex absolute top-4 right-52 z-30 p-4 bg-studioCard text-deepInk rounded-2xl shadow-2xl border border-amberAccent/50 pointer-events-none max-w-[290px]"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-amberAccent font-mono text-xs font-bold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Live Preview</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      High-throughput web systems &amp; low-latency cloud infrastructure engineered by Bijoy Lohar.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Item 02: OmniKart */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.01, y: -4 }}
            onMouseEnter={() => setHoveredVenture("omnikart")}
            onMouseLeave={() => setHoveredVenture(null)}
            className="group relative p-8 md:p-10 bg-studioCard border border-borderWarm rounded-3xl transition-all duration-300 hover:border-amberAccent/60 hover:shadow-2xl shadow-md"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-amberAccent">02</span>
                  <span className="px-3.5 py-1 bg-amberAccent/10 text-amberAccent border border-amberAccent/30 font-mono text-xs font-bold rounded-full shadow-sm">
                    Powered by Shadow Arrow
                  </span>
                </div>

                <h3 className="font-heading font-black text-4xl md:text-5xl text-deepInk group-hover:text-amberAccent transition-colors tracking-tight">
                  OMNIKART
                </h3>
                
                <p className="font-mono text-xs text-amberAccent font-semibold mt-2">
                  Cloud Commerce Infrastructure &amp; Storefront
                </p>
                <p className="text-sm text-muted max-w-[640px] leading-relaxed mt-3 font-normal">
                  All-in-one scalable e-commerce storefront engineered for instant page transitions, dynamic inventory tracking, and seamless checkout pipelines.
                </p>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.shadowarrow.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-studioSubtle hover:bg-amberAccent hover:text-studioCanvas text-deepInk border border-borderWarm hover:border-amberAccent text-xs font-bold rounded-full transition-all shrink-0 shadow-sm"
              >
                <span>Explore OmniKart</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ExpeditionEcosystem;

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { IdentityCard } from "./IdentityCard";

const ROLES = [
  "Full-Stack Software Engineer",
  "Systems Architect",
  "Computational Researcher",
  "Technical Author",
  "Founder, Shadow Arrow",
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-16 px-4 md:px-8 max-w-[1040px] mx-auto z-10" id="hero">
      <div className="flex flex-col items-center text-center">

        {/* Radar Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-studioCard border border-borderWarm rounded-full text-xs font-medium text-slate-700 shadow-sm mb-6"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-600"></span>
          </span>
          <span>Open for High-Impact Systems Architecture &amp; Scale</span>
        </motion.div>

        {/* Massive Confident Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hero-title font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-deepInk tracking-tight leading-none mb-4"
        >
          BIJOY LOHAR
        </motion.h1>

        {/* Typewriter Cycling Roles */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="h-8 flex items-center justify-center mb-4"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="hero-description font-mono text-sm md:text-base font-semibold text-amberAccent tracking-wide"
            >
              {ROLES[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Micro-Specs Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono font-medium text-slate-700 bg-studioSubtle border border-borderWarm px-4 py-2 rounded-full mb-6"
        >
          <span className="text-amberAccent font-bold">Founder Shadow Arrow</span>
          <span className="text-borderSubtle">•</span>
          <span>Cloud Architect</span>
          <span className="text-borderSubtle">•</span>
          <span>Visual Computing &amp; Gaming Enthusiast</span>
          <span className="text-borderSubtle">•</span>
          <span>Bishnupur, India</span>
        </motion.div>

        {/* Action Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-4"
        >
          <a
            href="#expedition"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-deepInk hover:bg-amberAccent text-white text-sm font-semibold rounded-full shadow-md hover:-translate-y-0.5 transition-all"
          >
            <span>Explore Expedition &amp; Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-studioCard hover:bg-studioSubtle text-deepInk text-sm font-semibold rounded-full border border-borderWarm hover:border-borderSubtle shadow-sm hover:-translate-y-0.5 transition-all"
          >
            <span>Open Direct Comms</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Dynamic Editorial Identity Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full"
        >
          <IdentityCard />
        </motion.div>

      </div>
    </section>
  );
};

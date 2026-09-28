"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export const SystemsPhilosophy: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 max-w-[1240px] mx-auto relative overflow-hidden" id="systems-philosophy">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main 2-Column Dark Card Box (Matching durveshyadav.com Photo #1 Layout) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-[#080B12] border border-amber-500/25 rounded-[36px] overflow-hidden shadow-[0_0_60px_rgba(245,158,11,0.1)] relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[560px]">
          
          {/* Left Column: High-Impact Copywriting (Exact durveshyadav.com style) */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6 text-left z-10">
            
            {/* Top Audience Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 font-mono text-xs md:text-sm font-bold text-amber-400 uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>For founders, scale-ups and MSMEs</span>
            </motion.div>

            {/* Massive Punchy Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.06]"
            >
              Stop chasing. <br />
              <span className="text-amber-400 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Start attracting.
              </span>
            </motion.h2>

            {/* Sub-headline Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 pt-1 max-w-xl"
            >
              <p className="font-heading font-semibold text-xl md:text-2xl text-slate-200 leading-snug">
                Scale is the by-product of right architecture.
              </p>
              
              <p className="text-sm md:text-base text-slate-400 leading-relaxed font-sans">
                Most founders have a great product and real hustle, but still fight for every scale.{" "}
                <strong className="text-white font-bold">
                  The problem isn&apos;t your effort. It&apos;s your marketing &amp; engineering system.
                </strong>{" "}
                I fix that.
              </p>
            </motion.div>

            {/* CTA White Pill Button (Matching Photo #1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-amber-400 text-slate-950 font-heading font-extrabold text-sm rounded-full shadow-lg transition-all transform hover:-translate-y-1 group"
              >
                <span>Get Systems &amp; Sales Blueprint</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Founder Verification Tag */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center gap-3 text-xs font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Verified Entity: <strong className="text-white">Bijoy Lohar</strong> — Founder Shadow Arrow</span>
            </div>

          </div>

          {/* Right Column: Bijoy Lohar Photo Banner (Exact Photo #1 Framing) */}
          <div className="lg:col-span-5 h-full relative flex items-end justify-center lg:justify-end overflow-hidden min-h-[420px] lg:min-h-[580px]">
            
            {/* Ambient Lighting behind Photo */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#080B12] via-transparent to-[#080B12] z-10 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#080B12] to-transparent z-10 pointer-events-none" />

            {/* Photo Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full h-full max-w-[420px] flex items-end justify-center px-4"
            >
              <img
                src="https://github.com/loharbijoy2005-a11y.png"
                alt="Bijoy Lohar — Founder & Systems Architect"
                className="w-full h-auto max-h-[520px] object-cover object-top rounded-2xl shadow-2xl filter brightness-105 contrast-105"
              />

              {/* Founder Overlay Chip */}
              <div className="absolute bottom-6 left-6 z-20 px-4 py-2 bg-slate-950/90 backdrop-blur-md border border-amber-500/30 rounded-2xl shadow-xl text-left">
                <span className="block font-heading font-extrabold text-sm text-white">Bijoy Lohar</span>
                <span className="font-mono text-[11px] text-amber-400 font-bold">Founder Shadow Arrow</span>
              </div>
            </motion.div>

          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default SystemsPhilosophy;

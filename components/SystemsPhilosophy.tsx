"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export const SystemsPhilosophy: React.FC = () => {
  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-[#0B0C0E] text-white flex flex-col justify-between pt-28 pb-0" id="systems-philosophy">
      
      {/* Background Radial Glow behind the Subject (z-index: 0, subtle 15% opacity) */}
      <div 
        className="absolute bottom-0 right-0 lg:right-10 w-[550px] h-[550px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(234, 179, 8, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Hero Section 2-Column Split (100vw Immersive Dark Canvas) */}
      <div className="flex-1 w-full max-w-[1340px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end z-10 relative">
        
        {/* Left Column: Typography & Content */}
        <div className="lg:col-span-7 space-y-8 text-left py-12 lg:py-16 z-10">
          
          {/* Subtle Golden Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-mono font-bold text-[#EAB308]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>FOR FOUNDERS, SCALE-UPS AND MSMES</span>
          </motion.div>

          {/* Main Huge Heading (No overflow hidden / zero letter clipping) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-1"
          >
            <h1 className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05]">
              Stop chasing.
            </h1>
            <h1 className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl text-[#EAB308] tracking-tight leading-[1.05]">
              Start scale-architecting.
            </h1>
          </motion.div>

          {/* Sub-headline & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 max-w-2xl"
          >
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-snug">
              Scalable architecture is the by-product of right design.
            </h3>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans font-normal">
              Most founders have a great vision and real hustle, but still fight under concurrency spikes and system load.{" "}
              <strong className="text-white font-bold">
                The problem isn&apos;t your effort—it&apos;s your engineering architecture pipeline.
              </strong>{" "}
              I design, build, and optimize digital infrastructure that scales effortlessly.
            </p>
          </motion.div>

          {/* CTA Button & Verified Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 space-y-6"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 bg-white hover:bg-[#EAB308] text-slate-950 font-heading font-extrabold text-base rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_40px_rgba(234,179,8,0.4)] transition-all transform hover:-translate-y-1 group"
            >
              <span>Get Architecture Blueprint</span>
              <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Footer Note Verified Tag */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Verified Entity: <strong className="text-white">Bijoy Lohar</strong> - Founder Shadow Arrow</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Transparent Cutout Portrait (Bottom Aligned, z-index: 1 over z-index: 0 glow) */}
        <div className="lg:col-span-5 h-full relative flex items-end justify-center lg:justify-end min-h-[500px] lg:min-h-[660px] self-end z-10">
          
          {/* Portrait Image with Bottom Gradient Blend */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[480px] flex items-end justify-center z-10"
          >
            <img
              src="https://github.com/loharbijoy2005-a11y.png"
              alt="Bijoy Lohar — Founder & Systems Architect"
              className="w-full h-auto max-h-[660px] object-cover object-bottom transition-all"
              style={{
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 20%), linear-gradient(to left, transparent 0%, black 15%)",
                maskImage: "linear-gradient(to top, transparent 0%, black 20%), linear-gradient(to left, transparent 0%, black 15%)",
              }}
            />
          </motion.div>

        </div>

      </div>

      {/* Bottom Canvas Edge Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default SystemsPhilosophy;

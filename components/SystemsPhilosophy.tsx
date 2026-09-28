"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, ArrowUpRight, ShieldCheck, Cpu } from "lucide-react";

export const SystemsPhilosophy: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-[#0A0A0C] text-white flex flex-col justify-between" id="systems-philosophy">
      
      {/* Background Radial Glow behind the Subject (z-index: 0, subtle 12% opacity) */}
      <div 
        className="absolute bottom-0 right-0 md:right-12 w-[550px] h-[550px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(234, 179, 8, 0.12) 0%, transparent 60%)",
        }}
      />

      {/* Top Full-Width Navbar */}
      <header className="w-full px-6 md:px-12 py-6 flex items-center justify-between z-20 relative border-b border-white/5">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-amber-500/40 flex items-center justify-center font-heading font-black text-amber-400 text-sm bg-amber-500/10">
            BL
          </div>
          <div>
            <span className="font-heading font-black text-lg md:text-xl tracking-tight text-white block">
              Bijoy Lohar
            </span>
            <span className="font-mono text-[10px] text-amber-400 uppercase tracking-widest font-bold block">
              FOUNDER SHADOW ARROW &bull; SYSTEMS ARCHITECT
            </span>
          </div>
        </div>

        {/* Center/Right Nav Links */}
        <div className="hidden lg:flex items-center gap-8 font-sans text-sm font-semibold text-slate-300">
          <a href="#systems-philosophy" className="hover:text-amber-400 transition-colors">Systems Architecture</a>
          <a href="#about-me" className="hover:text-amber-400 transition-colors">My Story</a>
          <a href="#author-books" className="hover:text-amber-400 transition-colors">Publications</a>
          <a href="#creator-matrix" className="hover:text-amber-400 transition-colors">Tech Ecosystem</a>
        </div>

        {/* Right CTA & Dark/Light Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-transparent border border-white/20 hover:border-amber-400 hover:text-amber-400 text-white text-xs font-bold font-mono rounded-full transition-all flex items-center gap-1.5"
          >
            <span>Direct Comms</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2.5 rounded-full border border-white/10 hover:border-amber-400 text-slate-300 hover:text-amber-400 transition-all bg-white/5"
            title="Toggle theme mode"
          >
            {isDarkMode ? <Moon className="w-4 h-4 text-amber-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
          </button>
        </div>
      </header>

      {/* Hero Section Split 2-Column Grid (100vw Immersive Canvas) */}
      <div className="flex-1 w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end z-10 relative pt-12">
        
        {/* Left Column: Customized Copywriting Tailored for Bijoy Lohar */}
        <div className="lg:col-span-7 space-y-8 text-left py-12">
          
          {/* Tagline / Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#EAB308] font-mono text-sm sm:text-base font-bold tracking-wide flex items-center gap-2"
          >
            <Cpu className="w-4 h-4 text-[#EAB308]" />
            <span>FOR FOUNDERS, TECH SCALE-UPS &amp; ENTERPRISE ARCHITECTS</span>
          </motion.div>

          {/* Main Huge Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.02]"
          >
            Stop overengineering. <br />
            <span className="text-[#EAB308]">Start scale-architecting.</span>
          </motion.h1>

          {/* Sub-headline & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 max-w-2xl"
          >
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-snug">
              High-throughput scale is the by-product of resilient architecture.
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans font-normal">
              Most founders have a great vision and real hustle, but still fight under concurrency spikes and system load.{" "}
              <strong className="text-white font-bold">
                The problem isn&apos;t your effort—it&apos;s your engineering architecture pipeline.
              </strong>{" "}
              I design, build, and optimize digital infrastructure that scales effortlessly.
            </p>
          </motion.div>

          {/* CTA Pill Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-9 py-4 bg-white hover:bg-[#EAB308] text-slate-950 font-heading font-extrabold text-base rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_40px_rgba(234,179,8,0.4)] transition-all transform hover:-translate-y-1"
            >
              Get Architecture Blueprint
            </a>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 px-4 py-2 border border-white/10 rounded-full bg-white/5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Verified Entity: <strong className="text-white">Bijoy Lohar</strong></span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Hero Portrait (Smooth Mask Blending - z-index: 1 over z-index: 0 glow) */}
        <div className="lg:col-span-5 h-full relative flex items-end justify-center lg:justify-end min-h-[500px] lg:min-h-[660px] z-10">
          
          {/* Large Scale Portrait with User's Exact Gradient Mask */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[500px] flex items-end justify-center z-10"
          >
            <img
              src="https://github.com/loharbijoy2005-a11y.png"
              alt="Bijoy Lohar — Founder & Systems Architect"
              className="w-full h-auto max-h-[680px] object-cover object-bottom transition-all"
              style={{
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 25%), linear-gradient(to left, transparent 0%, black 20%)",
                maskImage: "linear-gradient(to top, transparent 0%, black 25%), linear-gradient(to left, transparent 0%, black 20%)",
              }}
            />
          </motion.div>

        </div>

      </div>

      {/* Bottom Subtle Canvas Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default SystemsPhilosophy;

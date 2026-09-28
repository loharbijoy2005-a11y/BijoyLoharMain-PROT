"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, ArrowUpRight } from "lucide-react";

export const SystemsPhilosophy: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-[#0A0D14] text-white flex flex-col justify-between" id="systems-philosophy">
      
      {/* Background Radial Glow behind the Subject */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none z-0" />

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
              FOUNDER &bull; SYSTEMS ARCHITECT
            </span>
          </div>
        </div>

        {/* Center/Right Nav Links */}
        <div className="hidden lg:flex items-center gap-8 font-sans text-sm font-semibold text-slate-300">
          <a href="#systems-philosophy" className="hover:text-amber-400 transition-colors">Free Systems Test</a>
          <a href="#about-me" className="hover:text-amber-400 transition-colors">My Story</a>
          <a href="#author-books" className="hover:text-amber-400 transition-colors">Book</a>
          <a href="#creator-matrix" className="hover:text-amber-400 transition-colors">Coaching</a>
        </div>

        {/* Right CTA & Dark/Light Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-transparent border border-white/20 hover:border-amber-400 hover:text-amber-400 text-white text-xs font-bold font-mono rounded-full transition-all flex items-center gap-1.5"
          >
            <span>Login</span>
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
      <div className="flex-1 w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 relative py-12 lg:py-0">
        
        {/* Left Column: Typography & Content */}
        <div className="lg:col-span-7 space-y-8 text-left py-6">
          
          {/* Tagline / Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#EAB308] font-mono text-sm sm:text-base font-bold tracking-wide"
          >
            For founders, coaches and MSMEs
          </motion.div>

          {/* Main Huge Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.02]"
          >
            Stop chasing. <br />
            <span className="text-[#EAB308]">Start attracting.</span>
          </motion.h1>

          {/* Sub-headline & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 max-w-2xl"
          >
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-snug">
              Sales is the by-product of right marketing.
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans font-normal">
              Most founders have a great product and real hustle, but still fight for every sale.{" "}
              <strong className="text-white font-bold">
                The problem isn&apos;t your effort. It&apos;s your marketing system.
              </strong>{" "}
              I fix that.
            </p>
          </motion.div>

          {/* CTA Pill Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4"
          >
            <a
              href="#author-books"
              className="inline-flex items-center justify-center px-9 py-4 bg-white hover:bg-[#EAB308] text-slate-950 font-heading font-extrabold text-base rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_40px_rgba(234,179,8,0.4)] transition-all transform hover:-translate-y-1"
            >
              Get Sales Overflow Book
            </a>
          </motion.div>

        </div>

        {/* Right Column: Hero Portrait (Natural Blended Cutout) */}
        <div className="lg:col-span-5 h-full relative flex items-end justify-center lg:justify-end min-h-[500px] lg:min-h-[680px]">
          
          {/* Subtle Bottom & Side Gradient Overlays for Seamless Canvas Blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0D14] to-transparent z-10 pointer-events-none hidden lg:block" />

          {/* Large Scale Portrait cutout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-full max-w-[500px] flex items-end justify-center z-0"
          >
            <img
              src="https://github.com/loharbijoy2005-a11y.png"
              alt="Bijoy Lohar"
              className="w-full h-auto max-h-[680px] object-cover object-top filter brightness-105 contrast-105 rounded-b-none"
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

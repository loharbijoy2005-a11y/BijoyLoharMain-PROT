"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ArrowDown, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Compass, 
  Flame, 
  Terminal, 
  BookOpen, 
  Radio, 
  Github, 
  Linkedin
} from "lucide-react";

export const SystemsPhilosophy: React.FC = () => {
  return (
    <div className="w-full bg-[#0B0C0E] text-white font-sans selection:bg-amber-500/30 selection:text-amber-300">

      {/* SECTION 1: HERO SECTION (THE HOOK) */}
      <section className="w-full min-h-screen relative overflow-hidden bg-[#0B0C0E] flex flex-col justify-between pt-24 pb-12" id="hero-story">
        
        {/* Main 2-Column Grid Canvas */}
        <div className="flex-1 w-full max-w-[1340px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end z-10 relative">
          
          {/* Left Column: Typography & Narrative Hook */}
          <div className="lg:col-span-7 space-y-8 text-left py-12 lg:py-16 z-10">
            
            {/* Subtle Golden Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-mono font-bold text-[#EAB308]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
              <span>FOR FOUNDERS, SCALE-UPS AND MSMES</span>
            </motion.div>

            {/* Main Punchy Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05]">
                Stop chasing.
              </h1>
              <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl text-[#EAB308] tracking-tight leading-[1.05]">
                Start scale-architecting.
              </h1>
            </motion.div>

            {/* Subhead & Bio Punchline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 max-w-2xl"
            >
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-snug">
                I build high-throughput systems that turn complex code into resilient digital engines.
              </h3>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans font-normal">
                Hi, I&apos;m <strong className="text-white font-bold">Bijoy Lohar</strong> — Founder of Shadow Arrow &amp; Systems Architect based in Bishnupur, West Bengal. I bridge the gap between high-level system design and execution, crafting software architectures built to withstand real-world scale.
              </p>
            </motion.div>

            {/* Dual Pill CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <a
                href="#origin-narrative"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-[#EAB308] text-slate-950 font-heading font-extrabold text-sm rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_40px_rgba(234,179,8,0.4)] transition-all transform hover:-translate-y-1 group"
              >
                <span>Read The Full Story</span>
                <ArrowDown className="w-4 h-4 text-slate-950 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 hover:border-[#EAB308] hover:text-[#EAB308] text-white font-heading font-bold text-sm rounded-full transition-all"
              >
                <span>Connect Directly</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Verified Note */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Verified Entity: <strong className="text-white">Bijoy Lohar</strong> - Founder Shadow Arrow</span>
            </div>

          </div>

          {/* Right Column: Hero Portrait with Exact Requested CSS Wrapper & Glow */}
          <div className="lg:col-span-5 h-full relative flex items-end justify-center lg:justify-end min-h-[480px] lg:min-h-[660px] self-end z-10">
            
            <div className="hero-image-wrapper">
              {/* Radial Golden Glow (z-index: 0) */}
              <div className="hero-glow" />

              {/* Cutout Portrait Image with Exact CSS Mask Gradient */}
              <img
                src="https://github.com/loharbijoy2005-a11y.png"
                alt="Bijoy Lohar — Founder & Systems Architect"
                className="relative z-10"
              />
            </div>

          </div>

        </div>

      </section>

      {/* SECTION 2: THE ORIGIN & THE HUSTLE (BIOGRAPHY / NARRATIVE) */}
      <section className="py-24 px-6 md:px-12 max-w-[1040px] mx-auto text-left relative" id="origin-narrative">
        <div className="space-y-10">
          
          <div className="space-y-2 border-l-2 border-[#EAB308] pl-5">
            <span className="font-mono text-xs font-bold text-[#EAB308] uppercase tracking-widest block">
              01 / THE BIOGRAPHY
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              The Origin &amp; The Hustle
            </h2>
          </div>

          <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed font-sans font-normal border-t border-white/10 pt-8">
            <p>
              Growing up in <strong className="text-white font-semibold">Bishnupur, West Bengal</strong>, my obsession with technology started not with simple user interfaces, but with a deep curiosity about how systems communicate beneath the surface. While most explored pre-built applications, I immersed myself in fundamental computing, low-level architecture, memory management, and distributed network logic.
            </p>

            <p>
              My journey into software engineering was driven by first-principles problem solving. I discovered that writing code is easy, but engineering resilient architecture that handles thousands of concurrent requests without latency degradation requires absolute discipline and vision.
            </p>

            <p>
              This passion culminated in founding <strong className="text-[#EAB308] font-bold">Shadow Arrow</strong> — an enterprise software architecture and cloud infrastructure studio dedicated to building high-speed web pipelines, sub-second catalogs, and distributed backend engines.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: ECOSYSTEM & VENTURES */}
      <section className="py-20 px-6 md:px-12 max-w-[1140px] mx-auto text-left" id="ventures-ecosystem">
        <div className="space-y-12">
          
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#EAB308] uppercase tracking-widest block">
              02 / ECOSYSTEM
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              Ventures &amp; Engineering Focus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-8 bg-[#12151E] border border-white/10 rounded-3xl hover:border-[#EAB308]/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#EAB308]">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white">Shadow Arrow</h3>
              <p className="font-mono text-xs text-[#EAB308] font-bold">Founder &amp; Managing Director</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Enterprise cloud architecture, web system development, and high-performance technical engineering studio.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-[#12151E] border border-white/10 rounded-3xl hover:border-[#EAB308]/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#EAB308]">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white">High-Speed Systems</h3>
              <p className="font-mono text-xs text-[#EAB308] font-bold">Architectural Practice</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Sub-50ms API gateways, Cloudflare Edge workers, distributed databases, and real-time event streaming pipelines.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-[#12151E] border border-white/10 rounded-3xl hover:border-[#EAB308]/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#EAB308]">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white">Media &amp; Publications</h3>
              <p className="font-mono text-xs text-[#EAB308] font-bold">Author &amp; Mentor</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Technical publications, Google Books indexing, developer mentorship on Topmate, and Commudle ecosystem keynotes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: TIMELINE OF KEY MILESTONES */}
      <section className="py-20 px-6 md:px-12 max-w-[1040px] mx-auto text-left" id="milestones-timeline">
        <div className="space-y-12">
          
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#EAB308] uppercase tracking-widest block">
              03 / JOURNEY
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              Timeline of Key Milestones
            </h2>
          </div>

          <div className="space-y-8 relative border-l border-white/10 pl-6 md:pl-8">
            
            {/* Item 1 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#EAB308] border-4 border-[#0B0C0E]" />
              <span className="font-mono text-xs font-bold text-[#EAB308]">2021 &bull; Early Foundations</span>
              <h4 className="font-heading font-bold text-xl text-white">Deep-Dive into Systems Programming</h4>
              <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
                Mastered computational fundamentals, C++, Python, distributed networking, and backend API engineering.
              </p>
            </div>

            {/* Item 2 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#EAB308] border-4 border-[#0B0C0E]" />
              <span className="font-mono text-xs font-bold text-[#EAB308]">2023 &bull; Founding Shadow Arrow</span>
              <h4 className="font-heading font-bold text-xl text-white">Established Independent Software Studio</h4>
              <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
                Founded Shadow Arrow to deliver high-throughput web architectures, custom backend infrastructure, and scalable applications.
              </p>
            </div>

            {/* Item 3 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#EAB308] border-4 border-[#0B0C0E]" />
              <span className="font-mono text-xs font-bold text-[#EAB308]">2024 &bull; Scale &amp; E-Commerce Architecture</span>
              <h4 className="font-heading font-bold text-xl text-white">Engineered Sub-Second Catalog Pipelines</h4>
              <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
                Built and deployed high-performance serverless transaction pipelines and OmniKart e-commerce systems.
              </p>
            </div>

            {/* Item 4 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#EAB308] border-4 border-[#0B0C0E]" />
              <span className="font-mono text-xs font-bold text-[#EAB308]">2025 &bull; Author &amp; Mentorship Hub</span>
              <h4 className="font-heading font-bold text-xl text-white">Technical Publications &amp; Community Growth</h4>
              <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
                Expanded Google Books &amp; Amazon author indexing, active developer keynotes on Commudle, and 1-on-1 mentorship on Topmate.
              </p>
            </div>

            {/* Item 5 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#EAB308] border-4 border-[#0B0C0E]" />
              <span className="font-mono text-xs font-bold text-[#EAB308]">2026 &bull; Next-Gen Real-Time Systems</span>
              <h4 className="font-heading font-bold text-xl text-white">Visual Computing &amp; Graphics Pipelines</h4>
              <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
                Advancing high-frame-rate rendering graphics engines, interactive web simulators, and enterprise computational systems.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: CORE OPERATING PRINCIPLES */}
      <section className="py-20 px-6 md:px-12 max-w-[1140px] mx-auto text-left" id="operating-principles">
        <div className="space-y-12">
          
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-[#EAB308] uppercase tracking-widest block">
              04 / PHILOSOPHY
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
              Core Operating Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-8 bg-[#12151E] border border-white/10 rounded-3xl space-y-3">
              <span className="font-mono text-xs font-bold text-[#EAB308]">01. FIRST-PRINCIPLES</span>
              <h3 className="font-heading font-bold text-xl text-white">Deconstruct to Core Truths</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Every problem is stripped down to foundational engineering logic before writing code or choosing technology stacks.
              </p>
            </div>

            <div className="p-8 bg-[#12151E] border border-white/10 rounded-3xl space-y-3">
              <span className="font-mono text-xs font-bold text-[#EAB308]">02. SCALABILITY FIRST</span>
              <h3 className="font-heading font-bold text-xl text-white">Engineered for 10x Load</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Systems are architected from day one to handle high concurrency, multi-region failover, and zero data degradation.
              </p>
            </div>

            <div className="p-8 bg-[#12151E] border border-white/10 rounded-3xl space-y-3">
              <span className="font-mono text-xs font-bold text-[#EAB308]">03. ABSOLUTE OWNERSHIP</span>
              <h3 className="font-heading font-bold text-xl text-white">End-to-End Execution</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Uncompromising commitment from architectural blueprint to live cloud production and long-term optimization.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: DIRECT CONTACT & NETWORK */}
      <footer className="py-24 px-6 md:px-12 max-w-[1140px] mx-auto text-left border-t border-white/10" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs font-bold text-[#EAB308] uppercase tracking-widest block">
              05 / DIRECT NETWORK
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
              Initiate a Technical Line
            </h2>
            <p className="text-slate-400 text-base max-w-lg leading-relaxed">
              Whether you are looking to collaborate on high-throughput software architecture, Shadow Arrow partnerships, or technical advisory, reach out directly.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://www.commudle.com/users/Bijoylohar"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-slate-300 hover:text-[#EAB308] hover:border-[#EAB308] transition-all flex items-center gap-1.5"
              >
                <Radio className="w-3.5 h-3.5 text-[#EAB308]" />
                <span>Commudle: @Bijoylohar</span>
              </a>

              <a
                href="https://topmate.io/bijoy_lohar"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-slate-300 hover:text-[#EAB308] hover:border-[#EAB308] transition-all flex items-center gap-1.5"
              >
                <Compass className="w-3.5 h-3.5 text-[#EAB308]" />
                <span>Topmate Mentorship</span>
              </a>

              <a
                href="https://github.com/loharbijoy2005-a11y"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-slate-300 hover:text-[#EAB308] hover:border-[#EAB308] transition-all flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5 text-white" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/bijoy-lohar-5a508832b"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-slate-300 hover:text-[#EAB308] hover:border-[#EAB308] transition-all flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 bg-[#12151E] border border-white/10 rounded-3xl space-y-4">
            <h3 className="font-heading font-bold text-xl text-white">Direct Message Gateway</h3>
            <p className="text-xs text-slate-400">Direct response within 24 hours.</p>
            <a
              href="mailto:bijoylohar@shadowarrow.in"
              className="inline-flex items-center justify-center w-full py-3.5 bg-white hover:bg-[#EAB308] text-slate-950 font-heading font-extrabold text-sm rounded-full transition-all"
            >
              Send Direct Email ↗
            </a>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs font-mono text-slate-500">
          © 2026 Bijoy Lohar. Founder of Shadow Arrow &bull; All Rights Reserved.
        </div>
      </footer>

    </div>
  );
};

export default SystemsPhilosophy;

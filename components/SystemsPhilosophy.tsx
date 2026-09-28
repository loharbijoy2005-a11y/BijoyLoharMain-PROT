"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Cpu,
  Layers,
  BookOpen,
  Compass,
  Github,
  Linkedin,
  Radio,
  Flame,
  FlaskConical,
  GitBranch,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Framer-Motion variants
───────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ─────────────────────────────────────────────────────────────
   Section label component
───────────────────────────────────────────────────────────── */
const SectionLabel: React.FC<{ index: string; title: string }> = ({ index, title }) => (
  <div className="space-y-1 border-l-2 border-amberAccent pl-5">
    <span className="font-mono text-xs font-bold text-amberAccent uppercase tracking-widest block">
      {index}
    </span>
    <h2 className="font-heading font-black text-3xl sm:text-4xl text-deepInk tracking-tight">
      {title}
    </h2>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   Pillar card
───────────────────────────────────────────────────────────── */
const PillarCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  role: string;
  description: string;
}> = ({ icon, title, role, description }) => (
  <motion.div
    variants={fadeUp}
    className="p-7 rounded-2xl border border-borderWarm bg-studioCard hover:border-amberAccent/50 transition-all duration-300 space-y-4 group shadow-md"
  >
    <div className="w-11 h-11 rounded-xl bg-amberAccent/10 border border-amberAccent/30 flex items-center justify-center text-amberAccent group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div>
      <h3 className="font-heading font-extrabold text-xl text-deepInk">{title}</h3>
      <p className="font-mono text-xs font-bold text-amberAccent mt-0.5">{role}</p>
    </div>
    <p className="text-sm text-muted leading-relaxed">{description}</p>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────
   Timeline item
───────────────────────────────────────────────────────────── */
const TimelineItem: React.FC<{
  year: string;
  label: string;
  heading: string;
  body: string;
}> = ({ year, label, heading, body }) => (
  <motion.div variants={fadeUp} className="relative space-y-1.5">
    <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amberAccent border-4 border-studioCanvas" />
    <span className="font-mono text-xs font-bold text-amberAccent">
      {year} &bull; {label}
    </span>
    <h4 className="font-heading font-bold text-xl text-deepInk">{heading}</h4>
    <p className="text-sm text-muted max-w-2xl leading-relaxed">{body}</p>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────
   Main Component
───────────────────────────────────────────────────────────── */
export const SystemsPhilosophy: React.FC = () => {
  return (
    <div className="w-full font-sans selection:bg-amberAccent/25 selection:text-deepInk">

      {/* ══════════════════════════════════════════════════
          SECTION 1 — HERO (split 2-column)
      ══════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════
          SECTION 1 — HERO (split 2-column, flush right image, top aligned)
      ══════════════════════════════════════════════════ */}
      <section
        id="hero-story"
        className="w-full min-h-screen relative overflow-hidden flex flex-col justify-between pt-0 pb-0"
      >
        <div className="flex-1 w-full pl-6 md:pl-12 pr-0 mr-0 grid grid-cols-1 lg:grid-cols-12 gap-4 items-start z-10 relative">

          {/* LEFT — Typography & Narrative */}
          <div className="lg:col-span-6 space-y-5 lg:space-y-6 text-left pt-14 md:pt-16 pb-12 z-10 pr-4 lg:pr-6 max-w-[720px]">

            {/* Subtle pill badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-amberAccent/10 border border-amberAccent/30 rounded-full text-xs font-mono font-bold text-amberAccent"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amberAccent animate-pulse" />
              <span>FULL-STACK SOFTWARE ENGINEER &amp; SYSTEMS ARCHITECT &bull; FOUNDER OF SHADOW ARROW</span>
            </motion.div>

            {/* Main headline */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="space-y-1"
            >
              <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl text-deepInk tracking-tight leading-[1.06]">
                Engineering Resilient Systems.
              </h1>
              <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl text-amberAccent tracking-tight leading-[1.06]">
                Architecting Computational Scale.
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-muted text-base sm:text-lg leading-relaxed max-w-xl font-normal"
            >
              Full-Stack Software Engineer operating across high-throughput software architecture, cloud infrastructure, and real-time gaming systems.
              Founder of <strong className="text-amberAccent font-bold">Shadow Arrow</strong> based in{" "}
              <strong className="text-deepInk font-semibold">Bishnupur, West Bengal.</strong>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <a
                href="#origin-narrative"
                id="cta-read-biography"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amberAccent hover:bg-amberLight text-studioCanvas font-heading font-extrabold text-sm rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span>Read Biography</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact-network"
                id="cta-direct-comms"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-borderSubtle hover:border-amberAccent hover:text-amberAccent text-deepInk font-heading font-bold text-sm rounded-full transition-all duration-200"
              >
                <span>Direct Comms</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

          </div>

          {/* RIGHT — Flush-Right & Flush-Top Portrait Image (Sticks to Top-Right Screen Edge) */}
          <div className="lg:col-span-6 w-full h-full lg:absolute lg:top-0 lg:right-0 lg:w-1/2 flex items-start justify-end z-0 pr-0 mr-0">
            <div className="hero-image-container w-full h-full flex justify-end items-start pr-0 mr-0">
              <img
                src="https://github.com/loharbijoy2005-a11y.png"
                alt="Bijoy Lohar — Systems Architect & Founder"
                className="w-full max-w-[840px] h-full max-h-screen object-cover object-top-right align-top relative z-0 block pr-0 mr-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/hero-portrait.jpg";
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — ORIGIN & BACKGROUND
      ══════════════════════════════════════════════════ */}
      <section
        id="origin-narrative"
        className="py-24 px-6 md:px-12 max-w-[1040px] mx-auto text-left"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-10"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel index="01 / BIOGRAPHY" title="Origin &amp; Background" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="space-y-6 text-muted text-base md:text-lg leading-relaxed border-t border-borderWarm pt-8"
          >
            <p>
              Growing up in{" "}
              <strong className="text-deepInk font-semibold">Bishnupur, West Bengal</strong>, my
              obsession with technology started with a deep curiosity about how systems communicate beneath the surface — memory hierarchies, distributed state, network topology, and high-performance computing.
            </p>
            <p>
              My path into software engineering was built on first-principles discipline. Rather than relying solely on high-level frameworks, I started from low-level systems programming, tracing how data flows from backend servers to client engines.
            </p>
            <p>
              This focus led to establishing{" "}
              <strong className="text-amberAccent font-bold">Shadow Arrow</strong> in 2025 — an independent technical studio dedicated to high-throughput web architecture, sub-second API performance, cloud infrastructure, and modern software engineering.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — CORE PILLARS
      ══════════════════════════════════════════════════ */}
      <section
        id="core-pillars"
        className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto text-left"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-12"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel index="02 / PRACTICE" title="Core Pillars" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PillarCard
              icon={<Cpu className="w-5 h-5" />}
              title="High-Throughput Systems"
              role="Cloud Architecture &amp; Backend Engineering"
              description="Sub-50ms API gateways, Cloudflare Edge workers, distributed databases, real-time event streaming, and multi-region infrastructure with zero data degradation."
            />
            <PillarCard
              icon={<Layers className="w-5 h-5" />}
              title="Gaming &amp; Visual Computing"
              role="Graphics &amp; Interactive Media"
              description="High-frame-rate rendering graphics, gaming stream studio setups, interactive 3D WebGL simulators, and real-time broadcasting infrastructure."
            />
            <PillarCard
              icon={<BookOpen className="w-5 h-5" />}
              title="Technical Authorship &amp; Community"
              role="Author &amp; Ecosystem Speaker"
              description="Structured engineering books indexed on Google Books, active keynotes on Commudle, and 1-on-1 developer mentorship on Topmate."
            />
          </div>

        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4 — JOURNEY TIMELINE
      ══════════════════════════════════════════════════ */}
      <section
        id="milestones-timeline"
        className="py-20 px-6 md:px-12 max-w-[1040px] mx-auto text-left"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-12"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel index="03 / JOURNEY" title="Timeline of Key Milestones" />
          </motion.div>

          <div className="space-y-9 relative border-l border-borderWarm pl-6 md:pl-8">
            <TimelineItem
              year="2023"
              label="Gaming &amp; Visual Media"
              heading="Deep Focus on Gaming &amp; Visual Media Ecosystems"
              body="Pioneered live gameplay streaming setups, interactive media graphics, Arrow Gaming studio, and high-performance workstation optimization."
            />
            <TimelineItem
              year="2024"
              label="Scale &amp; E-Commerce Architecture"
              heading="Engineered Sub-Second Catalog Pipelines"
              body="Built and deployed high-performance serverless transaction pipelines, OmniKart e-commerce systems, and cloud-edge infrastructure."
            />
            <TimelineItem
              year="2025"
              label="Founding Shadow Arrow"
              heading="Established Shadow Arrow Independent Studio"
              body="Founded Shadow Arrow in 2025 to deliver high-throughput software architecture, enterprise cloud solutions, and digital utilities."
            />
            <TimelineItem
              year="2026"
              label="Authorship &amp; Next-Gen Systems"
              heading="Technical Literature &amp; Architectural Leadership"
              body="Expanding Google Books indexing, technical advisory, and next-generation real-time software systems."
            />
          </div>

        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5 — VENTURES & OPEN SOURCE
      ══════════════════════════════════════════════════ */}
      <section
        id="ventures-open-source"
        className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto text-left"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-12"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel index="04 / VENTURES" title="Ventures &amp; Open Source" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              variants={fadeUp}
              className="p-7 rounded-2xl border border-borderWarm bg-studioCard hover:border-amberAccent/50 transition-all duration-300 space-y-4 shadow-md"
            >
              <div className="w-11 h-11 rounded-xl bg-amberAccent/10 border border-amberAccent/30 flex items-center justify-center text-amberAccent">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl text-deepInk">Shadow Arrow</h3>
                <p className="font-mono text-xs font-bold text-amberAccent mt-0.5">Founder (Est. 2025)</p>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Enterprise cloud architecture, web system development, and high-performance technical engineering studio serving scale-ups and MSMEs.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="p-7 rounded-2xl border border-borderWarm bg-studioCard hover:border-amberAccent/50 transition-all duration-300 space-y-4 shadow-md"
            >
              <div className="w-11 h-11 rounded-xl bg-amberAccent/10 border border-amberAccent/30 flex items-center justify-center text-amberAccent">
                <FlaskConical className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl text-deepInk">Web Utilities &amp; Digital Tools</h3>
                <p className="font-mono text-xs font-bold text-amberAccent mt-0.5">Gaming &amp; Engineering Labs</p>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Computational tools, gaming utilities, and engineering-grade web applications built as structured reference tools.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="p-7 rounded-2xl border border-borderWarm bg-studioCard hover:border-amberAccent/50 transition-all duration-300 space-y-4 shadow-md"
            >
              <div className="w-11 h-11 rounded-xl bg-amberAccent/10 border border-amberAccent/30 flex items-center justify-center text-amberAccent">
                <GitBranch className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl text-deepInk">Open Repositories</h3>
                <p className="font-mono text-xs font-bold text-amberAccent mt-0.5">GitHub Ecosystem</p>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Structured open-source repositories spanning systems architecture patterns, high-performance algorithms, and reference implementations.
              </p>
            </motion.div>
          </div>

        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6 — CONTACT & NETWORK (No Duplicate Copyright)
      ══════════════════════════════════════════════════ */}
      <section
        id="contact-network"
        className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-borderWarm"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left: Network links */}
          <motion.div variants={fadeUp} className="lg:col-span-7 space-y-6">
            <SectionLabel index="05 / NETWORK" title="Initiate a Technical Line" />
            <p className="text-muted text-base max-w-lg leading-relaxed">
              Available for high-throughput software architecture collaborations, Shadow Arrow partnerships,
              technical advisory, and mentorship engagements.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              {[
                { href: "https://www.commudle.com/users/Bijoylohar", icon: <Radio className="w-3.5 h-3.5" />, label: "Commudle: @Bijoylohar" },
                { href: "https://topmate.io/bijoy_lohar", icon: <Compass className="w-3.5 h-3.5" />, label: "Topmate Mentorship" },
                { href: "https://github.com/loharbijoy2005-a11y", icon: <Github className="w-3.5 h-3.5" />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/bijoy-lohar-5a508832b", icon: <Linkedin className="w-3.5 h-3.5" />, label: "LinkedIn" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-borderWarm bg-studioCard hover:border-amberAccent hover:text-amberAccent text-muted text-xs font-mono transition-all shadow-sm"
                >
                  <span className="text-amberAccent">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Direct email */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 p-8 rounded-2xl border border-borderWarm bg-studioCard space-y-4 shadow-md"
          >
            <h3 className="font-heading font-bold text-xl text-deepInk">Direct Message Gateway</h3>
            <p className="text-xs text-muted">Direct response within 24 hours.</p>
            <a
              href="mailto:bijoylohar@shadowarrow.in"
              id="cta-send-email"
              className="inline-flex items-center justify-center w-full py-3.5 rounded-full bg-amberAccent hover:bg-amberLight text-studioCanvas font-heading font-extrabold text-sm transition-all duration-200 shadow-md"
            >
              Send Direct Email ↗
            </a>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
};

export default SystemsPhilosophy;

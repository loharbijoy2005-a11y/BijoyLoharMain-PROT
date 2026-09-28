"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  ShieldCheck,
  ShoppingBag,
  Radio,
  ArrowUpRight,
  Code2,
  Layout,
  Server,
  Cloud,
  Database,
  Box,
  Facebook,
  Github,
  Globe,
  Info,
  Check,
} from "lucide-react";

export const BentoGrid: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Framer Motion 3D tilt values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const techBadges = [
    { name: "TypeScript", icon: <Code2 className="w-3.5 h-3.5" /> },
    { name: "React / Next.js", icon: <Layout className="w-3.5 h-3.5" /> },
    { name: "Node.js & Express", icon: <Server className="w-3.5 h-3.5" /> },
    { name: "Cloudflare Edge", icon: <Cloud className="w-3.5 h-3.5" /> },
    { name: "PostgreSQL & SQL", icon: <Database className="w-3.5 h-3.5" /> },
    { name: "Docker Containers", icon: <Box className="w-3.5 h-3.5" /> },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-studioCanvas border-y border-borderWarm" id="bento">
      <div className="max-w-[1140px] mx-auto">
        
        <div className="mb-10 text-left">
          <span className="font-mono text-xs font-bold text-amberAccent uppercase tracking-wider block mb-1">
            05 / ASYMMETRICAL BENTO GRID
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-deepInk tracking-tight">
            Flagship Ventures &amp; Ecosystem
          </h2>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1 (Large - 12 cols): Flagship Venture - Shadow Arrow */}
          <motion.div
            style={{ rotateX, rotateY, perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="md:col-span-12 p-8 md:p-10 bg-studioCard border border-borderWarm rounded-3xl shadow-md hover:border-amberAccent/50 transition-all relative overflow-hidden group"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amberAccent/10 border border-amberAccent/30 text-amberAccent rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-deepInk">
                    Shadow Arrow
                  </h3>
                  <p className="font-mono text-xs text-amberAccent">https://www.shadowarrow.in</p>
                </div>
              </div>
              <span className="font-mono text-xs font-bold px-3.5 py-1.5 bg-amberAccent/10 border border-amberAccent/30 text-amberAccent rounded-full">
                Flagship Studio &amp; Agency
              </span>
            </div>

            <p className="text-base text-muted max-w-[760px] leading-relaxed mb-6">
              The official technology flagship founded by Bijoy Lohar in 2025. Specializing in high-performance web systems, production enterprise SaaS, custom cloud infrastructure, and digital solutions designed for modern scale.
            </p>

            {/* Core Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {techBadges.map((tech) => (
                <button
                  key={tech.name}
                  onClick={() => setSelectedTech(tech.name)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                    selectedTech === tech.name
                      ? "bg-amberAccent text-studioCanvas border-amberAccent scale-95 font-bold"
                      : "bg-studioSubtle text-muted border-borderWarm hover:border-amberAccent hover:text-amberAccent hover:-translate-y-0.5"
                  }`}
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-borderWarm">
              <div className="flex items-center gap-6 text-xs font-mono text-muted">
                <span>99.9% Uptime SLA</span>
                <span>Low Latency APIs</span>
                <span>Enterprise SaaS</span>
              </div>
              <a
                href="https://www.shadowarrow.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amberAccent hover:bg-amberLight text-studioCanvas font-heading font-extrabold text-xs rounded-xl transition-all shadow-md"
              >
                <span>Visit Studio (shadowarrow.in)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 2 (Medium - 6 cols): OmniKart Commerce */}
          <div className="md:col-span-6 p-8 bg-studioCard border border-borderWarm rounded-3xl shadow-md hover:border-amberAccent/50 transition-all flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-11 h-11 bg-amberAccent/10 border border-amberAccent/30 text-amberAccent rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-bold px-2.5 py-1 bg-amberAccent/10 text-amberAccent border border-amberAccent/30 rounded-md">
                  Digital Commerce
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-deepInk mb-1">
                OmniKart
              </h3>
              <p className="font-mono text-xs text-amberAccent font-bold mb-3">
                Powered by Shadow Arrow Engine
              </p>
              <p className="text-sm text-muted leading-relaxed mb-6">
                All-in-one scalable commerce platform engineered for instant page transitions, dynamic inventory tracking, and seamless checkout pipelines.
              </p>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-studioSubtle hover:bg-borderWarm text-deepInk border border-borderWarm text-xs font-bold rounded-xl transition-all"
            >
              <span>Explore OmniKart Specs</span>
              <Info className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3 (Creator & Verified Network - 6 cols) */}
          <div className="md:col-span-6 p-8 bg-studioCard border border-borderWarm rounded-3xl shadow-md hover:border-amberAccent/50 transition-all flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-11 h-11 bg-amberAccent/10 border border-amberAccent/30 text-amberAccent rounded-xl flex items-center justify-center">
                  <Radio className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-bold px-2.5 py-1 bg-amberAccent/10 text-amberAccent border border-amberAccent/30 rounded-md">
                  Creator Network
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-deepInk mb-1">
                Streaming &amp; Profiles
              </h3>
              <p className="text-sm text-muted mb-6">
                Direct verified handles for gaming streams, esports clips, personal social profile, and open-source code.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.commudle.com/users/Bijoylohar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-studioSubtle hover:bg-borderWarm border border-borderWarm rounded-xl text-xs font-bold text-deepInk transition-all group"
              >
                <div className="flex items-center gap-2 truncate">
                  <Globe className="w-4 h-4 text-amberAccent shrink-0" />
                  <span className="truncate">Commudle</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-amberAccent shrink-0" />
              </a>

              <a
                href="https://topmate.io/bijoy_lohar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-studioSubtle hover:bg-borderWarm border border-borderWarm rounded-xl text-xs font-bold text-deepInk transition-all group"
              >
                <div className="flex items-center gap-2 truncate">
                  <Globe className="w-4 h-4 text-amberAccent shrink-0" />
                  <span className="truncate">Topmate</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-amberAccent shrink-0" />
              </a>

              <a
                href="https://www.facebook.com/share/1C6e2W4cQr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-studioSubtle hover:bg-borderWarm border border-borderWarm rounded-xl text-xs font-bold text-deepInk transition-all group"
              >
                <div className="flex items-center gap-2 truncate">
                  <Facebook className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="truncate">Facebook</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-amberAccent shrink-0" />
              </a>

              <a
                href="https://github.com/loharbijoy2005-a11y"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-studioSubtle hover:bg-borderWarm border border-borderWarm rounded-xl text-xs font-bold text-deepInk transition-all group"
              >
                <div className="flex items-center gap-2 truncate">
                  <Github className="w-4 h-4 text-amberAccent shrink-0" />
                  <span className="truncate">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-amberAccent shrink-0" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* OmniKart Spec Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-studioCard border border-borderWarm rounded-3xl p-8 max-w-[500px] w-full shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-muted hover:text-amberAccent text-2xl font-bold"
            >
              &times;
            </button>
            <span className="font-mono text-xs font-bold text-amberAccent uppercase block mb-1">
              VENTURE SPECIFICATION
            </span>
            <h3 className="font-heading font-extrabold text-2xl text-deepInk mb-1">
              OmniKart Commerce Platform
            </h3>
            <p className="font-mono text-xs text-muted mb-4">
              Powered by Shadow Arrow Engine &bull; E-Commerce Showcase
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <Check className="w-4 h-4 text-amberAccent shrink-0 mt-0.5" />
                <span>Ultra-fast checkout pipeline with instant dynamic product search.</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <Check className="w-4 h-4 text-amberAccent shrink-0 mt-0.5" />
                <span>Real-time inventory tracking and order status WebSockets.</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <Check className="w-4 h-4 text-amberAccent shrink-0 mt-0.5" />
                <span>Mobile-first responsive commerce UI built for modern retail.</span>
              </li>
            </ul>
            <a
              href="https://www.shadowarrow.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-amberAccent text-studioCanvas text-xs font-extrabold rounded-xl shadow-md"
            >
              <span>Visit Venture Portal</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default BentoGrid;

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Laptop, Gamepad2, Rocket, ArrowUpRight, Sparkles } from "lucide-react";

interface PersonaOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  target: string;
}

const personas: PersonaOption[] = [
  {
    id: "architect",
    label: "Systems Architect",
    icon: <Laptop className="w-3.5 h-3.5" />,
    target: "#expedition",
  },
  {
    id: "gaming",
    label: "Gaming & Media",
    icon: <Gamepad2 className="w-3.5 h-3.5" />,
    target: "#creator-matrix",
  },
  {
    id: "ventures",
    label: "Ventures",
    icon: <Rocket className="w-3.5 h-3.5" />,
    target: "#expedition",
  },
];

export const Navbar: React.FC = () => {
  const [activePersona, setActivePersona] = useState<string>("architect");

  const handlePersonaToggle = (p: PersonaOption) => {
    setActivePersona(p.id);
    const element = document.querySelector(p.target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-2.5 left-0 right-0 z-50 flex justify-between items-center max-w-[1380px] mx-auto px-3 sm:px-6 md:px-8 pointer-events-none">
      
      {/* Left Animated Brand Identifier - Bijoy Lohar */}
      <div className="pointer-events-auto flex items-center gap-2">
        <motion.a 
          href="#hero-story" 
          initial={{ opacity: 0, x: -20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative group px-3.5 py-1.5 sm:px-4 sm:py-2 bg-studioCard/90 backdrop-blur-md border border-borderWarm hover:border-amberAccent text-deepInk font-mono text-[11px] sm:text-xs font-black rounded-full shadow-lg transition-all flex items-center gap-2 shrink-0 overflow-hidden"
        >
          {/* Glowing Animated Outer Border Effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-amberAccent/20 via-amber-400/30 to-amberAccent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
          
          {/* Animated Pulsing Amber Indicator */}
          <span className="relative z-10 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-amberAccent animate-ping absolute opacity-75" />
            <span className="w-2.5 h-2.5 rounded-full bg-amberAccent shadow-[0_0_10px_rgba(229,193,88,0.9)] relative" />
          </span>

          {/* Name Text */}
          <span className="relative z-10 font-heading font-black tracking-wide text-deepInk group-hover:text-amberAccent transition-colors">
            Bijoy Lohar
          </span>

          <Sparkles className="relative z-10 w-3 h-3 text-amberAccent opacity-70 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
        </motion.a>
      </div>

      {/* Center/Right Floating Dark Capsule Navbar & White CTA */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-auto flex items-center gap-2 sm:gap-3"
      >
        {/* Floating Dark Pill Capsule Navigation Bar */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-[#12151E]/90 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
          {personas.map((p) => {
            const isActive = activePersona === p.id;
            return (
              <button
                key={p.id}
                onClick={() => handlePersonaToggle(p)}
                className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive ? "text-amber-300 font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePersonaPillDark"
                    className="absolute inset-0 bg-amber-500/20 border border-amber-500/40 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{p.icon}</span>
                <span className="relative z-10">{p.label}</span>
              </button>
            );
          })}
          <a
            id="nav-biography-link"
            href="/biography"
            title="Read Official Encyclopedic Biography & Archival Documentation"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-amber-300 hover:text-white hover:bg-white/10 transition-all border border-amber-500/30"
          >
            <span>Biography</span>
            <ArrowUpRight className="w-3 h-3 text-amber-300" />
          </a>
        </div>

        {/* Clean White Pill Button CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-white hover:bg-amber-300 text-slate-950 text-[11px] sm:text-xs font-extrabold rounded-full transition-all shadow-lg hover:scale-105 shrink-0"
        >
          <span className="hidden sm:inline">Open Direct Comms</span>
          <span className="sm:hidden">Comms</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
        </a>
      </motion.header>

    </div>
  );
};

export default Navbar;

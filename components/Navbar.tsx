"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Laptop, Gamepad2, Rocket, ArrowUpRight } from "lucide-react";

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
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center md:justify-between items-center max-w-[1240px] mx-auto px-6 pointer-events-none">
      
      {/* Left Brand Identifier - Minimal Dark */}
      <div className="pointer-events-auto flex items-center gap-2">
        <a 
          href="#systems-philosophy" 
          className="px-3.5 py-1.5 bg-[#12151E]/90 backdrop-blur-md border border-white/10 text-white font-mono text-xs font-bold rounded-full shadow-lg hover:border-amber-400 transition-all flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Bijoy Lohar</span>
        </a>
      </div>

      {/* Center/Right Floating Sleek Dark Capsule Navbar & White CTA */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-auto flex items-center gap-3"
      >
        {/* Sleek Floating Dark Pill Capsule Navigation Bar */}
        <div className="flex items-center gap-1 p-1 bg-[#12151E]/90 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
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
        </div>

        {/* Clean White Pill Button CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-amber-300 text-slate-950 text-xs font-extrabold rounded-full transition-all shadow-lg hover:scale-105"
        >
          <span>Open Direct Comms</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
        </a>
      </motion.header>

    </div>
  );
};

export default Navbar;

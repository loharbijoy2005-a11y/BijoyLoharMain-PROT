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
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center justify-between gap-4 w-full max-w-[1040px] px-5 py-2.5 bg-studioCanvas/90 backdrop-blur-md border border-borderWarm rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.03)]"
      >
        {/* Left: Brand Identity */}
        <a href="#hero" className="font-mono text-xs font-bold tracking-wider text-deepInk hover:text-amberAccent transition-colors">
          BIJOY LOHAR — EST. 2005
        </a>

        {/* Center: Interactive Persona Toggle */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-studioSubtle border border-borderWarm rounded-full">
          {personas.map((p) => {
            const isActive = activePersona === p.id;
            return (
              <button
                key={p.id}
                onClick={() => handlePersonaToggle(p)}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isActive ? "text-deepInk font-semibold" : "text-slate-600 hover:text-deepInk"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePersonaPill"
                    className="absolute inset-0 bg-white border border-borderWarm shadow-sm rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{p.icon}</span>
                <span className="relative z-10">{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Direct Comms CTA */}
        <div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-deepInk hover:bg-amberAccent text-white text-xs font-semibold rounded-full transition-colors duration-200 shadow-sm"
          >
            <span>Open Direct Comms</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.header>
    </div>
  );
};

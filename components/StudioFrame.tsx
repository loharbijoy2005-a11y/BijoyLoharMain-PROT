"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Laptop, Gamepad2, User } from "lucide-react";

interface PhotoOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  type: "image" | "visual-lab" | "visual-gaming";
  src?: string;
  title: string;
  desc: string;
}

const photoOptions: PhotoOption[] = [
  {
    id: "portrait",
    label: "Portrait",
    icon: <User className="w-3.5 h-3.5" />,
    type: "image",
    src: "https://github.com/loharbijoy2005-a11y.png",
    title: "Bijoy Lohar",
    desc: "Founder & Systems Architect",
  },
  {
    id: "lab",
    label: "Lab Setup",
    icon: <Laptop className="w-3.5 h-3.5" />,
    type: "visual-lab",
    title: "LOQ Engineering Lab",
    desc: "System Architecture & High-Throughput Code",
  },
  {
    id: "gaming",
    label: "Gaming Hub",
    icon: <Gamepad2 className="w-3.5 h-3.5" />,
    type: "visual-gaming",
    title: "Arrow Gaming Studio",
    desc: "Digital Creator & Streaming Center",
  },
];

export const StudioFrame: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("portrait");
  const currentPhoto = photoOptions.find((p) => p.id === activeTab) || photoOptions[0];

  return (
    <div className="w-full max-w-[420px] mx-auto">
      {/* Studio Frame Card */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl border border-slate-200 bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col justify-between p-2">
        
        {/* Photo Container with Cross-Fade Opacity & Scale */}
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhoto.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full relative"
            >
              {currentPhoto.type === "image" ? (
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.title}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://ui-avatars.com/api/?name=Bijoy+Lohar&background=0f172a&color=fff&size=500";
                  }}
                />
              ) : currentPhoto.type === "visual-lab" ? (
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex flex-col items-center justify-center p-6 text-white text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4">
                    <Laptop className="w-8 h-8 text-sky-400" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-white mb-1">
                    {currentPhoto.title}
                  </h4>
                  <p className="text-xs font-mono text-slate-300 max-w-[240px]">
                    {currentPhoto.desc}
                  </p>
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-black flex flex-col items-center justify-center p-6 text-white text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4">
                    <Gamepad2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-white mb-1">
                    {currentPhoto.title}
                  </h4>
                  <p className="text-xs font-mono text-slate-300 max-w-[240px]">
                    {currentPhoto.desc}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Top-Right Badge Overlay */}
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900/80 backdrop-blur-md border border-white/15 text-white text-[11px] font-semibold rounded-full shadow-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Founder @ Shadow Arrow</span>
            </span>
          </div>

          {/* Bottom Gradient Label */}
          <div className="absolute bottom-0 inset-x-0 z-10 p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent text-white">
            <span className="block font-heading font-bold text-base leading-tight">
              {currentPhoto.title}
            </span>
            <span className="font-mono text-xs text-slate-300">
              {currentPhoto.desc}
            </span>
          </div>
        </div>

        {/* Minimal Photo Switcher Tabs */}
        <div className="pt-2 px-1 pb-1 flex items-center justify-between gap-1.5 bg-white">
          {photoOptions.map((opt) => {
            const isActive = activeTab === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setActiveTab(opt.id)}
                className={`flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-slate-900 text-white font-semibold shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {opt.icon}
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};

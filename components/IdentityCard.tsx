"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Laptop, Gamepad2, Sparkles, MapPin } from "lucide-react";

interface DockItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  type: "image" | "visual-lab" | "visual-stream" | "visual-moments";
  src?: string;
  title: string;
  tagline: string;
}

const dockPhotos: DockItem[] = [
  {
    id: "portrait",
    label: "Portrait",
    icon: <User className="w-4 h-4" />,
    type: "image",
    src: "https://github.com/loharbijoy2005-a11y.png",
    title: "Bijoy Lohar — Founder",
    tagline: "Systems Architect & Digital Creator",
  },
  {
    id: "lab",
    label: "Lenovo LOQ Lab",
    icon: <Laptop className="w-4 h-4" />,
    type: "visual-lab",
    title: "Lenovo LOQ Engineering Lab",
    tagline: "High-Throughput Software Architecture",
  },
  {
    id: "rig",
    label: "Streaming Rig",
    icon: <Gamepad2 className="w-4 h-4" />,
    type: "visual-stream",
    title: "Arrow Gaming Stream Studio",
    tagline: "Live Gameplay & Creator Broadcasting",
  },
  {
    id: "moments",
    label: "Moments",
    icon: <Sparkles className="w-4 h-4" />,
    type: "visual-moments",
    title: "Expedition & Milestones",
    tagline: "Bishnupur Headquarters, West Bengal",
  },
];

export const IdentityCard: React.FC = () => {
  const [activeDockId, setActiveDockId] = useState<string>("portrait");
  const currentPhoto = dockPhotos.find((p) => p.id === activeDockId) || dockPhotos[0];

  return (
    <div className="w-full max-w-[840px] mx-auto mt-10">
      {/* Bespoke Editorial Identity Frame */}
      <div className="relative w-full rounded-3xl border border-borderWarm bg-studioCard shadow-[0_20px_50px_rgba(9,9,11,0.04)] overflow-hidden p-3 md:p-4">
        
        {/* Main Display Area */}
        <div className="relative w-full h-[380px] md:h-[440px] rounded-2xl overflow-hidden bg-deepInk">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhoto.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full relative"
            >
              {currentPhoto.type === "image" ? (
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.title}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://ui-avatars.com/api/?name=Bijoy+Lohar&background=09090b&color=fff&size=600";
                  }}
                />
              ) : currentPhoto.type === "visual-lab" ? (
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-zinc-900 to-black p-8 flex flex-col justify-center items-center text-white text-center">
                  <div className="w-20 h-20 rounded-2xl bg-amberAccent/20 border border-amberAccent/40 flex items-center justify-center mb-4">
                    <Laptop className="w-10 h-10 text-amberAccent" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-2">{currentPhoto.title}</h3>
                  <p className="font-mono text-sm text-slate-300 max-w-[360px]">{currentPhoto.tagline}</p>
                </div>
              ) : currentPhoto.type === "visual-stream" ? (
                <div className="w-full h-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-amber-950 p-8 flex flex-col justify-center items-center text-white text-center">
                  <div className="w-20 h-20 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mb-4">
                    <Gamepad2 className="w-10 h-10 text-amber-400" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-2">{currentPhoto.title}</h3>
                  <p className="font-mono text-sm text-slate-300 max-w-[360px]">{currentPhoto.tagline}</p>
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900 p-8 flex flex-col justify-center items-center text-white text-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                    <Sparkles className="w-10 h-10 text-amberAccent" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-2">{currentPhoto.title}</h3>
                  <p className="font-mono text-sm text-slate-300 max-w-[360px]">{currentPhoto.tagline}</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Top-Left Live Coordinates */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 bg-deepInk/85 backdrop-blur-md border border-white/15 text-white font-mono text-[11px] rounded-full">
            <MapPin className="w-3.5 h-3.5 text-amberAccent" />
            <span>23.0758° N, 87.3228° E Bishnupur, WB</span>
          </div>

          {/* Top-Right Founder Overlay */}
          <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 bg-amberAccent text-deepInk font-bold font-mono text-xs rounded-full shadow-md">
            Founder @ Shadow Arrow
          </div>

          {/* Bottom Gradient Caption */}
          <div className="absolute bottom-0 inset-x-0 z-20 p-6 bg-gradient-to-t from-deepInk via-deepInk/60 to-transparent text-white">
            <h4 className="font-heading font-bold text-xl md:text-2xl leading-tight">
              {currentPhoto.title}
            </h4>
            <p className="font-mono text-xs text-amber-200/90 mt-1">
              {currentPhoto.tagline}
            </p>
          </div>
        </div>

        {/* Integrated Horizontal Floating Photo Dock */}
        <div className="mt-3 pt-3 border-t border-borderWarm flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          {dockPhotos.map((item) => {
            const isActive = activeDockId === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveDockId(item.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "bg-deepInk text-white font-semibold shadow-md border border-deepInk"
                    : "bg-studioSubtle hover:bg-borderWarm text-slate-700 border border-borderWarm"
                }`}
              >
                <span className={isActive ? "text-amberAccent" : "text-slate-500"}>
                  {item.icon}
                </span>
                <span className="truncate">{item.label}</span>
              </motion.button>
            );
          })}
        </div>

      </div>
    </div>
  );
};

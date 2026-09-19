"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Laptop, Gamepad2, MapPin, ShieldCheck, ShoppingCart } from "lucide-react";

interface MarqueeCardData {
  id: number;
  tag: string;
  title: string;
  type: "image" | "visual";
  src?: string;
  icon?: React.ReactNode;
  bgGradient?: string;
}

const marqueeItems: MarqueeCardData[] = [
  {
    id: 1,
    tag: "Bijoy Lohar",
    title: "Software Engineer & Founder",
    type: "image",
    src: "https://github.com/loharbijoy2005-a11y.png",
  },
  {
    id: 2,
    tag: "Workspace",
    title: "LOQ & System Architecture",
    type: "visual",
    icon: <Laptop className="w-8 h-8 text-white" />,
    bgGradient: "from-slate-800 to-slate-950",
  },
  {
    id: 3,
    tag: "Content & Streams",
    title: "Arrow Gaming & Stream Studio",
    type: "visual",
    icon: <Gamepad2 className="w-8 h-8 text-white" />,
    bgGradient: "from-zinc-900 to-zinc-950",
  },
  {
    id: 4,
    tag: "Location",
    title: "Bishnupur, West Bengal, India",
    type: "visual",
    icon: <MapPin className="w-8 h-8 text-white" />,
    bgGradient: "from-slate-700 to-slate-900",
  },
  {
    id: 5,
    tag: "Venture Studio",
    title: "Shadow Arrow Enterprise Architecture",
    type: "visual",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    bgGradient: "from-slate-900 to-black",
  },
  {
    id: 6,
    tag: "E-Commerce",
    title: "OmniKart High-Speed Platform",
    type: "visual",
    icon: <ShoppingCart className="w-8 h-8 text-white" />,
    bgGradient: "from-sky-700 to-sky-950",
  },
];

export const MomentsMarquee: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Combine items for seamless loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <section className="py-16 overflow-hidden relative">
      <div className="max-w-[1060px] mx-auto px-4 mb-8">
        <span className="font-mono text-[11px] font-semibold tracking-wider text-mutedText uppercase block mb-1">
          SCENE 04 / KINETIC LIFESTYLE MARQUEE
        </span>
        <h2 className="font-heading font-bold text-3xl text-charcoal tracking-tight">
          Infinite Photo Reel & Visual Log
        </h2>
      </div>

      {/* Marquee Container with Gradient Mask */}
      <div
        className="w-full overflow-hidden mask-gradient py-2"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: isPaused ? undefined : [0, -1035] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedItems.map((item, idx) => (
            <motion.div
              key={`${item.id}-${idx}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-[260px] h-[170px] rounded-2xl overflow-hidden border border-hairline bg-surface shadow-sm shrink-0 relative group cursor-pointer"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://ui-avatars.com/api/?name=Bijoy+Lohar&background=09090b&color=fff&size=400";
                  }}
                />
              ) : (
                <div
                  className={`w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br ${item.bgGradient} text-white group-hover:scale-105 transition-transform duration-300`}
                >
                  {item.icon}
                  <span className="font-mono text-xs font-semibold mt-2 text-slate-200">
                    {item.title}
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent flex flex-col justify-end p-4 text-white opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="font-mono text-[10px] text-sky-400 uppercase tracking-wider font-semibold">
                  {item.tag}
                </span>
                <span className="text-xs font-semibold leading-tight line-clamp-1">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

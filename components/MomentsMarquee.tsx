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
    title: "Systems Architect & Founder",
    type: "image",
    src: "https://github.com/loharbijoy2005-a11y.png",
  },
  {
    id: 2,
    tag: "Workspace",
    title: "LOQ & System Architecture",
    type: "visual",
    icon: <Laptop className="w-8 h-8 text-amberAccent" />,
    bgGradient: "from-[#1E1A12] to-[#12100B]",
  },
  {
    id: 3,
    tag: "Visual & Gaming",
    title: "Visual Computing & Gaming Media",
    type: "visual",
    icon: <Gamepad2 className="w-8 h-8 text-amberAccent" />,
    bgGradient: "from-[#231E14] to-[#12100B]",
  },
  {
    id: 4,
    tag: "Location",
    title: "Bishnupur, West Bengal, India",
    type: "visual",
    icon: <MapPin className="w-8 h-8 text-amberAccent" />,
    bgGradient: "from-[#1A1712] to-[#12100B]",
  },
  {
    id: 5,
    tag: "Venture Studio",
    title: "Shadow Arrow Enterprise Architecture",
    type: "visual",
    icon: <ShieldCheck className="w-8 h-8 text-amberAccent" />,
    bgGradient: "from-[#2A2312] to-[#12100B]",
  },
  {
    id: 6,
    tag: "E-Commerce",
    title: "OmniKart High-Speed Platform",
    type: "visual",
    icon: <ShoppingCart className="w-8 h-8 text-amberAccent" />,
    bgGradient: "from-[#1E1A12] to-[#12100B]",
  },
];

export const MomentsMarquee: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Combine items for seamless loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <section className="py-20 overflow-hidden relative bg-studioCanvas border-b border-borderWarm">
      <div className="max-w-[1060px] mx-auto px-4 mb-8 text-left border-l-2 border-amberAccent pl-5">
        <span className="font-mono text-xs font-bold text-amberAccent uppercase tracking-widest block mb-1">
          06 / KINETIC LIFESTYLE MARQUEE
        </span>
        <h2 className="font-heading font-extrabold text-3xl text-deepInk tracking-tight">
          Infinite Photo Reel &amp; Visual Log
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
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.2 }}
              className="w-[270px] h-[180px] rounded-3xl overflow-hidden border border-borderWarm bg-studioCard shadow-md shrink-0 relative group cursor-pointer hover:border-amberAccent"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/hero-portrait.jpg";
                  }}
                />
              ) : (
                <div
                  className={`w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br ${item.bgGradient} text-deepInk group-hover:scale-105 transition-transform duration-300`}
                >
                  {item.icon}
                  <span className="font-mono text-xs font-bold mt-2 text-deepInk text-center">
                    {item.title}
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-studioCanvas via-studioCanvas/40 to-transparent flex flex-col justify-end p-4 text-deepInk opacity-95 group-hover:opacity-100 transition-opacity">
                <span className="font-mono text-[10px] text-amberAccent uppercase tracking-widest font-bold">
                  {item.tag}
                </span>
                <span className="text-xs font-bold leading-tight line-clamp-1 text-deepInk">
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

export default MomentsMarquee;

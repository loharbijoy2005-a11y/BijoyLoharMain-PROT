"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Gamepad2, Sparkles, MousePointer } from "lucide-react";

interface PhotoCard {
  id: number;
  title: string;
  subtitle: string;
  type: "image" | "visual-lab" | "visual-stream";
  src?: string;
  icon?: React.ReactNode;
  bgGradient?: string;
}

const cardsData: PhotoCard[] = [
  {
    id: 0,
    title: "Bijoy Lohar — Founder",
    subtitle: "Founder & Systems Architect",
    type: "image",
    src: "https://github.com/loharbijoy2005-a11y.png",
  },
  {
    id: 1,
    title: "Engineering Lab",
    subtitle: "LOQ & Code Workspace",
    type: "visual-lab",
    icon: <Laptop className="w-8 h-8 text-white" />,
    bgGradient: "from-slate-800 to-slate-950",
  },
  {
    id: 2,
    title: "Arrow Gaming Hub",
    subtitle: "Stream & Creator Studio",
    type: "visual-stream",
    icon: <Gamepad2 className="w-8 h-8 text-white" />,
    bgGradient: "from-zinc-900 to-zinc-950",
  },
];

export const PhotoDeck: React.FC = () => {
  const [deck, setDeck] = useState<PhotoCard[]>(cardsData);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = (clickedId: number) => {
    setDeck((prevDeck) => {
      const clickedCardIndex = prevDeck.findIndex((c) => c.id === clickedId);
      if (clickedCardIndex === 0) return prevDeck; // Already in front
      const newDeck = [...prevDeck];
      const [movedCard] = newDeck.splice(clickedCardIndex, 1);
      newDeck.unshift(movedCard);
      return newDeck;
    });
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <div
        className="relative w-[340px] h-[170px] cursor-pointer perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {deck.map((card, index) => {
            // Determine relative position offset in stack (0 = Front Spotlight, 1 = Back Right, 2 = Back Left)
            let rotateAngle = 0;
            let translateX = 0;
            let translateY = 0;
            let scale = 1;
            let zIndex = 3 - index;

            if (index === 0) {
              rotateAngle = 0;
              translateX = 0;
              translateY = isHovered ? -10 : 0;
              scale = isHovered ? 1.05 : 1;
            } else if (index === 1) {
              rotateAngle = isHovered ? 14 : 7;
              translateX = isHovered ? 95 : 45;
              scale = isHovered ? 0.96 : 0.92;
            } else if (index === 2) {
              rotateAngle = isHovered ? -14 : -7;
              translateX = isHovered ? -95 : -45;
              scale = isHovered ? 0.96 : 0.92;
            }

            return (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  x: translateX,
                  y: translateY,
                  rotate: rotateAngle,
                  scale: scale,
                  zIndex: zIndex,
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                onClick={() => handleCardClick(card.id)}
                className="absolute top-0 left-1/2 -ml-[67.5px] w-[135px] h-[155px] rounded-[22px] border border-hairline bg-surface shadow-xl overflow-hidden transform-gpu select-none"
                style={{ transformOrigin: "bottom center" }}
              >
                <div className="relative w-full h-full flex flex-col justify-between">
                  {card.type === "image" ? (
                    <img
                      src={card.src}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://ui-avatars.com/api/?name=Bijoy+Lohar&background=09090b&color=fff&size=400";
                      }}
                    />
                  ) : (
                    <div
                      className={`w-full h-full flex flex-col items-center justify-center p-3 bg-gradient-to-br ${card.bgGradient} text-white`}
                    >
                      {card.icon}
                      <span className="text-[10px] font-mono mt-1 font-semibold text-slate-300">
                        {card.title}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="absolute bottom-0 inset-x-0 bg-charcoal/90 backdrop-blur-sm text-white text-[10px] font-semibold py-1 px-2 text-center truncate">
                    {card.title}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-1.5 text-xs font-mono text-mutedText mt-2">
        <MousePointer className="w-3.5 h-3.5" />
        <span>Hover to fan-out photos • Click any card to cycle spotlight</span>
      </div>
    </div>
  );
};

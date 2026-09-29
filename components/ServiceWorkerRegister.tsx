"use client";

import React, { useEffect, useState } from "react";
import { Cpu, ShieldCheck, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ServiceWorkerRegister: React.FC = () => {
  const [isOffline, setIsOffline] = useState<boolean>(false);

  useEffect(() => {
    // Register Service Worker immediately
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      const registerSW = () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => {
            console.log("Shadow Arrow Engine SW active:", reg.scope);
          })
          .catch((err) => {
            console.warn("SW Registration:", err);
          });
      };

      if (document.readyState === "complete") {
        registerSW();
      } else {
        window.addEventListener("load", registerSW);
      }
    }

    // Monitor Online/Offline Status
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    if (typeof navigator !== "undefined" && !navigator.onLine) {
      setIsOffline(true);
    }

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOffline && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.92 }}
          transition={{ type: "spring", damping: 22, stiffness: 260 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3.5 p-4 bg-[#0D0B07]/95 text-[#E6E1D3] backdrop-blur-2xl rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(229,193,88,0.25)] border border-amberAccent/40 font-mono"
        >
          {/* Glowing Engine Icon Module */}
          <div className="relative p-2.5 bg-amberAccent/10 border border-amberAccent/30 rounded-xl flex items-center justify-center shrink-0">
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amberAccent rounded-full animate-ping opacity-75" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amberAccent rounded-full shadow-[0_0_8px_#E5C158]" />
            <Cpu className="w-5 h-5 text-amberAccent" />
          </div>

          {/* Engine Status Info */}
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-xs text-amberAccent uppercase tracking-widest block">
                Shadow Arrow Engine Active
              </span>
              <span className="px-1.5 py-0.2 bg-amberAccent/15 text-amberAccent text-[9px] font-bold uppercase rounded border border-amberAccent/30">
                Offline Node
              </span>
            </div>
            <p className="text-[11px] text-[#C4BDAF] font-normal leading-tight">
              Autonomous Local Edge Cache • Zero-Network Mode
            </p>
          </div>

          {/* Shield Stealth Tag */}
          <div className="ml-2 pl-3 border-l border-amberAccent/20 flex flex-col items-end justify-center text-[10px] uppercase font-bold text-amberAccent">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-mono">100% Armed</span>
            </div>
            <span className="text-[9px] text-[#9E9785] tracking-wider font-normal mt-0.5">Edge PWA</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceWorkerRegister;

"use client";

import React, { useEffect, useState } from "react";
import { Cpu, ShieldCheck, Activity } from "lucide-react";
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
            console.log("Shadow Arrow SW active:", reg.scope);
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
          className="fixed bottom-6 right-6 z-50 flex items-center gap-4 p-4 bg-[#0A0906]/95 text-[#E6E1D3] backdrop-blur-2xl rounded-2xl shadow-[0_12px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(229,193,88,0.3)] border border-amberAccent/50 font-mono select-none"
        >
          {/* Glowing Cyber Engine Core */}
          <div className="relative p-3 bg-gradient-to-br from-amberAccent/20 to-amber-900/40 border border-amberAccent/60 rounded-xl flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(229,193,88,0.2)]">
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amberAccent rounded-full animate-ping opacity-80" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amberAccent rounded-full shadow-[0_0_10px_#E5C158]" />
            <Cpu className="w-5 h-5 text-amberAccent" />
          </div>

          {/* High-Tech Stealth Labels */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-xs text-amberAccent uppercase tracking-[0.2em] block drop-shadow-[0_0_8px_rgba(229,193,88,0.4)]">
                SHADOW ARROW ENGINE
              </span>
              <span className="px-2 py-0.5 bg-amberAccent/20 text-amberAccent text-[9px] font-mono font-extrabold uppercase tracking-widest rounded border border-amberAccent/40 shadow-sm">
                AUTONOMOUS NODE
              </span>
            </div>
            <p className="text-[11px] text-[#D4CEBF] font-mono tracking-wide leading-tight">
              Independent Computational State • Zero-Latency Vault
            </p>
          </div>

          {/* Stealth System Status Badge */}
          <div className="ml-2 pl-3.5 border-l border-amberAccent/30 flex flex-col items-end justify-center">
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded-md">
              <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-mono text-[10px] font-extrabold tracking-widest uppercase">
                100% ARMED
              </span>
            </div>
            <span className="text-[9px] text-amberAccent/70 tracking-[0.18em] uppercase font-mono mt-1">
              SYSTEM ONLINE
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceWorkerRegister;

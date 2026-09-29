"use client";

import React, { useEffect, useState } from "react";
import { WifiOff, Zap } from "lucide-react";
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
            console.log("ServiceWorker registered successfully:", reg.scope);
          })
          .catch((err) => {
            console.warn("ServiceWorker registration error:", err);
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
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-amberAccent text-studioCanvas backdrop-blur-md rounded-2xl shadow-2xl border border-amberLight font-mono text-xs font-bold"
        >
          <div className="p-1.5 bg-black/20 rounded-xl">
            <WifiOff className="w-4 h-4 text-studioCanvas animate-pulse" />
          </div>
          <div>
            <span className="block font-heading font-extrabold text-xs uppercase tracking-wider">
              Offline Mode Active
            </span>
            <span className="text-[11px] opacity-90 font-normal">
              Cached Portfolio • Browsing Without Internet
            </span>
          </div>
          <div className="ml-2 pl-2 border-l border-black/20 flex items-center gap-1 text-[10px] uppercase tracking-widest bg-black/10 px-2 py-1 rounded-lg">
            <Zap className="w-3 h-3 text-studioCanvas" />
            <span>PWA Live</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceWorkerRegister;

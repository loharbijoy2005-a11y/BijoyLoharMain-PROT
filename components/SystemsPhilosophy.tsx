"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { RefreshCw, Play, Pause } from "lucide-react";

const STAGES = [
  { id: 1, name: "Demand Creation & Edge Ingestion", desc: "Capturing high-velocity user traffic at global edge endpoints." },
  { id: 2, name: "Helping & Security Filtering", desc: "Zero-Trust authentication barrier and rate limiting." },
  { id: 3, name: "Trust Creation & Micro-Services", desc: "High-throughput serverless worker execution core." },
  { id: 4, name: "Presentation & Event Streaming", desc: "Pub/Sub event matrix broadcasting real-time state." },
  { id: 5, name: "Conversion & High-Throughput Scale", desc: "Resilient ACID data store and automatic scaling." },
];

export const SystemsPhilosophy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position over section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 30%"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  const [currentStageIdx, setCurrentStageIdx] = useState<number>(0);
  const [manualOverride, setManualOverride] = useState<boolean>(false);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  // Update current stage index on scroll unless manual mode is selected
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      if (!manualOverride) {
        const stage = Math.min(4, Math.floor(v * 5));
        setCurrentStageIdx(stage);
      }
    });
    return () => unsubscribe();
  }, [smoothProgress, manualOverride]);

  // Auto-play cycler if toggled
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay && manualOverride) {
      interval = setInterval(() => {
        setCurrentStageIdx((prev) => (prev + 1) % 5);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, manualOverride]);

  const activeStage = STAGES[currentStageIdx];
  const progressRatio = (currentStageIdx + 1) / 5;

  return (
    <section
      ref={containerRef}
      className="py-24 px-4 md:px-8 max-w-[1180px] mx-auto min-h-[90vh] flex items-center justify-center relative overflow-hidden"
      id="systems-philosophy"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

        {/* Left Column: Big Impact Typography (Exact Copy & Style matching user's photo) */}
        <div className="lg:col-span-6 space-y-8 text-left">
          
          <div className="space-y-4">
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-400 leading-[1.12] tracking-tight">
              Sales is the water. <br />
              <span className="text-deepInk font-black block mt-1">
                Marketing is the pipeline.
              </span>
            </h2>

            <p className="font-heading font-bold text-2xl sm:text-3xl text-slate-500 leading-snug">
              You build it, piece by piece.
            </p>

            <p className="font-heading font-black text-3xl sm:text-4xl text-deepInk leading-tight pt-2">
              Build it right, and sales will flow automatically.
            </p>
          </div>

          {/* Author Name */}
          <div className="pt-6 border-t border-borderWarm flex items-center justify-between">
            <div>
              <span className="font-heading font-extrabold text-2xl text-deepInk block">
                Bijoy Lohar
              </span>
              <span className="font-mono text-xs text-amber-700 font-bold uppercase tracking-wider">
                Founder Shadow Arrow &bull; Systems Architect
              </span>
            </div>
          </div>

        </div>

        {/* Right Column: Exact Pipeline & Funnel Box (Matching User's Photo #2) */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 bg-[#0D111A] border border-amber-500/25 rounded-[32px] shadow-[0_0_60px_rgba(245,158,11,0.14)] text-white relative overflow-hidden"
          >
            
            {/* Top Labels along upper pipe route */}
            <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 mb-2 px-4">
              <span className={currentStageIdx >= 0 ? "text-amber-400 font-extrabold" : ""}>
                Demand Creation
              </span>
              <span className={currentStageIdx >= 1 ? "text-amber-400 font-extrabold" : ""}>
                Helping
              </span>
            </div>

            {/* Sub-label under top pipe */}
            <div className="text-center font-mono text-[11px] text-slate-500 mb-2">
              Your marketing pipeline
            </div>

            {/* Pipeline SVG Graphic Path with Animated Liquid Fill */}
            <div className="relative w-full h-[260px] my-2">
              <svg
                className="w-full h-full"
                viewBox="0 0 440 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Pipe Shadow/Background Track */}
                <path
                  d="M 50 35 H 390 V 125 H 170 V 175"
                  stroke="#1E293B"
                  strokeWidth="32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Inner Pipe Track */}
                <path
                  d="M 50 35 H 390 V 125 H 170 V 175"
                  stroke="#0F172A"
                  strokeWidth="24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Glowing Gold Liquid Pipeline Path */}
                <motion.path
                  d="M 50 35 H 390 V 125 H 170 V 175"
                  stroke="url(#goldPipelineGradient)"
                  strokeWidth="18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0.2 }}
                  animate={{ pathLength: Math.max(0.15, progressRatio) }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {/* Animated Gold Capsule/Pulsing Liquid Ball moving inside pipe */}
                <motion.circle
                  r="9"
                  fill="#FFF"
                  filter="drop-shadow(0px 0px 8px #F59E0B)"
                  animate={{
                    cx: currentStageIdx === 0 ? 80 : currentStageIdx === 1 ? 380 : currentStageIdx === 2 ? 300 : 170,
                    cy: currentStageIdx === 0 ? 35 : currentStageIdx === 1 ? 70 : currentStageIdx === 2 ? 125 : 175,
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />

                {/* Funnel / Bucket Shape at Bottom */}
                <path
                  d="M 110 175 L 230 175 L 205 245 H 135 Z"
                  stroke="#334155"
                  strokeWidth="4"
                  fill="#0B0F19"
                />

                {/* Liquid Level inside Funnel Bucket */}
                <motion.path
                  d="M 110 175 L 230 175 L 205 245 H 135 Z"
                  fill="url(#goldPipelineGradient)"
                  initial={{ opacity: 0.3 }}
                  animate={{
                    opacity: currentStageIdx >= 3 ? 0.95 : 0.3,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Text inside Funnel Bucket */}
                <text
                  x="170"
                  y="218"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="15"
                  fontWeight="900"
                  fontFamily="sans-serif"
                  letterSpacing="1"
                >
                  Sales
                </text>

                <defs>
                  <linearGradient id="goldPipelineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="50%" stopColor="#FBBF24" />
                    <stop offset="100%" stopColor="#D97706" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Middle Labels along second pipe segment */}
              <div className="absolute top-[102px] left-6 right-6 flex items-center justify-between text-xs font-mono font-bold text-slate-400 pointer-events-none px-2">
                <span className={currentStageIdx >= 4 ? "text-amber-400 font-extrabold" : ""}>
                  Conversion
                </span>
                <span className={currentStageIdx >= 3 ? "text-amber-400 font-extrabold" : ""}>
                  Presentation
                </span>
                <span className={currentStageIdx >= 2 ? "text-amber-400 font-extrabold" : ""}>
                  Trust Creation
                </span>
              </div>
            </div>

            {/* Bottom Card Control Bar (Matching Photo: "Building: Demand Creation" & "0 of 5 built") */}
            <div className="mt-4 pt-5 border-t border-amber-500/20 flex flex-wrap items-center justify-between text-xs font-mono text-slate-300 gap-3">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Building:</span>
                <span className="font-extrabold text-amber-300">{activeStage.name}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setManualOverride(true);
                    setCurrentStageIdx((prev) => (prev + 1) % 5);
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 font-bold transition-all"
                >
                  {currentStageIdx} of 5 built
                </button>

                <button
                  onClick={() => {
                    setManualOverride(true);
                    setIsAutoPlay(!isAutoPlay);
                  }}
                  title="Toggle Auto Flow"
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 text-amber-400 rounded-lg transition-colors"
                >
                  {isAutoPlay && manualOverride ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default SystemsPhilosophy;

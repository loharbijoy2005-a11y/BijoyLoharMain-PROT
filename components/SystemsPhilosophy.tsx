"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Activity, 
  ArrowRight, 
  Play, 
  RotateCcw, 
  CheckCircle,
  Sparkles
} from "lucide-react";

interface PipelineStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: React.ElementType;
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: 1,
    title: "Demand & Traffic Ingestion",
    subtitle: "Global Edge Anycast Network",
    description: "Captures multi-region user requests with sub-15ms edge routing, DDoS filtering, and dynamic load distribution.",
    metric: "< 14ms",
    metricLabel: "Global Edge Latency",
    icon: Zap,
  },
  {
    id: 2,
    title: "Zero-Trust Security Barrier",
    subtitle: "Real-Time WAF & Auth Validation",
    description: "Validates HMAC/JWT tokens at the edge before any downstream micro-service resources are allocated.",
    metric: "100%",
    metricLabel: "Inspected Requests",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "High-Throughput API Engine",
    subtitle: "Distributed Serverless Workers",
    description: "Executes core computational logic in lightweight worker runtimes with automatic horizontal scaling.",
    metric: "50k+",
    metricLabel: "Req/Sec Capacity",
    icon: Cpu,
  },
  {
    id: 4,
    title: "Real-Time Event Streaming",
    subtitle: "Pub/Sub Messaging Backbone",
    description: "Broadcasts asynchronous events to WebSocket channels and background job queues with zero data loss.",
    metric: "99.999%",
    metricLabel: "Message Reliability",
    icon: Activity,
  },
  {
    id: 5,
    title: "Resilient Multi-Region Store",
    subtitle: "Distributed ACID Data Tier",
    description: "Ensures transactional consistency, automated failover, and global read-replica synchronization.",
    metric: "0ms",
    metricLabel: "Data Loss Target",
    icon: Database,
  },
];

export const SystemsPhilosophy: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoSimulating, setIsAutoSimulating] = useState<boolean>(false);

  // Auto-simulation step cycler
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoSimulating) {
      timer = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % PIPELINE_STEPS.length);
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [isAutoSimulating]);

  const currentStage = PIPELINE_STEPS[activeStep];

  return (
    <section className="py-24 px-4 md:px-8 max-w-[1140px] mx-auto relative overflow-hidden" id="systems-philosophy">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: High-Impact Typography & Narrative */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          {/* Top Audience Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amberLight/80 border border-amberAccent/30 text-amber-900 rounded-full font-mono text-xs font-bold shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amberAccent" />
            <span>FOR FOUNDERS, SCALE-UPS &amp; SYSTEMS LEADERS</span>
          </motion.div>

          {/* Big Bold Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-deepInk tracking-tight leading-[1.1]"
          >
            Stop chasing code clutter. <br />
            <span className="bg-gradient-to-r from-amberAccent via-amber-600 to-amber-700 bg-clip-text text-transparent">
              Start architecting resilience.
            </span>
          </motion.h2>

          {/* Statement Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="font-heading font-semibold text-lg md:text-xl text-slate-800">
              Code is the water. <strong className="text-amberAccent font-bold">Systems architecture is the pipeline.</strong>
            </p>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Most projects have great effort and raw hustle, but still break under real-world scale or concurrency spikes. 
              <span className="block mt-2 font-medium text-slate-800">
                The problem isn&apos;t your effort—it&apos;s your architecture pipeline. I engineer systems to withstand scale effortlessly.
              </span>
            </p>
          </motion.div>

          {/* Author / Founder Signature Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 flex items-center justify-between border-t border-borderWarm"
          >
            <div>
              <span className="block font-heading font-extrabold text-lg text-deepInk">Bijoy Lohar</span>
              <span className="font-mono text-xs text-amber-700 font-bold uppercase tracking-wider">
                Founder Shadow Arrow &bull; Systems Architect
              </span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-deepInk hover:bg-amberAccent text-white text-xs font-bold rounded-2xl shadow-md transition-all group"
            >
              <span>Explore Architecture Blueprint</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>

        {/* Right Column: 10x Interactive Systems Pipeline Simulator */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-8 bg-[#0C1017] border border-amber-500/30 rounded-3xl shadow-[0_0_50px_rgba(245,158,11,0.12)] text-white relative overflow-hidden"
          >
            {/* Simulator Header */}
            <div className="flex items-center justify-between pb-5 border-b border-amber-500/20 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Interactive Architecture Pipeline
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAutoSimulating(!isAutoSimulating)}
                  className={`px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                    isAutoSimulating
                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                      : "bg-slate-800 text-slate-300 border border-slate-700 hover:text-white"
                  }`}
                >
                  <Play className={`w-3 h-3 ${isAutoSimulating ? "animate-spin text-amber-400" : ""}`} />
                  <span>{isAutoSimulating ? "Auto Simulating..." : "Auto Run"}</span>
                </button>

                <button
                  onClick={() => {
                    setActiveStep(0);
                    setIsAutoSimulating(false);
                  }}
                  title="Reset Simulation"
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-full transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Interactive Stage Step Chips */}
            <div className="grid grid-cols-5 gap-2 mb-6">
              {PIPELINE_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPassed = activeStep > idx;

                return (
                  <button
                    key={step.id}
                    onClick={() => {
                      setActiveStep(idx);
                      setIsAutoSimulating(false);
                    }}
                    className={`relative p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center ${
                      isActive
                        ? "bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                        : isPassed
                        ? "bg-amber-500/5 border-amber-500/30 text-amber-400/80"
                        : "bg-slate-900/60 border-slate-800 text-slate-500 hover:border-slate-700"
                    }`}
                  >
                    <span className="font-mono text-[10px] font-bold block mb-1">
                      0{step.id}
                    </span>
                    {isPassed ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <step.icon className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-slate-400"}`} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Visual Animated Flow Track */}
            <div className="relative w-full h-3 bg-slate-900 rounded-full overflow-hidden mb-6 border border-slate-800">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 rounded-full"
                animate={{ width: `${((activeStep + 1) / PIPELINE_STEPS.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="absolute top-0 bottom-0 w-8 bg-white/40 blur-sm rounded-full"
                animate={{ left: `${(activeStep / (PIPELINE_STEPS.length - 1)) * 80}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Active Stage Details Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStage.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="p-5 bg-[#121824] border border-amber-500/20 rounded-2xl space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                      <currentStage.icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                        STAGE 0{currentStage.id} &bull; {currentStage.subtitle}
                      </span>
                      <h4 className="font-heading font-extrabold text-lg text-white">
                        {currentStage.title}
                      </h4>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-mono text-lg font-extrabold text-amber-300 block">
                      {currentStage.metric}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">
                      {currentStage.metricLabel}
                    </span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                  {currentStage.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Stage Progress Counter Footer */}
            <div className="mt-5 pt-4 border-t border-amber-500/15 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Pipeline Node: <strong className="text-amber-300">{activeStep + 1} of {PIPELINE_STEPS.length}</strong></span>
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % PIPELINE_STEPS.length)}
                className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 transition-colors"
              >
                <span>Next Pipeline Node</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default SystemsPhilosophy;

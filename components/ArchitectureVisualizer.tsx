"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Zap, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  Info,
  X
} from "lucide-react";

interface ArchNode {
  id: string;
  name: string;
  role: string;
  subtext: string;
  tech: string[];
  latency: string;
  status: "ONLINE" | "OPTIMAL" | "HEALTHY";
  metrics: { label: string; value: string }[];
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ARCH_NODES: ArchNode[] = [
  {
    id: "client",
    name: "User / Edge Client",
    role: "Global Request Origin",
    subtext: "HTTPS / WSS Mobile & Web Client",
    tech: ["Next.js Hydration", "Service Worker", "TailwindCSS"],
    latency: "4ms",
    status: "ONLINE",
    metrics: [
      { label: "TTFB", value: "< 45ms" },
      { label: "Core Web Vitals", value: "99/100" }
    ],
    description: "Distributed client browser session handling UI rendering, optimistic state updates, and real-time WebSocket events.",
    icon: Globe
  },
  {
    id: "edge",
    name: "Cloudflare Edge CDN",
    role: "Anycast Global Network",
    subtext: "DDoS Mitigation & SSL Termination",
    tech: ["Cloudflare Workers", "TLS 1.3", "Smart Routing"],
    latency: "12ms",
    status: "OPTIMAL",
    metrics: [
      { label: "Cache Hit Ratio", value: "98.4%" },
      { label: "Threats Blocked", value: "100%" }
    ],
    description: "Global Anycast edge layer inspecting packets, serving static assets from edge caches, and tunneling requests to backend routes.",
    icon: ShieldCheck
  },
  {
    id: "ssr",
    name: "Next.js SSR Engine",
    role: "Distributed Node Runtime",
    subtext: "App Router & Server Actions",
    tech: ["Node.js 20", "Vercel Edge API", "Streaming React"],
    latency: "28ms",
    status: "HEALTHY",
    metrics: [
      { label: "Server Response", value: "18ms" },
      { label: "Worker Threads", value: "Active" }
    ],
    description: "High-performance server runtime generating dynamic HTML streams, processing GraphQL/REST APIs, and enforcing zero-trust auth.",
    icon: Cpu
  },
  {
    id: "db",
    name: "Supabase & Postgres DB",
    role: "Distributed Persistence",
    subtext: "Relational DB & Realtime Subscriptions",
    tech: ["PostgreSQL 16", "pgvector", "Redis Cache"],
    latency: "16ms",
    status: "OPTIMAL",
    metrics: [
      { label: "Query Time", value: "< 2ms" },
      { label: "Conn Pool", value: "100% Healthy" }
    ],
    description: "Primary transactional cluster with row-level security policies, vector indexing for search, and instant WebSocket notifications.",
    icon: Database
  }
];

interface ArchitectureVisualizerProps {
  isOpen?: boolean;
  onClose?: () => void;
  isModal?: boolean;
}

export function ArchitectureVisualizer({ isOpen = true, onClose, isModal = false }: ArchitectureVisualizerProps) {
  const [activeNodeId, setActiveNodeId] = useState<string>("ssr");
  const [trafficMode, setTrafficMode] = useState<"NORMAL" | "PEAK" | "SIMULATION">("NORMAL");
  const [packetCount, setPacketCount] = useState<number>(1420);
  const [simulatedPing, setSimulatedPing] = useState<number>(18);

  const activeNode = ARCH_NODES.find((n) => n.id === activeNodeId) || ARCH_NODES[2];

  // Dynamic packet ticker simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setPacketCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
      if (trafficMode === "PEAK") {
        setSimulatedPing(Math.floor(Math.random() * 12) + 24);
      } else {
        setSimulatedPing(Math.floor(Math.random() * 6) + 14);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [trafficMode]);

  // Handle Escape Key Close
  useEffect(() => {
    if (!isModal || !isOpen || !onClose) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModal, isOpen, onClose]);

  if (isModal && !isOpen) return null;

  const content = (
    <div className="relative py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-[#FCF9F2]">
      {/* Background Frame */}
      <div className="absolute inset-0 bg-[#12100B]/95 backdrop-blur-2xl rounded-3xl border border-[#E5C158]/30 shadow-[0_0_80px_rgba(229,193,88,0.15)] -z-10" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 border-b border-[#E5C158]/20 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 text-[#E5C158] text-xs font-mono tracking-wider uppercase mb-3">
            <Activity className="w-3.5 h-3.5 animate-pulse text-[#E5C158]" />
            SHADOW ARROW OS • LIVE TOPOLOGY INSPECTOR
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#FCF9F2]">
            End-to-End <span className="text-[#E5C158]">Distributed Architecture</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#D4CEBF] max-w-2xl leading-relaxed">
            Live system topology mapping real request lifecycles from Edge CDN routers down to serverless worker nodes and PostgreSQL databases.
          </p>
        </div>

        {/* Modal Controls & Traffic Switcher */}
        <div className="flex items-center gap-3">
          <div className="flex flex-wrap items-center gap-1.5 bg-[#1A1712] p-1.5 rounded-xl border border-[#E5C158]/20">
            <button
              onClick={() => setTrafficMode("NORMAL")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                trafficMode === "NORMAL"
                  ? "bg-[#E5C158] text-[#12100B] font-bold shadow-md shadow-[#E5C158]/20"
                  : "text-[#D4CEBF] hover:text-[#FCF9F2] hover:bg-white/5"
              }`}
            >
              Normal Flow
            </button>
            <button
              onClick={() => setTrafficMode("PEAK")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                trafficMode === "PEAK"
                  ? "bg-amber-500 text-[#12100B] font-bold shadow-md shadow-amber-500/20"
                  : "text-[#D4CEBF] hover:text-[#FCF9F2] hover:bg-white/5"
              }`}
            >
              Peak Load
            </button>
            <button
              onClick={() => setTrafficMode("SIMULATION")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                trafficMode === "SIMULATION"
                  ? "bg-[#FCF9F2] text-[#12100B] font-bold shadow-md shadow-white/20"
                  : "text-[#D4CEBF] hover:text-[#FCF9F2] hover:bg-white/5"
              }`}
            >
              Trace Packet
            </button>
          </div>

          {/* Close Button for Modal */}
          {isModal && onClose && (
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-[#1A1712] border border-[#E5C158]/30 text-[#D4CEBF] hover:text-[#E5C158] hover:border-[#E5C158] transition-all"
              title="Close System Visualizer (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Live Operational Metrics Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <div className="bg-[#1A1712]/90 border border-[#E5C158]/15 rounded-xl p-3">
          <div className="text-[11px] text-[#D4CEBF]/80 font-mono">Global Edge RTT</div>
          <div className="text-lg font-bold font-mono text-[#E5C158] flex items-center gap-1.5 mt-0.5">
            {simulatedPing} ms
            <span className="text-[9px] px-1 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-sans">
              Low Latency
            </span>
          </div>
        </div>
        <div className="bg-[#1A1712]/90 border border-[#E5C158]/15 rounded-xl p-3">
          <div className="text-[11px] text-[#D4CEBF]/80 font-mono">Processed Packets</div>
          <div className="text-lg font-bold font-mono text-[#FCF9F2] mt-0.5">
            {packetCount.toLocaleString()} req/m
          </div>
        </div>
        <div className="bg-[#1A1712]/90 border border-[#E5C158]/15 rounded-xl p-3">
          <div className="text-[11px] text-[#D4CEBF]/80 font-mono">Pipeline Status</div>
          <div className="text-lg font-bold font-mono text-emerald-400 flex items-center gap-1 mt-0.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Operational
          </div>
        </div>
        <div className="bg-[#1A1712]/90 border border-[#E5C158]/15 rounded-xl p-3">
          <div className="text-[11px] text-[#D4CEBF]/80 font-mono">Security Tunnel</div>
          <div className="text-lg font-bold font-mono text-[#FCF9F2] flex items-center gap-1 mt-0.5">
            <Zap className="w-3.5 h-3.5 text-[#E5C158]" /> TLS 1.3
          </div>
        </div>
      </div>

      {/* Main Visualizer Diagram Grid */}
      <div className="relative mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
          {ARCH_NODES.map((node, index) => {
            const Icon = node.icon;
            const isActive = activeNodeId === node.id;

            return (
              <div key={node.id} className="relative group">
                {index < ARCH_NODES.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 translate-x-1/2 z-20 pointer-events-none">
                    <div className="relative flex items-center justify-center">
                      <div className="w-6 h-0.5 bg-[#E5C158]/40" />
                      <div className="w-2 h-2 rounded-full bg-[#E5C158] animate-ping absolute" />
                      <ArrowRight className="w-3.5 h-3.5 text-[#E5C158] -ml-1" />
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setActiveNodeId(node.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden h-full flex flex-col justify-between ${
                    isActive
                      ? "bg-[#1A1712] border-[#E5C158] shadow-[0_0_25px_rgba(229,193,88,0.25)] scale-[1.02]"
                      : "bg-[#16130E]/90 border-[#E5C158]/20 hover:border-[#E5C158]/50 hover:bg-[#1A1712]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNodeGlow"
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E5C158]/20 via-[#E5C158] to-[#E5C158]/20"
                    />
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2.5 rounded-xl ${isActive ? "bg-[#E5C158]/20 text-[#E5C158]" : "bg-white/5 text-[#D4CEBF]"}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        {node.status}
                      </span>
                    </div>

                    <div className="text-[10px] text-[#E5C158] font-mono uppercase tracking-wider mb-1">
                      {node.role}
                    </div>
                    <h3 className="text-base font-bold text-[#FCF9F2] group-hover:text-[#E5C158] transition-colors">
                      {node.name}
                    </h3>
                    <p className="text-xs text-[#D4CEBF] mt-1 line-clamp-2">
                      {node.subtext}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#D4CEBF]">
                    <span>Avg Latency:</span>
                    <span className="text-[#E5C158] font-bold">{node.latency}</span>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details & Deep Specs Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="bg-[#1A1712] border border-[#E5C158]/30 rounded-2xl p-5 lg:p-7 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded bg-[#E5C158]/20 text-[#E5C158] text-[10px] font-mono uppercase font-bold">
                  Node Specification
                </span>
                <span className="text-xs text-[#D4CEBF] font-mono">
                  ID: <code className="text-[#FCF9F2]">{activeNode.id}_node_v3</code>
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#FCF9F2]">
                {activeNode.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#D4CEBF] mt-2 leading-relaxed">
                {activeNode.description}
              </p>

              <div className="mt-4">
                <div className="text-[10px] text-[#D4CEBF]/70 uppercase font-mono tracking-wider mb-2">
                  Engine & Protocols Stack:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeNode.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-[#12100B] border border-[#E5C158]/20 text-xs font-mono text-[#E5C158]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-64 bg-[#12100B]/80 border border-[#E5C158]/20 rounded-xl p-4 flex flex-col gap-3">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#E5C158] flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" /> Benchmarks
              </div>

              {activeNode.metrics.map((m, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-white/5 pb-1.5 last:border-b-0 last:pb-0">
                  <span className="text-xs text-[#D4CEBF] font-mono">{m.label}</span>
                  <span className="text-xs font-bold font-mono text-[#FCF9F2]">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );

  if (isModal) {
    return (
      <div 
        className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl p-4 sm:p-6 lg:p-10 flex items-center justify-center animate-fadeIn"
        onClick={(e) => {
          if (e.target === e.currentTarget && onClose) onClose();
        }}
      >
        {content}
      </div>
    );
  }

  return content;
}

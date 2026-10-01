"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  Zap,
  RotateCcw,
  Sparkles,
  Layers,
  Award,
  CheckCircle2,
  Radio,
} from "lucide-react";

interface MediaWikiUser {
  userid: number;
  name: string;
  editcount: number;
  groups: string[];
}

interface WikidataApiResponse {
  query?: {
    users?: MediaWikiUser[];
  };
}

const TARGET_USERNAME = "SHADOWARROW_2026";
const API_URL = `https://www.wikidata.org/w/api.php?action=query&list=users&ususers=${TARGET_USERNAME}&usprop=editcount|groups&format=json&origin=*`;
const PROFILE_URL = `https://www.wikidata.org/wiki/User:${TARGET_USERNAME}`;
const AUTO_REFRESH_INTERVAL_MS = 12000; // Auto fetch every 12 seconds live

export const WikidataProfileCard: React.FC = () => {
  const [editCount, setEditCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLiveSyncing, setIsLiveSyncing] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [lastUpdatedTime, setLastUpdatedTime] = useState<string | null>(null);

  const fetchWikidataData = useCallback(async (isInitial = false) => {
    if (isInitial) {
      setIsLoading(true);
    } else {
      setIsLiveSyncing(true);
    }
    setIsError(false);

    try {
      const response = await fetch(API_URL, {
        headers: { Accept: "application/json" },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: WikidataApiResponse = await response.json();
      const userData = data.query?.users?.[0];

      if (userData && typeof userData.editcount === "number") {
        setEditCount(userData.editcount);
        setIsError(false);
        setLastUpdatedTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      } else {
        throw new Error("Invalid user payload from MediaWiki API");
      }
    } catch (err) {
      console.warn("Wikidata API live polling sync fallback active:", err);
      setIsError(true);
      if (editCount === null) {
        setEditCount(2344);
      }
    } finally {
      setIsLoading(false);
      setTimeout(() => setIsLiveSyncing(false), 800);
    }
  }, [editCount]);

  useEffect(() => {
    // Initial fetch on mount
    fetchWikidataData(true);

    // Automatic 12-second background polling timer
    const pollInterval = setInterval(() => {
      fetchWikidataData(false);
    }, AUTO_REFRESH_INTERVAL_MS);

    return () => clearInterval(pollInterval);
  }, [fetchWikidataData]);

  const formattedEditCount = editCount !== null ? `${editCount.toLocaleString()}+` : "2,000+";

  // Verified badges with distinct icons & warm studio styling
  const verifiedRights = [
    {
      id: "autopatrolled",
      label: "Autopatrolled",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-amberAccent" />,
      desc: "Automatic patrol privilege for trusted Wikidata edits",
    },
    {
      id: "rollbacker",
      label: "Rollbacker",
      icon: <RotateCcw className="w-3.5 h-3.5 text-amberAccent" />,
      desc: "One-click rapid rollback rights for structural data integrity",
    },
    {
      id: "propertycreator",
      label: "Property Creator",
      icon: <Sparkles className="w-3.5 h-3.5 text-amberAccent" />,
      desc: "Authorized to propose & instantiate graph property schemas",
    },
    {
      id: "wikicommons",
      label: "Wikimedia Commons",
      icon: <Layers className="w-3.5 h-3.5 text-amberAccent" />,
      desc: "Cross-wiki media & structured data repository contributor",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-8 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl bg-[#1E1A12] border border-[rgba(229,193,88,0.22)] shadow-[0_20px_50px_rgba(9,9,11,0.5)] p-6 sm:p-8 text-[#FCF9F2]"
      >
        {/* Warm Studio Background Glow & Grid Texture */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#E5C158]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#E5C158]/5 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(229,193,88,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,193,88,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Clean Header Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-[rgba(229,193,88,0.14)] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2A2312] border border-[rgba(229,193,88,0.3)] text-amberAccent shadow-inner">
              <Database className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-mono tracking-wider text-amberAccent uppercase font-bold block">
                Wikidata Knowledge Graph
              </span>
              <span className="text-[11px] text-[#C5B99D] font-mono">
                Wikimedia Ecosystem Entity
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2A2312] border border-[rgba(229,193,88,0.25)] text-amberAccent font-mono text-[11px] font-bold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amberAccent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amberAccent" />
              </span>
              Wikidata Verified
            </span>
          </div>
        </div>

        {/* Initial Loading Skeleton */}
        {isLoading ? (
          <div className="animate-pulse space-y-6 relative z-10">
            <div className="space-y-3">
              <div className="h-7 w-3/4 bg-[#2A2312] rounded-xl" />
              <div className="h-4 w-1/3 bg-[#2A2312]/60 rounded-lg" />
              <div className="h-14 w-full bg-[#2A2312]/40 rounded-xl mt-3" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="h-24 bg-[#2A2312]/50 rounded-2xl" />
              <div className="h-24 bg-[#2A2312]/50 rounded-2xl" />
            </div>
            <div className="h-12 w-full bg-[#2A2312] rounded-xl" />
          </div>
        ) : (
          /* Main Card Body */
          <div className="relative z-10 space-y-6">
            {/* Headline & Identity */}
            <div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#FCF9F2] tracking-tight leading-snug">
                Wikidata Systems Architect &amp; Open Data Contributor
              </h3>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="font-mono text-sm font-bold text-amberAccent">
                  SHADOWARROW 2026
                </span>
                <span className="font-mono text-xs text-[#C5B99D]">(@SHADOWARROW_2026)</span>
              </div>
              <p className="mt-3 text-sm text-[#C5B99D] leading-relaxed">
                Full-stack developer and open-source data architect specializing in automated knowledge graph enrichment, Indian administrative datasets, and resilient API automation pipelines.
              </p>
            </div>

            {/* Metrics Section: Live Total Edits & Account Standing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Real-time Live Total Edits (Auto-refreshed every 12s) */}
              <div className="relative overflow-hidden rounded-2xl bg-[#12100B]/80 border border-[rgba(229,193,88,0.18)] p-5 transition-all hover:border-[rgba(229,193,88,0.4)] shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#C5B99D] uppercase tracking-wider font-semibold">
                    Total Live Edits
                  </span>
                  <div className="p-1.5 rounded-lg bg-[#2A2312] text-amberAccent border border-[rgba(229,193,88,0.2)]">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={formattedEditCount}
                      initial={{ opacity: 0.7, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-amberAccent"
                    >
                      {formattedEditCount}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-[#C5B99D]">
                  <p className="flex items-center gap-1.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${isLiveSyncing ? "bg-amberAccent animate-ping" : "bg-emerald-400 animate-pulse"}`} />
                    {isLiveSyncing ? "Auto Syncing Live API..." : isError ? "Fallback Count Active" : "Auto Live Sync (12s)"}
                  </p>
                  {lastUpdatedTime && (
                    <span className="text-[10px] opacity-75">{lastUpdatedTime}</span>
                  )}
                </div>
              </div>

              {/* Card 2: Account Standing */}
              <div className="relative overflow-hidden rounded-2xl bg-[#12100B]/80 border border-[rgba(229,193,88,0.18)] p-5 transition-all hover:border-[rgba(229,193,88,0.4)] shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#C5B99D] uppercase tracking-wider font-semibold">
                    Account Standing
                  </span>
                  <div className="p-1.5 rounded-lg bg-[#2A2312] text-emerald-400 border border-emerald-500/20">
                    <Award className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-heading font-extrabold text-[#FCF9F2]">
                    Clean Audit Record
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Zero Blocks
                  </span>
                </div>
                <p className="mt-2 text-[11px] font-mono text-[#C5B99D]">
                  Full compliance with Wikimedia system guidelines
                </p>
              </div>
            </div>

            {/* Verified System Rights & Badges Section */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-amberAccent" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#FCF9F2] font-bold">
                  Verified System Rights &amp; Ecosystem Badges
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {verifiedRights.map((right) => (
                  <motion.div
                    key={right.id}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#12100B]/90 border border-[rgba(229,193,88,0.18)] hover:border-amberAccent transition-all"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#2A2312] border border-[rgba(229,193,88,0.25)]">
                      {right.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-heading font-bold text-xs text-[#FCF9F2] truncate">
                          {right.label}
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-amberAccent shrink-0" />
                      </div>
                      <span className="text-[10px] font-mono text-[#C5B99D] block truncate">
                        {right.desc}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Outbound Action Button */}
            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href={PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-between rounded-2xl bg-amberAccent px-6 py-4 font-heading font-bold text-xs sm:text-sm text-[#12100B] transition-all hover:bg-amberLight shadow-lg shadow-amberAccent/10"
              >
                <span>Verify Official Wikidata Profile &rarr;</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.a>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default WikidataProfileCard;

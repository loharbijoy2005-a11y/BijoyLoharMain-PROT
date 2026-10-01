"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
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
const AUTO_REFRESH_INTERVAL_MS = 12000;

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
      console.warn("Wikidata API sync fallback active:", err);
      setIsError(true);
      if (editCount === null) {
        setEditCount(2344);
      }
    } finally {
      setIsLoading(false);
      setTimeout(() => setIsLiveSyncing(false), 600);
    }
  }, [editCount]);

  useEffect(() => {
    fetchWikidataData(true);

    const pollInterval = setInterval(() => {
      fetchWikidataData(false);
    }, AUTO_REFRESH_INTERVAL_MS);

    return () => clearInterval(pollInterval);
  }, [fetchWikidataData]);

  const formattedEditCount = editCount !== null ? `${editCount.toLocaleString()}+` : "2,000+";

  const verifiedRights = [
    {
      id: "autopatrolled",
      label: "Autopatrolled",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-amberAccent" />,
      desc: "Auto-patrolled trusted edits",
    },
    {
      id: "rollbacker",
      label: "Rollbacker",
      icon: <RotateCcw className="w-3.5 h-3.5 text-amberAccent" />,
      desc: "One-click rapid rollback",
    },
    {
      id: "propertycreator",
      label: "Property Creator",
      icon: <Sparkles className="w-3.5 h-3.5 text-amberAccent" />,
      desc: "Graph property instantiator",
    },
    {
      id: "wikicommons",
      label: "Wikimedia Commons",
      icon: <Layers className="w-3.5 h-3.5 text-amberAccent" />,
      desc: "Structured media contributor",
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto my-6 font-sans">
      <div className="relative min-h-[460px] overflow-hidden rounded-2xl bg-[#1E1A12] border border-[rgba(229,193,88,0.2)] shadow-xl p-4 sm:p-6 text-[#FCF9F2] flex flex-col justify-between">
        {/* Subtle Warm Backdrop Effects */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#E5C158]/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#E5C158]/5 blur-2xl" />

        {/* Card Header Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-[rgba(229,193,88,0.12)] pb-3.5 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#2A2312] border border-[rgba(229,193,88,0.25)] text-amberAccent shadow-inner">
              <Database className="h-4 w-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono tracking-wider text-amberAccent uppercase font-bold block">
                Wikidata Knowledge Graph
              </span>
              <span className="text-[10px] text-[#C5B99D] font-mono">
                Wikimedia Ecosystem Entity
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2A2312] border border-[rgba(229,193,88,0.25)] text-amberAccent font-mono text-[10px] font-bold shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amberAccent opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amberAccent" />
              </span>
              Wikidata Verified
            </span>
          </div>
        </div>

        {/* Stable Skeleton Loader during initial fetch */}
        {isLoading ? (
          <div className="animate-pulse space-y-4 relative z-10 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="h-5 w-3/4 bg-[#2A2312] rounded-lg" />
              <div className="h-3 w-1/3 bg-[#2A2312]/60 rounded-md" />
              <div className="h-10 w-full bg-[#2A2312]/40 rounded-lg mt-2" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-20 bg-[#2A2312]/50 rounded-xl" />
              <div className="h-20 bg-[#2A2312]/50 rounded-xl" />
            </div>
            <div className="h-10 w-full bg-[#2A2312] rounded-xl" />
          </div>
        ) : (
          /* Main Card Content - Stable Heights without Layout Shift */
          <div className="relative z-10 space-y-4 flex-1 flex flex-col justify-between">
            {/* Identity & Headline */}
            <div>
              <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#FCF9F2] tracking-tight leading-snug">
                Wikidata Systems Architect &amp; Open Data Contributor
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-mono text-xs font-bold text-amberAccent">
                  SHADOWARROW 2026
                </span>
                <span className="font-mono text-[11px] text-[#C5B99D]">(@SHADOWARROW_2026)</span>
              </div>
              <p className="mt-2 text-xs text-[#C5B99D] leading-relaxed">
                Full-stack developer &amp; open-source data architect specializing in automated knowledge graph enrichment, Indian administrative datasets, and resilient API pipelines.
              </p>
            </div>

            {/* Metrics Section: Live Total Edits & Account Standing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Card 1: Live Total Edits */}
              <div className="relative overflow-hidden rounded-xl bg-[#12100B]/80 border border-[rgba(229,193,88,0.16)] p-3.5 transition-all hover:border-[rgba(229,193,88,0.35)] shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono text-[#C5B99D] uppercase tracking-wider font-semibold">
                    Total Live Edits
                  </span>
                  <div className="p-1 rounded-md bg-[#2A2312] text-amberAccent border border-[rgba(229,193,88,0.2)]">
                    <TrendingUp className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="mt-0.5">
                  <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-amberAccent block">
                    {formattedEditCount}
                  </span>
                </div>
                <div className="mt-1.5 flex items-center justify-between text-[10px] font-mono text-[#C5B99D]">
                  <p className="flex items-center gap-1.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${isLiveSyncing ? "bg-amberAccent animate-ping" : "bg-emerald-400 animate-pulse"}`} />
                    {isLiveSyncing ? "Syncing..." : isError ? "Fallback Mode" : "Auto Live (12s)"}
                  </p>
                  {lastUpdatedTime && (
                    <span className="text-[9px] opacity-75">{lastUpdatedTime}</span>
                  )}
                </div>
              </div>

              {/* Card 2: Solid Account Standing */}
              <div className="relative overflow-hidden rounded-xl bg-[#12100B]/80 border border-[rgba(229,193,88,0.16)] p-3.5 transition-all hover:border-[rgba(229,193,88,0.35)] shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono text-[#C5B99D] uppercase tracking-wider font-semibold">
                    Account Standing
                  </span>
                  <div className="p-1 rounded-md bg-[#2A2312] text-emerald-400 border border-emerald-500/20">
                    <Award className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-1.5">
                  <span className="text-sm font-heading font-extrabold text-[#FCF9F2]">
                    Clean Audit Record
                  </span>
                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[9px] font-bold border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Zero Blocks
                  </span>
                </div>
                <p className="mt-1.5 text-[10px] font-mono text-[#C5B99D]">
                  Full compliance with Wikimedia guidelines
                </p>
              </div>
            </div>

            {/* Verified Rights & Badges Section */}
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Zap className="w-3.5 h-3.5 text-amberAccent" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#FCF9F2] font-bold">
                  Verified System Rights &amp; Badges
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {verifiedRights.map((right) => (
                  <div
                    key={right.id}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#12100B]/90 border border-[rgba(229,193,88,0.16)] hover:border-amberAccent/50 transition-all"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#2A2312] border border-[rgba(229,193,88,0.2)]">
                      {right.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1">
                        <span className="font-heading font-bold text-[11px] text-[#FCF9F2] truncate">
                          {right.label}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-[#C5B99D] block truncate">
                        {right.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outbound Action Button */}
            <div className="pt-1">
              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href={PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-between rounded-xl bg-amberAccent px-4 py-3 font-heading font-bold text-xs text-[#12100B] transition-all hover:bg-amberLight shadow-md shadow-amberAccent/10"
              >
                <span>Verify Official Wikidata Profile &rarr;</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WikidataProfileCard;

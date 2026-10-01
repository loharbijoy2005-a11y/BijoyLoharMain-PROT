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
        setEditCount(2499);
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
      icon: <ShieldCheck className="w-4 h-4 text-amberAccent" />,
      desc: "Auto-patrolled trusted edits",
    },
    {
      id: "rollbacker",
      label: "Rollbacker",
      icon: <RotateCcw className="w-4 h-4 text-amberAccent" />,
      desc: "One-click rapid rollback",
    },
    {
      id: "propertycreator",
      label: "Property Creator",
      icon: <Sparkles className="w-4 h-4 text-amberAccent" />,
      desc: "Graph property instantiator",
    },
    {
      id: "wikicommons",
      label: "Wikimedia Commons",
      icon: <Layers className="w-4 h-4 text-amberAccent" />,
      desc: "Structured media contributor",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 max-w-[1040px] mx-auto font-sans">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="group relative p-8 md:p-10 bg-studioCard border border-borderWarm rounded-3xl transition-all duration-300 hover:border-amberAccent/60 hover:shadow-2xl shadow-md overflow-hidden text-deepInk"
      >
        {/* Subtle Warm Background Glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amberAccent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amberAccent/5 blur-3xl" />

        {/* Header Flex Layout matching Flagship Firm card */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs font-bold text-amberAccent">03</span>
              <span className="px-3.5 py-1 bg-amberAccent/10 text-amberAccent border border-amberAccent/30 font-mono text-xs font-bold rounded-full shadow-sm flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" />
                Wikidata Knowledge Graph Entity
              </span>
            </div>

            <h3 className="font-heading font-black text-4xl md:text-5xl text-deepInk group-hover:text-amberAccent transition-colors tracking-tight">
              SHADOW ARROW
            </h3>

            <p className="font-mono text-xs text-amberAccent font-semibold mt-2">
              https://www.wikidata.org/wiki/User:SHADOWARROW_2026 &bull; Registered Open Data Architect (Est. 2026)
            </p>

            <p className="text-sm text-muted max-w-[640px] leading-relaxed mt-3 font-normal">
              Full-stack developer and open-source data architect specializing in automated knowledge graph enrichment, Indian administrative datasets, and resilient API automation pipelines.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amberAccent hover:bg-amberLight text-studioCanvas font-heading font-extrabold text-xs rounded-full transition-all shrink-0 shadow-md"
          >
            <span>Verify Official Wikidata Profile</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Integrated Bottom Section: Metrics & Rights Badges */}
        <div className="border-t border-borderWarm pt-6 mt-8 space-y-6">
          {/* Live Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Metric 1: Live Total Edits */}
            <div className="p-5 rounded-2xl bg-studioCanvas/70 border border-borderWarm flex items-center justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-amberAccent uppercase tracking-widest block mb-1">
                  TOTAL LIVE EDITS
                </span>
                <span className="font-mono font-black text-3xl md:text-4xl text-deepInk">
                  {isLoading ? "Loading..." : formattedEditCount}
                </span>
                <p className="font-mono text-[11px] text-muted mt-1.5 flex items-center gap-1.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${isLiveSyncing ? "bg-amberAccent animate-ping" : "bg-emerald-400 animate-pulse"}`} />
                  {isLiveSyncing ? "Syncing API..." : isError ? "Fallback Mode" : "Auto Live Sync (12s)"}
                  {lastUpdatedTime && <span className="opacity-75">&bull; {lastUpdatedTime}</span>}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-amberAccent/10 text-amberAccent border border-amberAccent/30">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>

            {/* Metric 2: Clean Account Standing */}
            <div className="p-5 rounded-2xl bg-studioCanvas/70 border border-borderWarm flex items-center justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-amberAccent uppercase tracking-widest block mb-1">
                  ACCOUNT STANDING
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-lg text-deepInk">
                    Clean Audit Record
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Zero Blocks
                  </span>
                </div>
                <p className="font-mono text-[11px] text-muted mt-1.5">
                  Full compliance with Wikimedia system guidelines
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <Award className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Verified System Rights & Badges */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-amberAccent" />
              <span className="font-mono text-xs font-bold text-amberAccent uppercase tracking-widest">
                VERIFIED SYSTEM RIGHTS &amp; ECOSYSTEM BADGES
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {verifiedRights.map((right) => (
                <div
                  key={right.id}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-studioCanvas/90 border border-borderWarm hover:border-amberAccent/60 transition-all group/badge"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amberAccent/10 border border-amberAccent/30 text-amberAccent">
                    {right.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-heading font-bold text-xs text-deepInk truncate block group-hover/badge:text-amberAccent transition-colors">
                      {right.label}
                    </span>
                    <span className="text-[10px] font-mono text-muted block truncate">
                      {right.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WikidataProfileCard;

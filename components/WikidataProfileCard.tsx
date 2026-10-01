"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Database,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
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
      icon: <ShieldCheck className="w-3.5 h-3.5 text-amberAccent" />,
    },
    {
      id: "rollbacker",
      label: "Rollbacker",
      icon: <RotateCcw className="w-3.5 h-3.5 text-amberAccent" />,
    },
    {
      id: "propertycreator",
      label: "Property Creator",
      icon: <Sparkles className="w-3.5 h-3.5 text-amberAccent" />,
    },
    {
      id: "wikicommons",
      label: "Wikimedia Commons",
      icon: <Layers className="w-3.5 h-3.5 text-amberAccent" />,
    },
  ];

  return (
    <section className="py-6 px-4 md:px-8 max-w-[1040px] mx-auto font-sans">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="group relative p-6 md:p-8 bg-studioCard border border-borderWarm rounded-3xl transition-all duration-300 hover:border-amberAccent/60 hover:shadow-2xl shadow-md overflow-hidden text-deepInk"
      >
        {/* Subtle Background Glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-amberAccent/10 blur-3xl" />

        {/* Identical Layout Structure to SHADOW ARROW Card */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex-1 min-w-0">
            {/* Top Tag Row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-2">
              <span className="font-mono text-xs font-bold text-amberAccent">03</span>
              <span className="px-3 py-0.5 bg-amberAccent/10 text-amberAccent border border-amberAccent/30 font-mono text-xs font-bold rounded-full shadow-sm flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" />
                Wikidata Knowledge Graph Entity
              </span>

              {/* Live Contributions Pill */}
              <span className="px-3 py-0.5 bg-amberAccent/15 text-amberAccent border border-amberAccent/40 font-mono text-xs font-extrabold rounded-full flex items-center gap-1.5 shadow-sm">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{isLoading ? "Loading..." : `${formattedEditCount} Live Contributions`}</span>
                <span className={`h-1.5 w-1.5 rounded-full ${isLiveSyncing ? "bg-amberAccent animate-ping" : "bg-emerald-400 animate-pulse"}`} />
              </span>

              {/* Clean Standing Pill */}
              <span className="px-3 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono text-xs font-bold rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Zero Blocks</span>
              </span>
            </div>

            {/* Giant Title matching SHADOW ARROW typography */}
            <h3 className="font-heading font-black text-3xl md:text-4xl text-deepInk group-hover:text-amberAccent transition-colors tracking-tight">
              SHADOW ARROW
            </h3>

            {/* Monospace URL & Headline Tagline */}
            <p className="font-mono text-xs text-amberAccent font-semibold mt-1.5 truncate">
              User:SHADOWARROW_2026 &bull; Wikidata Systems Architect &amp; Open Data Contributor
            </p>

            {/* Concise Bio */}
            <p className="text-sm text-muted max-w-[660px] leading-relaxed mt-2.5 font-normal">
              Full-stack developer and open-source data architect specializing in automated knowledge graph enrichment, Indian administrative datasets, and resilient API automation pipelines.
            </p>

            {/* Sleek Slim Badges Bar */}
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-borderWarm/60">
              <span className="font-mono text-[11px] font-bold text-amberAccent uppercase tracking-widest mr-1">
                Rights:
              </span>
              {verifiedRights.map((right) => (
                <div
                  key={right.id}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-studioCanvas/90 border border-borderWarm text-deepInk font-heading font-bold text-xs hover:border-amberAccent transition-all shadow-sm"
                >
                  {right.icon}
                  <span>{right.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button matching SHADOW ARROW button positioning & style */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amberAccent hover:bg-amberLight text-studioCanvas font-heading font-extrabold text-xs rounded-full transition-all shrink-0 shadow-md self-start md:self-center"
          >
            <span>Verify Official Wikidata Profile</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default WikidataProfileCard;

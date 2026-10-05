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

const TARGET_USERNAME = "SHADOWARROW 2026";
const API_URL = `https://www.wikidata.org/w/api.php?action=query&list=users&ususers=${encodeURIComponent(TARGET_USERNAME)}&usprop=editcount|groups&format=json&origin=*`;
const PROFILE_URL = `https://www.wikidata.org/wiki/User:SHADOWARROW_2026`;
const AUTO_REFRESH_INTERVAL_MS = 12000;

// Scoreboard-style rolling digit component
const RollingDigit: React.FC<{ digit: string }> = ({ digit }) => {
  if (isNaN(Number(digit))) {
    return <span>{digit}</span>;
  }
  const num = parseInt(digit, 10);
  return (
    <span className="inline-block h-[1.15em] overflow-hidden leading-none relative">
      <motion.span
        initial={false}
        animate={{ y: `-${num * 10}%` }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span key={n} className="h-[1.15em] flex items-center justify-center">
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

const ScoreboardTicker: React.FC<{ value: string }> = ({ value }) => {
  return (
    <span className="inline-flex items-center font-mono">
      {value.split("").map((char, i) => (
        <RollingDigit key={`${i}-${char}`} digit={char} />
      ))}
    </span>
  );
};

export const WikidataProfileCard: React.FC = () => {
  const [editCount, setEditCount] = useState<number>(13780);
  const [isLiveSyncing, setIsLiveSyncing] = useState<boolean>(false);

  const fetchWikidataData = useCallback(async () => {
    setIsLiveSyncing(true);

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

      if (userData && typeof userData.editcount === "number" && userData.editcount > 0) {
        setEditCount(userData.editcount);
      }
    } catch (err) {
      console.warn("Wikidata API sync notice (using local live count):", err);
    } finally {
      setTimeout(() => setIsLiveSyncing(false), 600);
    }
  }, []);

  useEffect(() => {
    fetchWikidataData();

    const pollInterval = setInterval(() => {
      fetchWikidataData();
    }, AUTO_REFRESH_INTERVAL_MS);

    return () => clearInterval(pollInterval);
  }, [fetchWikidataData]);

  const formattedEditCount = `${editCount.toLocaleString()}+`;

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
    <section className="py-4 md:py-6 px-0 sm:px-2 max-w-[1040px] mx-auto font-sans w-full">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.01, y: -4 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="group relative p-4 sm:p-6 md:p-8 bg-studioCard border border-borderWarm rounded-2xl sm:rounded-3xl transition-all duration-300 hover:border-amberAccent/60 hover:shadow-2xl shadow-md overflow-hidden text-deepInk w-full"
      >
        {/* Periodic White/Gold Glowing Light Beam Sweep */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "250%", opacity: [0, 0.25, 0.6, 0.25, 0] }}
          transition={{
            repeat: Infinity,
            repeatDelay: 3.5,
            duration: 2.2,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-sm z-20"
        />

        {/* Subtle Warm Amber Backdrop Glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-amberAccent/10 blur-3xl group-hover:bg-amberAccent/15 transition-all duration-500" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 sm:gap-6 relative z-10">
          <div className="flex-1 min-w-0 w-full">
            {/* Top Tag Row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-2.5">
              <span className="font-mono text-xs font-bold text-amberAccent">03</span>
              <span className="px-2.5 sm:px-3 py-0.5 bg-amberAccent/10 text-amberAccent border border-amberAccent/30 font-mono text-[11px] sm:text-xs font-bold rounded-full shadow-sm flex items-center gap-1.5 max-w-full">
                <Database className="w-3.5 h-3.5 shrink-0" />
                <span className="break-normal">Wikidata Knowledge Graph Entity</span>
              </span>

              {/* Scoreboard Rolling Live Contributions Pill */}
              <span className="px-2.5 sm:px-3 py-0.5 bg-amberAccent/15 text-amberAccent border border-amberAccent/40 font-mono text-[11px] sm:text-xs font-extrabold rounded-full flex items-center gap-1.5 shadow-sm max-w-full">
                <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                <ScoreboardTicker value={formattedEditCount} />
                <span className="whitespace-nowrap">Live Contributions</span>
                <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${isLiveSyncing ? "bg-amberAccent animate-ping" : "bg-emerald-400 animate-pulse"}`} />
              </span>

              {/* Standing Pill */}
              <span className="px-2.5 sm:px-3 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono text-[11px] sm:text-xs font-bold rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>Zero Blocks</span>
              </span>
            </div>

            {/* Giant Title matching SHADOW ARROW typography */}
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-deepInk group-hover:text-amberAccent transition-colors tracking-tight break-words">
              SHADOW ARROW
            </h2>

            {/* Monospace URL & Headline Tagline */}
            <p className="font-mono text-[11px] sm:text-xs text-amberAccent font-semibold mt-1.5 break-words">
              User:SHADOWARROW_2026 &bull; Wikidata Systems Architect &amp; Open Data Contributor
            </p>

            {/* Bio */}
            <p className="text-xs sm:text-sm text-muted max-w-[660px] leading-relaxed mt-2.5 font-normal break-words">
              Full-stack developer and open-source data architect specializing in automated knowledge graph enrichment, Indian administrative datasets, and resilient API automation pipelines.
            </p>

            {/* Interactive Verified Rights Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-4 pt-3 border-t border-borderWarm/60">
              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-amberAccent uppercase tracking-widest mr-1">
                Rights:
              </span>
              {verifiedRights.map((right) => (
                <motion.div
                  key={right.id}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-studioCanvas/90 border border-borderWarm text-deepInk font-heading font-bold text-[11px] sm:text-xs hover:border-amberAccent hover:text-amberAccent transition-all shadow-sm cursor-default"
                >
                  {right.icon}
                  <span>{right.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Solid Hover Action Button */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            id="wikidata-card-profile-link"
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Verify Official Wikidata Contributor Profile"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-amberAccent hover:bg-amberLight text-studioCanvas font-heading font-extrabold text-xs rounded-full transition-all shrink-0 shadow-md text-center mt-2 md:mt-0 z-10"
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

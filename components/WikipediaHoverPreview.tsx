"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Settings } from "lucide-react";

interface WikiSummary {
  title: string;
  displaytitle?: string;
  extract: string;
  extract_html?: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
  originalimage?: {
    source: string;
  };
  description?: string;
  pageUrl: string;
}

const summaryCache = new Map<string, WikiSummary | null>();
const prefetchInProgress = new Set<string>();

async function fetchWikiSummary(rawTitle: string, href: string): Promise<WikiSummary | null> {
  if (summaryCache.has(rawTitle)) {
    return summaryCache.get(rawTitle) || null;
  }
  if (prefetchInProgress.has(rawTitle)) {
    return null;
  }
  prefetchInProgress.add(rawTitle);

  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(rawTitle)}`,
      {
        headers: { Accept: "application/json" },
      }
    );

    if (res.ok) {
      const json = await res.json();
      const summary: WikiSummary = {
        title: json.title || rawTitle.replace(/_/g, " "),
        displaytitle: json.displaytitle,
        extract: json.extract || "",
        extract_html: json.extract_html,
        description: json.description,
        thumbnail: json.thumbnail,
        originalimage: json.originalimage,
        pageUrl: href || `https://en.wikipedia.org/wiki/${encodeURIComponent(rawTitle)}`,
      };
      summaryCache.set(rawTitle, summary);
      prefetchInProgress.delete(rawTitle);
      return summary;
    }
  } catch {
    // ignore
  }
  summaryCache.set(rawTitle, null);
  prefetchInProgress.delete(rawTitle);
  return null;
}

interface Position {
  top: number;
  left: number;
  placement: "top" | "bottom";
  arrowLeft: number;
}

export const WikipediaHoverPreview: React.FC<{ theme?: "portfolio" | "light" | "dark" }> = ({
  theme = "portfolio",
}) => {
  const [activeData, setActiveData] = useState<WikiSummary | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [position, setPosition] = useState<Position | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const activeAnchorRef = useRef<HTMLAnchorElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Background instant pre-fetch on mount
  useEffect(() => {
    const prefetchAll = () => {
      const links = document.querySelectorAll<HTMLAnchorElement>('a[href*="wikipedia.org/wiki/"]');
      links.forEach((a) => {
        const href = a.getAttribute("href") || "";
        const match = href.match(/wikipedia\.org\/wiki\/([^#?]+)/);
        if (match) {
          const title = decodeURIComponent(match[1]);
          if (!summaryCache.has(title)) {
            fetchWikiSummary(title, href);
          }
        }
      });
    };

    const timer = setTimeout(prefetchAll, 300);
    return () => clearTimeout(timer);
  }, []);

  const closeCard = useCallback(() => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setVisible(false);
      setActiveData(null);
      activeAnchorRef.current = null;
    }, 200);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href*="wikipedia.org/wiki/"]') as HTMLAnchorElement | null;

      if (cardRef.current?.contains(target) || (anchor && anchor === activeAnchorRef.current)) {
        cancelClose();
        return;
      }

      if (!anchor) return;

      cancelClose();

      if (activeAnchorRef.current === anchor && visible) {
        return;
      }

      activeAnchorRef.current = anchor;

      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }

      // Fast display (60ms)
      hoverTimeoutRef.current = setTimeout(async () => {
        const href = anchor.getAttribute("href") || "";
        const match = href.match(/wikipedia\.org\/wiki\/([^#?]+)/);
        if (!match) return;

        const rawTitle = decodeURIComponent(match[1]);
        const rect = anchor.getBoundingClientRect();
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        const CARD_WIDTH = 320;
        const CARD_EST_HEIGHT = 280;

        let left = rect.left + scrollX + rect.width / 2 - CARD_WIDTH / 2;
        left = Math.max(10, Math.min(left, window.innerWidth - CARD_WIDTH - 12));

        // Arrow beak alignment relative to card
        const arrowLeft = Math.max(
          16,
          Math.min(rect.left + scrollX + rect.width / 2 - left, CARD_WIDTH - 16)
        );

        let top = rect.bottom + scrollY + 9;
        let placement: "top" | "bottom" = "bottom";

        if (rect.bottom + CARD_EST_HEIGHT + 30 > window.innerHeight && rect.top > CARD_EST_HEIGHT) {
          top = rect.top + scrollY - CARD_EST_HEIGHT - 9;
          placement = "top";
        }

        setPosition({ top, left, placement, arrowLeft });
        setVisible(true);

        if (summaryCache.has(rawTitle)) {
          const cached = summaryCache.get(rawTitle);
          setActiveData(cached || null);
          setLoading(false);
          return;
        }

        setLoading(true);
        const data = await fetchWikiSummary(rawTitle, href);
        setActiveData(data);
        setLoading(false);
      }, 60);
    };

    const handleMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (related && (cardRef.current?.contains(related) || activeAnchorRef.current?.contains(related))) {
        return;
      }

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href*="wikipedia.org/wiki/"]');

      if (anchor && anchor === activeAnchorRef.current) {
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
          hoverTimeoutRef.current = null;
        }
        closeCard();
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, [visible, closeCard, cancelClose]);

  if (!visible || !position) return null;

  const isLight = theme === "light";
  const isDark = theme === "dark";

  // Official Wikipedia theme colors
  const cardBg = isLight
    ? "bg-white text-[#202122] border-[#a2a9b1] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.3),0_0_1px_1px_rgba(0,0,0,0.05)]"
    : isDark
    ? "bg-[#202122] text-[#eaecf0] border-[#54595d] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8),0_0_1px_1px_rgba(255,255,255,0.1)]"
    : "bg-[#1c1815] text-[#f2ede4] border-[#d4af37]/50 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9),0_0_1px_1px_rgba(212,175,55,0.2)]";

  const textColor = isLight ? "text-[#202122]" : isDark ? "text-[#eaecf0]" : "text-[#f0ede6]";
  const gearColor = isLight ? "text-[#72777d] hover:text-[#202122]" : isDark ? "text-[#a2a9b1] hover:text-white" : "text-[#d4af37]/70 hover:text-[#ffd700]";
  const beakBg = isLight ? "#ffffff" : isDark ? "#202122" : "#1c1815";
  const beakBorder = isLight ? "#a2a9b1" : isDark ? "#54595d" : "#d4af37";

  // Format extract with bold title in first sentence like original Wikipedia
  const renderFormattedExtract = () => {
    if (!activeData) return null;
    const { title, extract } = activeData;

    // If extract starts with or contains title, bold the title
    if (extract.toLowerCase().startsWith(title.toLowerCase())) {
      const remaining = extract.slice(title.length);
      return (
        <span>
          <b>{title}</b>
          {remaining}
        </span>
      );
    }
    return <span>{extract}</span>;
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={cancelClose}
      onMouseLeave={closeCard}
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        zIndex: 999999,
        width: "320px",
        maxWidth: "92vw",
      }}
      className={`rounded-[2px] border pointer-events-auto select-none overflow-hidden transition-all duration-100 ${cardBg}`}
    >
      {/* Authentic Wikipedia Triangular Pointer Beak */}
      <div
        style={{
          position: "absolute",
          left: `${position.arrowLeft - 7}px`,
          top: position.placement === "bottom" ? "-7px" : "auto",
          bottom: position.placement === "top" ? "-7px" : "auto",
          width: "14px",
          height: "14px",
          backgroundColor: beakBg,
          borderLeft: `1px solid ${beakBorder}`,
          borderTop: position.placement === "bottom" ? `1px solid ${beakBorder}` : "none",
          borderBottom: position.placement === "top" ? `1px solid ${beakBorder}` : "none",
          transform: "rotate(45deg)",
          zIndex: 10,
        }}
      />

      {/* Hover bridge */}
      <div className="absolute -top-3 -bottom-3 -left-3 -right-3 pointer-events-auto -z-10" />

      {loading ? (
        <div className="p-4 flex items-center gap-2.5 text-xs font-sans">
          <div className="w-3.5 h-3.5 rounded-full border-2 border-[#72777d] border-t-transparent animate-spin shrink-0" />
          <span className="text-[#72777d]">Loading Wikipedia...</span>
        </div>
      ) : activeData ? (
        <div className="flex flex-col">
          {/* Top Full-Width Banner Image (Original Wikipedia style) */}
          {activeData.thumbnail?.source && (
            <div className="w-full h-40 bg-[#eaecf0] dark:bg-[#2a2c2e] overflow-hidden relative shrink-0 border-b border-black/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeData.thumbnail.source}
                alt={activeData.title}
                className="w-full h-full object-cover object-center block"
                loading="eager"
                onError={(e) => {
                  (e.target as HTMLElement).parentElement!.style.display = "none";
                }}
              />
            </div>
          )}

          {/* Text Content Area */}
          <div className="p-3.5 pt-3 relative">
            <a
              href={activeData.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer hover:underline text-decoration-none"
            >
              <p
                className={`text-[13.5px] font-sans leading-[1.45] tracking-normal line-clamp-4 ${textColor}`}
                style={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Lato, Helvetica, Arial, sans-serif",
                }}
              >
                {renderFormattedExtract()}
              </p>
            </a>

            {/* Bottom Right Settings Gear Icon (Original Wikipedia) */}
            <div className="flex items-center justify-end mt-2 pt-1">
              <a
                href={activeData.pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open article in Wikipedia"
                className={`transition-colors p-0.5 ${gearColor}`}
              >
                <Settings className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

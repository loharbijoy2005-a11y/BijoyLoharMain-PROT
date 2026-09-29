"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command as CommandIcon,
  Laptop,
  User,
  Cpu,
  Layers,
  BookOpen,
  Mail,
  Github,
  Linkedin,
  Globe,
  ArrowRight,
  X,
  ExternalLink,
  Terminal,
} from "lucide-react";

interface PaletteItem {
  id: string;
  title: string;
  category: "Navigation" | "Social & Comms" | "Tools";
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
  isExternal?: boolean;
}

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const togglePalette = useCallback(() => {
    setIsOpen((prev) => !prev);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        togglePalette();
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, togglePalette]);

  const navigateTo = (selector: string) => {
    setIsOpen(false);
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openUrl = (url: string) => {
    setIsOpen(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const items: PaletteItem[] = [
    {
      id: "hero",
      title: "Hero & Executive Overview",
      category: "Navigation",
      icon: <Laptop className="w-4 h-4 text-amberAccent" />,
      action: () => navigateTo("#hero-story"),
      shortcut: "Hero",
    },
    {
      id: "about",
      title: "About & Systems Biography",
      category: "Navigation",
      icon: <User className="w-4 h-4 text-amberAccent" />,
      action: () => navigateTo("#about-me"),
      shortcut: "About",
    },
    {
      id: "expedition",
      title: "Systems Expedition & Ecosystem",
      category: "Navigation",
      icon: <Cpu className="w-4 h-4 text-amberAccent" />,
      action: () => navigateTo("#expedition"),
      shortcut: "Expedition",
    },
    {
      id: "matrix",
      title: "Creator Matrix & Visual Media",
      category: "Navigation",
      icon: <Layers className="w-4 h-4 text-amberAccent" />,
      action: () => navigateTo("#creator-matrix"),
      shortcut: "Media",
    },
    {
      id: "terminal",
      title: "Interactive CLI Terminal Console",
      category: "Tools",
      icon: <Terminal className="w-4 h-4 text-amberAccent" />,
      action: () => navigateTo("#terminal-console"),
      shortcut: "CLI",
    },
    {
      id: "books",
      title: "Published Technical Books & Literature",
      category: "Navigation",
      icon: <BookOpen className="w-4 h-4 text-amberAccent" />,
      action: () => navigateTo("#books"),
      shortcut: "Books",
    },
    {
      id: "contact",
      title: "Direct Comms & Network Node",
      category: "Social & Comms",
      icon: <Mail className="w-4 h-4 text-amberAccent" />,
      action: () => navigateTo("#contact"),
      shortcut: "Contact",
    },
    {
      id: "github",
      title: "GitHub Profile (loharbijoy2005-a11y)",
      category: "Social & Comms",
      icon: <Github className="w-4 h-4 text-amberAccent" />,
      action: () => openUrl("https://github.com/loharbijoy2005-a11y"),
      isExternal: true,
    },
    {
      id: "goodreads",
      title: "Goodreads Author Profile (bijoylohar)",
      category: "Social & Comms",
      icon: <BookOpen className="w-4 h-4 text-amberAccent" />,
      action: () => openUrl("https://www.goodreads.com/bijoylohar"),
      isExternal: true,
    },
    {
      id: "amazon-author",
      title: "Amazon Author Central (bijoylohar)",
      category: "Social & Comms",
      icon: <Globe className="w-4 h-4 text-amberAccent" />,
      action: () => openUrl("https://www.amazon.com/author/bijoylohar"),
      isExternal: true,
    },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDownInModal = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  return (
    <>
      {/* Floating Launcher Button Trigger */}
      <button
        onClick={togglePalette}
        className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2.5 px-4 py-2.5 bg-studioCard/90 backdrop-blur-md border border-amberAccent/40 hover:border-amberAccent text-deepInk font-mono text-xs font-bold rounded-full shadow-[0_0_20px_rgba(229,193,88,0.15)] hover:scale-105 transition-all group"
        title="Open Command Launcher (Ctrl + K)"
      >
        <CommandIcon className="w-4 h-4 text-amberAccent group-hover:rotate-12 transition-transform" />
        <span>Command Menu</span>
        <kbd className="px-2 py-0.5 bg-amberAccent/10 border border-amberAccent/30 text-amberAccent rounded text-[10px] font-mono font-bold">
          Ctrl + K
        </kbd>
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-20">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              onKeyDown={handleKeyDownInModal}
              className="relative w-full max-w-2xl bg-studioCard border border-amberAccent/40 rounded-3xl shadow-[0_0_50px_rgba(229,193,88,0.2)] overflow-hidden z-10"
            >
              {/* Input Header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-borderWarm bg-studioSubtle">
                <Search className="w-5 h-5 text-amberAccent shrink-0" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Type a command or search section..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  className="w-full bg-transparent text-deepInk placeholder:text-muted text-sm sm:text-base font-sans font-medium focus:outline-none"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-amberAccent/10 text-muted hover:text-amberAccent transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="max-h-[380px] overflow-y-auto p-3 space-y-1">
                {filteredItems.length === 0 ? (
                  <div className="p-8 text-center text-muted font-mono text-xs">
                    No matching commands found for &quot;{query}&quot;
                  </div>
                ) : (
                  filteredItems.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left transition-all duration-150 ${
                          isSelected
                            ? "bg-amberAccent/15 border border-amberAccent/50 text-deepInk shadow-sm"
                            : "hover:bg-studioSubtle border border-transparent text-muted hover:text-deepInk"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center border ${
                            isSelected ? "bg-amberAccent text-studioCanvas border-amberAccent" : "bg-amberAccent/10 border-amberAccent/30 text-amberAccent"
                          }`}>
                            {item.icon}
                          </div>
                          <div className="min-w-0">
                            <div className="font-heading font-extrabold text-sm text-deepInk truncate">
                              {item.title}
                            </div>
                            <div className="text-[11px] font-mono text-amberAccent/80">
                              {item.category}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {item.shortcut && (
                            <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-amberAccent/10 border border-amberAccent/20 text-amberAccent font-bold">
                              {item.shortcut}
                            </span>
                          )}
                          {item.isExternal ? (
                            <ExternalLink className="w-4 h-4 text-amberAccent" />
                          ) : (
                            <ArrowRight className="w-4 h-4 text-amberAccent" />
                          )}
                        </div>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Footer Helper Bar */}
              <div className="flex items-center justify-between px-6 py-3 border-t border-borderWarm bg-studioSubtle text-[11px] font-mono text-muted">
                <div className="flex items-center gap-3">
                  <span><kbd className="px-1.5 py-0.5 bg-amberAccent/10 border border-amberAccent/30 rounded text-amberAccent font-bold">↑↓</kbd> Navigate</span>
                  <span><kbd className="px-1.5 py-0.5 bg-amberAccent/10 border border-amberAccent/30 rounded text-amberAccent font-bold">↵</kbd> Select</span>
                  <span><kbd className="px-1.5 py-0.5 bg-amberAccent/10 border border-amberAccent/30 rounded text-amberAccent font-bold">ESC</kbd> Close</span>
                </div>
                <div className="text-amberAccent font-bold">
                  Shadow Arrow OS
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;

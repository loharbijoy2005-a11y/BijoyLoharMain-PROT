"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, CornerDownLeft, Trash2, ShieldAlert, Cpu } from "lucide-react";

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const TerminalConsole: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandHistoryItem[]>([]);
  const [commandIndex, setCommandIndex] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize terminal welcome message
  useEffect(() => {
    const welcomeItem: CommandHistoryItem = {
      id: "welcome",
      command: "system --init",
      output: (
        <div className="space-y-2 text-slate-300 font-mono text-xs md:text-sm">
          <p className="text-amber-400 font-bold flex items-center gap-2">
            <span>✨ Welcome to Bijoy Lohar CLI Terminal (v2.4)</span>
          </p>
          <p className="text-slate-400">
            Type <span className="text-amber-300 font-bold">help</span> or click any quick command below to inspect profile records, skills, projects, and ecosystem.
          </p>
        </div>
      ),
      timestamp: new Date().toLocaleTimeString(),
    };
    setHistory([welcomeItem]);
  }, []);

  // Internal terminal container scroll ONLY (prevent window page jump)
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const timestamp = new Date().toLocaleTimeString();
    const id = Math.random().toString(36).substring(2, 9);

    let outputNode: React.ReactNode;

    if (lower === "clear" || lower === "cls") {
      setHistory([]);
      setInputVal("");
      setCommandIndex(-1);
      return;
    } else if (lower === "help" || lower === "?") {
      outputNode = (
        <div className="space-y-2 py-1">
          <p className="text-amber-400 font-bold">Available Commands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
            <div><span className="text-amber-300 font-bold">profile</span> - Multi-disciplinary entity summary</div>
            <div><span className="text-amber-300 font-bold">skills</span> - Core tech & systems architecture</div>
            <div><span className="text-amber-300 font-bold">projects</span> - Flagship ventures & open source</div>
            <div><span className="text-amber-300 font-bold">books</span> - Publication auto-sync pipeline</div>
            <div><span className="text-amber-300 font-bold">contact</span> - Direct links (Commudle, Topmate, LinkedIn)</div>
            <div><span className="text-amber-300 font-bold">gaming</span> - Visual computing & graphics tech interest</div>
            <div><span className="text-amber-300 font-bold">date</span> - Current timestamp & system status</div>
            <div><span className="text-amber-300 font-bold">matrix</span> - Toggle golden matrix mode</div>
            <div><span className="text-amber-300 font-bold">clear</span> - Clear output log</div>
          </div>
        </div>
      );
    } else if (lower === "profile" || lower === "whoami") {
      outputNode = (
        <div className="space-y-1.5 text-xs md:text-sm border-l-2 border-amber-500/50 pl-3 my-1">
          <p className="text-amber-400 font-bold">ENTITY: Bijoy Lohar</p>
          <p><span className="text-slate-400">Roles:</span> Full-Stack Software Engineer | Systems Architect | Independent Computational Researcher | Technical Author | Founder</p>
          <p><span className="text-slate-400">Venture:</span> Founder of Shadow Arrow (https://shadowarrow.in)</p>
          <p><span className="text-slate-400">Location:</span> Bishnupur, West Bengal, India</p>
          <p><span className="text-slate-400">Focus:</span> Scalable web architecture, distributed systems, high-performance APIs, visual computing.</p>
        </div>
      );
    } else if (lower === "skills") {
      outputNode = (
        <div className="space-y-2 text-xs md:text-sm my-1">
          <p className="text-amber-400 font-bold">Technical Core Stack:</p>
          <div className="flex flex-wrap gap-1.5">
            {["TypeScript", "JavaScript", "Python", "Go (Golang)", "C++", "Java", "Next.js 14", "React", "Node.js", "Express", "Distributed Systems", "Cloud Architecture", "Cloudflare Workers", "MongoDB Atlas", "Supabase", "Visual Computing"].map((tech) => (
              <span key={tech} className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded text-xs font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
      );
    } else if (lower === "projects" || lower === "ventures") {
      outputNode = (
        <div className="space-y-2 text-xs md:text-sm my-1">
          <p className="text-amber-400 font-bold">Flagship Ventures & Systems:</p>
          <div className="space-y-1 pl-2 border-l border-amber-500/30">
            <p><span className="text-amber-300 font-bold">1. Shadow Arrow Enterprise:</span> High-speed web infrastructure & cloud architecture studio.</p>
            <p><span className="text-amber-300 font-bold">2. OmniKart E-Commerce:</span> Sub-second serverless catalog & transaction pipeline.</p>
            <p><span className="text-amber-300 font-bold">3. Visual Computing Lab:</span> Real-time graphics, engine pipelines & interactive UI engine.</p>
          </div>
        </div>
      );
    } else if (lower === "books" || lower === "publications") {
      outputNode = (
        <div className="space-y-2 text-xs md:text-sm my-1">
          <p className="text-amber-400 font-bold">Technical Publications Pipeline:</p>
          <p className="text-slate-300">Live sync engine connected to Google Books & Amazon ISBN Index.</p>
          <p className="text-slate-400 text-xs italic">Any book published under "Bijoy Lohar" will automatically populate on site!</p>
        </div>
      );
    } else if (lower === "contact" || lower === "socials") {
      outputNode = (
        <div className="space-y-1.5 text-xs md:text-sm my-1">
          <p className="text-amber-400 font-bold">Direct Verification Links:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
            <a href="https://www.commudle.com/users/Bijoylohar" target="_blank" rel="noreferrer" className="text-amber-300 hover:underline">🔗 Commudle: @Bijoylohar</a>
            <a href="https://topmate.io/bijoy_lohar" target="_blank" rel="noreferrer" className="text-amber-300 hover:underline">🔗 Topmate Mentorship: bijoy_lohar</a>
            <a href="https://www.linkedin.com/in/bijoy-lohar-5a508832b" target="_blank" rel="noreferrer" className="text-amber-300 hover:underline">🔗 LinkedIn: Bijoy Lohar</a>
            <a href="https://github.com/loharbijoy2005-a11y" target="_blank" rel="noreferrer" className="text-amber-300 hover:underline">🔗 GitHub: loharbijoy2005-a11y</a>
            <a href="https://www.imdb.com/name/nm18949942/" target="_blank" rel="noreferrer" className="text-amber-300 hover:underline">🔗 IMDb: Bijoy Lohar</a>
          </div>
        </div>
      );
    } else if (lower === "gaming") {
      outputNode = (
        <div className="space-y-1 text-xs md:text-sm my-1 pl-2 border-l border-amber-500/30">
          <p className="text-amber-400 font-bold">Visual Computing & Gaming Interest:</p>
          <p className="text-slate-300">Enthusiastic about real-time graphics rendering, game physics simulation engines, 3D visual pipelines (Blender), and high-frame-rate rendering architectures.</p>
        </div>
      );
    } else if (lower === "date") {
      outputNode = (
        <p className="text-xs font-mono text-amber-300">
          System Time: {new Date().toString()}
        </p>
      );
    } else if (lower === "matrix") {
      setIsMatrixActive(!isMatrixActive);
      outputNode = (
        <p className="text-amber-400 font-mono text-xs">
          {isMatrixActive ? "Matrix mode deactivated." : "⚡ Golden Matrix mode activated!"}
        </p>
      );
    } else if (lower.startsWith("sudo")) {
      outputNode = (
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono py-1">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span>Access Granted: Root Founder permissions verified for Bijoy Lohar.</span>
        </div>
      );
    } else {
      outputNode = (
        <p className="text-rose-400 text-xs font-mono">
          Command not recognized: "{trimmed}". Type <span className="text-amber-300 underline font-bold cursor-pointer" onClick={() => executeCommand("help")}>help</span> for list of commands.
        </p>
      );
    }

    setHistory((prev) => [...prev, { id, command: trimmed, output: outputNode, timestamp }]);
    setCommandList((prev) => [...prev, trimmed]);
    setCommandIndex(-1);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandList.length > 0) {
        const nextIdx = commandIndex === -1 ? commandList.length - 1 : Math.max(0, commandIndex - 1);
        setCommandIndex(nextIdx);
        setInputVal(commandList[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandIndex >= 0) {
        const nextIdx = commandIndex + 1;
        if (nextIdx < commandList.length) {
          setCommandIndex(nextIdx);
          setInputVal(commandList[nextIdx]);
        } else {
          setCommandIndex(-1);
          setInputVal("");
        }
      }
    }
  };

  const quickCommands = ["profile", "skills", "projects", "books", "contact", "gaming", "clear"];

  return (
    <section className="py-16 px-4 md:px-8 max-w-[1040px] mx-auto" id="terminal-console">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <span className="font-mono text-xs font-bold text-amberAccent uppercase tracking-widest block mb-1">
          03 / INTERACTIVE CLI CONSOLE
        </span>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-deepInk tracking-tight flex items-center gap-3">
          Interactive Command Terminal
          <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-600 border border-amber-500/30 text-xs font-mono rounded-full font-bold">
            Gold Edition
          </span>
        </h2>
      </motion.div>

      {/* Terminal Window Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-amber-500/30 bg-[#0A0D14] shadow-[0_0_40px_rgba(245,158,11,0.14)] overflow-hidden font-mono"
      >
        {/* Top Header Bar */}
        <div className="bg-[#121620] px-4 py-3 border-b border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-3 text-xs font-bold text-amber-400/90 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              bijoy@lohar-os:~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-slate-500">
              <Cpu className="w-3 h-3 text-amber-500/70" />
              CPU: 0.4%
            </span>
            <button
              onClick={() => executeCommand("clear")}
              title="Clear terminal"
              className="p-1 text-slate-400 hover:text-amber-400 transition-colors rounded hover:bg-amber-500/10"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Action Chips */}
        <div className="bg-[#0e121b] px-4 py-2 border-b border-amber-500/10 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-slate-400 text-[11px] font-sans font-medium mr-1">Quick Run:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 hover:border-amber-400 text-amber-300 hover:bg-amber-500/20 transition-all font-mono text-xs"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Console Log Scrollable Area (Internal scroll ONLY) */}
        <div
          ref={scrollContainerRef}
          className={`p-4 md:p-6 min-h-[260px] max-h-[400px] overflow-y-auto space-y-4 text-xs md:text-sm text-slate-200 transition-colors ${
            isMatrixActive ? "bg-black text-amber-400 border-amber-400/40" : ""
          }`}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <span>❯</span>
                <span className="text-amber-300">{item.command}</span>
                <span className="text-[10px] text-slate-500 font-normal ml-auto">{item.timestamp}</span>
              </div>
              <div className="pl-4 text-slate-300">{item.output}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 text-amber-400 pt-2">
            <span className="font-bold text-amber-400 shrink-0">bijoy@lohar-os:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help' or any command..."
              className="w-full bg-transparent border-none outline-none text-amber-200 placeholder-slate-600 font-mono text-xs md:text-sm"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck={false}
            />
            <button
              onClick={() => executeCommand(inputVal)}
              className="p-1 text-amber-400 hover:text-amber-300 shrink-0"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TerminalConsole;

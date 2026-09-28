"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, CornerDownLeft, Trash2, ShieldAlert, Cpu, Sparkles, Code2, Globe, ShieldCheck } from "lucide-react";

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

  // Initialize terminal welcome banner
  useEffect(() => {
    const welcomeItem: CommandHistoryItem = {
      id: "welcome",
      command: "system --init --version 3.0",
      output: (
        <div className="space-y-2 text-[#D4CEBF] font-mono text-xs sm:text-sm">
          <div className="text-amberAccent font-bold flex flex-wrap items-center gap-2 text-sm sm:text-base">
            <Sparkles className="w-4 h-4 text-amberAccent animate-pulse" />
            <span>SHADOW ARROW OS CLI &bull; BIJOY LOHAR TERMINAL (v3.0)</span>
          </div>
          <p className="text-muted leading-relaxed">
            Type <span className="text-amberAccent font-bold">help</span> or click any quick command chip below to inspect founder records, technical stack, ventures, and system status.
          </p>
        </div>
      ),
      timestamp: new Date().toLocaleTimeString(),
    };
    setHistory([welcomeItem]);
  }, []);

  // Auto scroll to latest output line inside internal container ONLY
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
          <p className="text-amberAccent font-bold">Available System Commands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs font-mono">
            <div><span className="text-amberAccent font-bold">profile</span> - Multi-disciplinary founder summary</div>
            <div><span className="text-amberAccent font-bold">skills</span> - Core engineering &amp; tech stack</div>
            <div><span className="text-amberAccent font-bold">ventures</span> - Shadow Arrow &amp; flagship projects</div>
            <div><span className="text-amberAccent font-bold">books</span> - Author publication &amp; ISBN pipeline</div>
            <div><span className="text-amberAccent font-bold">contact</span> - Direct comms &amp; verified profiles</div>
            <div><span className="text-amberAccent font-bold">system</span> - Real-time client browser telemetry</div>
            <div><span className="text-amberAccent font-bold">sudo</span> - Root founder access authentication</div>
            <div><span className="text-amberAccent font-bold">matrix</span> - Toggle golden matrix glow effect</div>
            <div><span className="text-amberAccent font-bold">clear</span> - Clear console log output</div>
          </div>
        </div>
      );
    } else if (lower === "profile" || lower === "whoami") {
      outputNode = (
        <div className="space-y-1.5 text-xs sm:text-sm border-l-2 border-amberAccent pl-3.5 my-1">
          <p className="text-amberAccent font-bold text-sm">ENTITY: Bijoy Lohar</p>
          <p><span className="text-muted font-bold">Role:</span> Full-Stack Software Engineer &bull; Systems Architect &bull; Founder</p>
          <p><span className="text-muted font-bold">Venture:</span> Founder of Shadow Arrow (<a href="https://shadowarrow.in" target="_blank" rel="noreferrer" className="text-amberAccent underline font-bold">shadowarrow.in</a>)</p>
          <p><span className="text-muted font-bold">Location:</span> Bishnupur, West Bengal, India</p>
          <p><span className="text-muted font-bold">Core Focus:</span> High-throughput software architecture, cloud infrastructure, real-time gaming systems &amp; visual computing.</p>
        </div>
      );
    } else if (lower === "skills" || lower === "tech") {
      outputNode = (
        <div className="space-y-2 text-xs sm:text-sm my-1">
          <p className="text-amberAccent font-bold">Engineering Technical Stack:</p>
          <div className="flex flex-wrap gap-1.5">
            {["TypeScript", "JavaScript", "Python", "Go (Golang)", "C++", "Java", "Next.js", "React", "Node.js", "Express", "Distributed Systems", "Cloud Architecture", "Cloudflare Workers", "MongoDB Atlas", "Supabase", "Blender 3D", "DaVinci Resolve"].map((tech) => (
              <span key={tech} className="px-2.5 py-1 bg-amberAccent/10 border border-amberAccent/30 text-amberAccent rounded-xl text-xs font-mono font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      );
    } else if (lower === "ventures" || lower === "projects") {
      outputNode = (
        <div className="space-y-2 text-xs sm:text-sm my-1">
          <p className="text-amberAccent font-bold">Flagship Ventures &amp; Engineering Systems:</p>
          <div className="space-y-1.5 pl-3 border-l-2 border-amberAccent/40">
            <p><strong className="text-deepInk">1. Shadow Arrow Enterprise:</strong> High-speed web infrastructure, custom SaaS software &amp; cloud architecture studio. (<a href="https://shadowarrow.in" target="_blank" rel="noreferrer" className="text-amberAccent underline font-bold">shadowarrow.in</a>)</p>
            <p><strong className="text-deepInk">2. Expedition Ecosystem:</strong> Multi-disciplinary web architecture, serverless microservices &amp; real-time engines.</p>
            <p><strong className="text-deepInk">3. Visual Computing Lab:</strong> Real-time 3D graphics rendering, physics simulation &amp; gaming systems.</p>
          </div>
        </div>
      );
    } else if (lower === "books" || lower === "publications") {
      outputNode = (
        <div className="space-y-2 text-xs sm:text-sm my-1">
          <p className="text-amberAccent font-bold">Author Publications &amp; ISBN Registry:</p>
          <div className="p-3 bg-studioSubtle border border-amberAccent/30 rounded-2xl space-y-1">
            <p className="text-deepInk font-bold">Architecting Scalable Web Systems</p>
            <p className="text-xs text-amberAccent font-mono">ISBN: 9789334528954 &bull; Author: Bijoy Lohar &bull; Google Books Partner Review</p>
            <p className="text-xs text-muted">In-depth technical manual on high-throughput software architecture and cloud scaling.</p>
          </div>
        </div>
      );
    } else if (lower === "contact" || lower === "socials") {
      outputNode = (
        <div className="space-y-2 text-xs sm:text-sm my-1">
          <p className="text-amberAccent font-bold">Verified Direct Links:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
            <a href="https://github.com/loharbijoy2005-a11y" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-studioSubtle border border-borderWarm hover:border-amberAccent text-deepInk hover:text-amberAccent flex items-center justify-between font-bold transition-all">
              <span>GitHub (loharbijoy2005-a11y)</span>
              <span>↗</span>
            </a>
            <a href="https://www.linkedin.com/in/bijoy-lohar-5a508832b" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-studioSubtle border border-borderWarm hover:border-amberAccent text-deepInk hover:text-amberAccent flex items-center justify-between font-bold transition-all">
              <span>LinkedIn (Bijoy Lohar)</span>
              <span>↗</span>
            </a>
            <a href="https://shadowarrow.in" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-studioSubtle border border-borderWarm hover:border-amberAccent text-deepInk hover:text-amberAccent flex items-center justify-between font-bold transition-all">
              <span>Shadow Arrow (shadowarrow.in)</span>
              <span>↗</span>
            </a>
            <a href="https://developers.google.com/profile/u/101253410801307724262" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-studioSubtle border border-borderWarm hover:border-amberAccent text-deepInk hover:text-amberAccent flex items-center justify-between font-bold transition-all">
              <span>Google Developer Profile</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      );
    } else if (lower === "system" || lower === "status") {
      outputNode = (
        <div className="space-y-1 text-xs font-mono text-amberAccent py-1">
          <p className="font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>SHADOW ARROW OS &bull; ALL SYSTEMS OPERATIONAL</span>
          </p>
          <p className="text-muted">Client Locale Time: {new Date().toLocaleString()}</p>
          <p className="text-muted">User Agent: {typeof navigator !== "undefined" ? navigator.userAgent.substring(0, 50) + "..." : "Browser Client"}</p>
        </div>
      );
    } else if (lower === "matrix") {
      setIsMatrixActive(!isMatrixActive);
      outputNode = (
        <p className="text-amberAccent font-mono text-xs font-bold">
          {isMatrixActive ? "Matrix mode deactivated." : "⚡ Golden Cyber Matrix Mode Activated!"}
        </p>
      );
    } else if (lower.startsWith("sudo")) {
      outputNode = (
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono py-1 font-bold">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span>Access Granted: Root Founder permissions verified for Bijoy Lohar.</span>
        </div>
      );
    } else {
      outputNode = (
        <p className="text-rose-400 text-xs font-mono">
          Command not recognized: &quot;{trimmed}&quot;. Type <span className="text-amberAccent underline font-bold cursor-pointer" onClick={() => executeCommand("help")}>help</span> for command list.
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

  const quickCommands = ["profile", "skills", "ventures", "books", "contact", "system", "clear"];

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 max-w-[1040px] mx-auto text-deepInk" id="terminal-console">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 border-b border-borderWarm pb-6"
      >
        <span className="font-mono text-xs font-bold text-amberAccent uppercase tracking-widest block mb-1">
          03 / INTERACTIVE CLI CONSOLE
        </span>
        <h2 className="font-heading font-black text-3xl sm:text-4xl text-deepInk tracking-tight flex items-center gap-3">
          Interactive Command Terminal
          <span className="px-3 py-1 bg-amberAccent/10 text-amberAccent border border-amberAccent/30 text-xs font-mono rounded-full font-bold">
            Gold Edition v3.0
          </span>
        </h2>
      </motion.div>

      {/* Terminal Window Container — High Contrast Dark Gold Studio Design */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-amberAccent/40 bg-[#0E0C08] shadow-[0_0_50px_rgba(229,193,88,0.18)] overflow-hidden font-mono"
      >
        {/* Top Header Bar */}
        <div className="bg-[#18140D] px-5 py-3.5 border-b border-amberAccent/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amberAccent inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            <span className="ml-3 text-xs font-bold text-amberAccent flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-amberAccent" />
              Shadow Arrow OS (zsh)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-muted">
              <Cpu className="w-3.5 h-3.5 text-amberAccent" />
              <span>ACTIVE NODE</span>
            </span>
            <button
              onClick={() => executeCommand("clear")}
              title="Clear terminal log"
              className="p-1.5 text-muted hover:text-amberAccent transition-colors rounded-lg hover:bg-amberAccent/10"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="bg-[#12100B] px-4 py-2.5 border-b border-amberAccent/20 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-muted text-xs font-mono font-bold mr-1 shrink-0">Quick Run:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-3 py-1 rounded-xl bg-amberAccent/10 border border-amberAccent/30 hover:border-amberAccent text-amberAccent hover:bg-amberAccent hover:text-studioCanvas transition-all font-mono text-xs font-bold shrink-0 shadow-sm"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Console Log Scrollable Output Area */}
        <div
          ref={scrollContainerRef}
          className={`p-5 md:p-7 min-h-[280px] max-h-[420px] overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-200 transition-colors ${
            isMatrixActive ? "bg-black text-amberAccent border-amberAccent/50" : ""
          }`}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-amberAccent font-bold">
                <span>❯</span>
                <span className="text-amberAccent font-mono font-bold">{item.command}</span>
                <span className="text-[10px] text-muted font-normal ml-auto">{item.timestamp}</span>
              </div>
              <div className="pl-4 text-[#D4CEBF] font-normal">{item.output}</div>
            </div>
          ))}

          {/* Active Command Input Line */}
          <div className="flex items-center gap-2.5 text-amberAccent pt-3 border-t border-amberAccent/20">
            <span className="font-bold text-amberAccent shrink-0 font-mono text-xs sm:text-sm">
              shadow-arrow-os:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help' or any command..."
              className="w-full bg-transparent border-none outline-none text-deepInk placeholder:text-muted font-mono text-xs sm:text-sm font-semibold"
              autoCapitalize="none"
              autoComplete="off"
              spellCheck={false}
            />
            <button
              onClick={() => executeCommand(inputVal)}
              className="p-1.5 text-amberAccent hover:text-amberLight shrink-0"
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

"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, CornerDownLeft, Trash2, ShieldAlert, Cpu, Sparkles, Code2, Globe, ShieldCheck, Activity } from "lucide-react";
import { ArchitectureVisualizer } from "@/components/ArchitectureVisualizer";

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
  const [isArchModalOpen, setIsArchModalOpen] = useState(false);

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
            <div><span className="text-amberAccent font-bold">system</span> - Launch live distributed architecture visualizer</div>
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
          <p className="text-amberAccent font-bold">Live Synchronized Author Bibliography:</p>
          <div className="p-3 bg-studioSubtle border border-amberAccent/30 rounded-2xl space-y-1.5">
            <p className="text-deepInk font-bold">Goodreads &amp; Open Library Live Index</p>
            <p className="text-xs text-muted">Author publications are fetched dynamically from Goodreads and Open Library registries.</p>
            <div className="flex items-center gap-3 pt-1 text-xs font-mono">
              <a href="https://www.goodreads.com/bijoylohar" target="_blank" rel="noreferrer" className="text-amberAccent underline font-bold">Goodreads Profile ↗</a>
              <a href="/books" className="text-amberAccent underline font-bold">View /books Page ↗</a>
            </div>
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
    } else if (lower === "system" || lower === "status" || lower === "arch" || lower === "topology") {
      setIsArchModalOpen(true);
      outputNode = (
        <div className="space-y-2 text-xs font-mono text-amberAccent py-1">
          <p className="font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>SHADOW ARROW OS &bull; ALL SYSTEMS OPERATIONAL</span>
          </p>
          <p className="text-muted">Launching Live Topology Data Flow Inspector Modal...</p>
          <button
            onClick={() => setIsArchModalOpen(true)}
            className="inline-flex items-center gap-2 mt-1 px-3 py-1.5 rounded-xl bg-amberAccent text-studioCanvas font-bold text-xs hover:bg-amberLight transition-all"
          >
            <Activity className="w-3.5 h-3.5" /> Re-open Architecture Topology Modal
          </button>
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      e.preventDefault();
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandList.length > 0) {
        const nextIdx = commandIndex + 1;
        if (nextIdx < commandList.length) {
          setCommandIndex(nextIdx);
          setInputVal(commandList[commandList.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandIndex > 0) {
        const prevIdx = commandIndex - 1;
        setCommandIndex(prevIdx);
        setInputVal(commandList[commandList.length - 1 - prevIdx]);
      } else if (commandIndex === 0) {
        setCommandIndex(-1);
        setInputVal("");
      }
    }
  };

  return (
    <section className="py-16 px-4 max-w-[1040px] mx-auto" id="terminal">
      {/* Outer Console Window Card */}
      <div className={`bg-studioCard border rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${
        isMatrixActive 
          ? "border-amberAccent shadow-[0_0_50px_rgba(229,193,88,0.25)]" 
          : "border-borderWarm hover:border-amberAccent/40"
      }`}>
        {/* Terminal Header Bar */}
        <div className="bg-studioSubtle px-4 py-3 border-b border-borderWarm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs font-bold text-deepInk flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-amberAccent" />
              shadow-arrow-os &bull; zsh
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => executeCommand("clear")}
              className="p-1.5 text-muted hover:text-rose-400 transition-colors rounded-lg hover:bg-studioCard"
              title="Clear Terminal Output"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Console Body Area */}
        <div className="p-4 sm:p-6 font-mono">
          {/* Scrollable Command Output History Box */}
          <div 
            ref={scrollContainerRef}
            className="max-h-[380px] overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-amberAccent/20 scrollbar-track-transparent"
          >
            {history.map((item) => (
              <div key={item.id} className="space-y-1">
                {/* Command Line Prompt */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-deepInk">
                  <span className="text-amberAccent font-bold">shadow-arrow-os:~$</span>
                  <span className="font-bold text-amberAccent">{item.command}</span>
                  <span className="ml-auto text-[10px] text-muted">{item.timestamp}</span>
                </div>
                {/* Command Output */}
                <div className="pl-4 text-xs sm:text-sm text-[#D4CEBF] leading-relaxed">
                  {item.output}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Command Chips */}
          <div className="mt-6 pt-4 border-t border-borderWarm flex flex-wrap items-center gap-2">
            <span className="text-[11px] text-muted font-bold uppercase tracking-wider mr-1">
              Quick Run:
            </span>
            {["profile", "skills", "ventures", "books", "system", "contact", "clear"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2.5 py-1 text-xs bg-studioSubtle hover:bg-amberAccent/20 border border-borderWarm hover:border-amberAccent text-deepInk hover:text-amberAccent rounded-xl font-mono font-bold transition-all"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Native Form Input Field for Mobile Keyboard Enter Support */}
          <form onSubmit={handleSubmit} className="mt-4 pt-3 border-t border-borderWarm/60 flex items-center gap-1.5 sm:gap-2">
            <span className="text-amberAccent font-bold text-xs sm:text-sm shrink-0 hidden sm:inline">shadow-arrow-os:~$</span>
            <span className="text-amberAccent font-bold text-sm shrink-0 sm:hidden">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help' or any command..."
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck="false"
              className="w-full bg-transparent text-sm text-deepInk font-mono font-semibold placeholder:text-muted/60 focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-amberAccent/10 border border-amberAccent/30 text-amberAccent hover:bg-amberAccent hover:text-studioCanvas transition-all shrink-0"
              title="Execute Command"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Architecture Visualizer Modal */}
      <ArchitectureVisualizer
        isModal={true}
        isOpen={isArchModalOpen}
        onClose={() => setIsArchModalOpen(false)}
      />
    </section>
  );
};

export default TerminalConsole;

"use client";

import React, { useState, useEffect } from "react";
import { Activity, ShieldCheck, Wifi, Clock, Server } from "lucide-react";

export const SystemTelemetry: React.FC = () => {
  const [timeUtc, setTimeUtc] = useState<string>("");
  const [ping, setPing] = useState<number>(14);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeUtc(now.toUTCString().split(" ")[4] + " UTC");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Randomize ping subtly to feel dynamic
    const pingInterval = setInterval(() => {
      setPing(Math.floor(11 + Math.random() * 6));
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(pingInterval);
    };
  }, []);

  return (
    <div className="w-full py-4 px-6 bg-studioCard border border-amberAccent/30 rounded-2xl shadow-lg flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
      {/* Left System Status */}
      <div className="flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
        <div className="flex items-center gap-1.5 font-bold text-deepInk">
          <ShieldCheck className="w-4 h-4 text-amberAccent" />
          <span>SHADOW ARROW OS &bull; ALL SYSTEMS OPERATIONAL</span>
        </div>
      </div>

      {/* Right Telemetry Specs */}
      <div className="flex flex-wrap items-center gap-4 text-muted">
        <div className="flex items-center gap-1.5 bg-amberAccent/10 border border-amberAccent/20 px-2.5 py-1 rounded-lg text-amberAccent font-bold">
          <Wifi className="w-3.5 h-3.5" />
          <span>LATENCY: {ping}ms</span>
        </div>

        <div className="flex items-center gap-1.5 bg-studioSubtle border border-borderWarm px-2.5 py-1 rounded-lg text-deepInk">
          <Server className="w-3.5 h-3.5 text-amberAccent" />
          <span>EDGE: BLR-01</span>
        </div>

        <div className="flex items-center gap-1.5 bg-studioSubtle border border-borderWarm px-2.5 py-1 rounded-lg text-deepInk">
          <Activity className="w-3.5 h-3.5 text-amberAccent" />
          <span>LOAD: 0.04</span>
        </div>

        <div className="flex items-center gap-1.5 bg-studioSubtle border border-borderWarm px-2.5 py-1 rounded-lg text-amberAccent font-bold">
          <Clock className="w-3.5 h-3.5" />
          <span>{timeUtc || "10:45:00 UTC"}</span>
        </div>
      </div>
    </div>
  );
};

export default SystemTelemetry;

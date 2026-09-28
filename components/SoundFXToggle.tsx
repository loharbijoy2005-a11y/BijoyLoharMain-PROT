"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Web Audio API Synthesizer for Tactical UI Sound FX (Zero external mp3 needed)
class SoundSynth {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public playHover() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch {
      // AudioContext fallback
    }
  }

  public playClick() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(587.33, this.ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(1174.66, this.ctx.currentTime + 0.08); // D6
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch {
      // AudioContext fallback
    }
  }
}

export const synth = new SoundSynth();

export const SoundFXToggle: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSound = () => {
    const next = !isEnabled;
    setIsEnabled(next);
    synth.enabled = next;
    if (next) {
      synth.playClick();
    }
  };

  useEffect(() => {
    // Add global sound triggers on buttons and links
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, input, [role='button']")) {
        synth.playClick();
      }
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  return (
    <button
      onClick={toggleSound}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all shadow-md ${
        isEnabled
          ? "bg-amberAccent/15 border border-amberAccent/40 text-amberAccent hover:bg-amberAccent/25"
          : "bg-studioSubtle border border-borderWarm text-muted hover:text-deepInk"
      }`}
      title={isEnabled ? "Tactical Audio FX Active (Click to Mute)" : "Muted (Click to Enable Audio FX)"}
    >
      {isEnabled ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-amberAccent animate-pulse" />
          <span>SFX ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-muted" />
          <span>SFX OFF</span>
        </>
      )}
    </button>
  );
};

export default SoundFXToggle;

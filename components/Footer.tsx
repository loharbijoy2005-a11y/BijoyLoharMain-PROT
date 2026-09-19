"use client";

import React, { useState } from "react";
import { MapPin, Shield, Send, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  return (
    <footer className="bg-studioCard border-t border-borderWarm pt-20 pb-8" id="contact">
      <div className="max-w-[1040px] mx-auto px-4">
        
        {/* Direct Comms Contact Box */}
        <div className="bg-studioSubtle border border-borderWarm rounded-3xl p-8 md:p-12 shadow-sm mb-20">
          <div className="max-w-[640px] mb-8">
            <span className="font-mono text-xs font-bold text-amberAccent uppercase tracking-widest block mb-1">
              03 / DIRECT COMMUNICATIONS
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-deepInk tracking-tight mb-3">
              Open Direct Line
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you are looking to collaborate on high-throughput web architecture, Shadow Arrow partnerships, or technical consulting, send a direct note.
            </p>

            <div className="flex flex-wrap gap-4 mt-4 text-xs font-mono text-slate-700">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amberAccent" /> Bishnupur, West Bengal, India
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-amberAccent" /> Founder @ Shadow Arrow
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-studioCard border border-borderWarm rounded-xl text-sm text-deepInk focus:outline-none focus:border-amberAccent focus:ring-1 focus:ring-amberAccent transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="email@domain.com"
                  className="w-full px-4 py-3 bg-studioCard border border-borderWarm rounded-xl text-sm text-deepInk focus:outline-none focus:border-amberAccent focus:ring-1 focus:ring-amberAccent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                Subject
              </label>
              <input
                type="text"
                required
                placeholder="Systems Inquiry / Shadow Arrow Collaboration"
                className="w-full px-4 py-3 bg-studioCard border border-borderWarm rounded-xl text-sm text-deepInk focus:outline-none focus:border-amberAccent focus:ring-1 focus:ring-amberAccent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                Message
              </label>
              <textarea
                rows={4}
                required
                placeholder="Brief details about your project or inquiry..."
                className="w-full px-4 py-3 bg-studioCard border border-borderWarm rounded-xl text-sm text-deepInk focus:outline-none focus:border-amberAccent focus:ring-1 focus:ring-amberAccent transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-deepInk hover:bg-amberAccent text-white text-sm font-bold rounded-xl transition-all shadow-md"
            >
              {loading ? (
                <span>Sending Message...</span>
              ) : submitted ? (
                <span>Message Delivered! ✓</span>
              ) : (
                <>
                  <span>Send Direct Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-borderWarm">
          <div>
            <span className="font-heading font-extrabold text-lg text-deepInk block">
              BIJOY LOHAR
            </span>
            <span className="text-xs text-slate-500">
              Founder of Shadow Arrow &bull; Systems Architect
            </span>
          </div>

          <div className="flex gap-6 text-xs font-bold text-slate-700">
            <a
              href="https://www.shadowarrow.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amberAccent flex items-center gap-1 transition-colors"
            >
              <span>shadowarrow.in</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://github.com/loharbijoy2005-a11y"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amberAccent flex items-center gap-1 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="#hero" className="hover:text-amberAccent transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-2">
          <p>© 2026 Bijoy Lohar. Founder of Shadow Arrow.</p>
          <p className="font-mono">Bishnupur, West Bengal, India</p>
        </div>

      </div>
    </footer>
  );
};

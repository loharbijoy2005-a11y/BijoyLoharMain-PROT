"use client";

import React from "react";
import { Instagram, Facebook, Github, ArrowUpRight, Radio, Gamepad2 } from "lucide-react";

export const CreatorMatrix: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-[1040px] mx-auto" id="creator-matrix">
      <div className="mb-10">
        <span className="font-mono text-xs font-bold text-amberAccent uppercase tracking-widest block mb-1">
          02 / CREATOR MATRIX & BROADCASTING
        </span>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-deepInk tracking-tight">
          Dual-Channel Media & Creator Hub
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Arrow Gaming */}
        <a
          href="https://www.instagram.com/arrow_gaming_2005"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-8 bg-studioCard border border-borderWarm rounded-3xl shadow-sm hover:shadow-xl hover:border-amberAccent transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="w-12 h-12 bg-amberLight text-amberAccent rounded-2xl flex items-center justify-center">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-rose-100 text-rose-700 font-mono text-xs font-bold rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
                Live Gaming Channel
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-deepInk group-hover:text-amberAccent transition-colors mb-1">
              Arrow Gaming
            </h3>
            <p className="font-mono text-xs text-amber-700 font-bold mb-3">@arrow_gaming_2005</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Official gaming streams, esports gameplay highlights, and Free Fire content creation channel.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-borderWarm flex items-center justify-between text-xs font-bold text-deepInk group-hover:text-amberAccent">
            <span>Follow @arrow_gaming_2005 on Instagram</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </a>

        {/* Card 2: Lost Gaming */}
        <a
          href="https://www.instagram.com/lost_gaming_2005"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-8 bg-studioCard border border-borderWarm rounded-3xl shadow-sm hover:shadow-xl hover:border-amberAccent transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="w-12 h-12 bg-amberLight text-amberAccent rounded-2xl flex items-center justify-center">
                <Radio className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-amberLight text-amber-800 font-mono text-xs font-bold rounded-full">
                Secondary Stream Hub
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-deepInk group-hover:text-amberAccent transition-colors mb-1">
              Lost Gaming
            </h3>
            <p className="font-mono text-xs text-amber-700 font-bold mb-3">@lost_gaming_2005</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Secondary gaming hub, community announcements, and esports tournaments broadcasting.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-borderWarm flex items-center justify-between text-xs font-bold text-deepInk group-hover:text-amberAccent">
            <span>Follow @lost_gaming_2005 on Instagram</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </a>

      </div>

      {/* Verified Social Network Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <a
          href="https://www.facebook.com/share/1C6e2W4cQr/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 bg-studioCard border border-borderWarm hover:border-amberAccent rounded-2xl flex items-center justify-between group transition-all"
        >
          <div className="flex items-center gap-3">
            <Facebook className="w-5 h-5 text-blue-600" />
            <div>
              <span className="block font-heading font-bold text-sm text-deepInk">Facebook Profile</span>
              <span className="font-mono text-xs text-slate-500">Direct Social Network</span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amberAccent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <a
          href="https://github.com/loharbijoy2005-a11y"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 bg-studioCard border border-borderWarm hover:border-amberAccent rounded-2xl flex items-center justify-between group transition-all"
        >
          <div className="flex items-center gap-3">
            <Github className="w-5 h-5 text-deepInk" />
            <div>
              <span className="block font-heading font-bold text-sm text-deepInk">GitHub Engineering</span>
              <span className="font-mono text-xs text-slate-500">loharbijoy2005-a11y</span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amberAccent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

    </section>
  );
};

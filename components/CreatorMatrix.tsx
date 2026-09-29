"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Instagram, Facebook, Github, ArrowUpRight, Radio, Gamepad2, BookOpen } from "lucide-react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 24,
      stiffness: 200,
    },
  },
};

export const CreatorMatrix: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-[1040px] mx-auto" id="creator-matrix">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-deepInk tracking-tight">
          Verified Developer & Creator Footprint
        </h2>
      </motion.div>

      {/* Primary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Commudle Developer Hub */}
        <motion.a
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://www.commudle.com/users/Bijoylohar"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-8 bg-studioCard border border-borderWarm rounded-3xl shadow-sm hover:shadow-2xl hover:border-amberAccent transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-12 h-12 bg-amberLight text-amberAccent rounded-2xl flex items-center justify-center shadow-sm"
              >
                <Radio className="w-6 h-6" />
              </motion.div>
              <span className="px-3 py-1 bg-amberLight text-amber-800 font-mono text-xs font-bold rounded-full shadow-sm">
                Verified Community Profile
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-deepInk group-hover:text-amberAccent transition-colors mb-1">
              Commudle Tech Ecosystem
            </h3>
            <p className="font-mono text-xs text-amber-700 font-bold mb-3">@Bijoylohar</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Official developer community footprint, tech keynotes, hackathon engagements, and developer event credentials.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-borderWarm flex items-center justify-between text-xs font-bold text-deepInk group-hover:text-amberAccent">
            <span>View Commudle Developer Profile</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </motion.a>

        {/* Card 2: Visual Computing & Gaming Interest */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="group p-8 bg-studioCard border border-borderWarm rounded-3xl shadow-sm hover:border-amberAccent transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="w-12 h-12 bg-amberLight text-amberAccent rounded-2xl flex items-center justify-center shadow-sm">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-mono text-xs font-bold rounded-full shadow-sm">
                Tech Interest &amp; Passion
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-deepInk mb-1">
              Visual Computing &amp; Gaming
            </h3>
            <p className="font-mono text-xs text-amber-700 font-bold mb-3">Real-Time Graphics Pipeline</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Passionate about high-performance visual computing, game engine graphics architectures, shader development, and interactive digital simulation environments.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-borderWarm flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Exploring Real-Time Visual Systems</span>
            <Gamepad2 className="w-4 h-4 text-amberAccent" />
          </div>
        </motion.div>

      </div>

      {/* Verified Social Network Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        
        {/* Goodreads Profile */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://www.goodreads.com/bijoylohar"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 bg-studioCard border border-borderWarm hover:border-amberAccent rounded-2xl flex items-center justify-between group transition-all shadow-sm"
        >
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-amberAccent" />
            <div>
              <span className="block font-heading font-bold text-sm text-deepInk group-hover:text-amberAccent transition-colors">Goodreads Author</span>
              <span className="font-mono text-xs text-slate-500">goodreads.com/bijoylohar</span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amberAccent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.a>

        {/* Amazon Author Central */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://www.amazon.com/author/bijoylohar"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 bg-studioCard border border-borderWarm hover:border-amberAccent rounded-2xl flex items-center justify-between group transition-all shadow-sm"
        >
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-amberAccent" />
            <div>
              <span className="block font-heading font-bold text-sm text-deepInk group-hover:text-amberAccent transition-colors">Amazon Author Central</span>
              <span className="font-mono text-xs text-slate-500">amazon.com/author/bijoylohar</span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amberAccent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.a>

      </div>

    </section>
  );
};

export default CreatorMatrix;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Github, Twitter, ExternalLink } from "lucide-react";

const contactLinks = [
  {
    label: "Topmate",
    subtitle: "Book a 1:1 Call",
    href: "https://topmate.io/bijoy_lohar",
    icon: <ExternalLink className="w-5 h-5" />,
    accent: "bg-amber-500",
    textAccent: "text-amber-600",
    bgAccent: "bg-amber-50 hover:bg-amber-100 border-amber-200",
    featured: true,
  },
  {
    label: "LinkedIn",
    subtitle: "Connect professionally",
    href: "https://www.linkedin.com/in/bijoy-lohar-5a508832b",
    icon: <Linkedin className="w-5 h-5" />,
    accent: "bg-blue-600",
    textAccent: "text-blue-700",
    bgAccent: "bg-blue-50 hover:bg-blue-100 border-blue-200",
    featured: false,
  },
  {
    label: "GitHub",
    subtitle: "Open source work",
    href: "https://github.com/loharbijoy2005-a11y",
    icon: <Github className="w-5 h-5" />,
    accent: "bg-slate-900",
    textAccent: "text-slate-900",
    bgAccent: "bg-slate-100 hover:bg-slate-200 border-slate-200",
    featured: false,
  },
  {
    label: "X (Twitter)",
    subtitle: "Thoughts & updates",
    href: "https://x.com/BijoyLohar2005",
    icon: <Twitter className="w-5 h-5" />,
    accent: "bg-slate-950",
    textAccent: "text-slate-800",
    bgAccent: "bg-slate-100 hover:bg-slate-200 border-slate-200",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-8 bg-[#09090B] relative overflow-hidden"
    >
      {/* Subtle amber grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundSize: "32px 32px",
          backgroundImage:
            "linear-gradient(to right, #D97706 1px, transparent 1px), linear-gradient(to bottom, #D97706 1px, transparent 1px)",
        }}
      />

      <div className="max-w-[960px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-[11px] font-semibold tracking-widest text-amber-500 uppercase block mb-3">
            OPEN DIRECT COMMS
          </span>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-4">
            Let&apos;s Build Something
            <br />
            <span className="text-amber-400">Extraordinary</span>
          </h2>
          <p className="text-slate-400 text-base max-w-[480px] mx-auto leading-relaxed">
            Open for high-impact collaborations, systems architecture consultations, and technical partnerships.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={itemVariants}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between p-5 rounded-2xl border transition-all duration-200 ${
                link.featured
                  ? "bg-amber-500 border-amber-400 hover:bg-amber-400 col-span-1 sm:col-span-2"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    link.featured
                      ? "bg-amber-600/30 text-white"
                      : "bg-white/10 text-slate-300"
                  }`}
                >
                  {link.icon}
                </div>
                <div>
                  <span
                    className={`block font-heading font-bold text-lg ${
                      link.featured ? "text-white" : "text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`block text-xs font-mono ${
                      link.featured ? "text-amber-100" : "text-slate-500"
                    }`}
                  >
                    {link.subtitle}
                  </span>
                </div>
              </div>
              <ArrowUpRight
                className={`w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  link.featured ? "text-white" : "text-slate-500"
                }`}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-600 text-xs font-mono"
        >
          Based in Bishnupur, West Bengal, India · Available for remote collaboration worldwide
        </motion.p>
      </div>
    </section>
  );
};

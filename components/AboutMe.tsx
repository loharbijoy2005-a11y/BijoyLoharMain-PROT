"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  MapPin,
  Briefcase,
  Code2,
  Cloud,
  Github,
  Instagram,
  Facebook,
  Linkedin,
  Globe,
  ExternalLink,
  CheckCircle2,
  Zap,
  ArrowRight,
  Server,
  Layers,
} from "lucide-react";

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  instagramArrowGaming?: string;
  instagramLostGaming?: string;
  facebook?: string;
  shadowArrow?: string;
}

export interface AboutMeProps {
  name?: string;
  jobTitle?: string;
  ventureName?: string;
  location?: string;
  siteUrl?: string;
  imageUrl?: string;
  socials?: SocialLinks;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
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

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 250,
    },
  },
};

export const AboutMe: React.FC<AboutMeProps> = ({
  name = "Bijoy Lohar",
  jobTitle = "Full-Stack Software Engineer, Creative Developer & Digital Creator",
  ventureName = "Shadow Arrow",
  location = "Bishnupur, West Bengal, India",
  siteUrl = "https://www.bijoylohar.in",
  imageUrl = "https://github.com/loharbijoy2005-a11y.png",
  socials = {
    github: "https://github.com/loharbijoy2005-a11y",
    linkedin: "https://www.linkedin.com/in/bijoy-lohar-5a508832b",
    instagramArrowGaming: "https://www.instagram.com/arrowgaming2005/",
    instagramLostGaming: "https://www.instagram.com/lost_gaming_2005",
    facebook: "https://www.facebook.com/share/1C6e2W4cQr/",
    shadowArrow: "https://shadowarrow.in",
  },
}) => {
  const techStackPills = [
    { name: "React", icon: Code2 },
    { name: "Next.js", icon: Layers },
    { name: "TypeScript", icon: Code2 },
    { name: "Node.js", icon: Server },
    { name: "Cloudflare", icon: Cloud },
    { name: "Serverless APIs", icon: Zap },
  ];

  const socialButtons = [
    {
      name: "GitHub",
      handle: "loharbijoy2005-a11y",
      url: socials.github,
      icon: Github,
      glowColor: "hover:border-deepInk hover:bg-studioSubtle",
      badge: "Code Hub",
    },
    {
      name: "LinkedIn",
      handle: "bijoy-lohar",
      url: socials.linkedin,
      icon: Linkedin,
      glowColor: "hover:border-blue-600 hover:bg-blue-50/50",
      badge: "Professional Network",
    },
    {
      name: "Arrow Gaming",
      handle: "@arrowgaming2005",
      url: socials.instagramArrowGaming,
      icon: Instagram,
      glowColor: "hover:border-pink-500 hover:bg-pink-50/50",
      badge: "Creator Channel",
    },
    {
      name: "Lost Gaming",
      handle: "@lost_gaming_2005",
      url: socials.instagramLostGaming,
      icon: Instagram,
      glowColor: "hover:border-rose-500 hover:bg-rose-50/50",
      badge: "Gaming Media",
    },
    {
      name: "Facebook",
      handle: "Bijoy Lohar",
      url: socials.facebook,
      icon: Facebook,
      glowColor: "hover:border-blue-500 hover:bg-blue-50/50",
      badge: "Official Profile",
    },
    {
      name: "Shadow Arrow",
      handle: "shadowarrow.in",
      url: socials.shadowArrow,
      icon: Briefcase,
      glowColor: "hover:border-amberAccent hover:bg-amberLight/40",
      badge: "SaaS & Web Studio",
    },
  ];

  return (
    <section
      id="about-me"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-studioCanvas text-deepInk overflow-hidden"
    >
      {/* Warm Ambient Background Mesh Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-200/40 rounded-full blur-[140px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            y: [0, -40, 0],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-100/50 rounded-full blur-[120px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-[1040px] mx-auto space-y-12 z-10">
        
        {/* Section Header Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start"
        >
          <span className="font-mono text-xs font-bold text-amberAccent uppercase tracking-widest block mb-1">
            01 / ABOUT & BIOGRAPHY
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-deepInk tracking-tight">
            Software Engineer, Founder & Digital Creator
          </h2>
        </motion.div>

        {/* 1. Hero & Intro Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-studioCard border border-borderWarm rounded-3xl p-6 sm:p-10 shadow-sm"
        >
          {/* Avatar / Profile Photo */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col items-center text-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative group w-44 h-44 sm:w-52 sm:h-52 rounded-2xl p-1"
            >
              {/* Rotating Warm Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-600 opacity-80 blur-sm group-hover:opacity-100 transition-opacity"
              />

              <div className="relative w-full h-full rounded-xl overflow-hidden bg-studioSubtle p-1 border border-borderWarm">
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://ui-avatars.com/api/?name=Bijoy+Lohar&background=09090b&color=fff&size=400";
                  }}
                />
              </div>

              {/* Verified Badge Icon */}
              <div className="absolute bottom-2 right-2 bg-studioCard text-amberAccent p-1.5 rounded-full border border-borderWarm shadow-md" title="Verified Entity">
                <CheckCircle2 className="w-5 h-5 text-amberAccent" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-4 flex items-center gap-2 text-xs font-mono font-bold text-slate-600">
              <Globe className="w-3.5 h-3.5 text-amberAccent" />
              <span>www.bijoylohar.in</span>
            </motion.div>
          </motion.div>

          {/* Title, Headline & Tech Pills */}
          <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-1">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deepInk tracking-tight leading-tight">
                {name}
              </h1>
              <p className="text-base sm:text-lg text-amberAccent font-bold font-mono tracking-wide">
                {jobTitle}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono font-semibold text-slate-700">
              <span className="inline-flex items-center gap-1.5 bg-studioSubtle border border-borderWarm px-3 py-1.5 rounded-xl">
                <MapPin className="w-3.5 h-3.5 text-amberAccent" />
                {location}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-studioSubtle border border-borderWarm px-3 py-1.5 rounded-xl">
                <Briefcase className="w-3.5 h-3.5 text-amberAccent" />
                Founder of {ventureName} (Web Engineering & SaaS Studio)
              </span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-slate-600 text-sm sm:text-base leading-relaxed">
              As a passionate <strong className="text-deepInk">Full-Stack Software Engineer, Creative Developer & Digital Creator</strong>, 
              I architect high-performance web systems and digital products. I am the founder of <strong className="text-deepInk">{ventureName}</strong>, 
              a Web Engineering & SaaS studio, and manage creator handles <strong className="text-deepInk">Arrow Gaming</strong> & <strong className="text-deepInk">Lost Gaming</strong>.
            </motion.p>

            {/* Clean Tech Stack Pills */}
            <motion.div variants={itemVariants} className="space-y-2 pt-1">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase block tracking-wider">
                Tech Stack & Core Competencies:
              </span>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {techStackPills.map((pill) => {
                  const IconComp = pill.icon;
                  return (
                    <motion.span
                      key={pill.name}
                      variants={badgeVariants}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-studioSubtle border border-borderWarm text-xs font-medium text-slate-700 shadow-sm cursor-default"
                    >
                      <IconComp className="w-3.5 h-3.5 text-amberAccent" />
                      {pill.name}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>

            {/* Interactive CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 pt-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://shadowarrow.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-deepInk hover:bg-amberAccent text-white font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <span>Visit Shadow Arrow Studio</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-studioCard border border-borderWarm hover:border-amberAccent text-deepInk font-bold text-xs sm:text-sm shadow-sm transition-all"
              >
                <Zap className="w-4 h-4 text-amberAccent" />
                <span>Get In Touch</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* 2. Full-Width Clean Biography Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-studioCard border border-borderWarm rounded-3xl p-6 sm:p-10 shadow-sm space-y-6"
        >
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-extrabold text-deepInk flex items-center gap-2.5">
              <span>Biography & Media Presence</span>
              <span className="w-2.5 h-2.5 rounded-full bg-amberAccent inline-block animate-ping" />
            </h3>

            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                Based in <strong className="text-deepInk font-semibold">Bishnupur, West Bengal, India</strong>, 
                Bijoy Lohar specializes in engineering production-grade web applications, serverless API infrastructures, 
                and low-latency cloud systems.
              </p>

              <p>
                As the founder of <strong className="text-amberAccent font-semibold">{ventureName}</strong> (<a href="https://shadowarrow.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-deepInk font-bold">shadowarrow.in</a>), 
                a Web Engineering & SaaS studio, Bijoy drives end-to-end cloud and web product development.
              </p>

              <p>
                Alongside engineering, Bijoy manages digital creator handles including{" "}
                <a
                  href="https://www.instagram.com/arrowgaming2005/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-deepInk underline decoration-amberAccent underline-offset-2 hover:text-amberAccent transition-colors"
                >
                  Arrow Gaming (@arrowgaming2005)
                </a>{" "}
                and{" "}
                <a
                  href="https://www.instagram.com/lost_gaming_2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-deepInk underline decoration-amberAccent underline-offset-2 hover:text-amberAccent transition-colors"
                >
                  Lost Gaming (@lost_gaming_2005)
                </a>
                , broadcasting gaming streams and tech content.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3. Official Media & Profile Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-studioCard border border-borderWarm rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 text-center"
        >
          <div className="max-w-xl mx-auto space-y-1.5">
            <h3 className="font-heading text-xl font-bold text-deepInk">Official Media & Profiles</h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Connect across official web platforms, gaming handles, and developer channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialButtons.map((btn) => {
              if (!btn.url) return null;
              const Icon = btn.icon;
              return (
                <motion.a
                  key={btn.name}
                  href={btn.url}
                  target="_blank"
                  rel="noopener noreferrer me"
                  whileHover={{ scale: 1.04, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                  className={`flex items-center justify-between p-4 rounded-2xl bg-studioSubtle border border-borderWarm text-deepInk text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm group ${btn.glowColor}`}
                >
                  <div className="flex items-center gap-3 text-left">
                    <Icon className="w-5 h-5 shrink-0 text-slate-700 group-hover:text-amberAccent transition-colors" />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-deepInk group-hover:text-amberAccent transition-colors">{btn.name}</span>
                        {btn.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amberLight text-amber-800 font-bold border border-amberAccent/20">
                            {btn.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-slate-500 block">{btn.handle}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amberAccent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;

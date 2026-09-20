"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  User,
  Calendar,
  MapPin,
  Briefcase,
  Code2,
  Cloud,
  Gamepad2,
  Github,
  Instagram,
  Facebook,
  Globe,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";

// Social Links Type Definition
export interface SocialLinks {
  github?: string;
  instagramArrowGaming?: string;
  instagramLostGaming?: string;
  facebook?: string;
  shadowArrow?: string;
  youtube?: string;
}

export interface AboutMeProps {
  name?: string;
  birthDate?: string; // ISO 8601 Format: YYYY-MM-DD
  formattedBirthDate?: string;
  jobTitle?: string;
  ventureName?: string;
  location?: {
    locality: string;
    region: string;
    postalCode: string;
    country: string;
    fullText: string;
  };
  siteUrl?: string;
  imageUrl?: string;
  socials?: SocialLinks;
}

// Framer Motion Stagger Animation Variants
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
  birthDate = "2005-10-12",
  formattedBirthDate = "October 12, 2005",
  jobTitle = "Creative Developer & Founder",
  ventureName = "Shadow Arrow",
  location = {
    locality: "Dapanjuri, Bishnupur",
    region: "West Bengal",
    postalCode: "722157",
    country: "IN",
    fullText: "Dapanjuri, Bishnupur, Bankura, West Bengal - 722157, India",
  },
  siteUrl = "https://www.bijoylohar.in",
  imageUrl = "https://github.com/loharbijoy2005-a11y.png",
  socials = {
    github: "https://github.com/loharbijoy2005-a11y",
    instagramArrowGaming: "https://www.instagram.com/arrowgaming2005/",
    instagramLostGaming: "https://www.instagram.com/lost_gaming_2005",
    facebook: "https://www.facebook.com/share/1C6e2W4cQr/",
    shadowArrow: "https://www.shadowarrow.in",
    youtube: "",
  },
}) => {
  // Machine-Readable JSON-LD Schema Markup for Google Knowledge Graph
  const sameAsLinks = [
    socials.instagramArrowGaming,
    socials.instagramLostGaming,
    socials.github,
    socials.facebook,
    "https://www.linkedin.com/in/bijoy-lohar-5a508832b",
    "https://www.crunchbase.com/person/bijoy-lohar",
    socials.shadowArrow,
  ].filter((url): url is string => typeof url === "string" && url.trim().length > 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    "name": name,
    "alternateName": ["Arrow Gaming", "Lost Gaming"],
    "birthDate": birthDate,
    "jobTitle": jobTitle,
    "worksFor": {
      "@type": "Organization",
      "@id": `${socials.shadowArrow}/#organization`,
      "name": ventureName,
      "url": "https://www.crunchbase.com/organization/shadow-arrow",
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.locality,
      "addressRegion": location.region,
      "postalCode": location.postalCode,
      "addressCountry": location.country,
    },
    "url": siteUrl,
    "image": [
      imageUrl,
      `${siteUrl}/bijoy-lohar.jpg`
    ],
    "sameAs": sameAsLinks,
  };

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
      name: "Arrow Gaming",
      handle: "@arrow_gaming_2005",
      url: socials.instagramArrowGaming,
      icon: Instagram,
      glowColor: "hover:border-pink-500 hover:bg-pink-50/50",
      badge: "Live Streams",
    },
    {
      name: "Lost Gaming",
      handle: "@lost_gaming_2005",
      url: socials.instagramLostGaming,
      icon: Instagram,
      glowColor: "hover:border-rose-500 hover:bg-rose-50/50",
      badge: "Secondary Stream",
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
      icon: ShieldCheck,
      glowColor: "hover:border-amberAccent hover:bg-amberLight/40",
      badge: "Flagship Studio",
    },
  ];

  return (
    <section
      id="about-me"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-studioCanvas text-deepInk overflow-hidden"
    >

      {/* Dynamic Warm Ambient Background Mesh Elements */}
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
            01 / ABOUT BIJOY LOHAR & BIOGRAPHY
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-deepInk tracking-tight">
            Systems Developer, Content Creator & Founder
          </h2>
        </motion.div>

        {/* 1. Hero & Intro Card (Warm Studio Cream Theme) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-studioCard border border-borderWarm rounded-3xl p-6 sm:p-10 shadow-sm"
        >
          {/* Avatar / Profile Photo with Floating Animation */}
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
              {/* Animated Rotating Warm Border */}
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

          {/* Title, Headline & Magnetic CTA Triggers */}
          <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-1">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deepInk tracking-tight leading-tight">
                {name}
              </h1>
              <p className="text-base sm:text-lg text-amberAccent font-bold font-mono tracking-wide">
                Developer, Gaming Streamer & Founder of {ventureName}
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Welcome to the official homepage of <strong className="text-deepInk">{name}</strong>. 
              As a passionate <strong className="text-deepInk">Creative Developer & Founder of {ventureName}</strong>, 
              I specialize in architecting modern web experiences using React, Next.js, and TypeScript, 
              scalable backend APIs, cloud integration, and gaming content creation.
            </motion.p>

            {/* Floating Tech Pill Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1">
              <motion.span
                variants={badgeVariants}
                whileHover={{ scale: 1.06, y: -2 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-studioSubtle border border-borderWarm text-xs font-medium text-slate-700 shadow-sm cursor-default"
              >
                <Code2 className="w-3.5 h-3.5 text-amberAccent" /> React & TypeScript
              </motion.span>
              <motion.span
                variants={badgeVariants}
                whileHover={{ scale: 1.06, y: -2 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-studioSubtle border border-borderWarm text-xs font-medium text-slate-700 shadow-sm cursor-default"
              >
                <Cloud className="w-3.5 h-3.5 text-amberAccent" /> Cloud & API Systems
              </motion.span>
              <motion.span
                variants={badgeVariants}
                whileHover={{ scale: 1.06, y: -2 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-studioSubtle border border-borderWarm text-xs font-medium text-slate-700 shadow-sm cursor-default"
              >
                <Gamepad2 className="w-3.5 h-3.5 text-amberAccent" /> Content Creation & Streaming
              </motion.span>
            </motion.div>

            {/* Interactive CTA Buttons with Magnetic Hover */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 pt-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.shadowarrow.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-deepInk hover:bg-amberAccent text-white font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <span>Visit Shadow Arrow</span>
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

        {/* 2. Cards: Fast Facts & Detailed Bio (Studio Cream Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Fast Facts Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="lg:col-span-5 bg-studioCard border border-borderWarm rounded-3xl p-6 shadow-sm space-y-6 transition-all"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-borderWarm">
              <div className="p-2.5 rounded-xl bg-amberLight text-amberAccent">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading text-base font-bold text-deepInk">Fast Facts / Overview</h2>
                <p className="text-xs font-mono text-slate-500">Verified Knowledge Graph Metadata</p>
              </div>
            </div>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-studioSubtle border border-borderWarm">
                <User className="w-4 h-4 text-amberAccent mt-0.5 shrink-0" />
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 block uppercase">Full Name</span>
                  <span className="font-bold text-deepInk">{name}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-studioSubtle border border-borderWarm">
                <Calendar className="w-4 h-4 text-amberAccent mt-0.5 shrink-0" />
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 block uppercase">Date of Birth</span>
                  <span className="font-bold text-deepInk">{formattedBirthDate}</span>
                  <span className="text-xs text-slate-500 block font-mono">ISO: {birthDate}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-studioSubtle border border-borderWarm">
                <Briefcase className="w-4 h-4 text-amberAccent mt-0.5 shrink-0" />
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 block uppercase">Venture & Role</span>
                  <span className="font-bold text-deepInk">{jobTitle}</span>
                  <span className="text-xs text-amberAccent font-bold block font-mono">Founder of {ventureName}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-studioSubtle border border-borderWarm">
                <MapPin className="w-4 h-4 text-amberAccent mt-0.5 shrink-0" />
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 block uppercase">Location</span>
                  <span className="font-bold text-deepInk leading-tight block">
                    {location.fullText}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="lg:col-span-7 bg-studioCard border border-borderWarm rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 flex flex-col justify-between transition-all"
          >
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-extrabold text-deepInk flex items-center gap-2.5">
                <span>About Bijoy Lohar</span>
                <span className="w-2.5 h-2.5 rounded-full bg-amberAccent inline-block animate-ping" />
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  I am a digital creator and full-stack software engineer based in West Bengal, India. 
                  My primary focus revolves around building modern, high-performance web applications 
                  using cutting-edge technology stacks such as <strong className="text-deepInk font-semibold">React, Next.js, and TypeScript</strong>.
                </p>
                
                <p>
                  As the founder of <strong className="text-amberAccent font-semibold">{ventureName}</strong> (<a href="https://www.shadowarrow.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-deepInk font-bold">shadowarrow.in</a>), I drive digital innovation by crafting robust cloud infrastructures, serverless backends, and responsive user interfaces.
                </p>

                <p>
                  Beyond software architecture, I manage creator channels including{" "}
                  <a
                    href="https://www.instagram.com/arrowgaming2005/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-deepInk underline decoration-amberAccent underline-offset-2 hover:text-amberAccent transition-colors"
                  >
                    Arrow Gaming
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.instagram.com/lost_gaming_2005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-deepInk underline decoration-amberAccent underline-offset-2 hover:text-amberAccent transition-colors"
                  >
                    Lost Gaming
                  </a>
                  , engaging with a vibrant audience through live gaming streams and esports content creation.
                </p>
              </div>

              {/* Stack Spec Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-studioSubtle border border-borderWarm text-center space-y-1">
                  <Code2 className="w-5 h-5 text-amberAccent mx-auto" />
                  <h3 className="text-xs font-bold text-deepInk">Frontend Systems</h3>
                  <p className="text-[11px] text-slate-500 font-mono">React, Next.js & TS</p>
                </div>

                <div className="p-4 rounded-2xl bg-studioSubtle border border-borderWarm text-center space-y-1">
                  <Cloud className="w-5 h-5 text-amberAccent mx-auto" />
                  <h3 className="text-xs font-bold text-deepInk">Backend & Cloud</h3>
                  <p className="text-[11px] text-slate-500 font-mono">Node.js & Edge APIs</p>
                </div>

                <div className="p-4 rounded-2xl bg-studioSubtle border border-borderWarm text-center space-y-1">
                  <Gamepad2 className="w-5 h-5 text-amberAccent mx-auto" />
                  <h3 className="text-xs font-bold text-deepInk">Gaming Streamer</h3>
                  <p className="text-[11px] text-slate-500 font-mono">Arrow Gaming Hub</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. Verified Social Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-studioCard border border-borderWarm rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 text-center"
        >
          <div className="max-w-xl mx-auto space-y-1.5">
            <h2 className="font-heading text-xl font-bold text-deepInk">Verified Official Channels & Social Networks</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Verified links linked in Google Knowledge Graph structured data (`sameAs`).
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

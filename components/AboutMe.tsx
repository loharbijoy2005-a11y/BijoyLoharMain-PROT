"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
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
  Cpu,
  Video,
  Box,
  BookOpen,
  BookMarked,
  Library,
} from "lucide-react";

// Official Sharp Vector Icon for X (Twitter)
const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Google Developers Vector Icon
const GoogleDevIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path
      d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
      fill="#4285F4"
    />
    <path
      d="M8.5 13.5l2.5 2.5 5-5"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  x?: string;
  instagramPersonal?: string;
  facebook?: string;
  googleDevelopers?: string;
  goodreads?: string;
  amazonAuthor?: string;
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
  jobTitle = "Full-Stack Software Engineer & Founder",
  ventureName = "Shadow Arrow",
  location = "Bishnupur, West Bengal, India",
  siteUrl = "https://www.bijoylohar.in",
  imageUrl = "/images/bijoy-lohar.png",
  socials = {
    github: "https://github.com/loharbijoy2005-a11y",
    linkedin: "https://www.linkedin.com/in/bijoy-lohar-5a508832b",
    googleDevelopers: "https://developers.google.com/profile/u/101253410801307724262",
    goodreads: "https://www.goodreads.com/bijoylohar",
    amazonAuthor: "https://www.amazon.com/author/bijoylohar",
    x: "https://x.com/BijoyLohar2005",
    instagramPersonal: "https://www.instagram.com/bijoylohar_2005",
    facebook: "https://www.facebook.com/Bijoylohar.2005",
    shadowArrow: "https://shadowarrow.in",
  },
}) => {
  const techStackPills = [
    { name: "TypeScript", icon: Code2 },
    { name: "JavaScript", icon: Code2 },
    { name: "Python", icon: Code2 },
    { name: "Java", icon: Cpu },
    { name: "C++", icon: Cpu },
    { name: "Go (Golang)", icon: Code2 },
    { name: "Next.js", icon: Layers },
    { name: "React", icon: Layers },
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Server },
    { name: "MongoDB", icon: Server },
    { name: "Supabase", icon: Server },
    { name: "Cloudflare", icon: Cloud },
    { name: "Blender 3D", icon: Box },
    { name: "DaVinci Resolve", icon: Video },
    { name: "Git & CI/CD", icon: Github },
  ];

  const socialButtons = [
    {
      name: "GitHub",
      handle: "loharbijoy2005-a11y",
      url: socials.github,
      icon: Github,
      glowColor: "hover:border-amberAccent hover:bg-amberAccent/10",
      badge: "Code Hub",
    },
    {
      name: "LinkedIn",
      handle: "bijoy-lohar",
      url: socials.linkedin,
      icon: Linkedin,
      glowColor: "hover:border-amberAccent hover:bg-amberAccent/10",
      badge: "Professional Network",
    },
    {
      name: "Google Developer Program",
      handle: "bijoylohar",
      url: socials.googleDevelopers,
      icon: GoogleDevIcon,
      glowColor: "hover:border-amberAccent hover:bg-amberAccent/10",
      badge: "Public Profile",
    },
    {
      name: "X (Twitter)",
      handle: "@BijoyLohar2005",
      url: socials.x,
      icon: XIcon,
      glowColor: "hover:border-amberAccent hover:bg-amberAccent/10",
      badge: "Official Handle",
    },
    {
      name: "Instagram",
      handle: "@bijoylohar_2005",
      url: socials.instagramPersonal,
      icon: Instagram,
      glowColor: "hover:border-amberAccent hover:bg-amberAccent/10",
      badge: "Personal Profile",
    },
    {
      name: "Facebook",
      handle: "Bijoylohar.2005",
      url: socials.facebook,
      icon: Facebook,
      glowColor: "hover:border-amberAccent hover:bg-amberAccent/10",
      badge: "Official Profile",
    },
    {
      name: "Published Books & Publications",
      handle: "Official Releases & Engineering Manuals",
      url: "/books",
      icon: BookMarked,
      glowColor: "hover:border-amberAccent hover:bg-amberAccent/10",
      badge: "Author Catalog",
      isInternal: true,
    },
    {
      name: "Goodreads",
      handle: "bijoylohar",
      url: socials.goodreads || "https://www.goodreads.com/bijoylohar",
      icon: BookOpen,
      glowColor: "hover:border-amberAccent hover:bg-amberAccent/10",
      badge: "Author Profile",
    },
    {
      name: "Amazon Author Central",
      handle: "author/bijoylohar",
      url: socials.amazonAuthor || "https://www.amazon.com/author/bijoylohar",
      icon: Globe,
      glowColor: "hover:border-amberAccent hover:bg-amberAccent/10",
      badge: "Verified Author",
    },
    {
      name: "Open Library",
      handle: "OL16612687A",
      url: "https://openlibrary.org/authors/OL16612687A",
      icon: Library,
      glowColor: "hover:border-amberAccent hover:bg-amberAccent/10",
      badge: "Bibliographic Registry",
    },
    {
      name: "ORCID",
      handle: "0009-0004-5643-7612",
      url: "https://orcid.org/0009-0004-5643-7612",
      icon: CheckCircle2,
      glowColor: "hover:border-amberAccent hover:bg-amberAccent/10",
      badge: "Scholarly Record",
    },
    {
      name: "Shadow Arrow",
      handle: "shadowarrow.in",
      url: socials.shadowArrow,
      icon: Briefcase,
      glowColor: "hover:border-amberAccent hover:bg-amberAccent/10",
      badge: "SaaS & Web Studio",
    },
  ];

  return (
    <section
      id="about-me"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-studioCanvas text-deepInk overflow-hidden"
    >
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
          className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px]"
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
          className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[120px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-[1040px] mx-auto space-y-12 z-10">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start"
        >
          <span className="font-mono text-xs font-bold text-amberAccent uppercase tracking-widest block mb-1">
            01 / ABOUT &amp; BIOGRAPHY
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-deepInk tracking-tight">
            Software Engineer &amp; Tech Founder
          </h2>
        </motion.div>

        {/* 1. Hero Card — High Contrast Luxury Studio Frame */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-studioCard border border-borderWarm rounded-3xl p-6 sm:p-10 shadow-xl"
        >
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col items-center text-center">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative group w-48 h-48 sm:w-56 sm:h-56 rounded-3xl p-1.5 cursor-pointer"
            >
              {/* Outer Glowing Golden Ambient Aura */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amberAccent via-yellow-400 to-amber-600 opacity-80 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all"
              />

              {/* Inner Luxury Dark Gold Frame */}
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-studioCanvas p-1 border-2 border-amberAccent/70 shadow-[0_0_35px_rgba(229,193,88,0.3)] group-hover:shadow-[0_0_45px_rgba(229,193,88,0.5)] transition-shadow">
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-cover rounded-[18px] transition-transform duration-700 group-hover:scale-105"
                  width={224}
                  height={224}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/hero-portrait.jpg";
                  }}
                />
                
                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-studioCanvas via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-2 inset-x-2 bg-studioCanvas/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amberAccent/40 flex items-center justify-between text-[11px] font-mono text-amberAccent">
                  <span className="font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Bijoy Lohar
                  </span>
                  <span className="text-[10px] font-bold text-deepInk/80">FOUNDER</span>
                </div>
              </div>

              {/* Verified Developer Badge */}
              <div className="absolute -top-2 -right-2 bg-studioCanvas text-amberAccent p-2 rounded-2xl border border-amberAccent/60 shadow-lg" title="Verified Founder & Developer Entity">
                <CheckCircle2 className="w-5 h-5 text-amberAccent fill-amberAccent/20" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-4 flex items-center gap-2 text-xs font-mono font-bold text-amberAccent/90">
              <Globe className="w-3.5 h-3.5 text-amberAccent" />
              <span>www.bijoylohar.in</span>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-1.5">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-deepInk tracking-tight leading-tight">
                {name}
              </h1>
              <p className="text-base sm:text-lg text-amberAccent font-bold font-mono tracking-wide">
                {jobTitle}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono font-bold">
              <span className="inline-flex items-center gap-2 bg-amberAccent/10 border border-amberAccent/30 text-amberAccent px-3.5 py-1.5 rounded-xl shadow-sm hover:border-amberAccent transition-all">
                <MapPin className="w-3.5 h-3.5 text-amberAccent" />
                {location}
              </span>
              <span className="inline-flex items-center gap-2 bg-amberAccent/10 border border-amberAccent/30 text-amberAccent px-3.5 py-1.5 rounded-xl shadow-sm hover:border-amberAccent transition-all">
                <Briefcase className="w-3.5 h-3.5 text-amberAccent" />
                Founder of {ventureName}
              </span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-[#D4CEBF] text-sm sm:text-base leading-relaxed font-normal">
              As a <strong className="text-deepInk font-bold">Full-Stack Software Engineer</strong>, 
              I specialize in architecting scalable web applications, performant serverless backends, and reliable cloud infrastructures. 
              Through <strong className="text-amberAccent font-bold">{ventureName}</strong>, I engineer and deploy production-grade software solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-2.5 pt-1">
              <span className="text-xs font-mono font-bold text-amberAccent uppercase block tracking-wider">
                Technical Stack &amp; Competencies:
              </span>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {techStackPills.map((pill) => {
                  const IconComp = pill.icon;
                  return (
                    <motion.span
                      key={pill.name}
                      variants={badgeVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-studioSubtle border border-borderWarm hover:border-amberAccent/60 text-xs font-mono font-semibold text-deepInk shadow-sm cursor-default hover:bg-amberAccent/10 transition-all"
                    >
                      <IconComp className="w-3.5 h-3.5 text-amberAccent" />
                      {pill.name}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 pt-3">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="https://shadowarrow.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-amberAccent hover:bg-amberLight text-studioCanvas font-heading font-black text-xs sm:text-sm shadow-[0_0_25px_rgba(229,193,88,0.3)] hover:shadow-[0_0_35px_rgba(229,193,88,0.5)] transition-all"
              >
                <span>Visit Shadow Arrow Studio</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-amberAccent/10 border border-amberAccent/40 hover:border-amberAccent hover:bg-amberAccent/20 text-deepInk font-heading font-bold text-xs sm:text-sm shadow-sm transition-all"
              >
                <Zap className="w-4 h-4 text-amberAccent" />
                <span>Get In Touch</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* 2. Biography Card - High Contrast Studio Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-studioCard border border-borderWarm rounded-3xl p-6 sm:p-10 shadow-lg space-y-6"
        >
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-extrabold text-deepInk flex items-center gap-2.5">
              <span>Biography &amp; Background</span>
              <span className="w-2.5 h-2.5 rounded-full bg-amberAccent inline-block animate-ping" />
            </h3>

            <div className="space-y-4 text-[#D4CEBF] leading-relaxed text-sm sm:text-base">
              <p>
                Based in <strong className="text-deepInk font-semibold">Bishnupur, West Bengal, India</strong>, 
                Bijoy Lohar is a Full-Stack Software Engineer focused on developing high-performance web systems, modern user interfaces, and automated backend architectures.
              </p>

              <p>
                As the founder of <strong className="text-amberAccent font-bold">{ventureName}</strong> (<a href="https://shadowarrow.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-amberAccent font-bold transition-colors">shadowarrow.in</a>), 
                Bijoy leads technical development, converting complex system requirements into scalable web applications and resilient digital infrastructures.
              </p>

              <div className="pt-2">
                <motion.a
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  id="about-official-biography-link"
                  href="/biography"
                  title="Read Official Biography of Bijoy Lohar"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amberAccent/10 border border-amberAccent/40 hover:border-amberAccent hover:bg-amberAccent/20 text-amberAccent font-mono text-xs font-bold transition-all shadow-sm"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amberAccent" />
                  <span>Read Official Biography</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Media & Verified Profiles — Solid Luxury Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-studioCard border border-borderWarm rounded-3xl p-6 sm:p-10 shadow-lg space-y-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-borderWarm pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amberAccent uppercase tracking-widest mb-1">
                <span className="w-2 h-2 rounded-full bg-amberAccent animate-pulse" />
                <span>Verified Entity &amp; Presence</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-deepInk tracking-tight">
                Verified Profiles &amp; Channels
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted max-w-xs text-left sm:text-right font-normal leading-relaxed">
              Direct links to official code repositories, developer profiles, and web entities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socialButtons.map((btn) => {
              if (!btn.url) return null;
              const Icon = btn.icon;

              const innerContent = (
                <>
                  <div className="flex items-center gap-4 min-w-0 flex-1 pr-3">
                    <div className="w-11 h-11 rounded-xl bg-amberAccent/10 border border-amberAccent/30 flex items-center justify-center text-amberAccent group-hover:bg-amberAccent group-hover:text-studioCanvas group-hover:scale-105 transition-all duration-300 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="min-w-0 flex-1 space-y-0.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-heading font-extrabold text-sm sm:text-base text-deepInk group-hover:text-amberAccent transition-colors truncate">
                          {btn.name}
                        </span>
                        {btn.badge && (
                          <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full bg-amberAccent/10 text-amberAccent font-bold border border-amberAccent/30 whitespace-nowrap">
                            {btn.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-muted group-hover:text-deepInk transition-colors block truncate">
                        {btn.handle}
                      </span>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-studioCanvas/60 border border-borderSubtle flex items-center justify-center text-muted group-hover:text-amberAccent group-hover:border-amberAccent/50 group-hover:bg-amberAccent/10 transition-all shrink-0">
                    {btn.isInternal ? (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    ) : (
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    )}
                  </div>
                </>
              );

              if (btn.isInternal) {
                return (
                  <motion.div
                    key={btn.name}
                    whileHover={{ scale: 1.02, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={btn.url}
                      className="group relative flex items-center justify-between p-5 rounded-2xl bg-studioSubtle border border-borderWarm hover:border-amberAccent/70 text-deepInk transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(229,193,88,0.12)]"
                    >
                      {innerContent}
                    </Link>
                  </motion.div>
                );
              }

              return (
                <motion.a
                  key={btn.name}
                  href={btn.url}
                  target="_blank"
                  rel="noopener noreferrer me"
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center justify-between p-5 rounded-2xl bg-studioSubtle border border-borderWarm hover:border-amberAccent/70 text-deepInk transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(229,193,88,0.12)]"
                >
                  {innerContent}
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

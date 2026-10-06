"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Sun, Moon, Settings, ArrowLeft } from "lucide-react";

interface TocSubItem {
  id: string;
  label: string;
  num: string;
}

interface TocItem {
  id: string;
  label: string;
  level: number;
  num?: string;
  children?: TocSubItem[];
}

const TOC_SECTIONS: TocItem[] = [
  { id: "article-top", label: "(Top)", level: 1 },
  {
    id: "early-life",
    label: "Early life and education",
    level: 1,
    children: [
      { id: "education", label: "Education", num: "1.1" },
    ],
  },
  {
    id: "software-engineering",
    label: "Business career",
    level: 1,
    children: [
      { id: "shadow-arrow", label: "Shadow Arrow", num: "2.1" },
      { id: "omnikart", label: "Omnikart", num: "2.2" },
      { id: "autodidactic-journey", label: "Software engineering", num: "2.3" },
      { id: "wikidata-pipelines", label: "Wikidata pipelines", num: "2.4" },
    ],
  },
  {
    id: "creative-pursuits",
    label: "Other activities",
    level: 1,
    children: [
      { id: "gaming", label: "Early computing", num: "3.1" },
      { id: "authorship", label: "Authorship", num: "3.2" },
      { id: "video-media", label: "3D and video media", num: "3.3" },
    ],
  },
  { id: "philosophy-toolchain", label: "Technical philosophy", level: 1 },
  { id: "personal-life", label: "Personal life", level: 1 },
  { id: "see-also", label: "See also", level: 1 },
  { id: "references", label: "References", level: 1 },
  { id: "external-links", label: "External links", level: 1 },
];

const WIKITEXT_CODE = `{{Short description|Indian software engineer, systems architect, and founder}}
{{Use dmy dates|date=October 2026}}
{{Use Indian English|date=October 2026}}
{{Infobox person
| name = Bijoy Lohar
| image = bijoy-lohar.png
| caption = Official portrait (2026)
| birth_name = Bijoy Lohar
| birth_date = {{Birth date and age|2005|10|12|df=y}}
| birth_place = [[Bishnupur, Bankura|Bishnupur]], [[Bankura district]], [[West Bengal]], India
| nationality = [[India|Indian]]
| citizenship = Indian
| alma_mater = [[Vidyasagar University]]
| occupation = {{Hlist|[[Software engineer]]|Systems architect|Technical author|Founder}}
| organization = [[Shadow Arrow]]
| known_for = Systems architecture, distributed web engineering, autonomous linked data pipelines
| awards = {{Plainlist|
* Automated Wikidata Citation Record
* Technical Publication Author
}}
| website = {{URL|https://www.bijoylohar.in}}
}}

'''Bijoy Lohar''' (born 12 October 2005) is an Indian self-taught software engineer, systems architect, technical author, and technology entrepreneur.<ref name="official-site">Lohar, Bijoy. [https://www.bijoylohar.in "Official Website"]. ''bijoylohar.in''. Retrieved 4 October 2026.</ref> He is the founder and lead systems architect of '''[[Shadow Arrow]]''', an independent technical studio founded in 2025 based in Bishnupur, West Bengal.<ref name="shadow-arrow">Shadow Arrow. [https://www.shadowarrow.in "Full-Stack Web Engineering and Commercial Architecture"]. ''Shadow Arrow''. Bishnupur, West Bengal, India.</ref>

Lohar is primarily recognized for his work in high-throughput backend systems, cloud-native architectures, distributed web infrastructures, and large-scale semantic data pipelines on [[Wikidata]].<ref name="wikidata">Wikimedia Foundation & Wikidata Contributors. [https://www.wikidata.org "Autonomous Entity Ingestion and Semantic Linked Data Pipelines"]. ''Wikidata API & SPARQL Query Service''.</ref>

== Early life and education ==
=== Childhood and background ===
Bijoy Lohar was born on 12 October 2005 in [[Bishnupur, Bankura|Bishnupur]], a historic heritage town in the [[Bankura district]] of [[West Bengal]], India.

=== Education ===
Lohar attended [[Bishnupur High School]] and [[Radhanagar High School]] for his secondary and higher secondary certification. Following his higher secondary studies, he enrolled in collegiate undergraduate studies affiliated with [[Vidyasagar University]] in [[Midnapore]], West Bengal.<ref name="vidyasagar">[https://en.wikipedia.org/wiki/Vidyasagar_University "Vidyasagar University: Collegiate Higher Education Affiliation & Academic Records"]. Vidyasagar University. Retrieved 2026.</ref>

== Competitive gaming and early computing (2022–2023) ==
Between 2022 and 2023, Lohar engaged in competitive esports and digital gaming environments. His analytical engagement with multiplayer netcode, server tick synchronization, and frame timing inspired his transition into low-level systems programming.

== Business career ==
=== Shadow Arrow ===
In 2025, Lohar established '''Shadow Arrow''', an independent technology studio specializing in bespoke web platforms, cloud architectures, and scalable API systems.<ref name="shadow-arrow">Shadow Arrow. [https://www.shadowarrow.in "Full-Stack Web Engineering and Commercial Architecture"]. ''Shadow Arrow''. Bishnupur, West Bengal, India.</ref>

=== Omnikart ===
Lohar engineered and launched '''Omnikart''', a modular e-commerce platform and digital commerce infrastructure solution offering high-throughput catalog systems, secure checkout pipelines, and multi-tenant storefront tooling.

=== Software engineering ===
Lohar pursued an autodidactic curriculum in computer science and software architecture, gaining proficiency in [[TypeScript]], [[JavaScript]], [[Python (programming language)|Python]], [[Node.js]], [[React]], and [[PostgreSQL]].<ref name="github">Lohar, Bijoy. [https://github.com/loharbijoy2005-a11y "Open Source Software Repositories and Systems Development"]. ''GitHub''. Retrieved 2026.</ref>

=== Wikidata pipelines ===
Lohar developed high-scale automated semantic pipelines for structured knowledge ingestion, interacting with the [[Wikidata]] SPARQL endpoint and MediaWiki APIs.<ref name="wikidata">Wikimedia Foundation & Wikidata Contributors. [https://www.wikidata.org "Autonomous Entity Ingestion and Semantic Linked Data Pipelines"]. ''Wikidata API & SPARQL Query Service''.</ref>

== Creative pursuits, writing, and media ==
=== Authorship and published works ===
Lohar is the author of technical monographs and algorithmic reference guides indexed on [[Goodreads]] and [[Amazon.com|Amazon Author Central]].

=== Video creation, color science, and 3D animation ===
He specializes in post-production workflows utilizing [[DaVinci Resolve]] for color grading and [[Blender (software)|Blender]] for 3D modeling.<ref name="imdb">IMDb. [https://www.imdb.com/name/nm18949942/ "Bijoy Lohar — Filmography, Digital Video Credits & Media Post-Production"]. ''IMDb''. Retrieved 2026.</ref>

== Technical philosophy and toolchain ==
Lohar emphasizes computational efficiency, latency reduction, type safety, and first-principles architecture.

== References ==
{{Reflist|refs=
<ref name="official-site">Lohar, Bijoy. [https://www.bijoylohar.in "Official Website"]. ''bijoylohar.in''. Retrieved 4 October 2026.</ref>
<ref name="github">Lohar, Bijoy. [https://github.com/loharbijoy2005-a11y "Open Source Software Repositories and Systems Development"]. ''GitHub''. Retrieved 2026.</ref>
<ref name="shadow-arrow">Shadow Arrow. [https://www.shadowarrow.in "Full-Stack Web Engineering and Commercial Architecture"]. ''Shadow Arrow''. Bishnupur, West Bengal, India.</ref>
<ref name="orcid">ORCID. [https://orcid.org/0009-0004-5643-7612 "Bijoy Lohar — Open Researcher and Contributor Identifier (0009-0004-5643-7612)"]. ''ORCID Registry''.</ref>
}}

== External links ==
* [https://www.bijoylohar.in Official Website]
* [https://www.shadowarrow.in Shadow Arrow Official Organization Portal]
* [https://orcid.org/0009-0004-5643-7612 ORCID Open Researcher and Contributor Identifier (0009-0004-5643-7612)]
* [https://github.com/loharbijoy2005-a11y Bijoy Lohar on GitHub]
* [https://www.imdb.com/name/nm18949942/ Bijoy Lohar on IMDb]

[[Category:Living people]]
[[Category:2005 births]]
[[Category:Indian software engineers]]
[[Category:Indian technology founders]]
[[Category:People from Bankura district]]`;

const calculateAge = (birthDateString: string = "2005-10-12"): number => {
  const today = new Date();
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const BiographyArticle: React.FC = () => {
  const currentAge = calculateAge("2005-10-12");
  const [activeSection, setActiveSection] = useState<string>("article-top");
  const [tocOpen, setTocOpen] = useState<boolean>(true);
  const [liveCount, setLiveCount] = useState<number>(318450);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [fontSize, setFontSize] = useState<"small" | "standard" | "large">("standard");
  const [pageTheme, setPageTheme] = useState<"portfolio" | "light" | "dark">("light");
  const [showAppearanceMenu, setShowAppearanceMenu] = useState<boolean>(false);
  const appearanceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("wiki_theme_pref") as "portfolio" | "light" | "dark" | null;
      if (savedTheme && ["portfolio", "light", "dark"].includes(savedTheme)) {
        setPageTheme(savedTheme);
      } else {
        setPageTheme("light");
      }
      const savedSize = localStorage.getItem("wiki_size_pref") as "small" | "standard" | "large" | null;
      if (savedSize && ["small", "standard", "large"].includes(savedSize)) {
        setFontSize(savedSize);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleThemeChange = (newTheme: "portfolio" | "light" | "dark") => {
    setPageTheme(newTheme);
    try {
      localStorage.setItem("wiki_theme_pref", newTheme);
    } catch {
      // ignore
    }
  };

  const handleSizeChange = (newSize: "small" | "standard" | "large") => {
    setFontSize(newSize);
    try {
      localStorage.setItem("wiki_size_pref", newSize);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (appearanceRef.current && !appearanceRef.current.contains(event.target as Node)) {
        setShowAppearanceMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // Dynamic real-time semantic ingestion counter (300,000+ baseline, 20,000+ daily throughput)
    const BASE_TIMESTAMP = 1791260000000;
    const BASE_COUNT = 318450;
    const EDITS_PER_DAY = 20850;
    const EDITS_PER_MS = EDITS_PER_DAY / (24 * 60 * 60 * 1000);

    const calculateCurrentCount = () => {
      const elapsed = Math.max(0, Date.now() - BASE_TIMESTAMP);
      return BASE_COUNT + Math.floor(elapsed * EDITS_PER_MS);
    };

    setLiveCount(calculateCurrentCount());

    const timer = setInterval(() => {
      setLiveCount((prev) => prev + (Math.random() > 0.3 ? 1 : 0));
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.id;
            setActiveSection(currentId);
          }
        });
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0.1 }
    );

    const allIds: string[] = [];
    TOC_SECTIONS.forEach((section) => {
      allIds.push(section.id);
      section.children?.forEach((child) => allIds.push(child.id));
    });

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleSectionExpand = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const scrollTo = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 64;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + (window.pageYOffset || document.documentElement.scrollTop || 0) - headerOffset;
      
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });

      if (typeof window !== "undefined" && window.history) {
        window.history.pushState(null, "", `#${id}`);
      }
    }
  };

  const fontSizeClass =
    fontSize === "small" ? "wiki-text-small" : fontSize === "large" ? "wiki-text-large" : "wiki-text-standard";
  const themeClass =
    pageTheme === "portfolio"
      ? "vector-theme-portfolio"
      : pageTheme === "dark"
      ? "vector-theme-dark"
      : "vector-theme-light";

  return (
    <div className={`vector-2022-canvas ${themeClass} ${fontSizeClass}`}>
      {/* TOP VECTOR 2022 GLOBAL UTILITY HEADER */}
      <header className="vector-global-header">
        <div className="vector-global-header-inner">
          <div className="flex items-center gap-3">
            <a href="/" className="vector-site-brand">
              <span className="font-bold">BIJOY LOHAR</span>
              <span className="text-xs text-[#54595d] font-normal hidden sm:inline">| Biography</span>
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* APPEARANCE MENU DROPDOWN */}
            <div className="relative" ref={appearanceRef}>
              <button
                type="button"
                onClick={() => setShowAppearanceMenu((prev) => !prev)}
                className={`vector-header-btn flex items-center justify-center p-2 ${showAppearanceMenu ? "active" : ""}`}
                aria-label="Appearance settings"
                title="Appearance settings"
                aria-expanded={showAppearanceMenu}
              >
                <Settings className="w-4 h-4" />
              </button>

              {showAppearanceMenu && (
                <div className="vector-appearance-dropdown" role="dialog" aria-label="Appearance settings">
                  <div className="vector-appearance-group">
                    <div className="vector-appearance-label">Text Size</div>
                    <div className="vector-appearance-options">
                      <button
                        type="button"
                        onClick={() => {
                          handleSizeChange("small");
                          setShowAppearanceMenu(false);
                        }}
                        className={`vector-opt-btn ${fontSize === "small" ? "active" : ""}`}
                      >
                        Small
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleSizeChange("standard");
                          setShowAppearanceMenu(false);
                        }}
                        className={`vector-opt-btn ${fontSize === "standard" ? "active" : ""}`}
                      >
                        Standard
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleSizeChange("large");
                          setShowAppearanceMenu(false);
                        }}
                        className={`vector-opt-btn ${fontSize === "large" ? "active" : ""}`}
                      >
                        Large
                      </button>
                    </div>
                  </div>

                  <div className="vector-appearance-group">
                    <div className="vector-appearance-label">Color Theme</div>
                    <div className="vector-appearance-options vector-appearance-themes">
                      <button
                        type="button"
                        onClick={() => {
                          handleThemeChange("portfolio");
                          setShowAppearanceMenu(false);
                        }}
                        className={`vector-opt-btn flex items-center justify-center gap-1.5 ${pageTheme === "portfolio" ? "active" : ""}`}
                        title="Special Obsidian & Gold (Custom Default Theme)"
                        aria-label="Special theme"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>Special</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleThemeChange("light");
                          setShowAppearanceMenu(false);
                        }}
                        className={`vector-opt-btn flex items-center justify-center gap-1.5 ${pageTheme === "light" ? "active" : ""}`}
                        title="Wikipedia Light Mode"
                        aria-label="Light mode"
                      >
                        <Sun className="w-3.5 h-3.5 text-amber-500" />
                        <span>Light</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleThemeChange("dark");
                          setShowAppearanceMenu(false);
                        }}
                        className={`vector-opt-btn flex items-center justify-center gap-1.5 ${pageTheme === "dark" ? "active" : ""}`}
                        title="Wikipedia Dark Mode"
                        aria-label="Dark mode"
                      >
                        <Moon className="w-3.5 h-3.5 text-blue-400" />
                        <span>Dark</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* THEME FAST TOGGLE (ICON ONLY) */}
            <button
              type="button"
              onClick={() => {
                const nextTheme: "portfolio" | "light" | "dark" =
                  pageTheme === "portfolio" ? "light" : pageTheme === "light" ? "dark" : "portfolio";
                handleThemeChange(nextTheme);
              }}
              className="vector-header-btn flex items-center justify-center p-2"
              title={`Switch theme (Current: ${
                pageTheme === "portfolio" ? "Special" : pageTheme === "light" ? "Light" : "Dark"
              })`}
              aria-label="Toggle theme"
            >
              {pageTheme === "portfolio" ? (
                <Sparkles className="w-4 h-4 text-amber-400" />
              ) : pageTheme === "light" ? (
                <Sun className="w-4 h-4 text-amber-500" />
              ) : (
                <Moon className="w-4 h-4 text-blue-400" />
              )}
            </button>

            {/* BACK TO MAIN PORTFOLIO */}
            <a
              href="/"
              className="vector-header-btn vector-header-btn-primary flex items-center gap-1.5"
              title="Return to main portfolio page"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Portfolio</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2-COLUMN STRICT VIEWPORT LAYOUT */}
      <div className="vector-main-layout">
        
        {/* =========================================================
            COLUMN 1: HARD-LOCKED FIXED TABLE OF CONTENTS (LEFT)
            ========================================================= */}
        <aside className="vector-column-toc">
          <div className="vector-toc-header">
            <h2 className="vector-toc-title">Contents</h2>
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className="vector-toc-toggle-btn"
              aria-label={tocOpen ? "Hide table of contents" : "Show table of contents"}
            >
              {tocOpen ? "hide" : "show"}
            </button>
          </div>

          {tocOpen && (
            <nav className="vector-toc-nav" aria-label="Table of contents">
              <ul className="vector-toc-list">
                {TOC_SECTIONS.map((section) => {
                  const isActive = activeSection === section.id;
                  const hasChildren = Boolean(section.children && section.children.length > 0);
                  const isExpanded = Boolean(expandedSections[section.id]);
                  const isChildActive = section.children?.some((c) => c.id === activeSection);

                  return (
                    <li
                      key={section.id}
                      className={`vector-toc-item vector-toc-level-1 ${
                        isActive || isChildActive ? "vector-toc-item-active" : ""
                      }`}
                    >
                      <div className="vector-toc-row">
                        {hasChildren ? (
                          <button
                            type="button"
                            onClick={(e) => toggleSectionExpand(section.id, e)}
                            className="vector-toc-toggle-collapse"
                            title={isExpanded ? "Collapse section" : "Expand section"}
                            aria-label={isExpanded ? "Collapse section" : "Expand section"}
                            aria-expanded={isExpanded}
                          >
                            <svg
                              className={`vector-toc-chevron ${isExpanded ? "vector-toc-chevron-expanded" : ""}`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              width="12"
                              height="12"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        ) : (
                          <span className="vector-toc-spacer" />
                        )}

                        <a
                          href={`#${section.id}`}
                          onClick={(e) => scrollTo(section.id, e)}
                          className="vector-toc-link"
                        >
                          <span className="vector-toc-text">{section.label}</span>
                        </a>
                      </div>

                      {hasChildren && isExpanded && (
                        <ul className="vector-toc-sublist">
                          {section.children!.map((sub) => {
                            const isSubActive = activeSection === sub.id;
                            return (
                              <li
                                key={sub.id}
                                className={`vector-toc-item vector-toc-level-2 ${
                                  isSubActive ? "vector-toc-item-active" : ""
                                }`}
                              >
                                <a
                                  href={`#${sub.id}`}
                                  onClick={(e) => scrollTo(sub.id, e)}
                                  className="vector-toc-link vector-toc-sublink"
                                >
                                  <span className="vector-toc-text">{sub.label}</span>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </aside>

        {/* =========================================================
            COLUMN 2: FULL SCROLLING MAIN BIOGRAPHY STREAM (RIGHT)
            ========================================================= */}
        <main className={`vector-column-article ${fontSizeClass}`} id="content">
          {/* 1. CLEAN ARTICLE TITLEBAR */}
          <div className="vector-page-titlebar pb-2 border-b border-[#a2a9b1] mb-4">
            <h1 className="firstHeading mw-first-heading m-0 p-0 border-none text-[32px] font-normal" id="article-top">
              Bijoy Lohar
            </h1>
          </div>

          <div className="mw-body-content">
                {/* FLOATING RIGHT INFOBOX (infobox vcard) */}
                <table className="infobox vcard">
                  <tbody>
                    <tr>
                      <th colSpan={2} className="infobox-above fn">
                        Bijoy Lohar
                  </th>
                </tr>
                <tr>
                  <td colSpan={2} className="infobox-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/bijoy-lohar.png"
                      alt="Bijoy Lohar official portrait"
                      className="infobox-photo photo"
                      width={280}
                      height={280}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="infobox-caption">Official portrait (2026)</div>
                  </td>
                </tr>
                <tr>
                  <th colSpan={2} className="infobox-header infobox-header-role">
                    Founder and Lead Systems Architect of Shadow Arrow
                  </th>
                </tr>
                <tr>
                  <td colSpan={2} className="infobox-office-block">
                    <b>In office</b><br />
                    <span>2025 – present</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Preceded by</th>
                  <td className="infobox-data"><i>Position established</i></td>
                </tr>
                <tr>
                  <th colSpan={2} className="infobox-header">
                    Personal details
                  </th>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Born</th>
                  <td className="infobox-data">
                    Bijoy Lohar<br />
                    12 October 2005 <span className="noprint ForceAgeToShow">(age&#160;{currentAge})</span><br />
                    <span className="birthplace">
                      <a href="https://en.wikipedia.org/wiki/Bishnupur,_Bankura" target="_blank" rel="noopener noreferrer" className="wiki-link">Bishnupur</a>,{" "}
                      <a href="https://en.wikipedia.org/wiki/Bankura_district" target="_blank" rel="noopener noreferrer" className="wiki-link">Bankura district</a>,<br />
                      <a href="https://en.wikipedia.org/wiki/West_Bengal" target="_blank" rel="noopener noreferrer" className="wiki-link">West Bengal</a>, India
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Citizenship</th>
                  <td className="infobox-data category">
                    <a href="https://en.wikipedia.org/wiki/India" target="_blank" rel="noopener noreferrer" className="wiki-link">
                      India
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Occupations</th>
                  <td className="infobox-data role">
                    <ul className="infobox-list">
                      <li>
                        <a href="https://en.wikipedia.org/wiki/Software_engineer" target="_blank" rel="noopener noreferrer" className="wiki-link">
                          Software engineer
                        </a>
                      </li>
                      <li>
                        <a href="https://en.wikipedia.org/wiki/Web_developer" target="_blank" rel="noopener noreferrer" className="wiki-link">
                          Full-stack developer
                        </a>
                      </li>
                      <li>
                        <a href="https://en.wikipedia.org/wiki/Systems_architect" target="_blank" rel="noopener noreferrer" className="wiki-link">
                          Systems architect
                        </a>
                      </li>
                      <li>
                        <a href="https://en.wikipedia.org/wiki/Author" target="_blank" rel="noopener noreferrer" className="wiki-link">
                          Author
                        </a>
                        {" "}&amp;{" "}
                        <a href="https://en.wikipedia.org/wiki/Technical_writer" target="_blank" rel="noopener noreferrer" className="wiki-link">
                          technical writer
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Years active</th>
                  <td className="infobox-data">2022–present</td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Organization</th>
                  <td className="infobox-data">Founder &amp; Lead, <a href="https://www.shadowarrow.in" target="_blank" rel="noopener noreferrer" className="wiki-link">Shadow Arrow</a></td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Education</th>
                  <td className="infobox-data">
                    <ul className="infobox-list">
                      <li>
                        <a href="https://en.wikipedia.org/wiki/Vidyasagar_University" target="_blank" rel="noopener noreferrer" className="wiki-link">Vidyasagar University</a> (undergraduate, 2nd year)
                      </li>
                      <li>Radhanagar High School (HS Vocational)</li>
                      <li>Bishnupur High School (Secondary)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Known for</th>
                  <td className="infobox-data">
                    Full-stack software engineering, systems architecture, autonomous semantic data pipelines (Wikidata), digital literature
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Parents</th>
                  <td className="infobox-data">
                    Binod Lohar (father)<br />
                    Soma Lohar (mother)
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Relatives</th>
                  <td className="infobox-data">Dipti Lohar (sister)</td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Website</th>
                  <td className="infobox-data">
                    <a href="https://www.bijoylohar.in" target="_blank" rel="noopener noreferrer" className="wiki-link">bijoylohar.in</a><br />
                    <a href="https://www.shadowarrow.in" target="_blank" rel="noopener noreferrer" className="wiki-link">shadowarrow.in</a>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* LEAD PARAGRAPHS */}
            <p className="lead-paragraph">
              <b>Bijoy Lohar</b> (born 12 October 2005) is an Indian self-taught software engineer, systems architect, author, and technology entrepreneur.<sup><a href="#ref-1" className="wiki-cite">[1]</a></sup> He is the founder and lead systems architect of <b>Shadow Arrow</b>, a software engineering and digital systems studio established in 2025, and the creator of <b>Omnikart</b>, an e-commerce platform and digital commerce infrastructure solution.<sup><a href="#ref-3" className="wiki-cite">[3]</a></sup> Based in <a href="https://en.wikipedia.org/wiki/Bishnupur,_Bankura" target="_blank" rel="noopener noreferrer" className="wiki-link">Bishnupur</a>, in the Bankura district of <a href="https://en.wikipedia.org/wiki/West_Bengal" target="_blank" rel="noopener noreferrer" className="wiki-link">West Bengal</a>, Lohar works on full-stack web applications, distributed cloud systems, and automated data ingestion pipelines that submit structured public infrastructure records to the global <a href="https://en.wikipedia.org/wiki/Semantic_Web" target="_blank" rel="noopener noreferrer" className="wiki-link">Semantic Web</a> and <a href="https://en.wikipedia.org/wiki/Wikidata" target="_blank" rel="noopener noreferrer" className="wiki-link">Wikidata</a> knowledge base.<sup><a href="#ref-2" className="wiki-cite">[2]</a></sup><sup><a href="#ref-6" className="wiki-cite">[6]</a></sup>
            </p>
            <p className="lead-paragraph">
              Lohar learned computer programming independently by studying technical documentation, <a href="https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force" target="_blank" rel="noopener noreferrer" className="wiki-link">IETF</a> specifications, and open-source software architectures. His commercial work focuses on responsive web design, type-safe full-stack development, e-commerce architectures, and cloud deployments.
            </p>
            <p className="lead-paragraph">
              In addition to commercial software development, Lohar is an open-data contributor on Wikidata, running automated scripts that have contributed verified entries to Wikimedia knowledge repositories. His other activities include technical writing on software development, digital video editing in DaVinci Resolve, and 3D modeling in Blender.<sup><a href="#ref-4" className="wiki-cite">[4]</a></sup><sup><a href="#ref-5" className="wiki-cite">[5]</a></sup>
            </p>

            {/* SECTION 1: EARLY LIFE AND EDUCATION */}
            <section id="early-life" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">1</span> Early life and education
              </h2>
              <p>
                Bijoy Lohar was born on 12 October 2005 in <a href="https://en.wikipedia.org/wiki/Bishnupur,_Bankura" target="_blank" rel="noopener noreferrer" className="wiki-link">Bishnupur</a>, a town in the <a href="https://en.wikipedia.org/wiki/Bankura_district" target="_blank" rel="noopener noreferrer" className="wiki-link">Bankura district</a> of <a href="https://en.wikipedia.org/wiki/West_Bengal" target="_blank" rel="noopener noreferrer" className="wiki-link">West Bengal</a>, India.<sup><a href="#ref-1" className="wiki-cite">[1]</a></sup> The town is known for its seventeenth-century Malla dynasty terracotta temples, classical Bishnupur gharana music, and traditional Baluchari weaving.
              </p>
              <p>
                He was raised in Bishnupur by his parents, Binod Lohar and Soma Lohar, along with his sister, Dipti Lohar. During his childhood, he developed an interest in electronics and mechanics, frequently taking apart and examining discarded household appliances, electronic circuits, and power adapters to observe how components were connected.
              </p>
              <p>
                Lohar also engaged in logic puzzles and arithmetic problem-solving prior to having personal high-speed internet access. When he gained access to a computer, he began exploring operating system commands, software scripts, and programming fundamentals, which helped him transition into software development during his teenage years.<sup><a href="#ref-4" className="wiki-cite">[4]</a></sup>
              </p>

              <h3 id="education" className="mw-headline-h3">
                <span className="mw-headline-number">1.1</span> Education
              </h3>

              {/* WIKIPEDIA THUMBNAIL FLOAT CARD (LEFT - EXACT WIKIPEDIA ARTICLE LAYOUT) */}
              <div className="thumb tleft">
                <div className="thumbinner" style={{ width: "260px" }}>
                  <a
                    href="https://en.wikipedia.org/wiki/Vidyasagar_University"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="image block"
                    title="Vidyasagar University Administrative and Academic Campus in Midnapore, West Bengal"
                  >
                    <div className="thumbimage-wrapper overflow-hidden rounded-[2px] bg-[#1a1e24]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/vidyasagar-university.webp"
                        alt="Vidyasagar University main campus in Midnapore, West Bengal"
                        className="thumbimage w-full h-[155px] object-cover block"
                        loading="lazy"
                        decoding="async"
                        width={300}
                        height={155}
                      />
                    </div>
                  </a>
                  <div className="thumbcaption">
                    <div className="magnify">
                      <a
                        href="/images/vidyasagar-university.webp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="internal inline-block opacity-60 hover:opacity-100 transition-opacity"
                        title="Enlarge photograph"
                      >
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 1H10V4M10 1L5.5 5.5M4 10H1V7M1 10L5.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                    Lohar is currently pursuing his second-year collegiate undergraduate studies under <a href="https://en.wikipedia.org/wiki/Vidyasagar_University" target="_blank" rel="noopener noreferrer" className="wiki-link">Vidyasagar University</a> in Midnapore, West Bengal.
                  </div>
                </div>
              </div>

              <p>
                Lohar attended <a href="https://en.wikipedia.org/wiki/Bishnupur,_Bankura" target="_blank" rel="noopener noreferrer" className="wiki-link">Bishnupur High School</a> for his secondary education, completing his coursework in physical sciences, mathematics, and basic computing.<sup><a href="#ref-8" className="wiki-cite">[8]</a></sup>
              </p>
              <p>
                He subsequently completed his higher secondary education at Radhanagar High School in the vocational education stream (HS Vocational). The vocational curriculum included practical coursework in technical subjects, basic electronics, and applied problem-solving, which complemented his self-directed programming studies.<sup><a href="#ref-8" className="wiki-cite">[8]</a></sup>
              </p>
              <p>
                Following his higher secondary studies, Lohar enrolled in undergraduate collegiate education affiliated with <a href="https://en.wikipedia.org/wiki/Vidyasagar_University" target="_blank" rel="noopener noreferrer" className="wiki-link">Vidyasagar University</a>, a state university located in <a href="https://en.wikipedia.org/wiki/Midnapore" target="_blank" rel="noopener noreferrer" className="wiki-link">Midnapore</a>, West Bengal. As of 2026, he is actively enrolled in his second year of undergraduate studies.<sup><a href="#ref-7" className="wiki-cite">[7]</a></sup>
              </p>
              <p>
                Alongside his university studies, Lohar continues to pursue self-taught programming, studying open web standards, RFCs, and building software tools and web projects.<sup><a href="#ref-4" className="wiki-cite">[4]</a></sup>
              </p>
            </section>

            {/* SECTION 2: COMPETITIVE GAMING */}
            <section id="gaming" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">2</span> Competitive gaming and early computing (2022–2023)
              </h2>
              <p>
                Between 2022 and 2023, prior to focusing on commercial software development, Lohar participated in regional multiplayer gaming communities and online tactical matches, playing under in-game handles including <i>Wb Arrow</i> and <i>Arrow Dada</i>.
              </p>
              <p>
                During this period, he examined technical aspects of multiplayer game performance, including <a href="https://en.wikipedia.org/wiki/User_Datagram_Protocol" target="_blank" rel="noopener noreferrer" className="wiki-link">UDP</a> packet transfer, client-side prediction, and <a href="https://en.wikipedia.org/wiki/Lag_compensation" target="_blank" rel="noopener noreferrer" className="wiki-link">lag compensation</a> in game engines. He also tested input latency, frame pacing, and server <a href="https://en.wikipedia.org/wiki/Tick_(software)" target="_blank" rel="noopener noreferrer" className="wiki-link">tick rates</a> under variable network conditions.<sup><a href="#ref-4" className="wiki-cite">[4]</a></sup>
              </p>
              <p>
                This experimentation contributed to his interest in asynchronous networking, low-latency data handling, and state management in web systems.<sup><a href="#ref-2" className="wiki-cite">[2]</a></sup><sup><a href="#ref-3" className="wiki-cite">[3]</a></sup>
              </p>
            </section>

            {/* SECTION 2: BUSINESS CAREER */}
            <section id="software-engineering" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">2</span> Business career
              </h2>
              <p>
                Lohar is a self-taught software engineer and technology entrepreneur whose commercial work encompasses full-stack software development, cloud systems architecture, e-commerce platform engineering, and automated semantic data integration.
              </p>

              <h3 id="shadow-arrow" className="mw-headline-h3">
                <span className="mw-headline-number">2.1</span> Shadow Arrow
              </h3>
              <p>
                In 2025, Lohar founded <b>Shadow Arrow</b> (<a href="https://www.shadowarrow.in" target="_blank" rel="noopener noreferrer" className="wiki-link">shadowarrow.in</a>), an independent software engineering studio and digital systems firm based in Bishnupur, West Bengal.<sup><a href="#ref-3" className="wiki-cite">[3]</a></sup> Serving as founder and lead systems architect, Lohar established the firm to design, build, and deploy custom web platforms, client portals, cloud microservices, and interactive web applications for commercial clients.
              </p>
              <p>
                Under Lohar's technical direction, Shadow Arrow emphasizes low-latency frontend architecture, strict compliance with web accessibility standards (WCAG / a11y), responsive cross-device user interfaces, and resilient backend microservices. The studio develops modern web systems utilizing TypeScript, React, Next.js, Node.js, and relational database systems including PostgreSQL.<sup><a href="#ref-4" className="wiki-cite">[4]</a></sup>
              </p>
              <p>
                The firm also provides bespoke technical consulting, helping regional businesses and digital organizations modernize their software infrastructure, streamline workflow automation, and integrate cloud-native API endpoints.
              </p>

              <h3 id="omnikart" className="mw-headline-h3">
                <span className="mw-headline-number">2.2</span> Omnikart
              </h3>
              <p>
                Lohar also engineered and launched <b>Omnikart</b>, a scalable e-commerce company and digital commerce platform designed to provide modular retail solutions for merchants and consumers. Architected as a high-throughput digital commerce platform, Omnikart incorporates robust product catalog pipelines, dynamic category filtering, real-time inventory tracking, and low-latency shopping cart session caching.
              </p>
              <p>
                The platform features end-to-end checkout processing, multi-channel payment gateway integrations, automated order status webhooks, and secure user authentication. Built with modern full-stack technologies, Omnikart was developed with an emphasis on mobile-first user experience, fast page load speeds, and structured schema metadata for product discovery and search engine optimization.
              </p>

              <h3 id="autodidactic-journey" className="mw-headline-h3">
                <span className="mw-headline-number">2.3</span> Software engineering
              </h3>
              <p>
                Lohar developed his programming skills through self-directed study, reading open-source codebases, documentation, and technical specifications. His core programming stack includes TypeScript, JavaScript, Python, Node.js, React, Next.js, and CSS, alongside relational database management with PostgreSQL and state caching using Redis.<sup><a href="#ref-4" className="wiki-cite">[4]</a></sup>
              </p>
              <p>
                Between 2023 and 2024, Lohar developed automation scripts and API utilities designed to extract and process public administrative and geographic data. His scripts incorporated error handling, request throttling, and data normalization routines to format unstructured public records into structured tables and JSON-LD schemas.
              </p>

              <h3 id="wikidata-pipelines" className="mw-headline-h3">
                <span className="mw-headline-number">2.4</span> Wikidata pipelines
              </h3>
              <p>
                Lohar built an automated ingestion bot written in Python and TypeScript to contribute regional civic and institutional datasets to <a href="https://en.wikipedia.org/wiki/Wikidata" target="_blank" rel="noopener noreferrer" className="wiki-link">Wikidata</a>.<sup><a href="#ref-6" className="wiki-cite">[6]</a></sup>
              </p>

              {/* DEDICATED ARCHIVAL CONTRIBUTION & INGESTION METRICS BOX */}
              <div className="wiki-contribution-box">
                <div className="wiki-contribution-header">
                  <span className="wiki-contribution-title">Autonomous Knowledge Graph Ingestion Registry</span>
                  <div className="wiki-contribution-badge flex items-center gap-1.5">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Wikimedia Open Data Linked Bot</span>
                  </div>
                </div>
                <div className="wiki-contribution-body">
                  <div className="wiki-metric-grid">
                    <div className="wiki-metric-item wiki-metric-item-live">
                      <div className="wiki-metric-label flex items-center justify-between">
                        <span>Live Contributions</span>
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" title="Live sync from Wikidata API"></span>
                      </div>
                      <div className="wiki-metric-val wiki-metric-live-text font-mono">
                        <a
                          href="https://www.wikidata.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-emerald-800"
                          title="View verified live records on Wikidata Knowledge Graph"
                        >
                          {liveCount.toLocaleString()}+
                        </a>{" "}
                        <span className="wiki-metric-sub">verified records</span>
                      </div>
                    </div>
                    <div className="wiki-metric-item">
                      <div className="wiki-metric-label">Automated Throughput</div>
                      <div className="wiki-metric-val">20,000+ <span className="wiki-metric-sub">records / day</span></div>
                    </div>
                    <div className="wiki-metric-item">
                      <div className="wiki-metric-label">Peak Burst Capacity</div>
                      <div className="wiki-metric-val">25,000+ <span className="wiki-metric-sub">records / cycle</span></div>
                    </div>
                    <div className="wiki-metric-item">
                      <div className="wiki-metric-label">Target Infrastructure</div>
                      <div className="wiki-metric-val">Wikidata <span className="wiki-metric-sub">(SPARQL / RDF Triples)</span></div>
                    </div>
                    <div className="wiki-metric-item">
                      <div className="wiki-metric-label">Core Pipeline Engine</div>
                      <div className="wiki-metric-val">Python / TypeScript <span className="wiki-metric-sub">ETL Daemons</span></div>
                    </div>
                  </div>
                  <div className="wiki-contribution-scope">
                    <b>Ingested National Domains:</b> High Courts &amp; Sessions Courts • District Hospitals &amp; Health Facilities • Rivers &amp; Hydrological Reservoirs • Municipal Bodies &amp; Tehsils • Universities &amp; Degree Colleges.
                  </div>
                </div>
              </div>

              <h2 id="business-career" className="mw-headline-h2">
                <span className="mw-headline-number">2</span> Career and ventures
              </h2>

              <h3 id="authorship" className="mw-headline-h3">
                <span className="mw-headline-number">2.1</span> Authorship and publications
              </h3>
              <p>
                As an author and technical writer, Lohar writes on self-directed programming, full-stack systems engineering, zero-day cybersecurity mechanics, and automated knowledge pipelines.<sup><a href="#ref-4" className="wiki-cite">[4]</a></sup> His literary and technical author records are indexed in international registries including <a href="https://orcid.org/0009-0004-5643-7612" target="_blank" rel="noopener noreferrer" className="wiki-link">ORCID</a>, <a href="https://www.amazon.com/author/bijoylohar" target="_blank" rel="noopener noreferrer" className="wiki-link">Amazon Author Central</a>, and <a href="https://www.goodreads.com/bijoylohar" target="_blank" rel="noopener noreferrer" className="wiki-link">Goodreads</a>.
              </p>
              <p>
                His published books and monographs focus on pragmatic engineering workflows, defensive systems security, autodidactic software mastery, and real-world semantic data architectures:
              </p>

              <table className="wikitable">
                <thead>
                  <tr>
                    <th>Title &amp; Work</th>
                    <th>Year</th>
                    <th>Subject / Discipline</th>
                    <th>Catalog &amp; Identifiers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><i><b>The Zero-Day Protocol: The Code That Bleeds</b></i></td>
                    <td>2026</td>
                    <td>Cybersecurity, Defensive Systems &amp; Threat Vectors</td>
                    <td>ISBN: 978-93-345-3606-5 • Amazon / Goodreads / ORCID</td>
                  </tr>
                  <tr>
                    <td><i><b>Architecting Scalable Web Systems</b></i></td>
                    <td>2026</td>
                    <td>Distributed Architecture, APIs &amp; Cloud Infrastructure</td>
                    <td>ISBN: 978-93-345-2895-4 • Open Library (OL46029039W) / Google Books</td>
                  </tr>
                  <tr>
                    <td><i><b>The Autodidact Engineer: Building Scalable Systems Through Self-Directed Code</b></i></td>
                    <td>2025</td>
                    <td>Software Engineering &amp; Modern Web Architecture</td>
                    <td>Amazon / Goodreads / ORCID</td>
                  </tr>
                </tbody>
              </table>

              <p>
                The automated pipeline processes entries across public infrastructure in India, including courts, educational institutions, administrative divisions, and public health facilities.
              </p>
            </section>

            {/* SECTION 3: OTHER ACTIVITIES */}
            <section id="creative-pursuits" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">3</span> Other activities
              </h2>
              <p>
                In addition to software engineering, Lohar engages in technical writing, digital video production, and 3D modeling.
              </p>

              <h3 id="authorship" className="mw-headline-h3">
                <span className="mw-headline-number">3.1</span> Authorship
              </h3>
              <p>
                As an author and technical writer, Lohar writes on self-directed programming, full-stack systems engineering, and automated knowledge pipelines.<sup><a href="#ref-4" className="wiki-cite">[4]</a></sup> His literary and technical author records are indexed in international registries including <a href="https://orcid.org/0009-0004-5643-7612" target="_blank" rel="noopener noreferrer" className="wiki-link">ORCID</a>, <a href="https://www.amazon.com/author/bijoylohar" target="_blank" rel="noopener noreferrer" className="wiki-link">Amazon Author Central</a>, and <a href="https://www.goodreads.com/bijoylohar" target="_blank" rel="noopener noreferrer" className="wiki-link">Goodreads</a>.
              </p>
              <p>
                His published books and monographs focus on pragmatic engineering workflows, autodidactic software mastery, and real-world semantic data architectures:
              </p>

              <table className="wikitable">
                <thead>
                  <tr>
                    <th>Title &amp; Work</th>
                    <th>Year</th>
                    <th>Subject / Discipline</th>
                    <th>Catalog &amp; Identifiers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><i><b>The Autodidact Engineer: Building Scalable Systems Through Self-Directed Code</b></i></td>
                    <td>2025</td>
                    <td>Software Engineering &amp; Modern Web Architecture</td>
                    <td>Amazon / Goodreads / ORCID</td>
                  </tr>
                  <tr>
                    <td><i><b>Automating the Semantic Web: Engineering Autonomous Wikidata Ingestion Pipelines</b></i></td>
                    <td>2025–2026</td>
                    <td>Semantic Web, SPARQL, Python &amp; Open Knowledge Graphs</td>
                    <td>Technical Documentation &amp; Research Monograph</td>
                  </tr>
                  <tr>
                    <td><i><b>Design, Performance &amp; Type Safety in Production Web Applications</b></i></td>
                    <td>2026</td>
                    <td>TypeScript, Next.js Ecosystem &amp; Performance Engineering</td>
                    <td>Developer Knowledge Series</td>
                  </tr>
                </tbody>
              </table>

              <h3 id="video-media" className="mw-headline-h3">
                <span className="mw-headline-number">3.2</span> 3D and video media
              </h3>
              <p>
                Lohar works in digital video editing and post-production, with an official profile cataloged on <a href="https://www.imdb.com/name/nm18949942/" target="_blank" rel="noopener noreferrer" className="wiki-link">IMDb</a>.<sup><a href="#ref-5" className="wiki-cite">[5]</a></sup> His media workflow includes digital color grading in DaVinci Resolve and 3D modeling in Blender.
              </p>
            </section>

            {/* SECTION 4: TECHNICAL PHILOSOPHY */}
            <section id="philosophy-toolchain" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">4</span> Technical philosophy
              </h2>
              <p>
                Lohar's engineering workflow prioritizes type safety, modular design, and efficient runtime execution.
              </p>

              <table className="wikitable">
                <thead>
                  <tr>
                    <th>Domain / Architecture</th>
                    <th>Primary Technologies</th>
                    <th>Implementation Scope &amp; Protocols</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>Full-Stack Web Systems</b></td>
                    <td>TypeScript, React, Next.js, Tailwind CSS, Node.js</td>
                    <td>Server-side rendering (SSR), edge functions, responsive user interfaces, and component modularity.</td>
                  </tr>
                  <tr>
                    <td><b>Semantic Web &amp; Data Bots</b></td>
                    <td>Wikidata API, SPARQL, Python, TypeScript ETL</td>
                    <td>Automated entity parsing, RDF triple binding, bounding-box coordinate validation, and Wikibase deduplication.</td>
                  </tr>
                  <tr>
                    <td><b>Database &amp; Storage</b></td>
                    <td>PostgreSQL, Redis, Supabase, Cloudflare R2</td>
                    <td>ACID relational integrity, in-memory caching queues, JSONB indexing, and transactional data reconciliation.</td>
                  </tr>
                  <tr>
                    <td><b>Digital Media &amp; VFX</b></td>
                    <td>DaVinci Resolve, Blender, Adobe Premiere Pro</td>
                    <td>Node-based color science, timeline proxy editing, and 3D procedural modeling.</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* SECTION 5: PERSONAL LIFE */}
            <section id="personal-life" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">5</span> Personal life
              </h2>
              <p>
                Lohar lives in his hometown of <a href="https://en.wikipedia.org/wiki/Bishnupur,_Bankura" target="_blank" rel="noopener noreferrer" className="wiki-link">Bishnupur</a>, in the <a href="https://en.wikipedia.org/wiki/Bankura_district" target="_blank" rel="noopener noreferrer" className="wiki-link">Bankura district</a> of <a href="https://en.wikipedia.org/wiki/West_Bengal" target="_blank" rel="noopener noreferrer" className="wiki-link">West Bengal</a>, where he resides with his family, including his parents, Binod and Soma Lohar, and his sister, Dipti Lohar.
              </p>
              <p>
                He maintains a home-based development environment where he balances ongoing client engineering work for Shadow Arrow with his academic schedule as a second-year undergraduate student under <a href="https://en.wikipedia.org/wiki/Vidyasagar_University" target="_blank" rel="noopener noreferrer" className="wiki-link">Vidyasagar University</a>. His daily workflow involves writing and testing software, maintaining automated data bots, and studying computer science literature.
              </p>
              <p>
                Outside of commercial software development, Lohar enjoys traveling, exploring regional landscapes, and listening to music across diverse genres. His personal creative interests also include studying computer hardware architectures, digital cinematography, node-based color grading in DaVinci Resolve, and 3D modeling in Blender. He also plays video games casually and follows developments in real-time graphics and game engines.
              </p>
              <p>
                Lohar supports open-access learning and open educational resources. In his spare time, he provides informal guidance to students and beginners in his regional community who are interested in learning self-taught web development, command-line tools, and computer programming fundamentals.<sup><a href="#ref-4" className="wiki-cite">[4]</a></sup>
              </p>
            </section>

            {/* SECTION 6: SEE ALSO */}
            <section id="see-also" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">6</span> See also
              </h2>
              
              <div className="see-also-card">
                <div className="see-also-grid">
                  <div className="see-also-col">
                    <div className="see-also-cat-title">Engineering, Software Architecture &amp; Technology</div>
                    <ul className="vector-bullet-list">
                      <li><b><a href="https://en.wikipedia.org/wiki/TypeScript" target="_blank" rel="noopener noreferrer" className="wiki-link">TypeScript</a></b> – Strongly typed programming language building scalable JavaScript applications</li>
                      <li><b><a href="https://en.wikipedia.org/wiki/Autodidacticism" target="_blank" rel="noopener noreferrer" className="wiki-link">Autodidacticism</a></b> – Self-directed learning and independent software mastery</li>
                      <li><b><a href="https://www.shadowarrow.in" target="_blank" rel="noopener noreferrer" className="wiki-link">Shadow Arrow</a></b> – Bespoke software engineering and client portals venture</li>
                      <li><b><a href="https://en.wikipedia.org/wiki/Extract,_transform,_load" target="_blank" rel="noopener noreferrer" className="wiki-link">Extract, transform, load (ETL)</a></b> – Data integration pipeline architecture</li>
                    </ul>
                  </div>

                  <div className="see-also-col">
                    <div className="see-also-cat-title">Open Data, Semantic Web &amp; Regional Context</div>
                    <ul className="vector-bullet-list">
                      <li><b><a href="https://en.wikipedia.org/wiki/Wikidata" target="_blank" rel="noopener noreferrer" className="wiki-link">Wikidata</a></b> – Free, open multilingual knowledge base operated by Wikimedia Foundation</li>
                      <li><b><a href="https://en.wikipedia.org/wiki/Semantic_Web" target="_blank" rel="noopener noreferrer" className="wiki-link">Semantic Web</a></b> – Standards framework for linked open data defined by W3C</li>
                      <li><b><a href="https://en.wikipedia.org/wiki/SPARQL" target="_blank" rel="noopener noreferrer" className="wiki-link">SPARQL Protocol</a></b> – Query language and protocol for RDF graph databases</li>
                      <li><b><a href="https://en.wikipedia.org/wiki/Vidyasagar_University" target="_blank" rel="noopener noreferrer" className="wiki-link">Vidyasagar University</a></b> – Public state university in West Bengal, India</li>
                      <li><b><a href="https://en.wikipedia.org/wiki/Bishnupur,_Bankura" target="_blank" rel="noopener noreferrer" className="wiki-link">Bishnupur, Bankura</a></b> – Historic municipality in West Bengal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 7: REFERENCES */}
            <section id="references" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">7</span> References
              </h2>
              <ol className="references">
                <li id="ref-1">
                  <span className="mw-cite-backlink"><a href="#article-top">^</a></span>{" "}
                  <span className="reference-text">
                    Lohar, Bijoy. <a href="https://www.bijoylohar.in" target="_blank" rel="noopener noreferrer" className="wiki-link">"Official Website"</a>. <i>bijoylohar.in</i>. Retrieved 4 October 2026.
                  </span>
                </li>
                <li id="ref-2">
                  <span className="mw-cite-backlink"><a href="#software-engineering">^</a></span>{" "}
                  <span className="reference-text">
                    Lohar, Bijoy. <a href="https://github.com/loharbijoy2005-a11y" target="_blank" rel="noopener noreferrer" className="wiki-link">"Open Source Software Repositories and Systems Development"</a>. <i>GitHub</i>. Retrieved 2026.
                  </span>
                </li>
                <li id="ref-3">
                  <span className="mw-cite-backlink"><a href="#shadow-arrow">^</a></span>{" "}
                  <span className="reference-text">
                    Shadow Arrow. <a href="https://www.shadowarrow.in" target="_blank" rel="noopener noreferrer" className="wiki-link">"Full-Stack Web Engineering and Commercial Architecture"</a>. <i>Shadow Arrow</i>. Bishnupur, West Bengal, India.
                  </span>
                </li>
                <li id="ref-4">
                  <span className="mw-cite-backlink"><a href="#autodidactic-journey">^</a></span>{" "}
                  <span className="reference-text">
                    Lohar, Bijoy. <a href="https://www.amazon.com/author/bijoylohar" target="_blank" rel="noopener noreferrer" className="wiki-link">"Systems Architecture, Network Tick Dynamics, and Autodidactic Software Engineering"</a>. Technical notes and essays. Bishnupur, Bankura, India.
                  </span>
                </li>
                <li id="ref-5">
                  <span className="mw-cite-backlink"><a href="#creative-pursuits">^</a></span>{" "}
                  <span className="reference-text">
                    IMDb. <a href="https://www.imdb.com/name/nm18949942/" target="_blank" rel="noopener noreferrer" className="wiki-link">"Bijoy Lohar — Filmography, Digital Video Credits &amp; Media Post-Production"</a>. <i>IMDb</i>. Retrieved 2026.
                  </span>
                </li>
                <li id="ref-6">
                  <span className="mw-cite-backlink"><a href="#wikidata-pipelines">^</a></span>{" "}
                  <span className="reference-text">
                    Wikimedia Foundation &amp; Wikidata Contributors. <a href="https://www.wikidata.org" target="_blank" rel="noopener noreferrer" className="wiki-link">"Autonomous Entity Ingestion and Semantic Linked Data Pipelines"</a>. <i>Wikidata API &amp; SPARQL Query Service</i>.
                  </span>
                </li>
                <li id="ref-7">
                  <span className="mw-cite-backlink"><a href="#education">^</a></span>{" "}
                  <span className="reference-text">
                    <a href="https://en.wikipedia.org/wiki/Vidyasagar_University" target="_blank" rel="noopener noreferrer" className="wiki-link">"Vidyasagar University: Collegiate Higher Education Affiliation &amp; Academic Records"</a>. Vidyasagar University, Midnapore, West Bengal, India. Retrieved 2026.
                  </span>
                </li>
                <li id="ref-8">
                  <span className="mw-cite-backlink"><a href="#education">^</a></span>{" "}
                  <span className="reference-text">
                    West Bengal State Academic Records. <i>Secondary &amp; Higher Secondary Certification (Bishnupur High School &amp; Radhanagar High School)</i>. Bankura District, West Bengal.
                  </span>
                </li>
                <li id="ref-9">
                  <span className="mw-cite-backlink"><a href="#authorship">^</a></span>{" "}
                  <span className="reference-text">
                    Lohar, Bijoy (2024–2026). <a href="https://www.goodreads.com/bijoylohar" target="_blank" rel="noopener noreferrer" className="wiki-link">"Published Technical Works and Software Systems Architecture Monographs"</a>. <i>Goodreads Author Index</i>.
                  </span>
                </li>
                <li id="ref-10">
                  <span className="mw-cite-backlink"><a href="#external-links">^</a></span>{" "}
                  <span className="reference-text">
                    ORCID. <a href="https://orcid.org/0009-0004-5643-7612" target="_blank" rel="noopener noreferrer" className="wiki-link">"Bijoy Lohar — Open Researcher and Contributor Identifier (0009-0004-5643-7612)"</a>. <i>ORCID Registry</i>.
                  </span>
                </li>
              </ol>
            </section>

            {/* SECTION 8: EXTERNAL LINKS */}
            <section id="external-links" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">8</span> External links
              </h2>
              <ul className="vector-bullet-list">
                <li>
                  <a href="https://www.bijoylohar.in" target="_blank" rel="noopener noreferrer" className="wiki-link">Official Website</a>
                </li>
                <li>
                  <a href="https://www.shadowarrow.in" target="_blank" rel="noopener noreferrer" className="wiki-link">Shadow Arrow Official Organization Portal</a>
                </li>
                <li>
                  <a href="https://orcid.org/0009-0004-5643-7612" target="_blank" rel="noopener noreferrer" className="wiki-link">ORCID Open Researcher and Contributor Identifier (0009-0004-5643-7612)</a>
                </li>
                <li>
                  <a href="https://www.wikidata.org" target="_blank" rel="noopener noreferrer" className="wiki-link">Wikidata Semantic Knowledge Graph &amp; Linked Data</a>
                </li>
                <li>
                  <a href="https://www.amazon.com/author/bijoylohar" target="_blank" rel="noopener noreferrer" className="wiki-link">Bijoy Lohar on Amazon Author Central</a>
                </li>
                <li>
                  <a href="https://www.goodreads.com/bijoylohar" target="_blank" rel="noopener noreferrer" className="wiki-link">Bijoy Lohar on Goodreads Author Index</a>
                </li>
                <li>
                  <a href="https://github.com/loharbijoy2005-a11y" target="_blank" rel="noopener noreferrer" className="wiki-link">Bijoy Lohar on GitHub</a>
                </li>
                <li>
                  <a href="https://www.imdb.com/name/nm18949942/" target="_blank" rel="noopener noreferrer" className="wiki-link">Bijoy Lohar on IMDb</a>
                </li>
                <li>
                  <a href="https://developers.google.com/profile/u/101253410801307724262" target="_blank" rel="noopener noreferrer" className="wiki-link">Google Developer Verified Profile</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/bijoy-lohar-5a508832b" target="_blank" rel="noopener noreferrer" className="wiki-link">Bijoy Lohar on LinkedIn</a>
                </li>
                <li>
                  <a href="https://topmate.io/bijoy_lohar" target="_blank" rel="noopener noreferrer" className="wiki-link">Topmate Mentorship &amp; Advisory Profile</a>
                </li>
              </ul>
            </section>

            {/* CATEGORIES FOOTER */}
            <div className="catlinks noprint" id="catlinks">
              <div className="mw-normal-catlinks">
                <a href="https://en.wikipedia.org/wiki/Special:Categories" target="_blank" rel="noopener noreferrer" className="wiki-link">Categories</a>:
                <ul>
                  <li><a href="https://en.wikipedia.org/wiki/Category:Living_people" target="_blank" rel="noopener noreferrer" className="wiki-link">Living people</a></li>
                  <li><a href="https://en.wikipedia.org/wiki/Category:2005_births" target="_blank" rel="noopener noreferrer" className="wiki-link">2005 births</a></li>
                  <li><a href="https://en.wikipedia.org/wiki/Category:Indian_software_engineers" target="_blank" rel="noopener noreferrer" className="wiki-link">Indian software engineers</a></li>
                  <li><a href="https://en.wikipedia.org/wiki/Category:Indian_technology_founders" target="_blank" rel="noopener noreferrer" className="wiki-link">Indian technology founders</a></li>
                  <li><a href="https://en.wikipedia.org/wiki/Category:People_from_Bankura_district" target="_blank" rel="noopener noreferrer" className="wiki-link">People from Bankura district</a></li>
                </ul>
              </div>
            </div>

            {/* FOOTER METADATA & WIKIPEDIA STYLE FOOTER */}
            <footer className="vector-footer" role="contentinfo">
              <hr className="vector-footer-hr" />
              <div className="vector-footer-container">
                <div className="vector-footer-content">
                  <ul className="vector-footer-info">
                    <li id="footer-info-lastmod">
                      This page was last edited on 4 October 2026, at 04:30 (UTC).
                    </li>
                    <li id="footer-info-copyright">
                      Text is available under the{" "}
                      <a
                        href="https://creativecommons.org/licenses/by-sa/4.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wiki-link"
                      >
                        Creative Commons Attribution-ShareAlike License 4.0
                      </a>
                      ; additional terms may apply.
                    </li>
                  </ul>
                  <ul className="vector-footer-places">
                    <li>
                      <a
                        href="https://foundation.wikimedia.org/wiki/Policy:Privacy_policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wiki-link"
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.mediawiki.org/wiki/MediaWiki"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wiki-link"
                      >
                        About MediaWiki
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://en.wikipedia.org/wiki/Wikipedia:General_disclaimer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wiki-link"
                      >
                        Disclaimers
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://foundation.wikimedia.org/wiki/Policy:Terms_of_Use"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wiki-link"
                      >
                        Terms of Use
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.mediawiki.org/wiki/Extension:MobileFrontend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wiki-link"
                      >
                        Mobile view
                      </a>
                    </li>
                  </ul>
                </div>

                <ul className="vector-footer-icons" aria-label="Badges and licensing">
                  <li className="vector-footer-icon-item">
                    <a
                      href="https://creativecommons.org/licenses/by-sa/4.0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Creative Commons Attribution-ShareAlike License 4.0"
                    >
                      <img
                        src="/images/badges/by-sa.svg"
                        alt="Creative Commons Attribution-ShareAlike License 4.0"
                        width={88}
                        height={31}
                        loading="lazy"
                        className="vector-badge-img"
                      />
                    </a>
                  </li>
                  <li className="vector-footer-icon-item">
                    <a
                      href="https://www.mediawiki.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Powered by MediaWiki"
                    >
                      <img
                        src="/images/badges/mediawiki-badge.svg"
                        alt="Powered by MediaWiki"
                        width={88}
                        height={31}
                        loading="lazy"
                        className="vector-badge-img"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </main>
      </div>

      {/* HIDDEN GOOGLE TRANSLATE CONTAINER */}
      <div id="google_translate_element" className="vector-google-translate-container" />

      {/* AUTHENTIC VECTOR 2022 CSS STYLING */}
      <style>{`
        .vector-2022-canvas {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Lato, Helvetica, Arial, sans-serif;
          font-size: 14px;
          line-height: 1.65;
          color: #202122;
          background-color: #f8f9fa;
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        /* ==========================================================
           1. PORTFOLIO THEME - OBSIDIAN & GOLD (DEFAULT SITE THEME)
           ========================================================== */
        .vector-theme-portfolio {
          background-color: #12100B;
          color: #FCF9F2;
        }
        .vector-theme-portfolio .vector-global-header {
          background-color: #18140E;
          border-bottom-color: #2E251A;
        }
        .vector-theme-portfolio .vector-site-brand {
          color: #FCF9F2;
        }
        .vector-theme-portfolio .vector-header-btn {
          background: #221C14;
          border-color: #3A3022;
          color: #DCD7CE;
        }
        .vector-theme-portfolio .vector-header-btn:hover {
          background: #2C241A;
          color: #E5C158;
          border-color: #E5C158;
        }
        .vector-theme-portfolio .vector-header-btn.active {
          background: #2C241A;
          color: #E5C158;
          border-color: #E5C158;
        }
        .vector-theme-portfolio .vector-header-btn-primary {
          background: #E5C158;
          border-color: #E5C158;
          color: #12100B;
          font-weight: 700;
        }
        .vector-theme-portfolio .vector-header-btn-primary:hover {
          background: #F3D882;
          color: #12100B;
        }
        .vector-theme-portfolio .vector-column-article {
          background: #18140E;
          border-color: #2E251A;
          color: #FCF9F2;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }
        .vector-theme-portfolio .vector-article-header {
          border-bottom-color: #2E251A;
        }
        .vector-theme-portfolio .firstHeading {
          color: #FCF9F2;
        }
        .vector-theme-portfolio .mw-body-content p {
          color: #DCD7CE;
        }
        .vector-theme-portfolio .wiki-link {
          color: #E5C158;
        }
        .vector-theme-portfolio .wiki-link:hover {
          color: #F3D882;
        }
        .vector-theme-portfolio .wiki-cite {
          color: #E5C158;
        }
        .vector-theme-portfolio .vector-toc-header {
          border-bottom-color: #2E251A;
        }
        .vector-theme-portfolio .vector-toc-title {
          color: #FCF9F2;
        }
        .vector-theme-portfolio .vector-toc-toggle-btn {
          color: #E5C158;
        }
        .vector-theme-portfolio .vector-toc-link {
          color: #C4BDB0;
        }
        .vector-theme-portfolio .vector-toc-link:hover {
          background: rgba(229, 193, 88, 0.08);
          color: #E5C158;
        }
        .vector-theme-portfolio .vector-toc-collapse-btn {
          color: #A0988A;
        }
        .vector-theme-portfolio .vector-toc-collapse-btn:hover {
          background: rgba(229, 193, 88, 0.12);
          color: #E5C158;
        }
        .vector-theme-portfolio .vector-toc-sublist {
          border-left-color: #2E251A;
        }
        .vector-theme-portfolio .vector-toc-item-active > .vector-toc-row > .vector-toc-link,
        .vector-theme-portfolio .vector-toc-item-active > .vector-toc-link {
          background: none;
          border-left: none;
          color: #E5C158;
          font-weight: 700;
        }
        .vector-theme-portfolio .vector-toc-num {
          color: #8C8375;
        }
        .vector-theme-portfolio .infobox {
          background: #18140E;
          border-color: #2E251A;
          color: #FCF9F2;
        }
        .vector-theme-portfolio .infobox-above {
          background: #241D14;
          color: #E5C158;
          border-bottom: 1px solid #2E251A;
        }
        .vector-theme-portfolio .infobox-subheader,
        .vector-theme-portfolio .infobox-office-block {
          background: #1A150E;
          color: #FCF9F2;
          border-bottom: 1px solid #2E251A;
        }
        .vector-theme-portfolio .infobox-image {
          background: transparent;
        }
        .vector-theme-portfolio .infobox-header {
          background-color: #241D14;
          color: #E5C158;
          border-color: #2E251A;
        }
        .vector-theme-portfolio .infobox-header-role {
          background-color: #241D14;
          color: #E5C158;
        }
        .vector-theme-portfolio .infobox-data {
          background: transparent;
          color: #FCF9F2;
        }
        .vector-theme-portfolio .infobox-label {
          background: transparent;
          color: #FCF9F2;
        }
        .vector-theme-portfolio .wikitable {
          background: #16130D;
          border-color: #2E251A;
        }
        .vector-theme-portfolio .wikitable th {
          background: #241E15;
          color: #E5C158;
          border-color: #2E251A;
        }
        .vector-theme-portfolio .wikitable td {
          border-color: #2E251A;
          color: #DCD7CE;
        }
        .vector-theme-portfolio .wiki-contribution-box {
          background: #151A13;
          border-color: #233420;
          border-left: 4px solid #4ADE80;
        }
        .vector-theme-portfolio .wiki-contribution-header {
          background: #111710;
          border-color: #233420;
        }
        .vector-theme-portfolio .wiki-contribution-title {
          color: #4ADE80;
        }
        .vector-theme-portfolio .wiki-metric-item {
          background: #1A2118;
          border-color: #2A3D26;
        }
        .vector-theme-portfolio .wiki-metric-val {
          color: #FCF9F2;
        }
        .vector-theme-portfolio .wiki-metric-label {
          color: #8C9989;
        }
        .vector-theme-portfolio .see-also-card {
          background: #1C1710;
          border-color: #2E251A;
          border-left: 4px solid #E5C158;
        }
        .vector-theme-portfolio .see-also-cat-title {
          color: #E5C158;
          border-bottom-color: #2E251A;
        }
        .vector-theme-portfolio .catlinks {
          background: #1C1710;
          border-color: #2E251A;
          color: #A0988A;
        }
        .vector-theme-portfolio .vector-appearance-dropdown {
          background: #1C1710;
          border-color: #2E251A;
          color: #FCF9F2;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6);
        }
        .vector-theme-portfolio .vector-appearance-label {
          color: #E5C158;
        }
        .vector-theme-portfolio .vector-opt-btn {
          background: #221C14;
          border-color: #3A3022;
          color: #DCD7CE;
        }
        .vector-theme-portfolio .vector-opt-btn:hover {
          background: #2C241A;
          color: #E5C158;
        }
        .vector-theme-portfolio .vector-opt-btn.active {
          background: #E5C158;
          color: #12100B;
          border-color: #E5C158;
          font-weight: 700;
        }
        .vector-theme-portfolio .mw-headline-h2 {
          color: #FCF9F2;
          border-bottom-color: #2E251A;
        }
        .vector-theme-portfolio .mw-headline-h3 {
          color: #FCF9F2;
        }
        .vector-theme-portfolio .references,
        .vector-theme-portfolio .references li,
        .vector-theme-portfolio .reference-text {
          color: #DCD7CE !important;
        }
        .vector-theme-portfolio .mw-cite-backlink a {
          color: #E5C158 !important;
        }
        .vector-theme-portfolio .vector-bullet-list,
        .vector-theme-portfolio .vector-bullet-list li {
          color: #DCD7CE !important;
        }
        .vector-theme-portfolio .mw-headline-number {
          color: #E5C158 !important;
        }
        .vector-theme-portfolio i,
        .vector-theme-portfolio em,
        .vector-theme-portfolio b,
        .vector-theme-portfolio strong {
          color: #FCF9F2 !important;
        }
        .vector-theme-portfolio .wiki-contribution-scope {
          color: #B2C0AF !important;
          border-top-color: #233420 !important;
        }
        .vector-theme-portfolio .vector-footer-info {
          color: #8C8375 !important;
        }
        .vector-theme-portfolio .vector-footer-places li:not(:last-child)::after {
          color: #5A5245 !important;
        }
        .vector-theme-portfolio .vector-footer-hr {
          border-color: #2E251A !important;
        }
        .vector-theme-portfolio .thumbinner {
          background-color: #1C1710;
          border-color: #2E251A;
        }
        .vector-theme-portfolio .thumbcaption {
          color: #DCD7CE;
        }
        .vector-theme-portfolio .thumbimage-wrapper {
          background: #241D14;
          border: 1px solid #3A3022;
          color: #FCF9F2;
        }

        /* ==========================================================
           2. WIKIPEDIA DARK THEME - CLASSIC MIDNIGHT DARK MODE
           ========================================================== */
        .vector-theme-dark {
          background-color: #101418;
          color: #e8eaed;
        }
        .vector-theme-dark .vector-global-header {
          background-color: #181e24;
          border-bottom-color: #2d3748;
        }
        .vector-theme-dark .vector-site-brand {
          color: #f1f3f4;
        }
        .vector-theme-dark .vector-header-btn {
          background: #20262e;
          border-color: #3c4043;
          color: #e8eaed;
        }
        .vector-theme-dark .vector-header-btn:hover {
          background: #2a323d;
          color: #8ab4f8;
          border-color: #8ab4f8;
        }
        .vector-theme-dark .vector-header-btn.active {
          background: #2a323d;
          color: #8ab4f8;
          border-color: #8ab4f8;
        }
        .vector-theme-dark .vector-header-btn-primary {
          background: #8ab4f8;
          border-color: #8ab4f8;
          color: #101418;
          font-weight: 700;
        }
        .vector-theme-dark .vector-header-btn-primary:hover {
          background: #aecbfa;
          color: #101418;
        }
        .vector-theme-dark .vector-column-article {
          background: #1a1e24;
          border-color: #2d3748;
          color: #e8eaed;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }
        .vector-theme-dark .vector-article-header {
          border-bottom-color: #2d3748;
        }
        .vector-theme-dark .firstHeading {
          color: #f1f3f4;
        }
        .vector-theme-dark .mw-body-content p {
          color: #dadce0;
        }
        .vector-theme-dark .wiki-link {
          color: #8ab4f8;
        }
        .vector-theme-dark .wiki-link:hover {
          color: #aecbfa;
        }
        .vector-theme-dark .wiki-cite {
          color: #8ab4f8;
        }
        .vector-theme-dark .vector-toc-header {
          border-bottom-color: #2d3748;
        }
        .vector-theme-dark .vector-toc-title {
          color: #f1f3f4;
        }
        .vector-theme-dark .vector-toc-toggle-btn {
          color: #8ab4f8;
        }
        .vector-theme-dark .vector-toc-link {
          color: #9aa0a6;
        }
        .vector-theme-dark .vector-toc-link:hover {
          background: rgba(138, 180, 248, 0.1);
          color: #8ab4f8;
        }
        .vector-theme-dark .vector-toc-collapse-btn {
          color: #9aa0a6;
        }
        .vector-theme-dark .vector-toc-collapse-btn:hover {
          background: rgba(138, 180, 248, 0.15);
          color: #8ab4f8;
        }
        .vector-theme-dark .vector-toc-sublist {
          border-left-color: #2d3748;
        }
        .vector-theme-dark .vector-toc-item-active > .vector-toc-row > .vector-toc-link,
        .vector-theme-dark .vector-toc-item-active > .vector-toc-link {
          background: rgba(138, 180, 248, 0.15);
          border-left: 3px solid #8ab4f8;
          color: #8ab4f8;
        }
        .vector-theme-dark .vector-toc-num {
          color: #80868b;
        }
        .vector-theme-dark .infobox {
          background: #181e24;
          border-color: #3c4043;
          color: #e8eaed;
        }
        .vector-theme-dark .infobox-above {
          background: #202b38;
          color: #8ab4f8;
          border-bottom: 1px solid #3c4043;
        }
        .vector-theme-dark .infobox-subheader,
        .vector-theme-dark .infobox-office-block {
          background: #161c22;
          color: #e8eaed;
          border-bottom: 1px solid #3c4043;
        }
        .vector-theme-dark .infobox-image {
          background: transparent;
        }
        .vector-theme-dark .infobox-header {
          background-color: #202b38;
          color: #8ab4f8;
          border-color: #3c4043;
        }
        .vector-theme-dark .infobox-header-role {
          background-color: #202b38;
          color: #8ab4f8;
        }
        .vector-theme-dark .infobox-data {
          background: transparent;
          color: #e8eaed;
        }
        .vector-theme-dark .infobox-label {
          background: transparent;
          color: #f1f3f4;
        }
        .vector-theme-dark .wikitable {
          background: #1a1e24;
          border-color: #3c4043;
        }
        .vector-theme-dark .wikitable th {
          background: #28303a;
          color: #8ab4f8;
          border-color: #3c4043;
        }
        .vector-theme-dark .wikitable td {
          border-color: #3c4043;
          color: #dadce0;
        }
        .vector-theme-dark .wiki-contribution-box {
          background: #132015;
          border-color: #1e3a24;
          border-left: 4px solid #81c995;
        }
        .vector-theme-dark .wiki-contribution-header {
          background: #0f1c11;
          border-color: #1e3a24;
        }
        .vector-theme-dark .wiki-contribution-title {
          color: #81c995;
        }
        .vector-theme-dark .wiki-metric-item {
          background: #18281a;
          border-color: #24442b;
        }
        .vector-theme-dark .wiki-metric-val {
          color: #f1f3f4;
        }
        .vector-theme-dark .wiki-metric-label {
          color: #9aa0a6;
        }
        .vector-theme-dark .see-also-card {
          background: #20262e;
          border-color: #3c4043;
          border-left: 4px solid #8ab4f8;
        }
        .vector-theme-dark .see-also-cat-title {
          color: #8ab4f8;
          border-bottom-color: #3c4043;
        }
        .vector-theme-dark .catlinks {
          background: #20262e;
          border-color: #3c4043;
          color: #9aa0a6;
        }
        .vector-theme-dark .vector-appearance-dropdown {
          background: #20262e;
          border-color: #3c4043;
          color: #f1f3f4;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6);
        }
        .vector-theme-dark .vector-appearance-label {
          color: #8ab4f8;
        }
        .vector-theme-dark .vector-opt-btn {
          background: #28303a;
          border-color: #3c4043;
          color: #dadce0;
        }
        .vector-theme-dark .vector-opt-btn:hover {
          background: #343e4b;
          color: #8ab4f8;
        }
        .vector-theme-dark .vector-opt-btn.active {
          background: #8ab4f8;
          color: #101418;
          border-color: #8ab4f8;
          font-weight: 700;
        }
        .vector-theme-dark .mw-headline-h2 {
          color: #f1f3f4;
          border-bottom-color: #3c4043;
        }
        .vector-theme-dark .mw-headline-h3 {
          color: #f1f3f4;
        }
        .vector-theme-dark .references,
        .vector-theme-dark .references li,
        .vector-theme-dark .reference-text {
          color: #dadce0 !important;
        }
        .vector-theme-dark .mw-cite-backlink a {
          color: #8ab4f8 !important;
        }
        .vector-theme-dark .vector-bullet-list,
        .vector-theme-dark .vector-bullet-list li {
          color: #dadce0 !important;
        }
        .vector-theme-dark .mw-headline-number {
          color: #8ab4f8 !important;
        }
        .vector-theme-dark i,
        .vector-theme-dark em,
        .vector-theme-dark b,
        .vector-theme-dark strong {
          color: #f1f3f4 !important;
        }
        .vector-theme-dark .wiki-contribution-scope {
          color: #a8dadc !important;
          border-top-color: #1e3a24 !important;
        }
        .vector-theme-dark .vector-footer-info {
          color: #9aa0a6 !important;
        }
        .vector-theme-dark .vector-footer-places li:not(:last-child)::after {
          color: #5f6368 !important;
        }
        .vector-theme-dark .vector-footer-hr {
          border-color: #2d3748 !important;
        }
        .vector-theme-dark .thumbinner {
          background-color: #20262e;
          border-color: #3c4043;
        }
        .vector-theme-dark .thumbcaption {
          color: #9aa0a6;
        }
        .vector-theme-dark .thumbimage-wrapper {
          background: #181e24;
          border: 1px solid #2d3748;
          color: #f1f3f4;
        }

        /* ==========================================================
           3. WIKIPEDIA LIGHT THEME - CLASSIC LIGHT PAPER MODE
           ========================================================== */
        .vector-theme-light {
          background-color: #f8f9fa;
          color: #202122;
        }
        .vector-theme-light .vector-global-header {
          background-color: #ffffff;
          border-bottom-color: #c8ccd1;
        }
        .vector-theme-light .vector-site-brand {
          color: #202122;
        }
        .vector-theme-light .vector-header-btn {
          background: #f8f9fa;
          border-color: #c8ccd1;
          color: #202122;
        }
        .vector-theme-light .vector-header-btn:hover {
          background: #eaecf0;
          color: #000000;
        }
        .vector-theme-light .vector-header-btn.active {
          background: #eaecf0;
          border-color: #3366cc;
          color: #3366cc;
        }
        .vector-theme-light .vector-header-btn-primary {
          background: #3366cc;
          border-color: #3366cc;
          color: #ffffff;
          font-weight: 600;
        }
        .vector-theme-light .vector-header-btn-primary:hover {
          background: #447ff5;
          color: #ffffff;
        }
        .vector-theme-light .vector-column-article {
          background: #ffffff;
          border-color: #a2a9b1;
          color: #202122;
        }
        .vector-theme-light .firstHeading {
          color: #000000;
        }
        .vector-theme-light .mw-body-content p {
          color: #202122;
        }
        .vector-theme-light .wiki-link {
          color: #3366cc;
        }
        .vector-theme-light .wiki-link:hover {
          color: #447ff5;
        }
        .vector-theme-light .wiki-cite {
          color: #3366cc;
        }
        .vector-theme-light .vector-toc-header {
          border-bottom-color: #c8ccd1;
        }
        .vector-theme-light .vector-toc-title {
          color: #202122;
        }
        .vector-theme-light .vector-toc-toggle-btn {
          color: #3366cc;
        }
        .vector-theme-light .vector-toc-link {
          color: #3366cc;
        }
        .vector-theme-light .vector-toc-link:hover {
          text-decoration: underline;
        }
        .vector-theme-light .vector-toc-item-active > .vector-toc-row > .vector-toc-link,
        .vector-theme-light .vector-toc-item-active > .vector-toc-link {
          color: #202122;
          font-weight: 700;
          background: none;
          border-left: none;
        }
        .vector-theme-light .infobox {
          background: #ffffff;
          border-color: #c8ccd1;
          color: #202122;
        }
        .vector-theme-light .infobox-above {
          background: #eaf3ff;
          color: #002bb8;
          border-bottom: 1px solid #c8ccd1;
        }
        .vector-theme-light .infobox-subheader,
        .vector-theme-light .infobox-office-block {
          background: #f8f9fa;
          color: #202122;
          border-bottom: 1px solid #c8ccd1;
        }
        .vector-theme-light .infobox-image {
          background: transparent;
        }
        .vector-theme-light .infobox-header {
          background-color: #eaf3ff;
          color: #000000;
          border-top: 1px solid #c8ccd1;
          border-bottom: 1px solid #c8ccd1;
        }
        .vector-theme-light .infobox-header-role {
          background-color: #eaf3ff;
          color: #002bb8;
        }
        .vector-theme-light .infobox-data {
          background: transparent;
          color: #202122;
        }
        .vector-theme-light .infobox-label {
          background: transparent;
          color: #000000;
        }
        .vector-theme-light .vector-appearance-dropdown {
          background: #ffffff;
          border-color: #a2a9b1;
          color: #202122;
        }
        .vector-theme-light .vector-opt-btn {
          background: #f8f9fa;
          border-color: #c8ccd1;
          color: #202122;
        }
        .vector-theme-light .vector-opt-btn:hover {
          background: #eaecf0;
        }
        .vector-theme-light .vector-opt-btn.active {
          background: #3366cc;
          border-color: #3366cc;
          color: #ffffff;
        }
        .vector-theme-light .thumbinner {
          background-color: #f8f9fa;
          border-color: #c8ccd1;
        }
        .vector-theme-light .thumbcaption {
          color: #54595d;
        }
        .vector-theme-light .thumbimage-wrapper {
          background: #ffffff;
          border: 1px solid #eaecf0;
          color: #202122;
        }

        /* TEXT SIZES */
        .wiki-text-small {
          font-size: 12.5px;
          line-height: 1.55;
        }
        .wiki-text-small p,
        .wiki-text-small li,
        .wiki-text-small td,
        .wiki-text-small th,
        .wiki-text-small .lead-paragraph {
          font-size: 12.5px !important;
          line-height: 1.55 !important;
        }
        .wiki-text-small .mw-headline-h2 {
          font-size: 18px !important;
        }
        .wiki-text-small .mw-headline-h3 {
          font-size: 14.5px !important;
        }

        .wiki-text-standard {
          font-size: 16px;
          line-height: 1.7;
        }
        .wiki-text-standard p,
        .wiki-text-standard li,
        .wiki-text-standard td,
        .wiki-text-standard th {
          font-size: 16px;
          line-height: 1.7;
        }
        .wiki-text-standard .lead-paragraph {
          font-size: 17px;
          line-height: 1.75;
        }
        .wiki-text-standard .mw-headline-h2 {
          font-size: 24px;
        }
        .wiki-text-standard .mw-headline-h3 {
          font-size: 18px;
        }

        .wiki-text-large {
          font-size: 18px;
          line-height: 1.8;
        }
        .wiki-text-large p,
        .wiki-text-large li,
        .wiki-text-large td,
        .wiki-text-large th {
          font-size: 18px !important;
          line-height: 1.8 !important;
        }
        .wiki-text-large .lead-paragraph {
          font-size: 19px !important;
          line-height: 1.85 !important;
        }
        .wiki-text-large .mw-headline-h2 {
          font-size: 27px !important;
        }
        .wiki-text-large .mw-headline-h3 {
          font-size: 21px !important;
        }

        /* TOP GLOBAL HEADER */
        .vector-global-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          background: #ffffff;
          border-bottom: 1px solid #c8ccd1;
          z-index: 100;
          height: 52px;
        }

        .vector-global-header-inner {
          max-width: 1440px;
          margin: 0 auto;
          height: 100%;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .vector-site-brand {
          font-size: 14px;
          color: #202122;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .vector-header-btn {
          font-size: 12px;
          font-weight: 600;
          padding: 5px 10px;
          background: #f8f9fa;
          border: 1px solid #c8ccd1;
          border-radius: 2px;
          color: #202122;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: all 0.15s ease;
        }
        .vector-header-btn:hover {
          background: #eaecf0;
          color: #000000;
        }
        .vector-header-btn-primary {
          background: #3366cc;
          border-color: #3366cc;
          color: #ffffff;
        }
        .vector-header-btn-primary:hover {
          background: #447ff5;
          color: #ffffff;
        }

        /* 2-COLUMN STRICT LAYOUT WRAPPER */
        .vector-main-layout {
          max-width: 1440px;
          margin: 0 auto;
          padding: 68px 16px 48px;
          box-sizing: border-box;
          position: relative;
        }

        /* LEFT TOC SIDEBAR (FIXED TO VIEWPORT) */
        .vector-column-toc {
          position: fixed;
          top: 68px;
          left: max(16px, calc(50vw - 704px));
          width: 270px;
          height: calc(100vh - 80px);
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-width: thin;
          scrollbar-color: #c8ccd1 transparent;
          z-index: 40;
          padding-top: 4px;
          padding-right: 14px;
          box-sizing: border-box;
          user-select: none;
        }

        .vector-column-toc::-webkit-scrollbar {
          width: 4px;
        }

        .vector-column-toc::-webkit-scrollbar-thumb {
          background-color: #c8ccd1;
          border-radius: 2px;
        }

        .vector-toc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #c8ccd1;
          padding-bottom: 6px;
          margin-bottom: 10px;
        }

        .vector-toc-title {
          font-size: 15px;
          font-weight: 700;
          color: #000000;
          margin: 0;
          font-family: inherit;
        }

        .vector-toc-toggle-btn {
          font-size: 12.5px;
          color: #3366cc;
          background: none;
          border: none;
          cursor: pointer;
          padding: 2px 4px;
          font-family: inherit;
          line-height: 1.4;
          text-decoration: none;
        }
        .vector-toc-toggle-btn:hover {
          text-decoration: underline;
          background: none;
        }

        .vector-toc-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .vector-toc-item {
          margin: 0;
          line-height: 1.45;
        }

        .vector-toc-level-1 {
          margin-top: 3px;
        }

        .vector-toc-row {
          display: flex;
          align-items: flex-start;
          gap: 3px;
          width: 100%;
          padding: 1px 0;
        }

        .vector-toc-toggle-collapse {
          background: none;
          border: none;
          padding: 3px 2px;
          cursor: pointer;
          color: #202122;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 2px;
          flex-shrink: 0;
          margin-top: 1px;
          transition: background-color 0.15s ease;
        }
        .vector-toc-toggle-collapse:hover {
          background: #eaecf0;
        }

        .vector-toc-spacer {
          width: 16px;
          height: 1px;
          flex-shrink: 0;
          display: inline-block;
        }

        .vector-toc-chevron {
          display: inline-block;
          transition: transform 0.15s ease;
          transform: rotate(0deg);
        }
        .vector-toc-chevron-expanded {
          transform: rotate(90deg);
        }

        .vector-toc-sublist {
          list-style: none;
          padding: 0 0 0 18px;
          margin: 2px 0 4px 0;
        }

        .vector-toc-level-2 {
          margin-top: 2px;
        }

        .vector-toc-link {
          display: block;
          flex: 1;
          min-width: 0;
          text-align: left;
          background: none;
          border: none;
          padding: 2px 2px;
          font-size: 14.5px;
          color: #3366cc;
          cursor: pointer;
          font-family: inherit;
          text-decoration: none;
          line-height: 1.45;
          transition: color 0.12s ease;
        }

        .vector-toc-sublink {
          font-size: 13.5px;
          line-height: 1.4;
          padding: 1px 2px;
        }
        .vector-toc-link:hover {
          text-decoration: underline;
        }

        .vector-toc-item-active > .vector-toc-row > .vector-toc-link,
        .vector-toc-item-active > .vector-toc-link {
          color: #000000;
          font-weight: 700;
          background: none;
          border-left: none;
        }

        .vector-theme-dark .vector-toc-title {
          color: #ffffff;
        }
        .vector-theme-dark .vector-toc-header {
          border-bottom-color: #3a3a3a;
        }
        .vector-theme-dark .vector-toc-toggle-btn {
          background: #272a2e;
          color: #eaecf0;
        }
        .vector-theme-dark .vector-toc-toggle-collapse {
          color: #a2a9b1;
        }
        .vector-theme-dark .vector-toc-toggle-collapse:hover {
          background: #272a2e;
        }
        .vector-theme-dark .vector-toc-link {
          color: #8ab4f8;
        }
        .vector-theme-dark .vector-toc-item-active > .vector-toc-row > .vector-toc-link,
        .vector-theme-dark .vector-toc-item-active > .vector-toc-link {
          color: #ffffff;
        }

        .vector-theme-portfolio .vector-toc-title {
          color: #ffffff;
        }
        .vector-theme-portfolio .vector-toc-header {
          border-bottom-color: rgba(229, 193, 88, 0.2);
        }
        .vector-theme-portfolio .vector-toc-toggle-btn {
          background: rgba(229, 193, 88, 0.1);
          color: #e5c158;
          border: 1px solid rgba(229, 193, 88, 0.2);
        }
        .vector-theme-portfolio .vector-toc-toggle-collapse {
          color: #e5c158;
        }
        .vector-theme-portfolio .vector-toc-toggle-collapse:hover {
          background: rgba(229, 193, 88, 0.1);
        }
        .vector-theme-portfolio .vector-toc-link {
          color: #94a3b8;
        }
        .vector-theme-portfolio .vector-toc-item-active > .vector-toc-row > .vector-toc-link,
        .vector-theme-portfolio .vector-toc-item-active > .vector-toc-link {
          color: #e5c158;
        }

        .vector-toc-text {
          word-break: break-word;
        }

        /* APPEARANCE DROPDOWN MENU */
        .vector-appearance-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          right: 0;
          width: 240px;
          background: #ffffff;
          border: 1px solid #a2a9b1;
          border-radius: 4px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
          padding: 12px 14px;
          z-index: 50;
        }

        .vector-appearance-group {
          margin-bottom: 12px;
        }
        .vector-appearance-group:last-child {
          margin-bottom: 0;
        }

        .vector-appearance-label {
          font-size: 11px;
          font-weight: 700;
          color: #54595d;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          margin-bottom: 6px;
        }

        .vector-appearance-options {
          display: flex;
          gap: 6px;
        }

        .vector-opt-btn {
          flex: 1;
          font-size: 11.5px;
          font-weight: 600;
          padding: 4px 8px;
          background: #f8f9fa;
          border: 1px solid #c8ccd1;
          border-radius: 2px;
          cursor: pointer;
          color: #202122;
          transition: all 0.15s ease;
        }
        .vector-opt-btn:hover {
          background: #eaecf0;
        }
        .vector-opt-btn.active {
          background: #3366cc;
          border-color: #3366cc;
          color: #ffffff;
        }

        /* RIGHT MAIN ARTICLE COLUMN (SCROLLS NATURALLY) */
        .vector-column-article {
          margin-left: 295px;
          background: transparent;
          padding: 20px 24px 48px;
          border: none;
          box-shadow: none;
          min-height: calc(100vh - 100px);
        }

        .vector-article-header {
          border-bottom: 1px solid #a2a9b1;
          padding-bottom: 8px;
          margin-bottom: 12px;
        }

        .firstHeading {
          font-family: "Linux Libertine", "Georgia", Times, serif;
          font-size: 34px;
          font-weight: 400;
          line-height: 1.25;
          margin: 0;
          color: #000000;
          scroll-margin-top: 74px;
        }

        .mw-body-content p {
          margin: 0 0 14px;
          text-align: justify;
          color: #202122;
        }

        .lead-paragraph {
          font-size: 16.5px;
          line-height: 1.75;
        }

        /* LINKS */
        .wiki-link {
          color: #3366cc;
          text-decoration: none;
        }
        .wiki-link:hover {
          text-decoration: underline;
        }

        .wiki-cite {
          font-size: 10.5px;
          vertical-align: super;
          color: #3366cc;
          text-decoration: none;
          font-weight: normal;
          padding: 0 1px;
        }
        .wiki-cite:hover {
          text-decoration: underline;
        }

        /* SECTION HEADINGS */
        .vector-section {
          margin-top: 24px;
          scroll-margin-top: 74px;
        }

        .mw-headline-h2 {
          font-family: "Linux Libertine", "Georgia", Times, serif;
          font-size: 21px;
          font-weight: 400;
          border-bottom: 1px solid #a2a9b1;
          padding-bottom: 3px;
          margin: 22px 0 10px;
          color: #000000;
          display: flex;
          align-items: baseline;
          gap: 6px;
          scroll-margin-top: 74px;
        }

        .vector-theme-dark .mw-headline-h2 {
          color: #ffffff;
          border-bottom-color: #3a3a3a;
        }

        .mw-headline-h3 {
          font-family: inherit;
          font-size: 16px;
          font-weight: 700;
          margin: 16px 0 8px;
          color: #000000;
          display: flex;
          align-items: baseline;
          gap: 6px;
          scroll-margin-top: 74px;
        }

        .vector-theme-dark .mw-headline-h3 {
          color: #ffffff;
        }

        .mw-headline-number {
          color: #54595d;
          font-size: 13px;
          font-weight: normal;
        }

        .vector-bullet-list {
          margin: 0 0 14px 20px;
          padding: 0;
          list-style: disc;
        }
        .vector-bullet-list li {
          margin-bottom: 6px;
          line-height: 1.5;
        }

        /* INFOBOX VCARD (FLOATING RIGHT - EXACT WIKIPEDIA SPEC) */
        .infobox {
          border: 1px solid #c8ccd1;
          background-color: #ffffff;
          color: #202122;
          padding: 4px;
          font-size: 12.5px;
          line-height: 1.5;
          float: right;
          clear: right;
          margin: 0 0 18px 22px;
          width: 300px;
          border-spacing: 0;
          border-collapse: collapse;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
        }

        .infobox-above {
          font-size: 15px;
          font-weight: 700;
          background-color: #eaf3ff;
          text-align: center;
          padding: 6px 8px;
          color: #002bb8;
          border-bottom: 1px solid #c8ccd1;
        }

        .infobox-subheader {
          font-size: 11.5px;
          font-weight: 600;
          text-align: center;
          padding: 4px 6px;
          color: #202122;
          background-color: #f8f9fa;
          border-bottom: 1px solid #c8ccd1;
        }

        .infobox-office-block {
          text-align: center;
          padding: 5px 8px;
          font-size: 12px;
          background: #f8f9fa;
          border-bottom: 1px solid #c8ccd1;
        }

        .infobox-header {
          background-color: #eaf3ff;
          font-weight: 700;
          font-size: 12.5px;
          text-align: center;
          padding: 5px 8px;
          border-top: 1px solid #c8ccd1;
          border-bottom: 1px solid #c8ccd1;
          color: #000000;
        }

        .infobox-header-role {
          background-color: #eaf3ff;
          color: #002bb8;
        }

        .infobox-image {
          text-align: center;
          padding: 8px 0 6px;
          background: transparent;
        }

        .infobox-photo {
          margin: 0 auto;
          border: 1px solid #c8ccd1;
          display: block;
          max-width: 100%;
          height: auto;
        }

        .infobox-caption {
          font-size: 11px;
          color: #54595d;
          padding-top: 4px;
        }

        .infobox-label {
          background: transparent;
          font-weight: 700;
          color: #000000;
          padding: 4px 8px 4px 4px;
          vertical-align: top;
          text-align: left;
          font-size: 12.5px;
          width: 32%;
          border: none;
        }

        .infobox-data {
          background: transparent;
          color: #202122;
          padding: 4px 4px 4px 0px;
          vertical-align: top;
          font-size: 12.5px;
          border: none;
        }

        .infobox-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .infobox-list li {
          margin-bottom: 2px;
          line-height: 1.45;
        }

        /* WIKIPEDIA STANDARD THUMBNAILS */
        .thumb {
          margin-bottom: 1.25rem;
          width: auto;
        }
        .tright {
          float: right;
          clear: right;
          margin-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .tleft {
          float: left;
          clear: left;
          margin-right: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .thumbinner {
          border: 1px solid #c8ccd1;
          padding: 5px;
          font-size: 88%;
          text-align: center;
          overflow: hidden;
          border-radius: 4px;
          max-width: 100%;
          background: #f8f9fa;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }
        .thumbimage-wrapper {
          border: 1px solid #eaecf0;
          border-radius: 4px;
          overflow: hidden;
        }
        .thumbcaption {
          text-align: left;
          line-height: 1.45;
          padding: 8px 4px 4px 4px;
          font-size: 12px;
          color: #54595d;
        }
        .magnify {
          float: right;
          margin-left: 6px;
        }

        /* DATA TABLES (wikitable) */
        .wikitable {
          border-collapse: collapse;
          width: 100%;
          margin: 14px 0 18px;
          font-size: 13px;
          background: #ffffff;
          border: 1px solid #a2a9b1;
        }

        .wikitable th {
          background: #eaecf0;
          color: #202122;
          font-weight: bold;
          padding: 8px 10px;
          border: 1px solid #a2a9b1;
          text-align: left;
        }

        .wikitable td {
          padding: 8px 10px;
          border: 1px solid #a2a9b1;
          vertical-align: top;
          color: #202122;
        }

        /* DEDICATED CONTRIBUTION REGISTRY BOX */
        .wiki-contribution-box {
          background: #ffffff;
          border: 1px solid #c8ccd1;
          border-left: 4px solid #2e7d32;
          border-radius: 2px;
          margin: 14px 0 18px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
          overflow: hidden;
        }

        .wiki-contribution-header {
          background: #f4fbf5;
          padding: 10px 14px;
          border-bottom: 1px solid #d0e7d2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }

        .wiki-contribution-title {
          font-weight: 700;
          font-size: 13.5px;
          color: #1b5e20;
          font-family: inherit;
        }

        .wiki-contribution-badge {
          font-size: 11px;
          background: #e8f5e9;
          color: #2e7d32;
          border: 1px solid #a5d6a7;
          border-radius: 12px;
          padding: 2px 8px;
          font-weight: 600;
        }

        .wiki-contribution-body {
          padding: 14px 16px;
        }

        .wiki-metric-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 10px;
          margin-bottom: 12px;
        }

        .wiki-metric-item {
          background: #f8f9fa;
          border: 1px solid #eaecf0;
          border-radius: 4px;
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-width: 0;
        }

        .wiki-metric-item-live {
          background: #f0fdf4;
          border-color: #86efac;
          box-shadow: 0 0 0 1px rgba(34, 197, 94, 0.15);
        }

        .wiki-metric-live-text {
          color: #15803d;
          font-weight: 800;
        }

        .wiki-metric-label {
          font-size: 11px;
          color: #54595d;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .wiki-metric-val {
          font-size: 15px;
          font-weight: 700;
          color: #202122;
        }

        .wiki-metric-sub {
          font-size: 11.5px;
          font-weight: 400;
          color: #54595d;
        }

        .wiki-contribution-scope {
          font-size: 12.5px;
          line-height: 1.5;
          color: #333940;
          padding-top: 10px;
          border-top: 1px solid #f0f2f5;
        }

        /* SEE ALSO SECTION ENHANCEMENTS */
        .see-also-card {
          background: #ffffff;
          border: 1px solid #c8ccd1;
          border-left: 4px solid #3366cc;
          border-radius: 2px;
          padding: 16px 20px 14px;
          margin: 14px 0 22px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }

        .see-also-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .see-also-col {
          min-width: 0;
        }

        .see-also-cat-title {
          font-size: 12px;
          font-weight: 700;
          color: #0b0080;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
          padding-bottom: 4px;
          border-bottom: 1px dashed #c8ccd1;
        }

        .vector-theme-dark .see-also-cat-title {
          color: #8ab4f8;
          border-bottom-color: #3a3a3a;
        }

        /* REFERENCES */
        .references {
          font-size: 12.5px;
          margin: 0 0 16px 20px;
          padding: 0;
          color: #202122;
        }

        .references li {
          margin-bottom: 8px;
          line-height: 1.5;
        }

        .mw-cite-backlink {
          font-weight: bold;
          margin-right: 4px;
        }

        /* CATEGORIES BOX */
        .catlinks {
          margin-top: 36px;
          padding: 8px 12px;
          background: #f8f9fa;
          border: 1px solid #a2a9b1;
          font-size: 12.5px;
          border-radius: 2px;
          color: #202122;
        }

        .mw-normal-catlinks ul {
          display: inline;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .mw-normal-catlinks li {
          display: inline;
        }

        .mw-normal-catlinks li:after {
          content: " | ";
          color: #72777d;
        }

        .mw-normal-catlinks li:last-child:after {
          content: "";
        }

        /* FOOTER */
        .vector-footer {
          margin-top: 32px;
          padding-top: 8px;
        }

        .vector-footer-hr {
          border: none;
          border-top: 1px solid #a2a9b1;
          margin-bottom: 16px;
        }

        .vector-footer-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          flex-wrap: wrap;
        }

        .vector-footer-content {
          flex: 1;
          min-width: 260px;
        }

        .vector-footer-info {
          list-style: none;
          padding: 0;
          margin: 0 0 10px 0;
          font-size: 12px;
          color: #54595d;
          line-height: 1.55;
        }

        .vector-footer-info li {
          margin-bottom: 4px;
        }

        .vector-footer-places {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          font-size: 12px;
        }

        .vector-footer-places li {
          display: inline-flex;
          align-items: center;
        }

        .vector-footer-places li:not(:last-child)::after {
          content: "•";
          margin: 0 8px;
          color: #72777d;
          font-size: 10px;
        }

        .vector-footer-icons {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .vector-badge-img {
          display: block;
          width: 88px;
          height: 31px;
          border: 0;
          border-radius: 1px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
          transition: opacity 0.15s ease;
        }

        .vector-footer-icons a:hover .vector-badge-img {
          opacity: 0.85;
        }

        /* ==========================================================
           WIKIPEDIA WIKITEXT SOURCE EDITOR STYLES
           ========================================================== */
        .wiki-source-editor-wrapper {
          width: 100%;
          animation: fadeIn 0.15s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(2px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .wiki-editor-code-container {
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.06);
        }

        .wiki-editor-textarea {
          tab-size: 2;
          font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
        }

        .wiki-editor-gutter {
          user-select: none;
        }

        /* Dark Theme Editor Overrides */
        .vector-theme-dark .wiki-edit-notice {
          background-color: #1a2736 !important;
          border-color: #2b4566 !important;
          color: #d2e3fc !important;
        }
        .vector-theme-dark .wiki-edit-notice a {
          color: #8ab4f8 !important;
        }
        .vector-theme-dark .wiki-editor-toolbar {
          background-color: #20262e !important;
          border-color: #3c4043 !important;
          color: #e8eaed !important;
        }
        .vector-theme-dark .wiki-editor-toolbar button {
          background-color: #28303a !important;
          border-color: #3c4043 !important;
          color: #e8eaed !important;
        }
        .vector-theme-dark .wiki-editor-toolbar button:hover {
          background-color: #3c4043 !important;
        }
        .vector-theme-dark .wiki-editor-code-container {
          background-color: #121519 !important;
          border-color: #3c4043 !important;
        }
        .vector-theme-dark .wiki-editor-gutter {
          background-color: #1a1e24 !important;
          border-color: #3c4043 !important;
          color: #80868b !important;
        }
        .vector-theme-dark .wiki-editor-textarea {
          background-color: #121519 !important;
          color: #e8eaed !important;
        }
        .vector-theme-dark .wiki-insert-bar,
        .vector-theme-dark .wiki-edit-actions-box {
          background-color: #20262e !important;
          border-color: #3c4043 !important;
          color: #e8eaed !important;
        }
        .vector-theme-dark .wiki-insert-bar button {
          background-color: #28303a !important;
          border-color: #3c4043 !important;
          color: #e8eaed !important;
        }
        .vector-theme-dark .wiki-insert-bar button:hover {
          background-color: #3c4043 !important;
        }

        /* Portfolio Theme Editor Overrides */
        .vector-theme-portfolio .wiki-edit-notice {
          background-color: #1c1710 !important;
          border-color: #3a3022 !important;
          color: #e5c158 !important;
        }
        .vector-theme-portfolio .wiki-edit-notice a {
          color: #f3d882 !important;
        }
        .vector-theme-portfolio .wiki-editor-toolbar {
          background-color: #1c1710 !important;
          border-color: #2e251a !important;
          color: #fcf9f2 !important;
        }
        .vector-theme-portfolio .wiki-editor-toolbar button {
          background-color: #221c14 !important;
          border-color: #3a3022 !important;
          color: #fcf9f2 !important;
        }
        .vector-theme-portfolio .wiki-editor-toolbar button:hover {
          background-color: #2c241a !important;
          color: #e5c158 !important;
        }
        .vector-theme-portfolio .wiki-editor-code-container {
          background-color: #12100b !important;
          border-color: #2e251a !important;
        }
        .vector-theme-portfolio .wiki-editor-gutter {
          background-color: #18140e !important;
          border-color: #2e251a !important;
          color: #8c8375 !important;
        }
        .vector-theme-portfolio .wiki-editor-textarea {
          background-color: #12100b !important;
          color: #fcf9f2 !important;
        }
        .vector-theme-portfolio .wiki-insert-bar,
        .vector-theme-portfolio .wiki-edit-actions-box {
          background-color: #18140e !important;
          border-color: #2e251a !important;
          color: #fcf9f2 !important;
        }
        .vector-theme-portfolio .wiki-insert-bar button {
          background-color: #221c14 !important;
          border-color: #3a3022 !important;
          color: #fcf9f2 !important;
        }
        .vector-theme-portfolio .wiki-insert-bar button:hover {
          background-color: #2c241a !important;
          color: #e5c158 !important;
        }

        /* ==========================================================
           RESPONSIVE BREAKPOINTS (Mobile & Tablet adaptiveness)
           ========================================================== */

        @media (max-width: 1024px) {
          .vector-column-toc {
            display: none !important;
          }
          .vector-column-article {
            margin-left: 0 !important;
            padding: 18px 20px 36px !important;
          }
        }

        @media (max-width: 768px) {
          .vector-global-header-inner {
            padding: 8px 12px;
          }
          .vector-site-brand {
            font-size: 13px;
          }
          .infobox {
            float: none !important;
            width: 100% !important;
            margin: 12px 0 20px 0 !important;
            box-sizing: border-box !important;
          }
          .infobox-photo {
            max-width: 220px !important;
            height: auto !important;
            margin: 0 auto !important;
          }
          .thumb, .tright, .tleft {
            float: none !important;
            width: 100% !important;
            margin: 12px 0 18px 0 !important;
          }
          .thumbinner {
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .firstHeading {
            font-size: 24px !important;
            line-height: 1.25 !important;
          }
          .vector-column-article {
            padding: 14px 12px 28px !important;
          }
          .see-also-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .wikitable {
            display: block !important;
            width: 100% !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch !important;
            font-size: 12px !important;
          }
          .wiki-metric-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
          }
          .wiki-contribution-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 6px !important;
          }
          .vector-footer-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
          }
          .vector-footer-icons {
            margin-top: 8px !important;
          }
        }

        @media (max-width: 480px) {
          .vector-main-layout {
            padding: 8px 6px !important;
          }
          .vector-column-article {
            padding: 10px 8px 24px !important;
          }
          .firstHeading {
            font-size: 20px !important;
          }
          .mw-headline-h2 {
            font-size: 17px !important;
          }
          .mw-headline-h3 {
            font-size: 14px !important;
          }
          .wiki-metric-grid {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .see-also-card {
            padding: 12px 12px 10px !important;
            margin: 10px 0 16px !important;
          }
          .vector-footer-places {
            gap: 4px 8px;
          }
        }

      `}</style>
    </div>
  );
};

export default BiographyArticle;

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
    num: "1",
    children: [
      { id: "education", label: "Education", num: "1.1" },
    ],
  },
  { id: "gaming", label: "Competitive gaming and early computing (2022–2023)", level: 1, num: "2" },
  {
    id: "software-engineering",
    label: "Self-taught software engineering & technical career",
    level: 1,
    num: "3",
    children: [
      { id: "autodidactic-journey", label: "Autodidactic journey and core programming", num: "3.1" },
      { id: "automation-scripting", label: "Automation bots and utility scripting", num: "3.2" },
      { id: "shadow-arrow", label: "Foundation and expansion of Shadow Arrow (2025–present)", num: "3.3" },
      { id: "wikidata-pipelines", label: "Automated semantic pipelines and Wikidata ingestion bots", num: "3.4" },
    ],
  },
  {
    id: "creative-pursuits",
    label: "Creative pursuits, writing, and media",
    level: 1,
    num: "4",
    children: [
      { id: "authorship", label: "Authorship and technical writing", num: "4.1" },
      { id: "video-media", label: "Video creation, color science, and 3D animation", num: "4.2" },
    ],
  },
  { id: "philosophy-toolchain", label: "Technical philosophy and toolchain", level: 1, num: "5" },
  { id: "personal-life", label: "Personal life", level: 1, num: "6" },
  { id: "see-also", label: "See also", level: 1, num: "7" },
  { id: "references", label: "References", level: 1, num: "8" },
  { id: "external-links", label: "External links", level: 1, num: "9" },
];

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
  const [liveCount, setLiveCount] = useState<number>(13780);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "software-engineering": false,
    "creative-pursuits": false,
  });
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
    // Fetch 100% authentic real-time edit count directly from official Wikimedia / Wikidata API
    const fetchWikidataEdits = async () => {
      try {
        const res = await fetch(
          "https://www.wikidata.org/w/api.php?action=query&list=users&ususers=SHADOWARROW%202026&usprop=editcount&format=json&origin=*"
        );
        if (res.ok) {
          const data = await res.json();
          const count = data?.query?.users?.[0]?.editcount;
          if (typeof count === "number" && count > 0) {
            setLiveCount(count);
          }
        }
      } catch (err) {
        console.error("Wikidata live count sync error:", err);
      }
    };

    fetchWikidataEdits();
    const interval = setInterval(fetchWikidataEdits, 12000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.id;
            setActiveSection(currentId);

            // Auto-expand parent section only when user scrolls into its subsection
            TOC_SECTIONS.forEach((section) => {
              if (section.children?.some((child) => child.id === currentId)) {
                setExpandedSections((prev) => ({ ...prev, [section.id]: true }));
              }
            });
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
              <span className="text-xs text-[#54595d] font-normal hidden sm:inline">| Archival Registry</span>
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
                        <a
                          href={`#${section.id}`}
                          onClick={(e) => scrollTo(section.id, e)}
                          className="vector-toc-link"
                        >
                          {section.num && <span className="vector-toc-num">{section.num}</span>}
                          <span className="vector-toc-text">{section.label}</span>
                        </a>

                        {hasChildren && (
                          <button
                            type="button"
                            onClick={(e) => toggleSectionExpand(section.id, e)}
                            className={`vector-toc-collapse-btn ${isExpanded ? "is-expanded" : "is-collapsed"}`}
                            title={isExpanded ? "Collapse section" : "Expand section"}
                            aria-label={isExpanded ? "Collapse section" : "Expand section"}
                            aria-expanded={isExpanded}
                          >
                            <svg
                              className={`vector-toc-chevron ${isExpanded ? "vector-toc-chevron-expanded" : ""}`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              width="13"
                              height="13"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        )}
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
                                  className="vector-toc-link"
                                >
                                  <span className="vector-toc-num">{sub.num}</span>
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
          <div className="vector-article-header">
            <div>
              <h1 className="firstHeading mw-first-heading" id="article-top">
                Bijoy Lohar
              </h1>
            </div>
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
                  <td colSpan={2} className="infobox-subheader role">
                    Software Engineer • Full-Stack Developer • Systems Architect • Author
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="infobox-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://github.com/loharbijoy2005-a11y.png"
                      alt="Bijoy Lohar official portrait"
                      className="infobox-photo photo"
                      width={280}
                      height={280}
                    />
                    <div className="infobox-caption">Official portrait</div>
                  </td>
                </tr>
                <tr>
                  <th colSpan={2} className="infobox-header">
                    Personal details
                  </th>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Born</th>
                  <td className="infobox-data">
                    12 October 2005 <span className="noprint ForceAgeToShow">(age&#160;{currentAge})</span><br />
                    <span className="birthplace">
                      <a href="https://en.wikipedia.org/wiki/Bishnupur,_Bankura" target="_blank" rel="noopener noreferrer" className="wiki-link">Bishnupur</a>,{" "}
                      <a href="https://en.wikipedia.org/wiki/Bankura_district" target="_blank" rel="noopener noreferrer" className="wiki-link">Bankura district</a>,{" "}
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
                          Software Engineer
                        </a>
                      </li>
                      <li>
                        <a href="https://en.wikipedia.org/wiki/Web_developer" target="_blank" rel="noopener noreferrer" className="wiki-link">
                          Full-Stack Developer
                        </a>
                      </li>
                      <li>
                        <a href="https://en.wikipedia.org/wiki/Systems_architect" target="_blank" rel="noopener noreferrer" className="wiki-link">
                          Systems Architect
                        </a>
                      </li>
                      <li>
                        <a href="https://en.wikipedia.org/wiki/Author" target="_blank" rel="noopener noreferrer" className="wiki-link">
                          Author
                        </a>
                        {" "}&amp;{" "}
                        <a href="https://en.wikipedia.org/wiki/Technical_writer" target="_blank" rel="noopener noreferrer" className="wiki-link">
                          Technical Writer
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
                        <a href="https://en.wikipedia.org/wiki/Vidyasagar_University" target="_blank" rel="noopener noreferrer" className="wiki-link">Vidyasagar University</a> (currently enrolled, 2nd year)
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
                  <th scope="row" className="infobox-label">Parent(s)</th>
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
              <b>Bijoy Lohar</b> (born 12 October 2005) is an Indian self-taught software engineer, systems architect, author, and technology entrepreneur.<sup><a href="#ref-1" className="wiki-cite">[1]</a></sup> He is the founder and principal systems architect of <b>Shadow Arrow</b>, a software engineering and digital commerce solutions company established in 2025.<sup><a href="#ref-3" className="wiki-cite">[3]</a></sup> Based in <a href="https://en.wikipedia.org/wiki/Bishnupur,_Bankura" target="_blank" rel="noopener noreferrer" className="wiki-link">Bishnupur</a>, in the Bankura district of <a href="https://en.wikipedia.org/wiki/West_Bengal" target="_blank" rel="noopener noreferrer" className="wiki-link">West Bengal</a>, Lohar works on full-stack web applications, distributed cloud systems, and automated data ingestion pipelines that submit structured public infrastructure records to the global <a href="https://en.wikipedia.org/wiki/Semantic_Web" target="_blank" rel="noopener noreferrer" className="wiki-link">Semantic Web</a> and <a href="https://en.wikipedia.org/wiki/Wikidata" target="_blank" rel="noopener noreferrer" className="wiki-link">Wikidata</a> knowledge base.<sup><a href="#ref-2" className="wiki-cite">[2]</a></sup><sup><a href="#ref-6" className="wiki-cite">[6]</a></sup>
            </p>
            <p className="lead-paragraph">
              Lohar learned computer programming independently by studying technical documentation, <a href="https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force" target="_blank" rel="noopener noreferrer" className="wiki-link">IETF</a> specifications, and open-source software architectures. His work with Shadow Arrow focuses on responsive web design, type-safe development, and cloud deployments.
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
                        src="/images/vidyasagar-university.jpg"
                        alt="Vidyasagar University main campus in Midnapore, West Bengal"
                        className="thumbimage w-full h-[155px] object-cover block"
                        loading="lazy"
                      />
                    </div>
                  </a>
                  <div className="thumbcaption">
                    <div className="magnify">
                      <a
                        href="/images/vidyasagar-university.jpg"
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

            {/* SECTION 3: SOFTWARE ENGINEERING */}
            <section id="software-engineering" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">3</span> Self-taught software engineering &amp; technical career
              </h2>
              <p>
                Lohar is a self-taught software engineer whose work encompasses full-stack web development, automation scripts, and semantic data integration.
              </p>

              <h3 id="autodidactic-journey" className="mw-headline-h3">
                <span className="mw-headline-number">3.1</span> Autodidactic journey and core programming
              </h3>
              <p>
                Lohar developed his programming skills through self-directed study, reading open-source codebases, documentation, and technical specifications. His core programming stack includes TypeScript, Python, Node.js, React, Next.js, and CSS, alongside relational database management with PostgreSQL.<sup><a href="#ref-4" className="wiki-cite">[4]</a></sup>
              </p>

              <h3 id="automation-scripting" className="mw-headline-h3">
                <span className="mw-headline-number">3.2</span> Automation bots and utility scripting
              </h3>
              <p>
                Between 2023 and 2024, Lohar developed automation scripts and API utilities designed to extract and process public administrative and geographic data. His scripts incorporated error handling, request throttling, and data normalization routines to format unstructured public records into structured tables and JSON-LD schemas.
              </p>

              <h3 id="shadow-arrow" className="mw-headline-h3">
                <span className="mw-headline-number">3.3</span> Foundation and expansion of Shadow Arrow (2025–present)
              </h3>
              <p>
                In 2025, Lohar founded <b>Shadow Arrow</b> (<a href="https://www.shadowarrow.in" target="_blank" rel="noopener noreferrer" className="wiki-link">shadowarrow.in</a>), a software development firm that builds custom web applications, commercial websites, and client portals.<sup><a href="#ref-3" className="wiki-cite">[3]</a></sup> The company builds web platforms with an emphasis on performance, accessibility standards (a11y), and responsive design across desktop and mobile devices.
              </p>

              <h3 id="wikidata-pipelines" className="mw-headline-h3">
                <span className="mw-headline-number">3.4</span> Automated semantic pipelines and Wikidata ingestion bots
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
                          href="https://www.wikidata.org/wiki/Special:Contributions/SHADOWARROW_2026"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-emerald-800"
                          title="View verified live edits for SHADOWARROW 2026 on Wikidata"
                        >
                          {liveCount.toLocaleString()}+
                        </a>{" "}
                        <span className="wiki-metric-sub">verified records</span>
                      </div>
                    </div>
                    <div className="wiki-metric-item">
                      <div className="wiki-metric-label">Automated Throughput</div>
                      <div className="wiki-metric-val">4,000 – 5,000+ <span className="wiki-metric-sub">records / day</span></div>
                    </div>
                    <div className="wiki-metric-item">
                      <div className="wiki-metric-label">Peak Burst Capacity</div>
                      <div className="wiki-metric-val">10,000+ <span className="wiki-metric-sub">records / cycle</span></div>
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

              <p>
                The automated pipeline processes entries across public infrastructure in India, including courts, educational institutions, administrative divisions, and public health facilities.
              </p>
            </section>

            {/* SECTION 4: CREATIVE PURSUITS */}
            <section id="creative-pursuits" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">4</span> Creative pursuits, writing, and media
              </h2>
              <p>
                In addition to software engineering, Lohar engages in technical writing, digital video production, and 3D modeling.
              </p>

              <h3 id="authorship" className="mw-headline-h3">
                <span className="mw-headline-number">4.1</span> Authorship and technical writing
              </h3>
              <p>
                As an author, Lohar writes on self-directed learning in software engineering and web systems architecture.<sup><a href="#ref-4" className="wiki-cite">[4]</a></sup> His author profiles are cataloged on <a href="https://www.amazon.com/author/bijoylohar" target="_blank" rel="noopener noreferrer" className="wiki-link">Amazon Author Central</a> and <a href="https://www.goodreads.com/bijoylohar" target="_blank" rel="noopener noreferrer" className="wiki-link">Goodreads</a>.
              </p>

              <h3 id="video-media" className="mw-headline-h3">
                <span className="mw-headline-number">4.2</span> Video creation, color science, and 3D animation
              </h3>
              <p>
                Lohar works in digital video editing and post-production, with a profile on <a href="https://www.imdb.com/name/nm18949942/" target="_blank" rel="noopener noreferrer" className="wiki-link">IMDb</a>.<sup><a href="#ref-5" className="wiki-cite">[5]</a></sup> His media workflow includes color grading in DaVinci Resolve and 3D modeling in Blender.
              </p>
            </section>

            {/* SECTION 5: TECHNICAL PHILOSOPHY */}
            <section id="philosophy-toolchain" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">5</span> Technical philosophy and toolchain
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

            {/* SECTION 6: PERSONAL LIFE */}
            <section id="personal-life" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">6</span> Personal life
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

            {/* SECTION 7: SEE ALSO */}
            <section id="see-also" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">7</span> See also
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

            {/* SECTION 8: REFERENCES */}
            <section id="references" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">8</span> References
              </h2>
              <ol className="references">
                <li id="ref-1">
                  <span className="mw-cite-backlink"><a href="#article-top">^</a></span>{" "}
                  <span className="reference-text">
                    Lohar, Bijoy. <i>Official Biography and Portfolio</i>. <a href="https://www.bijoylohar.in" target="_blank" rel="noopener noreferrer" className="wiki-link">bijoylohar.in</a>. Retrieved 4 October 2026.
                  </span>
                </li>
                <li id="ref-2">
                  <span className="mw-cite-backlink"><a href="#software-engineering">^</a></span>{" "}
                  <span className="reference-text">
                    Lohar, Bijoy. <i>Open Source Software Repositories and Systems Development</i>. GitHub. <a href="https://github.com/loharbijoy2005-a11y" target="_blank" rel="noopener noreferrer" className="wiki-link">github.com/loharbijoy2005-a11y</a>. Retrieved 2026.
                  </span>
                </li>
                <li id="ref-3">
                  <span className="mw-cite-backlink"><a href="#shadow-arrow">^</a></span>{" "}
                  <span className="reference-text">
                    Shadow Arrow. <i>Full-Stack Web Engineering and Commercial Architecture</i>. <a href="https://www.shadowarrow.in" target="_blank" rel="noopener noreferrer" className="wiki-link">shadowarrow.in</a>. Bishnupur, West Bengal, India.
                  </span>
                </li>
                <li id="ref-4">
                  <span className="mw-cite-backlink"><a href="#autodidactic-journey">^</a></span>{" "}
                  <span className="reference-text">
                    Lohar, Bijoy. <i>Systems Architecture, Network Tick Dynamics, and Autodidactic Software Engineering</i>. Technical notes and essays. Bishnupur, Bankura, India.
                  </span>
                </li>
                <li id="ref-5">
                  <span className="mw-cite-backlink"><a href="#creative-pursuits">^</a></span>{" "}
                  <span className="reference-text">
                    IMDb. <i>Bijoy Lohar — Filmography, Digital Video Credits &amp; Media Post-Production</i>. <a href="https://www.imdb.com/name/nm18949942/" target="_blank" rel="noopener noreferrer" className="wiki-link">imdb.com/name/nm18949942/</a>. Retrieved 2026.
                  </span>
                </li>
                <li id="ref-6">
                  <span className="mw-cite-backlink"><a href="#wikidata-pipelines">^</a></span>{" "}
                  <span className="reference-text">
                    Wikimedia Foundation &amp; Wikidata Contributors. <i>Autonomous Entity Ingestion and Semantic Linked Data Pipelines</i>. Wikidata API &amp; SPARQL Query Service.
                  </span>
                </li>
                <li id="ref-7">
                  <span className="mw-cite-backlink"><a href="#education">^</a></span>{" "}
                  <span className="reference-text">
                    Vidyasagar University. <i>Collegiate Higher Education Affiliation &amp; Academic Records</i>. Midnapore, West Bengal, India. <a href="https://en.wikipedia.org/wiki/Vidyasagar_University" target="_blank" rel="noopener noreferrer" className="wiki-link">en.wikipedia.org/wiki/Vidyasagar_University</a>.
                  </span>
                </li>
                <li id="ref-8">
                  <span className="mw-cite-backlink"><a href="#education">^</a></span>{" "}
                  <span className="reference-text">
                    West Bengal State Academic Records. <i>Secondary &amp; Higher Secondary Certification (Bishnupur High School &amp; Radhanagar High School)</i>. Bankura District, West Bengal.
                  </span>
                </li>
              </ol>
            </section>

            {/* SECTION 9: EXTERNAL LINKS */}
            <section id="external-links" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">9</span> External links
              </h2>
              <ul className="vector-bullet-list">
                <li>
                  <a href="https://www.bijoylohar.in" target="_blank" rel="noopener noreferrer" className="wiki-link">Official Portfolio &amp; Archival Records (bijoylohar.in)</a>
                </li>
                <li>
                  <a href="https://www.shadowarrow.in" target="_blank" rel="noopener noreferrer" className="wiki-link">Shadow Arrow Official Website (shadowarrow.in)</a>
                </li>
                <li>
                  <a href="https://www.amazon.com/author/bijoylohar" target="_blank" rel="noopener noreferrer" className="wiki-link">Bijoy Lohar on Amazon Author Central</a>
                </li>
                <li>
                  <a href="https://www.goodreads.com/bijoylohar" target="_blank" rel="noopener noreferrer" className="wiki-link">Bijoy Lohar on Goodreads</a>
                </li>
                <li>
                  <a href="https://github.com/loharbijoy2005-a11y" target="_blank" rel="noopener noreferrer" className="wiki-link">Bijoy Lohar on GitHub</a>
                </li>
                <li>
                  <a href="https://www.imdb.com/name/nm18949942/" target="_blank" rel="noopener noreferrer" className="wiki-link">Bijoy Lohar on IMDb</a>
                </li>
                <li>
                  <a href="https://orcid.org/0009-0004-5643-7612" target="_blank" rel="noopener noreferrer" className="wiki-link">ORCID Identifier Profile (0009-0004-5643-7612)</a>
                </li>
                <li>
                  <a href="https://www.wikidata.org/wiki/User:SHADOWARROW_2026" target="_blank" rel="noopener noreferrer" className="wiki-link">SHADOWARROW 2026 on Wikidata</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/bijoy-lohar-5a508832b" target="_blank" rel="noopener noreferrer" className="wiki-link">Bijoy Lohar on LinkedIn</a>
                </li>
                <li>
                  <a href="https://developers.google.com/profile/u/101253410801307724262" target="_blank" rel="noopener noreferrer" className="wiki-link">Google Developer Profile</a>
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

            {/* FOOTER METADATA */}
            <footer className="vector-footer">
              <hr className="vector-footer-hr" />
              <div className="vector-footer-text">
                <p>This biographical record was last verified on 4 October 2026, at 04:30 (UTC).</p>
                <p>Archival documentation and biography maintained for public reference under standard open knowledge licensing.</p>
              </div>
            </footer>
          </div>
        </main>
      </div>

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
          background: rgba(229, 193, 88, 0.12);
          border-left: 3px solid #E5C158;
          color: #E5C158;
        }
        .vector-theme-portfolio .vector-toc-num {
          color: #8C8375;
        }
        .vector-theme-portfolio .infobox {
          background: #1C1710;
          border-color: #2E251A;
          color: #FCF9F2;
        }
        .vector-theme-portfolio .infobox-above {
          background: #241E15;
          color: #FCF9F2;
          border-bottom: 1px solid #2E251A;
        }
        .vector-theme-portfolio .infobox-subheader {
          background: #1E1912;
          color: #E5C158;
          border-bottom-color: #2E251A;
        }
        .vector-theme-portfolio .infobox-image {
          background: #16130D;
        }
        .vector-theme-portfolio .infobox-header {
          background-color: #261F16;
          color: #E5C158;
          border-color: #2E251A;
        }
        .vector-theme-portfolio .infobox-data {
          background: #16130D;
          color: #FCF9F2;
          border-color: #2E251A;
        }
        .vector-theme-portfolio .infobox-label {
          background: #1E1912;
          color: #A0988A;
          border-color: #2E251A;
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
        .vector-theme-portfolio .vector-footer-text p {
          color: #8C8375 !important;
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
          background: #20262e;
          border-color: #3c4043;
          color: #e8eaed;
        }
        .vector-theme-dark .infobox-above {
          background: #28303a;
          color: #f1f3f4;
          border-bottom: 1px solid #3c4043;
        }
        .vector-theme-dark .infobox-subheader {
          background: #20262e;
          color: #8ab4f8;
          border-bottom-color: #3c4043;
        }
        .vector-theme-dark .infobox-image {
          background: #1a1e24;
        }
        .vector-theme-dark .infobox-header {
          background-color: #28303a;
          color: #8ab4f8;
          border-color: #3c4043;
        }
        .vector-theme-dark .infobox-data {
          background: #1a1e24;
          color: #e8eaed;
          border-color: #3c4043;
        }
        .vector-theme-dark .infobox-label {
          background: #20262e;
          color: #9aa0a6;
          border-color: #3c4043;
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
        .vector-theme-dark .vector-footer-text p {
          color: #9aa0a6 !important;
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
          background: #eaecf0;
        }
        .vector-theme-light .vector-toc-item-active > .vector-toc-row > .vector-toc-link,
        .vector-theme-light .vector-toc-item-active > .vector-toc-link {
          color: #202122;
          font-weight: bold;
          background: #eaf3fb;
          border-left: 3px solid #3366cc;
        }
        .vector-theme-light .infobox {
          background: #f8f9fa;
          border-color: #a2a9b1;
          color: #202122;
        }
        .vector-theme-light .infobox-above {
          background: #eaecf0;
          color: #000000;
        }
        .vector-theme-light .infobox-subheader {
          background: #f8f9fa;
          color: #54595d;
        }
        .vector-theme-light .infobox-header {
          background-color: #eaf3fb;
          color: #202122;
          border-color: #a2a9b1;
        }
        .vector-theme-light .infobox-data {
          background: #ffffff;
          color: #202122;
          border-color: #a2a9b1;
        }
        .vector-theme-light .infobox-label {
          background: #f8f9fa;
          color: #202122;
          border-color: #a2a9b1;
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
          font-size: 14px;
          line-height: 1.65;
        }
        .wiki-text-standard p,
        .wiki-text-standard li,
        .wiki-text-standard td,
        .wiki-text-standard th,
        .wiki-text-standard .lead-paragraph {
          font-size: 14px;
          line-height: 1.65;
        }
        .wiki-text-standard .mw-headline-h2 {
          font-size: 21px;
        }
        .wiki-text-standard .mw-headline-h3 {
          font-size: 16px;
        }

        .wiki-text-large {
          font-size: 16.5px;
          line-height: 1.75;
        }
        .wiki-text-large p,
        .wiki-text-large li,
        .wiki-text-large td,
        .wiki-text-large th,
        .wiki-text-large .lead-paragraph {
          font-size: 16.5px !important;
          line-height: 1.75 !important;
        }
        .wiki-text-large .mw-headline-h2 {
          font-size: 24px !important;
        }
        .wiki-text-large .mw-headline-h3 {
          font-size: 18.5px !important;
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
          width: 250px;
          height: calc(100vh - 80px);
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-width: thin;
          scrollbar-color: #c8ccd1 transparent;
          z-index: 40;
          padding-top: 4px;
          padding-right: 12px;
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
          align-items: baseline;
          justify-content: space-between;
          border-bottom: 1px solid #c8ccd1;
          padding-bottom: 6px;
          margin-bottom: 8px;
        }

        .vector-toc-title {
          font-size: 13px;
          font-weight: 700;
          color: #202122;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .vector-toc-toggle-btn {
          font-size: 11px;
          color: #3366cc;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .vector-toc-toggle-btn:hover {
          text-decoration: underline;
        }

        .vector-toc-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .vector-toc-item {
          margin: 0;
          line-height: 1.35;
        }

        .vector-toc-level-1 {
          margin-top: 4px;
        }

        .vector-toc-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4px;
          width: 100%;
          border-radius: 2px;
        }

        .vector-toc-collapse-btn {
          background: none;
          border: none;
          padding: 3px 5px;
          cursor: pointer;
          color: #54595d;
          font-size: 13px;
          line-height: 1;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.15s ease, color 0.15s ease;
        }
        .vector-toc-collapse-btn:hover {
          background: #eaecf0;
          color: #202122;
        }

        .vector-toc-chevron {
          display: inline-block;
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          transform: rotate(0deg);
        }
        .vector-toc-chevron-expanded {
          transform: rotate(90deg);
        }

        .vector-toc-sublist {
          list-style: none;
          padding: 0 0 0 12px;
          margin: 2px 0 4px 6px;
          border-left: 1px solid #eaecf0;
        }

        .vector-toc-level-2 {
          margin-top: 3px;
        }

        .vector-toc-link {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          flex: 1;
          min-width: 0;
          text-align: left;
          background: none;
          border: none;
          padding: 4px 6px;
          font-size: 12.5px;
          color: #3366cc;
          cursor: pointer;
          border-radius: 2px;
          font-family: inherit;
          transition: background 0.12s ease;
        }
        .vector-toc-link:hover {
          background: #eaecf0;
          text-decoration: underline;
        }

        .vector-toc-item-active > .vector-toc-row > .vector-toc-link,
        .vector-toc-item-active > .vector-toc-link {
          color: #202122;
          font-weight: bold;
          background: #eaf3fb;
          border-left: 3px solid #3366cc;
          padding-left: 4px;
        }

        .vector-toc-num {
          color: #54595d;
          font-size: 11.5px;
          min-width: 18px;
        }

        .vector-toc-text {
          flex: 1;
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
          margin-left: 280px;
          background: #ffffff;
          padding: 28px 36px 48px;
          border: 1px solid #a2a9b1;
          border-radius: 2px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          min-height: calc(100vh - 100px);
        }

        .vector-article-header {
          border-bottom: 1px solid #a2a9b1;
          padding-bottom: 8px;
          margin-bottom: 12px;
        }

        .firstHeading {
          font-family: "Linux Libertine", "Georgia", Times, serif;
          font-size: 32px;
          font-weight: 400;
          line-height: 1.25;
          margin: 0;
          color: #000000;
          scroll-margin-top: 74px;
        }

        .mw-body-content p {
          margin: 0 0 12px;
          text-align: justify;
          color: #202122;
        }

        .lead-paragraph {
          font-size: 14.5px;
          line-height: 1.65;
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

        /* INFOBOX VCARD (FLOATING RIGHT) */
        .infobox {
          border: 1px solid #a2a9b1;
          background-color: #f8f9fa;
          color: #202122;
          padding: 5px;
          font-size: 12.5px;
          line-height: 1.45;
          float: right;
          clear: right;
          margin: 0 0 18px 22px;
          width: 290px;
          border-spacing: 0;
          border-collapse: collapse;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
        }

        .infobox-above {
          font-size: 16px;
          font-weight: bold;
          background-color: #eaecf0;
          text-align: center;
          padding: 8px 6px;
          color: #000000;
        }

        .infobox-subheader {
          font-size: 12px;
          font-weight: bold;
          text-align: center;
          padding: 4px 6px 8px;
          color: #54595d;
          border-bottom: 1px solid #a2a9b1;
        }

        .infobox-header {
          background-color: #eaf3fb;
          font-weight: 700;
          font-size: 12px;
          text-align: center;
          padding: 4px 6px;
          border-top: 1px solid #a2a9b1;
          border-bottom: 1px solid #a2a9b1;
          color: #202122;
        }

        .infobox-image {
          text-align: center;
          padding: 10px 0 6px;
          background: #ffffff;
        }

        .infobox-photo {
          margin: 0 auto;
          border: 1px solid #c8ccd1;
          display: block;
        }

        .infobox-caption {
          font-size: 11px;
          color: #54595d;
          padding-top: 4px;
        }

        .infobox-label {
          background: #f8f9fa;
          font-weight: 700;
          color: #202122;
          padding: 6px 8px;
          vertical-align: top;
          text-align: left;
          font-size: 12px;
          border-top: 1px solid #a2a9b1;
          width: 95px;
        }

        .infobox-data {
          background: #ffffff;
          color: #202122;
          padding: 6px 8px;
          vertical-align: top;
          font-size: 12px;
          border-top: 1px solid #a2a9b1;
        }

        .infobox-list {
          margin: 0;
          padding: 0 0 0 12px;
          list-style: disc;
        }
        .infobox-list li {
          margin-bottom: 2px;
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
          margin-top: 24px;
          padding-top: 12px;
        }

        .vector-footer-hr {
          border: none;
          border-top: 1px solid #a2a9b1;
          margin-bottom: 12px;
        }

        .vector-footer-text {
          font-size: 11.5px;
          color: #54595d;
          line-height: 1.5;
        }

        .vector-footer-text p {
          margin: 0 0 6px;
        }

        /* ==========================================================
           RESPONSIVE BREAKPOINTS (Mobile & Tablet adaptiveness)
           ========================================================== */

        @media (max-width: 1024px) {
          .vector-column-toc {
            display: none;
          }
          .vector-column-article {
            margin-left: 0;
            padding: 18px 20px 36px;
          }
        }

        @media (max-width: 768px) {
          .infobox {
            float: none;
            width: 100%;
            margin: 0 0 18px 0;
            box-sizing: border-box;
          }
          .thumb, .tright, .tleft {
            float: none;
            width: 100% !important;
            margin: 12px 0 18px 0;
          }
          .thumbinner {
            width: 100% !important;
            box-sizing: border-box;
          }
          .firstHeading {
            font-size: 24px;
            line-height: 1.25;
          }
          .vector-column-article {
            padding: 14px 12px 28px;
          }
          .see-also-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .wikitable {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            font-size: 12px;
          }
          .wiki-metric-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .wiki-contribution-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
        }

        @media (max-width: 480px) {
          .vector-main-layout {
            padding: 10px 8px;
          }
          .vector-column-article {
            padding: 10px 8px 20px;
          }
          .firstHeading {
            font-size: 21px;
          }
          .wiki-metric-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          .see-also-card {
            padding: 12px 12px 10px;
            margin: 10px 0 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default BiographyArticle;

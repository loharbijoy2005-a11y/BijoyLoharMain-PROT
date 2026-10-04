"use client";

import React, { useState, useEffect } from "react";

interface TocItem {
  id: string;
  label: string;
  level: number;
  num?: string;
}

const TOC_ITEMS: TocItem[] = [
  { id: "article-top", label: "(Top)", level: 1 },
  { id: "early-life", label: "Early life and family background", level: 1, num: "1" },
  { id: "education", label: "Education and vocational background", level: 1, num: "2" },
  { id: "gaming", label: "Competitive gaming and early computing (2022–2023)", level: 1, num: "3" },
  { id: "software-engineering", label: "Self-taught software engineering & technical career", level: 1, num: "4" },
  { id: "autodidactic-journey", label: "Autodidactic journey and core programming", level: 2, num: "4.1" },
  { id: "automation-scripting", label: "Automation bots and utility scripting", level: 2, num: "4.2" },
  { id: "shadow-arrow", label: "Foundation and expansion of Shadow Arrow (2025–present)", level: 2, num: "4.3" },
  { id: "wikidata-pipelines", label: "Automated semantic pipelines and Wikidata ingestion bots", level: 2, num: "4.4" },
  { id: "creative-pursuits", label: "Creative pursuits, writing, and media", level: 1, num: "5" },
  { id: "authorship", label: "Authorship and technical writing", level: 2, num: "5.1" },
  { id: "video-media", label: "Video creation, color science, and 3D animation", level: 2, num: "5.2" },
  { id: "philosophy-toolchain", label: "Technical philosophy and toolchain", level: 1, num: "6" },
  { id: "personal-life", label: "Personal life", level: 1, num: "7" },
  { id: "see-also", label: "See also", level: 1, num: "8" },
  { id: "references", label: "References", level: 1, num: "9" },
];

export const BiographyArticle: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("article-top");
  const [tocOpen, setTocOpen] = useState<boolean>(true);
  const [liveCount, setLiveCount] = useState<number>(13537);

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
    const interval = setInterval(fetchWikidataEdits, 15000); // Polling real API every 15s
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: 0.1 }
    );

    TOC_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="vector-2022-canvas">
      {/* 3-COLUMN MODERN VECTOR 2022 ARCHITECTURE */}
      <div className="vector-main-layout">
        {/* COLUMN 1: LEFT STICKY TABLE OF CONTENTS */}
        <aside className="vector-column-toc">
          <div className="vector-toc-wrapper">
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
                  {TOC_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li
                        key={item.id}
                        className={`vector-toc-item vector-toc-level-${item.level} ${isActive ? "vector-toc-item-active" : ""}`}
                      >
                        <button
                          onClick={() => scrollTo(item.id)}
                          className="vector-toc-link"
                        >
                          {item.num && <span className="vector-toc-num">{item.num}</span>}
                          <span className="vector-toc-text">{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            )}
          </div>
        </aside>

        {/* COLUMN 2 & 3: MAIN ARTICLE AREA + FLOATING RIGHT INFOBOX */}
        <main className="vector-column-article" id="content">
          <div className="vector-article-header">
            <h1 className="firstHeading mw-first-heading" id="article-top">
              Bijoy Lohar
            </h1>
            <div className="vector-article-lang-bar">
              <a href="/" className="vector-back-home-link">
                ← Back to Portfolio
              </a>
            </div>
          </div>

          <div className="text-xs text-[#54595d] font-sans tracking-wide mb-4">
            Archival Documentation &amp; Biography
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
                  <th scope="row" className="infobox-label">Born</th>
                  <td className="infobox-data">
                    12 October 2005 <span className="noprint ForceAgeToShow">(age 20, turning 21)</span><br />
                    <span className="birthplace">
                      <a href="https://en.wikipedia.org/wiki/Bishnupur,_Bankura" target="_blank" rel="noopener noreferrer" className="wiki-link">Bishnupur</a>,{" "}
                      <a href="https://en.wikipedia.org/wiki/Bankura_district" target="_blank" rel="noopener noreferrer" className="wiki-link">Bankura district</a>,{" "}
                      <a href="https://en.wikipedia.org/wiki/West_Bengal" target="_blank" rel="noopener noreferrer" className="wiki-link">West Bengal</a>, India
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Nationality</th>
                  <td className="infobox-data category">Indian</td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Alma mater</th>
                  <td className="infobox-data">
                    <ul className="infobox-list">
                      <li>
                        <b><a href="https://en.wikipedia.org/wiki/Vidyasagar_University" target="_blank" rel="noopener noreferrer" className="wiki-link">Vidyasagar University</a></b> <span className="infobox-subtext">(B.Voc in Automobile, 2nd Year)</span>
                      </li>
                      <li>
                        <b>Radhanagar High School</b>
                        <div className="infobox-subtext">Higher Secondary (10+2)</div>
                      </li>
                      <li>
                        <b>Bishnupur High School</b>
                        <div className="infobox-subtext">Madhyamik (10th Secondary)</div>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Occupations</th>
                  <td className="infobox-data role">
                    <ul className="infobox-list">
                      <li>Software Engineer</li>
                      <li>Full-Stack Developer</li>
                      <li>Systems Architect</li>
                      <li>Author &amp; Technical Writer</li>
                      <li>Semantic Data Architect</li>
                      <li>Tech Entrepreneur</li>
                      <li>Video Creator &amp; Digital Media Specialist <span className="infobox-subtext">(<a href="https://www.imdb.com/name/nm18949942/" target="_blank" rel="noopener noreferrer" className="wiki-link">IMDb listed</a>)</span></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Years active</th>
                  <td className="infobox-data">2023–present</td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Title</th>
                  <td className="infobox-data">Founder &amp; Lead, <a href="https://www.shadowarrow.in" target="_blank" rel="noopener noreferrer" className="wiki-link">Shadow Arrow</a></td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Known for</th>
                  <td className="infobox-data">
                    <ul className="infobox-list">
                      <li>Full-stack software engineering</li>
                      <li>Systems architecture &amp; distributed web platforms</li>
                      <li>Autonomous semantic data pipelines (Wikidata)</li>
                      <li>Digital literature &amp; systems writing</li>
                      <li>Digital video production &amp; post-engineering</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Parent(s)</th>
                  <td className="infobox-data">
                    Binod Lohar <span className="infobox-subtext">(father)</span><br />
                    Soma Lohar <span className="infobox-subtext">(mother)</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="infobox-label">Website</th>
                  <td className="infobox-data">
                    <a href="https://www.bijoylohar.in" target="_blank" rel="noopener noreferrer" className="wiki-link url">bijoylohar.in</a>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* LEAD SECTION */}
            <p>
              <b>Bijoy Lohar</b> (born 12 October 2005) is an Indian self-taught software engineer, systems architect, author, digital video creator, and technology entrepreneur.<sup><a href="#ref-1" className="wiki-cite">[1]</a></sup> He is the founder and principal systems architect of <b>Shadow Arrow</b>, a bespoke software engineering and digital commerce solutions company founded in 2025.<sup><a href="#ref-3" className="wiki-cite">[3]</a></sup> Operating from <a href="https://en.wikipedia.org/wiki/Bishnupur,_Bankura" target="_blank" rel="noopener noreferrer" className="wiki-link">Bishnupur</a> in the Bankura district of <a href="https://en.wikipedia.org/wiki/West_Bengal" target="_blank" rel="noopener noreferrer" className="wiki-link">West Bengal</a>, Lohar has earned recognition for full-stack software engineering, resilient distributed systems architecture, literature, and building high-throughput autonomous semantic data ingestion pipelines that bridge public infrastructure into the global <a href="https://en.wikipedia.org/wiki/Semantic_Web" target="_blank" rel="noopener noreferrer" className="wiki-link">Semantic Web</a> and <a href="https://en.wikipedia.org/wiki/Wikidata" target="_blank" rel="noopener noreferrer" className="wiki-link">Wikidata</a> knowledge base.<sup><a href="#ref-2" className="wiki-cite">[2]</a></sup>
            </p>

            <p>
              Lohar first engaged with computer systems through competitive tactical gaming between 2022 and 2023, where his analysis of network tick rates, latency, and client-server synchronization stimulated an autodidactic immersion into programming languages including C++, Java, Python, JavaScript, and TypeScript.<sup><a href="#ref-4" className="wiki-cite">[4]</a></sup> His early technical contributions included background automation bots that delivered measured operational efficiencies of over 40% across digital workflows, subsequently evolving into broad-spectrum semantic bot frameworks capable of batch-reconciling thousands of civic and geographic entities daily.<sup><a href="#ref-6" className="wiki-cite">[6]</a></sup>
            </p>

            <p>
              Alongside software engineering and the management of Shadow Arrow, Lohar is an active author of analytical and technical literature, as well as a video creator and post-production specialist with industry credits listed on <a href="https://www.imdb.com/name/nm18949942/" target="_blank" rel="noopener noreferrer" className="wiki-link">IMDb</a>.<sup><a href="#ref-5" className="wiki-cite">[5]</a></sup> He concurrently pursues an undergraduate Bachelor of Vocation (B.Voc) degree in Automobile Systems at <a href="https://en.wikipedia.org/wiki/Vidyasagar_University" target="_blank" rel="noopener noreferrer" className="wiki-link">Vidyasagar University</a>.
            </p>

            {/* SECTION 1 */}
            <section id="early-life" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">1</span> Early life and family background
              </h2>
              <p>
                Bijoy Lohar was born on 12 October 2005 in <a href="https://en.wikipedia.org/wiki/Bishnupur,_Bankura" target="_blank" rel="noopener noreferrer" className="wiki-link">Bishnupur</a>, an ancient municipality in the Bankura district of West Bengal renowned for its historic terracotta architecture and cultural heritage.<sup><a href="#ref-1" className="wiki-cite">[1]</a></sup> He was raised in a close-knit working-class family by his parents, Binod Lohar and Soma Lohar.
              </p>
              <p>
                During his adolescent years in Bishnupur, Lohar exhibited an inquisitive orientation toward electronic circuits, consumer computing hardware, and literature. Despite geographic and infrastructural constraints relative to major metropolitan technology hubs, he leveraged publicly available documentation, open-source technical forums, and hardware experimentation to cultivate a working intuition for electronic and computational systems.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="education" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">2</span> Education and vocational background
              </h2>
              <p>
                Lohar received his primary and secondary schooling in the Bankura district. He attended <b>Bishnupur High School</b> for his Madhyamik (10th Secondary) examinations under the West Bengal Board of Secondary Education (WBBSE), where he developed strong foundations in analytical sciences and mathematics.
              </p>
              <p>
                He subsequently completed his Higher Secondary education (10+2) at <b>Radhanagar High School</b> under the West Bengal Council of Higher Secondary Education (WBCHSE). During this period, his interest in computer architecture and programming intensified, prompting him to dedicate his extracurricular hours to studying algorithm fundamentals and systems scripting.
              </p>
              <p>
                Following his higher secondary schooling, Lohar enrolled at <b><a href="https://en.wikipedia.org/wiki/Vidyasagar_University" target="_blank" rel="noopener noreferrer" className="wiki-link">Vidyasagar University</a></b> in West Bengal to pursue an undergraduate Bachelor of Vocation (B.Voc) degree in Automobile Systems, concurrently advancing his self-taught software engineering practice. The curriculum’s emphasis on applied mechanical thermodynamics, structural mechanics, and automation systems runs parallel to his autodidactic software engineering practice, instilling an interdisciplinary perspective that combines physical engineering rigor with digital software architecture.
              </p>
            </section>

            {/* SECTION 3 */}
            <section id="gaming" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">3</span> Competitive gaming and early computing (2022–2023)
              </h2>
              <p>
                Between 2022 and 2023, Lohar participated in competitive tactical first-person esports titles, prominently <i><a href="https://en.wikipedia.org/wiki/Counter-Strike:_Global_Offensive" target="_blank" rel="noopener noreferrer" className="wiki-link">Counter-Strike: Global Offensive</a></i> (CS:GO). Rather than viewing esports solely as recreation, Lohar approached the medium from an analytical systems perspective.<sup><a href="#ref-4" className="wiki-cite">[4]</a></sup>
              </p>
              <p>
                He began investigating the engineering challenges governing multiplayer simulations:
              </p>
              <ul className="vector-bullet-list">
                <li><b>Tick-Rate Synchronisation:</b> Examining client-side interpolation, sub-tick packet delivery, and deterministic server reconciliation.</li>
                <li><b>Network Latency Optimization:</b> Investigating packet loss, jitter buffers, and routing optimizations across Indian ISP peering topologies.</li>
                <li><b>Frame Rendering Pipelines:</b> Analyzing GPU draw calls, CPU bottlenecks, and memory overhead in real-time graphic engines.</li>
              </ul>
              <p>
                This deep technical scrutiny served as the definitive catalyst that transitioned Lohar from a software consumer into an autodidactic systems engineer.
              </p>
            </section>

            {/* SECTION 4 */}
            <section id="software-engineering" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">4</span> Self-taught software engineering &amp; technical career
              </h2>
              <p>
                Without enrollment in traditional university computer science degree tracks, Lohar devised an intensive, project-driven autodidactic curriculum centered on building real-world production systems.<sup><a href="#ref-2" className="wiki-cite">[2]</a></sup>
              </p>

              <h3 id="autodidactic-journey" className="mw-headline-h3">
                <span className="mw-headline-number">4.1</span> Autodidactic journey and core programming
              </h3>
              <p>
                Lohar’s programming journey commenced in late 2022 with low-level systems programming in <b>C++</b>, which instilled rigorous habits regarding memory management, pointer arithmetic, and algorithmic time complexity. He subsequently adopted <b>Java</b> to master object-oriented principles, design patterns, and JVM runtime internals, before integrating <b>Python</b> for rapid prototyping, data parsing, and automation scripting.
              </p>
              <p>
                Recognizing the ubiquity of modern web platforms, Lohar transitioned toward full-stack web engineering, mastering modern ECMAScript standards, HTML5 semantic layout, CSS3 architecture, and <b>TypeScript</b>. TypeScript became his primary language for production systems due to its robust type inference, contract enforcement, and maintainability across large distributed codebases.
              </p>

              <h3 id="automation-scripting" className="mw-headline-h3">
                <span className="mw-headline-number">4.2</span> Automation bots and utility scripting
              </h3>
              <p>
                Between 2023 and 2024, Lohar developed a series of modular automation bots and background orchestration scripts engineered in Python and Node.js. These utilities addressed operational bottlenecks in data extraction, repetitive clerical verification, inventory monitoring, and API synchronization.
              </p>
              <p>
                Deploying event-driven scheduling and fault-tolerant network retries, these tools successfully reduced manual task overhead by more than <b>40 percent</b> in live testing environments, demonstrating his capability to deliver tangible business efficiency through custom automation.
              </p>

              <h3 id="shadow-arrow" className="mw-headline-h3">
                <span className="mw-headline-number">4.3</span> Foundation and expansion of Shadow Arrow (2025–present)
              </h3>
              <p>
                In 2025, Lohar founded <b>Shadow Arrow</b> (<a href="https://www.shadowarrow.in" target="_blank" rel="noopener noreferrer" className="wiki-link">shadowarrow.in</a>), a software development firm providing end-to-end full-stack web solutions, custom client portals, and resilient e-commerce infrastructures.<sup><a href="#ref-3" className="wiki-cite">[3]</a></sup>
              </p>
              <p>
                As founder and lead systems architect, Lohar designs architectures prioritizing sub-second initial page loads, edge rendering via Next.js and Vercel, serverless microservice endpoints, and relational database schema integrity. Shadow Arrow serves small-to-medium enterprises and digital creators seeking high-performance web applications tailored to specific operational requirements.
              </p>

              <h3 id="wikidata-pipelines" className="mw-headline-h3">
                <span className="mw-headline-number">4.4</span> Automated semantic pipelines and Wikidata ingestion bots
              </h3>
              <p>
                To address structural deficits and under-representation in regional and national knowledge graphs across the open web, Lohar engineered a comprehensive, multi-domain autonomous backend ingestion bot pipeline implemented in Python and TypeScript. Moving beyond single-domain constraints, the engine bridges public open datasets, official gazettes, and decentralized administrative directories with the global <a href="https://en.wikipedia.org/wiki/Semantic_Web" target="_blank" rel="noopener noreferrer" className="wiki-link">Semantic Web</a> and <a href="https://en.wikipedia.org/wiki/Wikidata" target="_blank" rel="noopener noreferrer" className="wiki-link">Wikidata</a> knowledge base.<sup><a href="#ref-6" className="wiki-cite">[6]</a></sup>
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
                          {liveCount.toLocaleString()}
                        </a>{" "}
                        <span className="wiki-metric-sub">edits</span>
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
                The pipeline operates continuously across a wide spectrum of civic, geographic, and institutional domains across India:
              </p>
              <ul className="vector-bullet-list">
                <li><b>Civic &amp; Judicial Bodies:</b> Automated parsing, structural mapping, and property binding for High Courts, District Sessions Courts, state Legislative Assemblies, and urban Municipal Corporations.</li>
                <li><b>Public Health Infrastructure:</b> Systematic entity modeling for government medical colleges, tertiary hospitals, district healthcare facilities, and regional community health centers.</li>
                <li><b>Geographic &amp; Administrative Entities:</b> Dynamic geospatial ingestion of river networks, hydrological reservoirs, urban municipal territories, administrative tehsils, and district administrative subdivisions.</li>
                <li><b>Academic &amp; Research Networks:</b> Nationwide cataloging of central and state universities, autonomous degree colleges, polytechnic institutions, and secondary educational boards.</li>
              </ul>
              <p>
                The ingestion bot executes high-throughput, rate-limited batch updates, automatically structuring, reconciling, and committing between <b>4,000 and 5,000+ verified entity records per day</b>, with burst operational capacities exceeding <b>10,000 structured entries</b> during scheduled synchronization cycles. The system dynamically maps core Wikidata property constraints—including <code>P31</code> (instance of), <code>P17</code> (country), <code>P625</code> (coordinate location), and <code>P131</code> (located in the administrative territorial entity)—enforcing strict RDF triple formatting.
              </p>
              <p>
                To safeguard the Wikimedia linked data cloud from corrupt or duplicate assertions, Lohar incorporated advanced algorithmic validation layers:
              </p>
              <ul className="vector-bullet-list">
                <li><b>Spatial Geocoding &amp; Coordinate Normalization:</b> Trigonometric boundary parsing, EPSG transformations, and bounding-box validation against Indian administrative polygons.</li>
                <li><b>Entity Deduplication &amp; QID Reconciliation:</b> High-confidence fuzzy string matching, alias cross-referencing, and SPARQL query verification against existing Wikibase QIDs to prevent entity replication.</li>
                <li><b>Schema Constraint Enforcement:</b> Type-safe validation verifying required claims, inverse property logic, and standardized external identifier links.</li>
                <li><b>Adaptive Rate-Limiting &amp; State Persistence:</b> Wikimedia-compliant bot protocols utilizing exponential backoff retry routines and persistent transaction logs for deterministic error recovery.</li>
              </ul>
              <p>
                Through this continuous, multi-domain automation infrastructure, Lohar has facilitated the cataloging of tens of thousands of nationwide civic and geographical entities, establishing him as an active open-knowledge automation engineer and semantic data architect.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="creative-pursuits" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">5</span> Creative pursuits, writing, and media
              </h2>
              <p>
                Lohar’s professional identity is characterized by an intersection of engineering precision and multimedia arts.
              </p>

              <h3 id="authorship" className="mw-headline-h3">
                <span className="mw-headline-number">5.1</span> Authorship and technical writing
              </h3>
              <p>
                As an author and essayist, Lohar has written extensively on software autodidacticism, regional tech entrepreneurship, and systems design principles. His technical writings aim to demystify complex computational concepts for aspiring regional developers, advocating for hands-on project creation as the primary mechanism for knowledge retention.<sup><a href="#ref-4" className="wiki-cite">[4]</a></sup>
              </p>

              <h3 id="video-media" className="mw-headline-h3">
                <span className="mw-headline-number">5.2</span> Video creation, color science, and 3D animation
              </h3>
              <p>
                In addition to software development, Lohar is an active video creator and digital media specialist with verified industry listings on <a href="https://www.imdb.com/name/nm18949942/" target="_blank" rel="noopener noreferrer" className="wiki-link">IMDb</a>.<sup><a href="#ref-5" className="wiki-cite">[5]</a></sup> His creative post-production work encompasses:
              </p>
              <ul className="vector-bullet-list">
                <li><b>Color Grading &amp; Color Science:</b> Advanced node-based color correction and cinematic look generation in <a href="https://en.wikipedia.org/wiki/DaVinci_Resolve" target="_blank" rel="noopener noreferrer" className="wiki-link">DaVinci Resolve</a>.</li>
                <li><b>3D Computer Graphics:</b> Hard-surface modeling, lighting, and procedural materials in <a href="https://en.wikipedia.org/wiki/Blender_(software)" target="_blank" rel="noopener noreferrer" className="wiki-link">Blender</a>.</li>
                <li><b>Sound Design &amp; Pacing:</b> Multi-track audio normalization, dynamic EQ mastering, and rhythm-synchronized editing.</li>
              </ul>
            </section>

            {/* SECTION 6 */}
            <section id="philosophy-toolchain" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">6</span> Technical philosophy and toolchain
              </h2>
              <p>
                Lohar advocates for a "systems-first, build-to-learn" philosophy. He asserts that sustainable software engineering requires a profound comprehension of execution cost, network overhead, and maintainability rather than superficial library dependency.
              </p>

              <table className="wikitable">
                <thead>
                  <tr>
                    <th>Domain</th>
                    <th>Primary Toolchain &amp; Technologies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>Core Programming</b></td>
                    <td>TypeScript, JavaScript, Python, C++, Java, SQL</td>
                  </tr>
                  <tr>
                    <td><b>System Automation &amp; Pipelines</b></td>
                    <td>Autonomous civic data ingestion bots, Multi-entity ETL pipelines (Judicial, Healthcare, Geographic &amp; Academic), SPARQL / Wikibase API reconciliation, Batch schema validation</td>
                  </tr>
                  <tr>
                    <td><b>Data &amp; Semantic Protocols</b></td>
                    <td>Wikidata Query Service (SPARQL), RDF / Wikibase APIs, JSON-LD Schema, PostgreSQL, Redis</td>
                  </tr>
                  <tr>
                    <td><b>Web &amp; Frontend</b></td>
                    <td>Next.js, React, HTML5 Semantic, CSS3, Tailwind CSS</td>
                  </tr>
                  <tr>
                    <td><b>Backend &amp; Cloud Infrastructure</b></td>
                    <td>Node.js, REST APIs, Serverless Functions, Vercel, GitHub Actions CI/CD, Git, Linux</td>
                  </tr>
                  <tr>
                    <td><b>Creative &amp; Post-Production</b></td>
                    <td>DaVinci Resolve (Color Science &amp; NLE), Blender (3D Graphics)</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* SECTION 7 */}
            <section id="personal-life" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">7</span> Personal life
              </h2>
              <p>
                Lohar maintains his primary operational and residential base in his native hometown of <a href="https://en.wikipedia.org/wiki/Bishnupur,_Bankura" target="_blank" rel="noopener noreferrer" className="wiki-link">Bishnupur</a>, Bankura district, while balancing academic commitments under <a href="https://en.wikipedia.org/wiki/Vidyasagar_University" target="_blank" rel="noopener noreferrer" className="wiki-link">Vidyasagar University</a> across the southern West Bengal region. His daily workflow is characterized by a disciplined, minimalist engineering regimen centered on continuous software construction, rigorous systems documentation review, and iterative product deployment for Shadow Arrow. Operating from outside metropolitan technology corridors, he has consistently leveraged high-speed edge cloud networks and asynchronous workflows to build and deploy production software.
              </p>
              <p>
                Outside of commercial systems architecture, Lohar maintains an enduring enthusiasm for competitive tactical first-person esports, particularly titles in the <i><a href="https://en.wikipedia.org/wiki/Counter-Strike:_Global_Offensive" target="_blank" rel="noopener noreferrer" className="wiki-link">Counter-Strike</a></i> series, which originally stimulated his interest into networking architectures, client-server tick rates, and packet latency optimization.<sup><a href="#ref-4" className="wiki-cite">[4]</a></sup> He is also actively invested in digital media culture, exploring cinema post-production workflows including node-based color science in <a href="https://en.wikipedia.org/wiki/DaVinci_Resolve" target="_blank" rel="noopener noreferrer" className="wiki-link">DaVinci Resolve</a>, 3D procedural modeling in <a href="https://en.wikipedia.org/wiki/Blender_(software)" target="_blank" rel="noopener noreferrer" className="wiki-link">Blender</a>, and emerging consumer workstation hardware architectures.
              </p>
              <p>
                Lohar is an outspoken proponent of autodidacticism (self-taught education) and the open-source software movement. He frequently advocates for transparent, project-driven engineering methodologies over rigid credentialism, maintaining that verifiable codebase output and functional software utilities provide the truest measure of technical capability. He routinely distributes open-source utility scripts, automation modules, and web experiments publicly on GitHub (<a href="https://github.com/loharbijoy2005-a11y" target="_blank" rel="noopener noreferrer" className="wiki-link">@loharbijoy2005-a11y</a>) and his official portal (<a href="https://www.bijoylohar.in" target="_blank" rel="noopener noreferrer" className="wiki-link">bijoylohar.in</a>).<sup><a href="#ref-1" className="wiki-cite">[1]</a></sup><sup><a href="#ref-2" className="wiki-cite">[2]</a></sup>
              </p>
            </section>

            {/* SECTION 8: SEE ALSO */}
            <section id="see-also" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">8</span> See also
              </h2>
              <div className="see-also-card">
                <div className="see-also-grid">
                  {/* COLUMN 1: PRIMARY ENGINEERING & TECHNOLOGY FIRST */}
                  <div className="see-also-col">
                    <div className="see-also-cat-title">Engineering, Software Architecture &amp; Technology</div>
                    <ul className="vector-bullet-list">
                      <li>
                        <b><a href="https://en.wikipedia.org/wiki/TypeScript" target="_blank" rel="noopener noreferrer" className="wiki-link">TypeScript</a></b> – Strongly typed, open-source programming language building on JavaScript
                      </li>
                      <li>
                        <b><a href="https://en.wikipedia.org/wiki/Autodidacticism" target="_blank" rel="noopener noreferrer" className="wiki-link">Autodidacticism</a></b> – Self-directed learning and autodidactic software engineering practice
                      </li>
                      <li>
                        <b><a href="https://www.shadowarrow.in" target="_blank" rel="noopener noreferrer" className="wiki-link">Shadow Arrow</a></b> – Bespoke software engineering and client portals venture
                      </li>
                      <li>
                        <b><a href="https://en.wikipedia.org/wiki/Extract,_transform,_load" target="_blank" rel="noopener noreferrer" className="wiki-link">ETL Pipelines</a></b> – Automated data extraction, transformation, and batch loading
                      </li>
                    </ul>
                  </div>

                  {/* COLUMN 2: SEMANTIC WEB, REGIONAL INFRASTRUCTURE & ACADEMIA */}
                  <div className="see-also-col">
                    <div className="see-also-cat-title">Open Data, Semantic Web &amp; Regional Context</div>
                    <ul className="vector-bullet-list">
                      <li>
                        <b><a href="https://en.wikipedia.org/wiki/Wikidata" target="_blank" rel="noopener noreferrer" className="wiki-link">Wikidata</a></b> – Free, open multilingual knowledge base operated by Wikimedia Foundation
                      </li>
                      <li>
                        <b><a href="https://en.wikipedia.org/wiki/Semantic_Web" target="_blank" rel="noopener noreferrer" className="wiki-link">Semantic Web</a></b> – Standards framework for linked open data defined by W3C
                      </li>
                      <li>
                        <b><a href="https://en.wikipedia.org/wiki/SPARQL" target="_blank" rel="noopener noreferrer" className="wiki-link">SPARQL Protocol</a></b> – Query language and protocol for RDF graph databases
                      </li>
                      <li>
                        <b><a href="https://en.wikipedia.org/wiki/Vidyasagar_University" target="_blank" rel="noopener noreferrer" className="wiki-link">Vidyasagar University</a></b> – Public state university in West Bengal, India
                      </li>
                      <li>
                        <b><a href="https://en.wikipedia.org/wiki/Bishnupur,_Bankura" target="_blank" rel="noopener noreferrer" className="wiki-link">Bishnupur, Bankura</a></b> – Historic municipality and terracotta heritage center in West Bengal
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: REFERENCES */}
            <section id="references" className="vector-section">
              <h2 className="mw-headline-h2">
                <span className="mw-headline-number">9</span> References
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
              </ol>
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

      {/* AUTHENTIC VECTOR 2022 LIGHT THEME STYLING */}
      <style>{`
        /* ==========================================================
           AUTHENTIC VECTOR 2022 WIKIPEDIA LIGHT AESTHETIC
           ========================================================== */
        
        .vector-2022-canvas {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Lato, Helvetica, Arial, sans-serif;
          font-size: 14px;
          line-height: 1.65;
          color: #202122;
          background-color: #f8f9fa;
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }

        /* 3-COLUMN MODERN ARCHIVAL ARCHITECTURE */
        .vector-main-layout {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          padding: 24px 16px 48px;
          gap: 24px;
          box-sizing: border-box;
          position: relative;
        }

        /* LEFT TOC SIDEBAR (INDEPENDENT CLEAN STICKY SIDEBAR) */
        .vector-column-toc {
          width: 240px;
          flex-shrink: 0;
          position: sticky;
          top: 24px;
          align-self: flex-start;
          max-height: calc(100vh - 48px);
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-width: thin;
          scrollbar-color: #c8ccd1 transparent;
          padding-top: 8px;
          padding-right: 12px;
          box-sizing: border-box;
        }

        .vector-column-toc::-webkit-scrollbar {
          width: 4px;
        }

        .vector-column-toc::-webkit-scrollbar-thumb {
          background-color: #c8ccd1;
          border-radius: 2px;
        }

        .vector-toc-wrapper {
          position: relative;
          width: 100%;
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
          color: #447ff5;
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

        .vector-toc-level-2 {
          padding-left: 14px;
          margin-top: 3px;
        }

        .vector-toc-link {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          width: 100%;
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
        }

        /* CENTER ARTICLE AREA */
        .vector-column-article {
          flex: 1;
          min-width: 0;
          background: #ffffff;
          padding: 28px 36px 48px;
          border: 1px solid #a2a9b1;
          border-radius: 2px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          min-height: calc(100vh - 100px);
        }

        .vector-article-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          border-bottom: 1px solid #a2a9b1;
          padding-bottom: 4px;
          margin-bottom: 4px;
        }

        .firstHeading {
          font-family: "Linux Libertine", "Georgia", Times, serif;
          font-size: 30px;
          font-weight: 400;
          line-height: 1.25;
          margin: 0;
          color: #000000;
          scroll-margin-top: 100px;
        }

        .vector-article-lang-bar {
          flex-shrink: 0;
        }

        .vector-back-home-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 12.5px;
          color: #3366cc;
          text-decoration: none;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 2px;
          border: 1px solid #a2a9b1;
          background: #f8f9fa;
          transition: all 0.15s ease;
        }
        .vector-back-home-link:hover {
          background: #eaecf0;
          text-decoration: underline;
        }

        .mw-body-content p {
          margin: 0 0 12px;
          text-align: justify;
          color: #202122;
        }

        /* LINKS */
        .wiki-link {
          color: #3366cc;
          text-decoration: none;
        }
        .wiki-link:hover {
          text-decoration: underline;
          color: #447ff5;
        }
        .wiki-link:visited {
          color: #6b4ba1;
        }

        .wiki-cite {
          color: #3366cc;
          font-size: 11px;
          text-decoration: none;
          font-weight: normal;
          padding: 0 1px;
        }
        .wiki-cite:hover {
          text-decoration: underline;
        }

        /* HEADINGS */
        .vector-section {
          margin-top: 24px;
          scroll-margin-top: 100px;
        }

        .mw-headline-h2 {
          font-family: "Linux Libertine", "Georgia", Times, serif;
          font-size: 22px;
          font-weight: 400;
          line-height: 1.3;
          border-bottom: 1px solid #a2a9b1;
          padding-bottom: 3px;
          margin: 28px 0 12px;
          color: #000000;
          display: flex;
          align-items: baseline;
          gap: 8px;
          scroll-margin-top: 100px;
        }

        .mw-headline-h3 {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.4;
          border-bottom: 1px solid #eaecf0;
          padding-bottom: 2px;
          margin: 18px 0 8px;
          color: #000000;
          display: flex;
          align-items: baseline;
          gap: 8px;
          scroll-margin-top: 100px;
        }

        .mw-headline-number {
          font-size: 14px;
          color: #54595d;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-weight: normal;
        }

        .vector-bullet-list {
          margin: 0 0 14px 20px;
          padding: 0;
          list-style: disc;
          color: #202122;
        }
        .vector-bullet-list li {
          margin-bottom: 4px;
        }

        /* RIGHT FLOATING INFOBOX */
        .infobox {
          float: right;
          clear: right;
          margin: 0 0 16px 24px;
          background: #f8f9fa;
          border: 1px solid #a2a9b1;
          border-collapse: collapse;
          width: 320px;
          font-size: 13px;
          line-height: 1.4;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        .infobox-above {
          background: #cee0f2;
          color: #000000;
          font-family: "Linux Libertine", "Georgia", Times, serif;
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          padding: 8px 10px;
          border-bottom: 1px solid #a2a9b1;
        }

        .infobox-subheader {
          background: #eaf3fb;
          text-align: center;
          font-size: 12px;
          font-weight: 600;
          color: #333333;
          padding: 4px 8px;
          border-bottom: 1px solid #a2a9b1;
        }

        .infobox-image {
          text-align: center;
          padding: 10px 10px 6px;
          border-bottom: 1px solid #a2a9b1;
          background: #ffffff;
        }

        .infobox-photo {
          display: block;
          margin: 0 auto;
          max-width: 280px;
          width: 100%;
          height: auto;
          border: 1px solid #c8ccd1;
          border-radius: 2px;
        }

        .infobox-caption {
          font-size: 11.5px;
          color: #54595d;
          margin-top: 6px;
          font-style: italic;
        }

        .infobox-label {
          background: #eaecf0;
          color: #202122;
          padding: 6px 10px;
          font-weight: bold;
          vertical-align: top;
          text-align: left;
          font-size: 12.5px;
          border-top: 1px solid #a2a9b1;
          width: 105px;
          white-space: nowrap;
        }

        .infobox-data {
          background: #ffffff;
          color: #202122;
          padding: 6px 10px;
          vertical-align: top;
          font-size: 12.5px;
          border-top: 1px solid #a2a9b1;
        }

        .infobox-list {
          margin: 0;
          padding: 0 0 0 14px;
          list-style: disc;
        }
        .infobox-list li {
          margin-bottom: 3px;
        }

        .infobox-subtext {
          font-size: 11px;
          color: #54595d;
        }

        /* DATA TABLES (wikitable) */
        .wikitable {
          border-collapse: collapse;
          width: 100%;
          margin: 14px 0 18px;
          font-size: 13px;
          background: #ffffff;
        }

        .wikitable th {
          background: #eaecf0;
          border: 1px solid #a2a9b1;
          padding: 8px 12px;
          text-align: left;
          font-weight: bold;
          color: #202122;
        }

        .wikitable td {
          border: 1px solid #a2a9b1;
          padding: 7px 12px;
          vertical-align: top;
          color: #202122;
        }

        .wikitable tr:nth-child(even) td {
          background: #f8f9fa;
        }

        /* AUTONOMOUS BOT CONTRIBUTION & REGISTRY BOX */
        .wiki-contribution-box {
          background: #ffffff;
          border: 1px solid #a2a9b1;
          border-left: 4px solid #2e7d32;
          border-radius: 2px;
          margin: 16px 0 20px;
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
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .wiki-contribution-badge {
          font-size: 11px;
          background: #e8f5e9;
          color: #2e7d32;
          border: 1px solid #a5d6a7;
          border-radius: 12px;
          padding: 2px 8px;
          font-weight: 600;
          letter-spacing: 0.2px;
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
          font-family: inherit;
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
          font-size: 13px;
          font-weight: 700;
          color: #202122;
          margin-bottom: 8px;
          padding-bottom: 4px;
          border-bottom: 1px solid #eaecf0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .see-also-card .vector-bullet-list {
          margin: 0;
          padding-left: 18px;
        }

        .see-also-card .vector-bullet-list li {
          margin-bottom: 8px;
          line-height: 1.5;
          font-size: 13px;
          color: #404244;
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

        /* CATEGORIES BOX (catlinks) */
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

        html {
          scroll-behavior: smooth;
        }

        /* ==========================================================
           RESPONSIVE BREAKPOINTS (Mobile & Tablet adaptiveness)
           ========================================================== */

        @media (max-width: 1024px) {
          .vector-column-toc {
            display: none;
          }
          .vector-column-article {
            border-left: none;
            border-right: none;
            padding: 18px 20px 36px;
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .infobox {
            float: none;
            width: 100%;
            margin: 0 0 18px 0;
            box-sizing: border-box;
          }
          .firstHeading {
            font-size: 24px;
            line-height: 1.25;
          }
          .vector-column-article {
            padding: 14px 12px 28px;
            overflow-x: hidden;
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
          .wikitable th, .wikitable td {
            padding: 6px 8px;
            white-space: normal;
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
            padding: 10px 6px;
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
          .infobox-label {
            width: 90px;
            font-size: 11.5px;
            padding: 5px 6px;
          }
          .infobox-data {
            font-size: 11.5px;
            padding: 5px 6px;
          }
          .vector-header {
            padding: 8px 10px;
          }
        }
      `}</style>
    </div>
  );
};

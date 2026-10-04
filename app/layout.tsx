import type { Metadata } from "next";
import "./globals.css";
import ServiceWorkerRegister from "../components/ServiceWorkerRegister";

// ─── Site-Wide Constants ──────────────────────────────────────────────────────
const BASE_URL = "https://www.bijoylohar.in";
const OG_IMAGE = "https://github.com/loharbijoy2005-a11y.png";
const TITLE = "Bijoy Lohar | Full-Stack Software Engineer & Founder of Shadow Arrow";
const DESCRIPTION =
  "Official portfolio of Bijoy Lohar — Full-Stack Software Engineer and Founder of Shadow Arrow. Based in Bishnupur, West Bengal, India.";

// ─── Next.js Metadata Export ─────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: TITLE,
    template: "%s | Bijoy Lohar",
  },
  description: DESCRIPTION,

  keywords: [
    "Bijoy Lohar",
    "Bijoy Bhai",
    "Bijoy Dada",
    "Arrow Dada",
    "Arrow Da",
    "Bijoy",
    "Shadow Arrow",
    "Wb Arrow",
    "bijoylohar.in",
    "Bijoy Lohar Software Engineer",
    "Bijoy Lohar Shadow Arrow",
    "Bijoy Lohar Wb Arrow",
    "Bijoy Bhai Shadow Arrow",
    "Bijoy Dada Shadow Arrow",
    "Arrow Da Shadow Arrow",
    "Wb Arrow Founder",
    "Bijoy Lohar Founder",
    "Bijoy Lohar Author",
    "Bijoy Lohar Bishnupur",
    "Shadow Arrow Founder",
    "Full Stack Developer India",
    "Systems Architect India",
    "Cloud Architect",
    "Next.js Developer",
    "React Developer",
    "Architecting Scalable Web Systems",
    "Bijoy Lohar IMDb",
    "Bijoy Lohar ORCID",
    "Bijoy Lohar Goodreads",
    "Bijoy Lohar Amazon Author",
    "Bijoy Lohar Topmate",
    "Bijoy Lohar GitHub",
    "Bijoy Lohar LinkedIn",
  ],

  authors: [{ name: "Bijoy Lohar", url: BASE_URL }],
  creator: "Bijoy Lohar",
  publisher: "Bijoy Lohar",

  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: `${BASE_URL}/`,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "google-site-verification-placeholder",
    yandex: "yandex-verification-placeholder",
    other: {
      "msvalidate.01": "CCF23EA310A53F6626E9FB8459D29175",
      "baidu-site-verification": "baidu-verification-code",
    },
  },

  openGraph: {
    type: "profile",
    url: `${BASE_URL}/`,
    siteName: "Bijoy Lohar — Portfolio",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 800,
        height: 800,
        alt: "Bijoy Lohar — Full-Stack Software Engineer",
        type: "image/png",
      },
    ],
    firstName: "Bijoy",
    lastName: "Lohar",
    username: "Bijoylohar.2005",
    gender: "male",
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
    creator: "@BijoyLohar2005",
  },

  icons: {
    icon: "https://i.postimg.cc/25mBcsVn/Bijoy-Lohar-Icon.png",
    shortcut: "https://i.postimg.cc/25mBcsVn/Bijoy-Lohar-Icon.png",
    apple: "https://i.postimg.cc/25mBcsVn/Bijoy-Lohar-Icon.png",
  },
  manifest: "/manifest.json",

  other: {
    "bingbot": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    "slurp": "index, follow",
    "duckduckbot": "index, follow",
  },

  category: "technology",
};

// ─── TypeScript Interfaces ────────────────────────────────────────────────────
interface SchemaId {
  "@id": string;
}

interface SchemaCountry {
  "@type": "Country";
  name: string;
}

interface SchemaPostalAddress {
  "@type": "PostalAddress";
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
}

interface SchemaPersonRef {
  "@type": "Person";
  name: string;
}

interface SchemaOrganizationRef {
  "@type": "Organization";
  "@id": string;
  name: string;
  url: string;
  sameAs: string[];
}

interface SchemaWebSiteNode {
  "@type": "WebSite";
  "@id": string;
  url: string;
  name: string;
  alternateName?: string[];
  description?: string;
  about?: SchemaId;
  publisher: SchemaId;
  potentialAction?: {
    "@type": "SearchAction";
    target: { "@type": "EntryPoint"; urlTemplate: string };
    "query-input": string;
  };
}

interface SchemaProfilePageNode {
  "@type": "ProfilePage";
  "@id": string;
  url: string;
  name: string;
  inLanguage: string;
  isPartOf: SchemaId;
  mainEntity: SchemaId;
  about: SchemaId;
  datePublished: string;
  dateModified: string;
  significantLink?: string[];
  speakable?: {
    "@type": "SpeakableSpecification";
    cssSelector: string[];
  };
  breadcrumb?: SchemaId;
}

interface SchemaPersonNode {
  "@type": "Person";
  "@id": string;
  name: string;
  givenName: string;
  familyName: string;
  alternateName: string[];
  gender: string;
  birthDate: string;
  jobTitle: string | string[];
  description: string;
  url: string;
  identifier?: Array<{
    "@type": "PropertyValue";
    propertyID: string;
    name: string;
    value: string;
    url: string;
  }>;
  image: string[];
  nationality: SchemaCountry;
  homeLocation: SchemaPostalAddress;
  parent?: SchemaPersonRef[];
  sibling?: SchemaPersonRef[];
  worksFor: SchemaOrganizationRef;
  owns?: SchemaId;
  award?: string[];
  knowsAbout: string[];
  sameAs: string[];
  mainEntityOfPage?: SchemaId;
  knowsLanguage?: string[];
  subjectOf?: Array<{
    "@type": string;
    "@id": string;
    url: string;
    name: string;
    headline?: string;
    inLanguage?: string;
  }>;
  hasOccupation?: Array<{
    "@type": "Occupation";
    name: string;
    occupationLocation: SchemaCountry;
    description: string;
    skills: string;
  }>;
}

interface SchemaOrganizationNode {
  "@type": "Organization";
  "@id": string;
  name: string;
  url: string;
  description?: string;
  foundingDate?: string;
  foundingLocation?: SchemaCountry;
  numberOfEmployees?: { "@type": "QuantitativeValue"; value: number };
  logo?: { "@type": "ImageObject"; url: string };
  founder: SchemaId;
  member?: SchemaId;
  sameAs: string[];
}

interface SchemaBreadcrumbListNode {
  "@type": "BreadcrumbList";
  "@id": string;
  itemListElement: {
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }[];
}

interface SchemaGraph {
  "@context": "https://schema.org";
  "@graph": [
    SchemaWebSiteNode,
    SchemaProfilePageNode,
    SchemaPersonNode,
    SchemaOrganizationNode,
    SchemaBreadcrumbListNode,
  ];
}

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdGraph: SchemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.bijoylohar.in/#website",
        "url": "https://www.bijoylohar.in/",
        "name": "Bijoy Lohar",
        "alternateName": [
          "Wb Arrow",
          "Bijoy Lohar",
          "Bijoy Bhai",
          "Bijoy Dada",
          "Arrow Da",
          "Arrow Dada",
          "Shadow Arrow"
        ],
        "description": "Official portfolio of Bijoy Lohar — Full-Stack Software Engineer and Founder of Shadow Arrow.",
        "about": {
          "@id": "https://www.bijoylohar.in/#person",
        },
        "publisher": {
          "@id": "https://www.bijoylohar.in/#person",
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.bijoylohar.in/?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": "https://www.bijoylohar.in/#webpage",
        "url": "https://www.bijoylohar.in/",
        "name": "Bijoy Lohar | Official Profile",
        "inLanguage": "en-IN",
        "isPartOf": {
          "@id": "https://www.bijoylohar.in/#website",
        },
        "mainEntity": {
          "@id": "https://www.bijoylohar.in/#person",
        },
        "about": {
          "@id": "https://www.bijoylohar.in/#person",
        },
        "datePublished": "2026-08-01T00:00:00+05:30",
        "dateModified": "2026-09-28T19:05:00+05:30",
        // High-authority profiles surfaced directly on this page node
        "significantLink": [
          "https://orcid.org/0009-0004-5643-7612",
          "https://www.imdb.com/name/nm18949942/",
          "https://www.crunchbase.com/person/bijoy-lohar",
          "https://www.goodreads.com/bijoylohar",
          "https://www.amazon.com/author/bijoylohar",
          "https://www.linkedin.com/in/bijoy-lohar-5a508832b",
          "https://github.com/loharbijoy2005-a11y",
          "https://developers.google.com/profile/u/101253410801307724262",
        ],
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2"],
        },
        "breadcrumb": {
          "@id": "https://www.bijoylohar.in/#breadcrumb",
        },
      },
      {
        "@type": "Person",
        "@id": "https://www.bijoylohar.in/#person",
        "name": "Bijoy Lohar",
        "givenName": "Bijoy",
        "familyName": "Lohar",
        "alternateName": [
          "Bijoy Lohar",
          "Bijoy Bhai",
          "Bijoy Dada",
          "Arrow Dada",
          "Arrow Da",
          "Bijoy",
          "Bijoy Lohar (Bijoy Bhai)",
          "Bijoy Lohar (Bijoy Dada)",
          "Wb Arrow",
          "Wb Arrow Founder",
          "Shadow Arrow Founder",
          "Shadow Arrow"
        ],
        "gender": "https://schema.org/Male",
        "birthDate": "2005-10-12",
        "jobTitle": [
          "Full-Stack Software Engineer",
          "Systems Architect",
          "Independent Computational Researcher",
          "Technical Author",
          "Founder",
        ],
        "description": "Indian multi-disciplinary technologist — Full-Stack Software Engineer, Systems Architect, Computational Researcher, Technical Author, and Founder of Shadow Arrow. Specializes in distributed computing, cloud-native infrastructure, visual computing, algorithmic systems, and scalable web architectures. Based in Bishnupur, West Bengal, India.",
        "mainEntityOfPage": {
          "@id": "https://www.bijoylohar.in/#webpage",
        },
        "knowsLanguage": ["en", "hi", "bn"],
        "hasOccupation": [
          {
            "@type": "Occupation",
            "name": "Full-Stack Software Engineer & Systems Architect",
            "occupationLocation": { "@type": "Country", "name": "India" },
            "description": "Designs and builds distributed, cloud-native web systems, microservices architectures, real-time APIs, and scalable infrastructure. Expert in systems-level design and algorithmic efficiency.",
            "skills": "TypeScript, JavaScript, Python, Go, C++, Java, React, Next.js, Node.js, Microservices, Distributed Computing, Cloud Architecture, Cloudflare, MongoDB, Supabase",
          },
          {
            "@type": "Occupation",
            "name": "Technical Author",
            "occupationLocation": { "@type": "Country", "name": "India" },
            "description": "Authors technical handbooks and algorithmic reference guides covering systems design, software engineering fundamentals, and computational theory. Works indexed on Google Books.",
            "skills": "Technical Writing, Algorithmic Reference Guides, Systems Design Documentation, Software Engineering Handbooks",
          },
          {
            "@type": "Occupation",
            "name": "Independent Computational Researcher",
            "occupationLocation": { "@type": "Country", "name": "India" },
            "description": "Conducts independent research in distributed computing, algorithmic efficiency, real-time graphics pipelines, and visual computing systems.",
            "skills": "Distributed Systems, Algorithmic Research, Visual Computing, Real-Time Graphics Pipelines, Computational Theory, GPU Architecture",
          },
        ],
        "url": "https://www.bijoylohar.in/",
        "identifier": [
          {
            "@type": "PropertyValue",
            "propertyID": "IMDb",
            "name": "IMDb ID",
            "value": "nm18949942",
            "url": "https://www.imdb.com/name/nm18949942/",
          },
          {
            "@type": "PropertyValue",
            "propertyID": "ORCID",
            "name": "ORCID iD",
            "value": "0009-0004-5643-7612",
            "url": "https://orcid.org/0009-0004-5643-7612",
          },
          {
            "@type": "PropertyValue",
            "propertyID": "Crunchbase",
            "name": "Crunchbase Person ID",
            "value": "bijoy-lohar",
            "url": "https://www.crunchbase.com/person/bijoy-lohar",
          },
          {
            "@type": "PropertyValue",
            "propertyID": "Goodreads",
            "name": "Goodreads Author Profile",
            "value": "bijoylohar",
            "url": "https://www.goodreads.com/bijoylohar",
          },
          {
            "@type": "PropertyValue",
            "propertyID": "Amazon Author",
            "name": "Amazon Author Central Profile",
            "value": "bijoylohar",
            "url": "https://www.amazon.com/author/bijoylohar",
          },
          {
            "@type": "PropertyValue",
            "propertyID": "Wikidata",
            "name": "Wikidata User ID",
            "value": "Bijoy_Lohar_2005",
            "url": "https://www.wikidata.org/wiki/User:Bijoy_Lohar_2005",
          },
          {
            "@type": "PropertyValue",
            "propertyID": "Biography",
            "name": "Official Archival Biography",
            "value": "bijoy-lohar-biography",
            "url": "https://www.bijoylohar.in/biography",
          },
        ],
        "subjectOf": [
          {
            "@type": "Article",
            "@id": "https://www.bijoylohar.in/biography#article",
            "url": "https://www.bijoylohar.in/biography",
            "name": "Bijoy Lohar — Biography & Archival Documentation",
            "headline": "Bijoy Lohar: Indian Self-Taught Software Engineer & Systems Architect",
            "inLanguage": "en",
          },
        ],
        "image": [
          "https://github.com/loharbijoy2005-a11y.png",
          "https://www.bijoylohar.in/bijoy-lohar.jpg",
        ],
        "nationality": {
          "@type": "Country",
          "name": "India",
        },
        "homeLocation": {
          "@type": "PostalAddress",
          "addressLocality": "Bishnupur",
          "addressRegion": "West Bengal",
          "addressCountry": "IN",
        },
        "parent": [
          {
            "@type": "Person",
            "name": "Binod Lohar",
          },
          {
            "@type": "Person",
            "name": "Soma Lohar",
          },
        ],
        "sibling": [
          {
            "@type": "Person",
            "name": "Dipti Lohar",
          },
        ],
        "worksFor": {
          "@type": "Organization",
          "@id": "https://shadowarrow.in/#organization",
          "name": "Shadow Arrow",
          "url": "https://shadowarrow.in",
          "sameAs": [
            "https://www.crunchbase.com/organization/shadow-arrow",
          ],
        },
        // Explicit ownership relationship — strong KG trigger
        "owns": {
          "@id": "https://shadowarrow.in/#organization",
        },
        "knowsAbout": [
          // Core Languages
          "Python", "Go (Golang)", "TypeScript", "C++", "Java", "JavaScript",
          // Systems & Architecture
          "Distributed Computing", "Systems Architecture", "Microservices",
          "Cloud-Native Infrastructure", "Algorithmic Efficiency", "API Systems",
          "Cloud Architecture", "Cloudflare", "Containerization", "Docker",
          // Web & Full-Stack
          "Full-Stack Web Development", "React", "Next.js", "Node.js",
          "Express.js", "MongoDB Atlas", "Supabase",
          // Visual Computing
          "Visual Computing", "Real-Time Graphics Pipelines", "GPU Architecture",
          "Blender 3D", "DaVinci Resolve", "3D Rendering",
          // Research & Authorship
          "Computational Research", "Technical Writing",
          "Algorithmic Reference Guides", "Systems Design Documentation",
          "Software Engineering Handbooks",
        ],
        // All canonical identities - Googlebot uses these to auto-verify your entity
        "sameAs": [
          // Research & Knowledge Graph
          "https://orcid.org/0009-0004-5643-7612",
          "https://developers.google.com/profile/u/101253410801307724262",
          "https://www.wikidata.org/wiki/User:Bijoy_Lohar_2005",
          // Authorship & Media
          "https://www.imdb.com/name/nm18949942/",
          "https://www.goodreads.com/bijoylohar",
          "https://www.amazon.com/author/bijoylohar",
          // Professional
          "https://www.crunchbase.com/person/bijoy-lohar",
          "https://www.linkedin.com/in/bijoy-lohar-5a508832b",
          "https://topmate.io/bijoy_lohar",
          "https://www.commudle.com/users/Bijoylohar",
          // Code Repositories
          "https://github.com/loharbijoy2005-a11y",
          "https://gitlab.com/loharbijoy2005-a11y",
          "https://hub.docker.com/u/bijoylohar",
          // Social
          "https://x.com/BijoyLohar2005",
          "https://www.instagram.com/bijoylohar_2005",
          "https://www.threads.net/@bijoylohar_2005",
          "https://www.facebook.com/Bijoylohar.2005",
          "https://youtube.com/@bijoylohar2005",
          "https://medium.com/@Bijoylohar",
          "https://www.quora.com/profile/Bijoy-Lohar-13",
          // Discovery
          "https://linktr.ee/Bijoylohar",
          "https://about.me/bijoylohar",
          "https://www.pinterest.com/loharbijoy2005",
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://shadowarrow.in/#organization",
        "name": "Shadow Arrow",
        "url": "https://shadowarrow.in",
        "description": "Shadow Arrow is an Indian technology company founded by Bijoy Lohar, specializing in scalable web systems, cloud infrastructure, and modern software architecture.",
        "foundingDate": "2025",
        "foundingLocation": {
          "@type": "Country",
          "name": "India",
        },
        "logo": {
          "@type": "ImageObject",
          "url": "https://i.postimg.cc/25mBcsVn/Bijoy-Lohar-Icon.png",
        },
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": 1,
        },
        "founder": {
          "@id": "https://www.bijoylohar.in/#person",
        },
        "member": {
          "@id": "https://www.bijoylohar.in/#person",
        },
        "sameAs": [
          "https://www.crunchbase.com/organization/shadow-arrow",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.bijoylohar.in/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.bijoylohar.in/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Bijoy Lohar — Full-Stack Software Engineer",
            "item": "https://www.bijoylohar.in/#about",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Shadow Arrow — Founder",
            "item": "https://shadowarrow.in",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#09090B" />
        <link rel="icon" type="image/png" href="https://i.postimg.cc/25mBcsVn/Bijoy-Lohar-Icon.png" />
        <link rel="shortcut icon" href="https://i.postimg.cc/25mBcsVn/Bijoy-Lohar-Icon.png" />
        <link rel="apple-touch-icon" href="https://i.postimg.cc/25mBcsVn/Bijoy-Lohar-Icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph, null, 0) }}
        />
      </head>
      <body className="antialiased bg-studioCanvas text-deepInk selection:bg-deepInk selection:text-white">
        <div className="cursor-spotlight" id="cursorSpotlight" />
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}

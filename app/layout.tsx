import type { Metadata } from "next";
import "./globals.css";

// ─── Site-Wide Constants ──────────────────────────────────────────────────────
const BASE_URL = "https://www.bijoylohar.in";
const OG_IMAGE = "https://github.com/loharbijoy2005-a11y.png";
const TITLE = "Bijoy Lohar | Software Engineer & Founder of Shadow Arrow";
const DESCRIPTION =
  "Official portfolio of Bijoy Lohar — creative software engineer, cloud systems architect, and founder of Shadow Arrow. Based in Bishnupur, West Bengal, India.";

// ─── Next.js Metadata Export ─────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: TITLE,
    template: "%s | Bijoy Lohar",
  },
  description: DESCRIPTION,

  // Keywords for Google crawlers
  keywords: [
    "Bijoy Lohar",
    "Shadow Arrow",
    "Software Engineer",
    "Full Stack Developer",
    "Cloud Architect",
    "Next.js Developer",
    "React Developer",
    "Web Developer India",
    "Arrow Gaming",
    "Lost Gaming",
    "Gaming Streamer India",
    "Bishnupur West Bengal",
    "Indian Software Engineer",
    "Founder Shadow Arrow",
    "Portfolio Bijoy Lohar",
  ],

  // Author
  authors: [{ name: "Bijoy Lohar", url: BASE_URL }],
  creator: "Bijoy Lohar",
  publisher: "Bijoy Lohar",

  // Canonical
  alternates: {
    canonical: `${BASE_URL}/`,
  },

  // Robots directive
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

  // Open Graph (Facebook, LinkedIn, WhatsApp previews)
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
        alt: "Bijoy Lohar — Software Engineer & Founder of Shadow Arrow",
        type: "image/png",
      },
    ],
    firstName: "Bijoy",
    lastName: "Lohar",
    username: "arrowgaming2005",
    gender: "male",
  },

  // Twitter / X Card (Updated with Official Handle)
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
    creator: "@BijoyLohar2005",
  },

  // App / Icon config
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "technology",
};

// ─── TypeScript Interfaces for Schema Nodes ───────────────────────────────────
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
  publisher: SchemaId;
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
  jobTitle: string;
  description: string;
  url: string;
  image: string[];
  nationality: SchemaCountry;
  homeLocation: SchemaPostalAddress;
  worksFor: SchemaOrganizationRef;
  knowsAbout: string[];
  sameAs: string[];
}

interface SchemaOrganizationNode {
  "@type": "Organization";
  "@id": string;
  name: string;
  url: string;
  founder: SchemaId;
  sameAs: string[];
}

interface SchemaGraph {
  "@context": "https://schema.org";
  "@graph": [
    SchemaWebSiteNode,
    SchemaProfilePageNode,
    SchemaPersonNode,
    SchemaOrganizationNode,
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
      // ── Node 1: WebSite ────────────────────────────────────────────────────
      {
        "@type": "WebSite",
        "@id": "https://www.bijoylohar.in/#website",
        "url": "https://www.bijoylohar.in/",
        "name": "Bijoy Lohar",
        "publisher": {
          "@id": "https://www.bijoylohar.in/#person",
        },
      },

      // ── Node 2: ProfilePage ───────────────────────────────────────────────
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
        "dateModified": "2026-09-23T05:46:00+05:30",
      },

      // ── Node 3: Person ────────────────────────────────────────────────────
      {
        "@type": "Person",
        "@id": "https://www.bijoylohar.in/#person",
        "name": "Bijoy Lohar",
        "givenName": "Bijoy",
        "familyName": "Lohar",
        "alternateName": ["Arrow Gaming", "Lost Gaming"],
        "gender": "https://schema.org/Male",
        "birthDate": "2005-10-12",
        "jobTitle": "Full-Stack Software Engineer, Creative Developer & Digital Creator",
        "description": "Indian Full-Stack Software Engineer, Creative Developer, and Founder of Shadow Arrow. Also manages Arrow Gaming and Lost Gaming.",
        "url": "https://www.bijoylohar.in/",
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
        "worksFor": {
          "@type": "Organization",
          "@id": "https://shadowarrow.in/#organization",
          "name": "Shadow Arrow",
          "url": "https://shadowarrow.in",
          "sameAs": [
            "https://www.crunchbase.com/organization/shadow-arrow",
          ],
        },
        "knowsAbout": [
          "Software Engineering",
          "Full-Stack Web Development",
          "TypeScript",
          "React",
          "Next.js",
          "Cloud Architecture",
          "API Systems",
        ],
        // Verified sameAs — Canonical URLs
        "sameAs": [
          "https://www.crunchbase.com/person/bijoy-lohar",
          "https://www.linkedin.com/in/bijoy-lohar-5a508832b",
          "https://github.com/loharbijoy2005-a11y",
          "https://github.com/ShadowArrow2005",
          "https://x.com/BijoyLohar2005",
          "https://www.instagram.com/arrowgaming2005",
          "https://www.instagram.com/lost_gaming_2005",
          "https://www.instagram.com/shadowarrow2005",
          "https://www.facebook.com/bijoylohar2005",
          "https://www.facebook.com/share/1C6e2W4cQr/",
        ],
      },

      // ── Node 4: Organization ──────────────────────────────────────────────
      {
        "@type": "Organization",
        "@id": "https://shadowarrow.in/#organization",
        "name": "Shadow Arrow",
        "url": "https://shadowarrow.in",
        "founder": {
          "@id": "https://www.bijoylohar.in/#person",
        },
        "sameAs": [
          "https://www.crunchbase.com/organization/shadow-arrow",
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
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
        {children}
      </body>
    </html>
  );
}

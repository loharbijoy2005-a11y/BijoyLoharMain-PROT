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

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
    creator: "@arrowgaming2005",
  },

  // App / Icon config
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // Verification (add your codes here when you get them from Google/Bing)
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  //   other: { "msvalidate.01": "YOUR_BING_CODE" },
  // },

  // Category
  category: "technology",
};

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ── 1. Person Schema ────────────────────────────────────────────────────────
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    "name": "Bijoy Lohar",
    "alternateName": ["Arrow Gaming", "Lost Gaming"],
    "birthDate": "2005-10-12",
    "gender": "https://schema.org/Male",
    "nationality": {
      "@type": "Country",
      "name": "India",
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dapanjuri, Bishnupur",
      "addressRegion": "West Bengal",
      "addressCountry": "IN",
    },
    "url": `${BASE_URL}/`,
    "image": OG_IMAGE,
    "jobTitle": "Software Engineer & Founder",
    "worksFor": {
      "@type": "Corporation",
      "@id": "https://www.shadowarrow.in/#organization",
      "name": "Shadow Arrow",
      "legalName": "Shadow Arrow",
      "url": "https://www.crunchbase.com/organization/shadow-arrow",
    },
    "sameAs": [
      "https://www.instagram.com/arrowgaming2005/",
      "https://www.instagram.com/lost_gaming_2005",
      "https://github.com/loharbijoy2005-a11y",
      "https://www.facebook.com/share/1C6e2W4cQr/",
      "https://www.linkedin.com/in/bijoy-lohar-5a508832b",
      "https://www.crunchbase.com/person/bijoy-lohar",
      "https://www.shadowarrow.in",
    ],
  };

  // ── 2. WebSite Schema (enables Google Sitelinks Search Box) ────────────────
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "url": `${BASE_URL}/`,
    "name": "Bijoy Lohar — Official Portfolio",
    "description": DESCRIPTION,
    "inLanguage": "en-IN",
    "author": {
      "@id": `${BASE_URL}/#person`,
    },
    "publisher": {
      "@id": `${BASE_URL}/#person`,
    },
    "copyrightYear": 2024,
    "copyrightHolder": {
      "@id": `${BASE_URL}/#person`,
    },
  };

  // ── 3. WebPage Schema (for the homepage) ───────────────────────────────────
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${BASE_URL}/#webpage`,
    "url": `${BASE_URL}/`,
    "name": TITLE,
    "description": DESCRIPTION,
    "inLanguage": "en-IN",
    "isPartOf": {
      "@id": `${BASE_URL}/#website`,
    },
    "about": {
      "@id": `${BASE_URL}/#person`,
    },
    "mainEntity": {
      "@id": `${BASE_URL}/#person`,
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split("T")[0],
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${BASE_URL}/`,
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Preconnects for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD Structured Data — Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* JSON-LD Structured Data — WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* JSON-LD Structured Data — WebPage / ProfilePage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      </head>
      <body className="antialiased bg-studioCanvas text-deepInk selection:bg-deepInk selection:text-white">
        <div className="cursor-spotlight" id="cursorSpotlight" />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

// ─── Site-Wide Constants ──────────────────────────────────────────────────────
const BASE_URL = "https://www.bijoylohar.in";
const OG_IMAGE = "https://github.com/loharbijoy2005-a11y.png";
const TITLE = "Bijoy Lohar | Full-Stack Software Engineer & Founder";
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
    "Shadow Arrow",
    "Software Engineer",
    "Full Stack Developer",
    "Cloud Architect",
    "Next.js Developer",
    "React Developer",
    "Web Developer India",
    "Bishnupur West Bengal",
    "Founder Shadow Arrow",
    "Portfolio Bijoy Lohar",
  ],

  authors: [{ name: "Bijoy Lohar", url: BASE_URL }],
  creator: "Bijoy Lohar",
  publisher: "Bijoy Lohar",

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
  parent?: SchemaPersonRef[];
  sibling?: SchemaPersonRef[];
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
      {
        "@type": "WebSite",
        "@id": "https://www.bijoylohar.in/#website",
        "url": "https://www.bijoylohar.in/",
        "name": "Bijoy Lohar",
        "publisher": {
          "@id": "https://www.bijoylohar.in/#person",
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
        "dateModified": "2026-09-25T21:30:00+05:30",
      },
      {
        "@type": "Person",
        "@id": "https://www.bijoylohar.in/#person",
        "name": "Bijoy Lohar",
        "givenName": "Bijoy",
        "familyName": "Lohar",
        "alternateName": ["Arrow Gaming", "Lost Gaming"],
        "gender": "https://schema.org/Male",
        "birthDate": "2005-10-12",
        "jobTitle": "Full-Stack Software Engineer & Founder",
        "description": "Indian Full-Stack Software Engineer, Founder of Shadow Arrow, specializing in scalable web systems and cloud infrastructure.",
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
        "knowsAbout": [
          "Software Engineering",
          "Full-Stack Web Development",
          "TypeScript",
          "JavaScript",
          "Python",
          "Java",
          "C++",
          "Go (Golang)",
          "React",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB Atlas",
          "Supabase",
          "Cloud Architecture",
          "Cloudflare",
          "Blender 3D",
          "DaVinci Resolve",
          "API Systems",
        ],
        // All canonical identities - Googlebot uses these to auto-verify your entity
        "sameAs": [
          "https://orcid.org/0009-0004-5643-7612",
          "https://www.crunchbase.com/person/bijoy-lohar",
          "https://www.linkedin.com/in/bijoy-lohar-5a508832b",
          "https://github.com/loharbijoy2005-a11y",
          "https://x.com/BijoyLohar2005",
          "https://www.instagram.com/bijoylohar_2005",
          "https://www.facebook.com/Bijoylohar.2005",
          "https://linktr.ee/Bijoylohar",
          "https://youtube.com/@bijoylohar2005",
          "https://about.me/bijoylohar",
          "https://www.pinterest.com/loharbijoy2005",
          "https://www.threads.net/@bijoylohar_2005",
          "https://gitlab.com/loharbijoy2005-a11y",
          "https://medium.com/@Bijoylohar",
          "https://www.imdb.com/name/nm18949942/",
          "https://www.quora.com/profile/Bijoy-Lohar-13?ch=2&oid=3235105824&srid=5G7h2p&target_type=user",
          "https://developers.google.com/profile/u/101253410801307724262",
        ],
      },
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
        {children}
      </body>
    </html>
  );
}

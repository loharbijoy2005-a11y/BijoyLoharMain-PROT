import type { Metadata } from "next";
import { BiographyArticle } from "@/components/BiographyArticle";

export const metadata: Metadata = {
  title: "Biography — Bijoy Lohar",
  description:
    "Official biography of Bijoy Lohar, Indian self-taught software engineer, author, digital creator, and Founder of Shadow Arrow. Born in Bishnupur, Bankura, West Bengal, India on 12 October 2005.",
  alternates: {
    canonical: "https://www.bijoylohar.in/biography",
  },
  openGraph: {
    type: "profile",
    url: "https://www.bijoylohar.in/biography",
    title: "Biography — Bijoy Lohar",
    description:
      "Official biography of Bijoy Lohar, Indian self-taught software engineer, author, digital creator, and founder of Shadow Arrow.",
    images: [{ url: "https://github.com/loharbijoy2005-a11y.png", width: 800, height: 800, alt: "Bijoy Lohar" }],
    firstName: "Bijoy",
    lastName: "Lohar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biography — Bijoy Lohar",
    description:
      "Official biography of Bijoy Lohar, Indian self-taught software engineer, author, and Founder of Shadow Arrow.",
    images: ["https://github.com/loharbijoy2005-a11y.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.bijoylohar.in/biography#person",
      name: "Bijoy Lohar",
      alternateName: ["Bijoy Bhai", "Arrow Dada", "Wb Arrow", "loharbijoy2005-a11y"],
      givenName: "Bijoy",
      familyName: "Lohar",
      gender: "Male",
      birthDate: "2005-10-12",
      birthPlace: {
        "@type": "Place",
        name: "Bishnupur, Bankura district, West Bengal, India",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bishnupur",
          addressRegion: "West Bengal",
          addressCountry: "IN"
        }
      },
      nationality: { "@type": "Country", name: "India" },
      jobTitle: "Software Engineer & Systems Architect",
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Software Engineer",
          description: "Full-stack web systems engineering, client portals, application architectures, and serverless infrastructure."
        },
        {
          "@type": "Occupation",
          name: "Full-Stack Developer",
          description: "Modern frontend and backend engineering utilizing TypeScript, Next.js, Node.js, and SQL."
        },
        {
          "@type": "Occupation",
          name: "Systems Architect",
          description: "Designing low-latency distributed web systems, API orchestration, and resilient cloud architectures."
        },
        {
          "@type": "Occupation",
          name: "Author & Technical Writer",
          description: "Authoring technical documentation, systems design analyses, and literature."
        },
        {
          "@type": "Occupation",
          name: "Semantic Data Architect",
          description: "Nationwide multi-domain civic, geographic, healthcare, judicial, and academic automated Wikidata ingestion engines."
        },
        {
          "@type": "Occupation",
          name: "Tech Entrepreneur",
          description: "Founding and scaling Shadow Arrow, providing high-performance software engineering and digital commerce infrastructure."
        },
        {
          "@type": "Occupation",
          name: "Video Creator & Digital Media Specialist",
          description: "Post-production video engineering, color grading (DaVinci Resolve), and 3D modeling (Blender)."
        }
      ],
      description: "Bijoy Lohar is an Indian self-taught software engineer, systems architect, author, digital video creator, and founder of Shadow Arrow, specialising in full-stack software engineering, distributed systems architecture, autonomous semantic data pipelines, and literature.",
      parent: [
        { "@type": "Person", name: "Binod Lohar" },
        { "@type": "Person", name: "Soma Lohar" }
      ],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Vidyasagar University",
          sameAs: "https://en.wikipedia.org/wiki/Vidyasagar_University"
        },
        {
          "@type": "HighSchool",
          name: "Radhanagar High School"
        },
        {
          "@type": "HighSchool",
          name: "Bishnupur High School"
        }
      ],
      founder: {
        "@type": "Organization",
        name: "Shadow Arrow",
        foundingDate: "2025",
        url: "https://www.shadowarrow.in",
        description: "Bespoke full-stack web engineering, client portals, and e-commerce infrastructure company."
      },
      knowsAbout: [
        "Full-Stack Web Engineering",
        "Systems Architecture",
        "TypeScript",
        "JavaScript",
        "Python",
        "C++",
        "Java",
        "SQL & Relational Databases",
        "REST APIs & Distributed Systems",
        "Automated Knowledge Graphs",
        "Civic Data Ingestion",
        "Wikidata Semantic Systems",
        "Geospatial Data Engineering",
        "Multi-Domain ETL Pipelines",
        "SPARQL & Wikibase APIs",
        "Workflow Automation & Bot Scripting",
        "DaVinci Resolve Color Science",
        "Blender 3D Modeling",
        "E-Commerce Solutions"
      ],
      image: {
        "@type": "ImageObject",
        url: "https://github.com/loharbijoy2005-a11y.png",
        caption: "Official portrait of Bijoy Lohar"
      },
      url: "https://www.bijoylohar.in",
      sameAs: [
        "https://github.com/loharbijoy2005-a11y",
        "https://www.bijoylohar.in",
        "https://www.shadowarrow.in",
        "https://www.imdb.com/name/nm18949942/"
      ]
    }
  ]
};

export default function BiographyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
      />
      <BiographyArticle />
    </>
  );
}

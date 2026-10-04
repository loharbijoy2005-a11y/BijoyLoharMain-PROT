import type { Metadata } from "next";
import { BiographyArticle } from "@/components/BiographyArticle";

export const metadata: Metadata = {
  title: "Bijoy Lohar — Biography & Archival Documentation",
  description:
    "Official biography and archival documentation of Bijoy Lohar, Indian self-taught software engineer, author, digital video creator, and Founder of Shadow Arrow. Born in Bishnupur, Bankura, West Bengal, India on 12 October 2005.",
  alternates: {
    canonical: "https://www.bijoylohar.in/biography",
  },
  openGraph: {
    type: "profile",
    url: "https://www.bijoylohar.in/biography",
    title: "Bijoy Lohar — Biography & Archival Documentation",
    description: "Official biography of Bijoy Lohar, Indian self-taught software engineer, author, video creator, and founder of Shadow Arrow.",
    images: [{ url: "https://github.com/loharbijoy2005-a11y.png", width: 800, height: 800, alt: "Bijoy Lohar" }],
    firstName: "Bijoy",
    lastName: "Lohar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bijoy Lohar — Biography",
    description: "Self-taught Indian software engineer, author, video creator, and Founder of Shadow Arrow.",
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
      jobTitle: "Founder & Lead Systems Architect",
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Software Engineer",
          description: "Full-stack web systems engineering, automation bot design, and serverless infrastructure."
        },
        {
          "@type": "Occupation",
          name: "Author & Technical Writer",
          description: "Authoring engineering documentation, analytical articles, and literature."
        },
        {
          "@type": "Occupation",
          name: "Video Creator & Digital Media Specialist",
          description: "Post-production video engineering, color grading (DaVinci Resolve), and 3D modeling (Blender)."
        },
        {
          "@type": "Occupation",
          name: "Tech Entrepreneur",
          description: "Founding and scaling Shadow Arrow, an e-commerce and full-stack software development venture."
        }
      ],
      description: "Bijoy Lohar is an Indian self-taught software engineer, author, digital video creator, and founder of Shadow Arrow, specialising in full-stack web platforms, automation workflows, literature, and media production.",
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
        "TypeScript",
        "JavaScript",
        "Python",
        "C++",
        "Java",
        "SQL & Relational Databases",
        "REST APIs & Distributed Systems",
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

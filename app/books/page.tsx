import type { Metadata } from "next";
import { BooksPageClient } from "@/components/BooksPageClient";

export const metadata: Metadata = {
  title: {
    absolute: "Published Books & Technical Publications | Bijoy Lohar",
  },
  description:
    "Official books and technical publications authored by Bijoy Lohar. Synchronized live with Goodreads, Open Library, Google Books, and Amazon.",
  alternates: {
    canonical: "https://www.bijoylohar.in/books",
  },
  openGraph: {
    type: "website",
    url: "https://www.bijoylohar.in/books",
    title: "Published Books & Technical Publications | Bijoy Lohar",
    description:
      "Explore books and technical systems guides authored by Bijoy Lohar, synchronized live from Goodreads and Open Library.",
    images: [
      {
        url: "https://www.bijoylohar.in/images/bijoy-lohar.png",
        width: 800,
        height: 800,
        alt: "Bijoy Lohar Author",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Published Books & Technical Publications | Bijoy Lohar",
    description:
      "Official books and technical publications by Bijoy Lohar. Live catalog from Goodreads and Open Library.",
    images: ["https://www.bijoylohar.in/images/bijoy-lohar.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.bijoylohar.in/books#page",
      url: "https://www.bijoylohar.in/books",
      name: "Published Books & Technical Publications by Bijoy Lohar",
      description:
        "Official catalog of published software engineering books, system design manuals, and cloud architecture guides by Bijoy Lohar.",
      about: {
        "@type": "Person",
        "@id": "https://www.bijoylohar.in/#person",
        name: "Bijoy Lohar",
        jobTitle: "Software Engineer & Author",
        url: "https://www.bijoylohar.in",
        sameAs: [
          "https://www.goodreads.com/bijoylohar",
          "https://openlibrary.org/authors/OL16612687A",
          "https://www.amazon.com/author/bijoylohar",
          "https://orcid.org/0009-0004-5643-7612"
        ]
      }
    }
  ]
};

export default function BooksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
      />
      <BooksPageClient />
    </>
  );
}

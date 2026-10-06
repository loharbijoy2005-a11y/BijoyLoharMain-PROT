import type { Metadata } from "next";
import { BooksPageClient } from "@/components/BooksPageClient";

export const metadata: Metadata = {
  title: {
    absolute: "Published Books & Technical Publications | Bijoy Lohar",
  },
  description:
    "Official books and technical publications authored by Bijoy Lohar, Founder of Shadow Arrow and Software Engineer. Explore 'Architecting Scalable Web Systems' (ISBN 978-93-345-2895-4) indexed on Open Library, Google Books, and Amazon.",
  alternates: {
    canonical: "https://www.bijoylohar.in/books",
  },
  openGraph: {
    type: "website",
    url: "https://www.bijoylohar.in/books",
    title: "Published Books & Technical Publications | Bijoy Lohar",
    description:
      "Explore books and technical systems guides authored by Bijoy Lohar, including 'Architecting Scalable Web Systems' (ISBN 978-93-345-2895-4).",
    images: [
      {
        url: "https://covers.openlibrary.org/b/id/15259748-L.jpg",
        width: 800,
        height: 1200,
        alt: "Architecting Scalable Web Systems by Bijoy Lohar",
      },
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
      "Official books and technical publications by Bijoy Lohar. 'Architecting Scalable Web Systems' (ISBN 978-93-345-2895-4).",
    images: ["https://covers.openlibrary.org/b/id/15259748-L.jpg"],
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
          "https://openlibrary.org/authors/OL16612687A",
          "https://www.amazon.com/author/bijoylohar",
          "https://www.goodreads.com/bijoylohar",
          "https://orcid.org/0009-0004-5643-7612"
        ]
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Book",
              "@id": "https://www.bijoylohar.in/books#scalable-web-systems",
              name: "Architecting Scalable Web Systems",
              alternateName: "A Practical Guide to Modern Full Stack Development, APIs, and Cloud Infrastructure",
              author: {
                "@type": "Person",
                name: "Bijoy Lohar",
                url: "https://www.bijoylohar.in"
              },
              isbn: "978-93-345-2895-4",
              bookFormat: "https://schema.org/EBook",
              inLanguage: "English",
              numberOfPages: 280,
              datePublished: "2026-09",
              publisher: {
                "@type": "Organization",
                name: "Bijoy Lohar / Shadow Arrow"
              },
              image: "https://covers.openlibrary.org/b/id/15259748-L.jpg",
              url: "https://openlibrary.org/works/OL46029039W",
              sameAs: [
                "https://openlibrary.org/works/OL46029039W",
                "https://books.google.com/books?vid=ISBN9789334528954",
                "https://www.amazon.com/s?k=9789334528954"
              ],
              description:
                "Architecting Scalable Web Systems is an in-depth technical manual designed for software engineers building resilient web platforms, high-throughput APIs, and distributed cloud applications."
            }
          }
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

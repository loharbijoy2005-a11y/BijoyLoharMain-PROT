import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bijoy Lohar | Creative Developer & Founder of Shadow Arrow",
  description:
    "Official portfolio of Bijoy Lohar, creative systems engineer, gaming streamer, and founder of Shadow Arrow.",
  alternates: {
    canonical: "https://www.bijoylohar.in",
  },
  openGraph: {
    title: "Bijoy Lohar",
    description: "Founder of Shadow Arrow | Creative Systems Developer",
    url: "https://www.bijoylohar.in",
    type: "profile",
    images: ["https://www.bijoylohar.in/bijoy-lohar.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.bijoylohar.in/#person",
    "name": "Bijoy Lohar",
    "alternateName": ["Arrow Gaming", "Lost Gaming"],
    "birthDate": "2005-10-12",
    "gender": "https://schema.org/Male",
    "nationality": {
      "@type": "Country",
      "name": "India"
    },
    "url": "https://www.bijoylohar.in",
    "image": [
      "https://www.bijoylohar.in/gallery/portrait.jpg",
      "https://www.bijoylohar.in/gallery/workspace.jpg",
      "https://www.bijoylohar.in/gallery/gaming.jpg"
    ],
    "jobTitle": "Founder & Systems Architect",
    "worksFor": {
      "@type": "Corporation",
      "@id": "https://www.shadowarrow.in/#organization",
      "name": "Shadow Arrow",
      "legalName": "Shadow Arrow",
      "url": "https://www.shadowarrow.in"
    },
    "sameAs": [
      "https://www.instagram.com/arrow_gaming_2005",
      "https://www.instagram.com/lost_gaming_2005",
      "https://www.facebook.com/share/1C6e2W4cQr/",
      "https://github.com/loharbijoy2005-a11y"
    ]
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>
      <body className="antialiased bg-[#F8FAFC] text-slate-900 selection:bg-slate-900 selection:text-white">
        <div className="cursor-spotlight" id="cursorSpotlight" />
        {children}
      </body>
    </html>
  );
}

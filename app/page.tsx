import { Navbar } from "@/components/Navbar";
import { SystemsPhilosophy } from "@/components/SystemsPhilosophy";
import { ExpeditionEcosystem } from "@/components/ExpeditionEcosystem";
import { CreatorMatrix } from "@/components/CreatorMatrix";
import { AboutMe } from "@/components/AboutMe";
import { BentoGrid } from "@/components/BentoGrid";
import { MomentsMarquee } from "@/components/MomentsMarquee";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { TerminalConsole } from "@/components/TerminalConsole";
import { BooksSection } from "@/components/BooksSection";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-studioCanvas text-deepInk blueprint-grid">
      <div className="grain-overlay" />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Floating Header & Persona Toggle */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Main Hero & Story Banner */}
        <SystemsPhilosophy />

        {/* Knowledge Graph Entity & About Me */}
        <AboutMe />

        {/* The Founder's Ecosystem (Expedition) */}
        <ExpeditionEcosystem />

        {/* Verified Entity & Creator Footprint */}
        <CreatorMatrix />

        {/* Golden Interactive CLI Terminal */}
        <TerminalConsole />

        {/* Published Books & Auto-Sync System */}
        <BooksSection />

        {/* Flagship Ventures & Bento Grid */}
        <BentoGrid />

        {/* Kinetic Lifestyle Marquee */}
        <MomentsMarquee />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Direct Comms & Footer */}
      <Footer />

      {/* Back to Top Floating Button */}
      <BackToTop />
    </div>
  );
}

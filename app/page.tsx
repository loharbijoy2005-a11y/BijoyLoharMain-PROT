import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ExpeditionEcosystem } from "@/components/ExpeditionEcosystem";
import { CreatorMatrix } from "@/components/CreatorMatrix";
import { MomentsMarquee } from "@/components/MomentsMarquee";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-studioCanvas text-deepInk blueprint-grid">
      <div className="grain-overlay" />
      
      {/* Floating Header & Persona Toggle */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero: The Identity Radar */}
        <Hero />

        {/* The Founder's Ecosystem (Expedition) */}
        <ExpeditionEcosystem />

        {/* Creator Matrix */}
        <CreatorMatrix />

        {/* Kinetic Lifestyle Marquee */}
        <MomentsMarquee />
      </main>

      {/* Direct Comms & Footer */}
      <Footer />
    </div>
  );
}

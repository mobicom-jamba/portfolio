// app/page.tsx
"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import SpaceTechShowcase from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScrolling from "@/components/SmoothScrolling";
import StarTunnelEffect from "@/components/SpaceEntranceEffect";

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleEntranceComplete = () => {
    setShowMainContent(true);
  };

  return (
    <SmoothScrolling>
      <StarTunnelEffect onComplete={handleEntranceComplete}>
        {showMainContent && (
          <main className="min-h-screen bg-black text-white overflow-x-hidden">
            <CustomCursor />
            <ParticleBackground />
            <ScrollProgress />

            <Header />
            <Hero />
            <SpaceTechShowcase />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </main>
        )}
      </StarTunnelEffect>
    </SmoothScrolling>
  );
}

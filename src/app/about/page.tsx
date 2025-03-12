import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import TeamSection from "./components/TeamSection";
import {LayoutGridDemo} from "./components/LayoutGridDemo";

export default function AboutPage() {
    return (
    <main>
    <div>
      
      <HeroSection />
          <About />
          <LayoutGridDemo/>
          <TeamSection />

    </div>
    </main>
  );
}

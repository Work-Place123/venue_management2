import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import TeamSection from "./components/TeamSection";
import {LayoutGridDemo} from "./components/LayoutGridDemo";
import BookingSection from "./components/BookingSection";
import { NavbarDemo } from "../(home)/components/NavbarDemo";
import { FlipWordsDemo } from "../(home)/components/FlipWordsDemo";

export default function AboutPage() {
    return (
    <main>
    <div>
      <NavbarDemo/>
      <HeroSection />
          <About />
          <LayoutGridDemo/>
          <TeamSection />
          <BookingSection />
          <FlipWordsDemo/>

    </div>
    </main>
  );
}

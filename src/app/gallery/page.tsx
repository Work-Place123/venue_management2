import React from "react";
// import HeroSection from "./components/HeroSection";
import HeroSection from "./components/HeroSection";
import { NavbarDemo } from "../(home)/components/NavbarDemo";
import { FlipWordsDemo } from "../(home)/components/FlipWordsDemo";
import { FocusCardsDemo } from "./components/FocusCardsDemo";


export default function ContactPage() {
    return (
    <main>
     <div>
    
    
    <NavbarDemo />        
    <HeroSection />
    <FocusCardsDemo/>
    <FlipWordsDemo />

         

    </div>
    </main>
  );
}

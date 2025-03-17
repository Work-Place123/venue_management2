import React from "react";
import HeroSection from "./components/HeroSection";
import { NavbarDemo } from "../(home)/components/NavbarDemo";
import { FlipWordsDemo } from "../(home)/components/FlipWordsDemo";
import FeatureCards from "./components/FeatureCards";
import FacilitiesSection from "./components/FacilitiesSection";
import ValueSection from "./components/ValueSection";
import AvailableOnRequest from "./components/AvailableOnRequest";

export default function ContactPage() {
    return (
    <main>
     <div>
    
    
    <NavbarDemo />        
                <HeroSection />
                <FeatureCards />
                <FacilitiesSection />
          <ValueSection />
          <AvailableOnRequest/>
    <FlipWordsDemo />

         

    </div>
    </main>
  );
}

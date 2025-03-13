import React from "react";
import HeroSection from "./components/HeroSection";
import { NavbarDemo } from "../(home)/components/NavbarDemo";
import { FlipWordsDemo } from "../(home)/components/FlipWordsDemo";
import { SignupFormDemo } from "./components/SignupFormDemo";
import ContactSection from "./components/ContactSection";

export default function ContactPage() {
    return (
    <main>
     <div>
    
    
    <NavbarDemo />        
    <HeroSection />
    <SignupFormDemo />
    <ContactSection/>
    <FlipWordsDemo />

         

    </div>
    </main>
  );
}

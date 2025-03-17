import React from "react";
import HeroSection from "./components/HeroSection";
import { NavbarDemo } from "../(home)/components/NavbarDemo";
import { FlipWordsDemo } from "../(home)/components/FlipWordsDemo";
import ReservationPage from "./components/ReservationPage";

export default function ContactPage() {
    return (
    <main>
     <div>
    
    
    <NavbarDemo />        
                <HeroSection />
                <ReservationPage/>
    <FlipWordsDemo />

         

    </div>
    </main>
  );
}

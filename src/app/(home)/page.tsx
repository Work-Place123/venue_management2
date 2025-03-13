import { main } from "motion/react-client";
import Image from "next/image";
import { ImagesSliderDemo } from "./components/ImagesSliderDemo";
import { AppleCardsCarouselDemo } from "./components/AppleCardsCarouselDemo";
import { FocusCardsDemo } from "./components/FocusCardsDemo";
import { LayoutGridDemo} from "./components/LayoutGridDemo";
//import Footer from "./components/Footer";
import { NavbarDemo } from "./components/NavbarDemo";
import {FlipWordsDemo} from "./components/FlipWordsDemo";
import BookingSection from "../about/components/BookingSection";
  
export default function Home() {
  return (
    <main>
      <div>
        <NavbarDemo/>
        <ImagesSliderDemo />
        <LayoutGridDemo/>
        <AppleCardsCarouselDemo />
        <FocusCardsDemo />
        <BookingSection/>
        <FlipWordsDemo/>
        {/* <Footer /> */}

      </div>
    </main>

  );
}

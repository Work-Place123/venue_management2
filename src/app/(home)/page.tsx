import { main } from "motion/react-client";
import Image from "next/image";
import { ImagesSliderDemo } from "./components/ImagesSliderDemo";
import { AppleCardsCarouselDemo } from "./components/AppleCardsCarouselDemo";
import { FocusCardsDemo } from "./components/FocusCardsDemo";
import { LayoutGridDemo} from "./components/LayoutGridDemo";
//import Footer from "./components/Footer";
import { NavbarDemo } from "./components/NavbarDemo";
import {FlipWordsDemo} from "./components/FlipWordsDemo";
  
export default function Home() {
  return (
    <main>
      <div>
        <NavbarDemo/>
        <ImagesSliderDemo />
        <LayoutGridDemo/>
        <AppleCardsCarouselDemo />
        <FocusCardsDemo />
        <FlipWordsDemo/>
        {/* <Footer /> */}

      </div>
    </main>

  );
}

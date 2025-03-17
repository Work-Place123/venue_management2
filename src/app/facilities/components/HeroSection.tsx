import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center mb-20"
      style={{ backgroundImage: "url('/images/image2.jpg')" }} // Replace with your image path
    >
      {/* Dark Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold uppercase">Events</h1>
        <p className="text-lg md:text-xl italic mt-2">
          We Offer Our Sumptuous Banquets For Dreamy Celebrations
        </p>

        {/* Breadcrumb Navigation */}
        <nav className="mt-4">
          <ul className="flex space-x-2 text-sm md:text-base">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li>/</li>
            <li className="text-gray-300">Events</li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;

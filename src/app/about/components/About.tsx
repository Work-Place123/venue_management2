import React from "react";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-white">
      {/* Left Content */}
      <div className="md:w-1/2">
        <p className="text-lg italic text-[#B8860B]">
          Make every moment memorable with us!
        </p>
        <h1 className="text-4xl md:text-5xl font-serif italic font-semibold text-black mt-2">
          Where Vibrant <br />
          Celebrations And <br />
          Gatherings Come To Life
        </h1>
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 text-gray-600 mt-6 md:mt-0">
        <p className="leading-relaxed">
          We take great pride in delivering an exceptional experience to our
          clients, combining outstanding services, delectable cuisine, and
          top-notch venues, all at remarkable prices. Our culinary team crafts
          delectable menus that cater to a variety of tastes and dietary
          preferences.
        </p>
        <p className="mt-4 leading-relaxed">
          Our venues are versatile and adaptable to your unique vision, whether
          you’re planning a wedding, a corporate event, or any other special
          occasion. We believe that memorable moments shouldn’t come with a
          hefty price tag, making top-tier event hosting accessible to all. Aura
          Grande is where your dreams take center stage, and we’re here to help
          you create unforgettable memories.
        </p>
      </div>
    </section>
  );
};

export default About;

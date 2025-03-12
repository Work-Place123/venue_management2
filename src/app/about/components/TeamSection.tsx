"use client"; // Important for Swiper.js in Next.js

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const teamMembers = [
  { name: "Nauman Bashir", position: "CEO", image: "/images/CEO1.jpg" },
  { name: "Salman Bashir", position: "Director Operations", image: "/images/CEO2.jpg" },
  { name: "Ashfaq Ahmad", position: "Director Relation", image: "/images/CEO3.jpg" },
  { name: "Ahsan Ali", position: "Event Manager", image: "/images/CEO1.jpg" },
  { name: "Zain Malik", position: "Marketing Head", image: "/images/CEO3.jpg" },
  { name: "Hassan Raza", position: "Finance Manager", image: "/images/CEO2.jpg" },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      {/* Section Heading */}
      <h2 className="text-4xl font-serif font-semibold text-black uppercase">
        Our Team
      </h2>
      <p className="text-[#B8860B] italic mt-2">
        Meet the professional team of Venue
      </p>

      {/* Swiper Slider */}
      <div className="mt-10 px-6 md:px-20">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Moves pagination outside Swiper
          }}
          modules={[Autoplay, Pagination]}
          className="w-full pb-12" // Add padding to push pagination down
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center group">
                {/* Image Container */}
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-[6px] border-gray-300 shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Position */}
                <div className="mt-4 bg-white bg-opacity-80 backdrop-blur-md shadow-lg border px-6 py-3 rounded-xl">
                  <h3 className="text-lg font-bold text-[#B8860B] uppercase">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots Below */}
        <div className="custom-pagination mt-6"></div>
      </div>
    </section>
  );
};

export default TeamSection;

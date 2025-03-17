"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  { imgSrc: "/images/image1.jpg", title: "EXPERT EVENT PLANNERS" },
  { imgSrc: "/images/image2.jpg", title: "CHOICE OF CUSTOMIZED VENUES" },
  { imgSrc: "/images/image3.jpg", title: "HUGE PARKING CAPACITY FOR MINIMUM 3000 VEHICLES" },
  { imgSrc: "/images/image1.jpg", title: "CENTRALLY AIR-CONDITIONED AND CLIMATE CONTROLLED ENVIRONMENT" },
  { imgSrc: "/images/image2.jpg", title: "WEATHER PROOF VENUES" },
  { imgSrc: "/images/image3.jpg", title: "100% SELF POWER GENERATOR" },
];

const FeatureCards = () => {
  return (
    <div className="w-[90%] mb-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg">
          {/* Background Image */}
          <Image
            src={feature.imgSrc}
            alt={feature.title}
            width={400}
            height={250}
            className="rounded-lg w-full h-auto object-cover transition-all duration-300 group-hover:scale-105"
          />

          {/* Full image blur effect on hover */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:blur-sm"
          ></motion.div>

          {/* Heading at the Bottom Initially */}
          <motion.div
            className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white py-2 px-4 text-center transition-all duration-300"
            initial={{ opacity: 1 }}
            whileHover={{
              opacity: 0, // Heading completely disappears on hover
            }}
            transition={{ duration: 0.3 }}
          >
            {feature.title}
          </motion.div>

          {/* No heading in the center on hover */}
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;

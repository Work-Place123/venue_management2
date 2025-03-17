"use client";
import React from "react";
import { 
  FaUtensils, FaEye, FaGlassMartini, FaLock, FaUsers, 
  FaCloudSun, FaTint, FaCameraRetro, FaWind, FaBolt, 
  FaThLarge, FaLeaf, FaToilet, FaUserTie 
} from "react-icons/fa";

const values = [
  { icon: <FaUtensils />, title: "Premium Quality Imported Table-Ware" },
  { icon: <FaEye />, title: "State of the Art Interior Design" },
  { icon: <FaGlassMartini />, title: "Customizable Interior Décor" },
  { icon: <FaLock />, title: "Secured & Central Location" },
  { icon: <FaUsers />, title: "Experienced, Trained, and Courteous Managers and Staff" },
  { icon: <FaCloudSun />, title: "Weather-Proof Marquee" },
  { icon: <FaTint />, title: "Air-Conditioned Bridal & Groom Room" },
  { icon: <FaCameraRetro />, title: "Studio for Photography Available" },
  { icon: <FaWind />, title: "Air-Conditioned, Climate Controlled Environment" },
  { icon: <FaBolt />, title: "100% Self Power Generation" },
  { icon: <FaThLarge />, title: "Fully Marbled Lobby" },
  { icon: <FaLeaf />, title: "Imported Flower Arrangements" },
  { icon: <FaToilet />, title: "Luxury Bathrooms" },
  { icon: <FaUserTie />, title: "Expert Event Planners with Over a Decade of Event Planning Experience" },
];

const ValueSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold uppercase mb-12 text-gray-900">
        Giving You More Value for Money
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-16 lg:px-32">
        {values.map((item, index) => (
          <div
            key={index}
            className="p-8 border border-gray-300 rounded-lg flex flex-col items-center text-gray-700 
                       shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-500 transition-all"
          >
            <div className="text-4xl text-yellow-600 mb-4">{item.icon}</div>
            <h3 className="text-md font-semibold text-center">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueSection;

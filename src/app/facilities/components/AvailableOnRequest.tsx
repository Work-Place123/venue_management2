"use client";
import React from "react";
import { 
  FaWifi, FaBuilding, FaVideo, 
  FaHome, FaCheckSquare, FaFemale 
} from "react-icons/fa";

const services = [
  { icon: <FaWifi />, title: "Wi-Fi Connectivity" },
  { icon: <FaBuilding />, title: "Business Center Facility" },
  { icon: <FaVideo />, title: "Video Conference" },
  { icon: <FaHome />, title: "Gazebo and Other Stylish Arrangements" },
  { icon: <FaCheckSquare />, title: "Event Planning" },
  { icon: <FaFemale />, title: "Female Hostesses" },
];

const AvailableOnRequest = () => {
  return (
    <section className="py-16 bg-white text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold uppercase mb-12 text-gray-900">
        Available on Request
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-16 lg:px-32">
        {services.map((item, index) => (
          <div
            key={index}
            className="p-10 border border-gray-300 rounded-lg flex flex-col items-center text-gray-700 
                       shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-500 transition-all"
          >
            <div className="text-4xl text-yellow-600 mb-4">{item.icon}</div>
            <h3 className="text-md font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* Get in Touch Button */}
      <div className="mt-10">
        <button className="px-6 py-3 border-2 border-yellow-500 text-yellow-600 font-semibold rounded-full 
                           hover:bg-yellow-500 hover:text-white transition-all shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-gray-500">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default AvailableOnRequest;

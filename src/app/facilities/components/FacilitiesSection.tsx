"use client";
import React from "react";
import { FaConciergeBell, FaUserTie, FaSeedling, FaUtensils, FaDoorOpen, FaTheaterMasks, FaRoad, FaCar } from "react-icons/fa";

const facilities = [
  { icon: <FaConciergeBell />, title: "Butler Service" },
  { icon: <FaUserTie />, title: "Experienced, Trained and Courteous Staff" },
  { icon: <FaSeedling />, title: "Basic Floral Arrangement" },
  { icon: <FaUtensils />, title: "Dedicated Bar-B-Que Area" },
  { icon: <FaDoorOpen />, title: "Gazebo and Other Stylish Arrangements" },
  { icon: <FaTheaterMasks />, title: "Main Stage Decoration" },
  { icon: <FaRoad />, title: "Walkway Decoration" },
  { icon: <FaCar />, title: "Valet Car Parking" },
];

const FacilitiesSection = () => {
  return (
    <section
      className="relative text-white py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/image1.jpg')" }} // Change to your actual image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-20 lg:px-32 text-center">
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-12">
          Complimentary Standard Facilities
        </h2>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="border border-white p-12 flex flex-col items-center rounded-xl hover:bg-white hover:text-black transition"
            >
              <div className="text-6xl text-yellow-600 mb-6">{facility.icon}</div>
              <h3 className="text-lg font-semibold">{facility.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;

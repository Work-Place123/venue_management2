"use client";

import { useRouter } from "next/navigation"; // Next.js Router Import
import { useState } from "react";
import Link from "next/link"; // Next.js Link Import

const WeddingPackage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookingClick = () => {
    const queryParams = new URLSearchParams({
      step: "4", // Direct to Payment Information step
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      date: formData.date,
    }).toString();
    
    router.push(`/customplanner?${queryParams}`);
  };

  return (
    <div className="flex justify-center items-start gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Left Section */}
      <div className="w-2/3 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4 flex justify-between border-b">
          <h2 className="text-lg font-bold">Gold Package Wedding</h2>
          <span className="text-lg font-bold text-gray-700">Price: $39,500.00</span>
        </div>
        <img
          src="/images/image1.jpg"
          alt="Wedding Setup"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="bg-red-500 text-white p-2 text-lg font-bold">FUNCTIONS AND SERVICES</h3>
          <ul className="space-y-3 mt-2">
            {["Appetizers and Meal Service", "Hair And Make Up", "Wedding Cake", "Photographer", "Bar Service", "Reception Decor", "DJ & MC Services", "Centerpieces"].map((service, index) => (
              <li key={index} className="flex items-center border-b py-2">
                <span className="text-green-500 font-bold text-xl">✓</span>
                <span className="ml-3 text-gray-700 font-medium">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Section - Booking Form */}
      <div className="w-1/3 bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">Wedding Planning Starts Here</h3>
        <form className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="yourname@email.com"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={handleBookingClick}
            className="w-full bg-green-500 text-white py-2 rounded mt-2 hover:bg-green-600"
          >
            BOOK NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default WeddingPackage;
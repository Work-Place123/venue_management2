"use client";
import React, { useState } from "react";

const Reservation = () => {
  const [guests, setGuests] = useState("");
  const [eventDate, setEventDate] = useState("");

  return (
    <section className="relative min-h-screen bg-cover bg-center text-white px-6 py-12"
      style={{ backgroundImage: "url('/your-background-image.jpg')" }}>
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center">RESERVATION</h2>
      <p className="text-center text-gray-300 italic">Book your event</p>

      {/* Navigation Tabs */}
      <div className="flex justify-center mt-6">
        <div className="grid grid-cols-5 gap-2">
          {["Overview", "Banquet", "Value Added Services", "Contact Information", "Payment Information", "Booking"].map((tab, index) => (
            <button key={index} className={`px-4 py-2 rounded-md font-semibold 
                      ${index === 2 ? "bg-yellow-500 text-black" : "bg-gray-600 text-white"}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Reservation Form */}
      <div className="flex justify-center mt-10">
        <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg w-full max-w-2xl">
          <div className="flex flex-col md:flex-row gap-4">
            {/* No. of Guests */}
            <div className="flex-1">
              <label className="block text-sm font-semibold">No. of Guest</label>
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full p-3 rounded-md bg-white bg-opacity-30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
                placeholder="Enter no. of guests"
              />
            </div>

            {/* Event Date */}
            <div className="flex-1">
              <label className="block text-sm font-semibold">Event Date</label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full p-3 rounded-md bg-white bg-opacity-30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
              />
            </div>
          </div>

          {/* Next Button */}
          <div className="mt-6 text-center">
            <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md 
                               hover:bg-yellow-600 transition-all">
              NEXT
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Summary */}
      <div className="absolute top-20 right-6 bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg w-72">
        <h3 className="text-lg font-bold">Total Guest</h3>
        <p className="text-sm">Venue Rent Charges: <span className="font-semibold">0</span></p>
        <p className="text-sm">Per Head Decor Charges: <span className="font-semibold">0</span></p>
        <p className="text-sm">Pantry Charges: <span className="font-semibold">0</span></p>

        <h3 className="mt-4 font-bold text-lg">Value Added Services</h3>
        <ul className="text-sm list-disc pl-5">
          {["Valet Service", "Security Guards", "Traffic Warden", "100% Self Power Generator", "Premium Quality Imported Table-Ware", "DJ with Sound"].map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>

        <h3 className="mt-4 font-bold text-lg">Grand Total: <span className="text-yellow-400">172500</span></h3>
      </div>
    </section>
  );
};

export default Reservation;

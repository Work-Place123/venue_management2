"use client";
import Image from "next/image";
import { useState } from "react";

const PackageDetail = ({ packageData = { title: "", price: "", src: "" } }) => {
  console.log("Package Data in PackageDetail:", packageData);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
  });

  const handleChange = (e) => {
    if (!e || !e.target) {
      console.error("Event object is missing:", e);
      return;
    }
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Left Side: Package Details */}
      <div>
        <h2 className="text-2xl font-bold">{packageData.title || "No Title"}</h2>
        <span className="text-xl font-bold text-gray-700">
          Price: {packageData.price || "Not Available"}
        </span>

        {/* Image */}
        <Image
          src={packageData.src || "/fallback-image.jpg"}
          alt="Package Image"
          width={600}
          height={400}
          className="w-full h-64 object-cover rounded-lg mt-4"
        />

        {/* Services */}
        <h3 className="bg-red-500 text-white p-2 text-lg font-bold mt-4">
          FUNCTIONS AND SERVICES
        </h3>
        <ul className="space-y-3 mt-2">
          {[
            "Appetizers and Meal Service",
            "Hair And Make Up",
            "Wedding Cake",
            "Photographer",
            "Bar Service",
            "Reception Decor",
            "DJ & MC Services",
            "Centerpieces",
          ].map((service, index) => (
            <li key={index} className="flex items-center border-b py-2">
              <span className="text-green-500 font-bold text-xl">✓</span>
              <span className="ml-3 text-gray-700 font-medium">{service}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: Booking Form */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-4">Wedding Planning Starts Here</h3>
        <form className="space-y-4">
          <input type="text" name="firstName" placeholder="First name" className="w-full p-2 border rounded" onChange={(e) => handleChange(e)} />
          <input type="text" name="lastName" placeholder="Last name" className="w-full p-2 border rounded" onChange={(e) => handleChange(e)} />
          <input type="text" name="phone" placeholder="Phone number" className="w-full p-2 border rounded" onChange={(e) => handleChange(e)} />
          <input type="email" name="email" placeholder="yourname@email.com" className="w-full p-2 border rounded" onChange={(e) => handleChange(e)} />
          <input type="date" name="date" className="w-full p-2 border rounded" onChange={(e) => handleChange(e)} />
          <button type="button" className="w-full bg-green-500 text-white py-2 rounded mt-2 hover:bg-green-600">
            BOOK NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default PackageDetail;

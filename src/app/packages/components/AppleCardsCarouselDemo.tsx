"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";
import Modal from "@/app/(home)/components/Modal";
import PackageDetail from "@/app/(home)/components/PackageDetail";

// ✅ Data ko component ke bahar define kiya
const data = [
  { category: "Wedding", title: "Luxury Wedding Package", src: "/images/image2.jpg", price: "$39,500.00" },
  { category: "Wedding", title: "Budget Wedding Plan", src: "/images/image3.jpg", price: "$19,000.00" },
  { category: "Birthday", title: "Kids Birthday Party", src: "/images/image1.jpg", price: "$5,000.00" },
  { category: "Birthday", title: "Elegant Birthday Bash", src: "/images/image2.jpg", price: "$8,500.00" },
  { category: "Engagement", title: "Romantic Engagement Setup", src: "/images/image1.jpg", price: "$12,000.00" },
  { category: "Ceremony", title: "Exclusive Ceremony Package", src: "/images/image3.jpg", price: "$15,000.00" },
];

const categories = ["All", "Wedding", "Birthday", "Engagement", "Ceremony"];

export function AppleCardsCarouselDemo() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPackage, setSelectedPackage] = useState(null);

  // ✅ Open Modal Function
  const openModal = (packageData) => {
    if (!packageData) {
      console.error("🚨 openModal called with undefined packageData");
      return;
    }
    console.log("✅ Opening Modal with:", packageData);
    setSelectedPackage(packageData);
  };

  // ✅ Close Modal Function
  const closeModal = () => {
    setSelectedPackage(null);
  };

  // ✅ Filtered Cards (Check karta hai data empty toh nahi)
  const filteredCards = data.filter(
    (card) => selectedCategory === "All" || card.category === selectedCategory
  );

  return (
    <div className="w-full h-full py-20">
      <h2 className="text-center md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Our Featured Packages
      </h2>

      {/* ✅ Navigation Tabs */}
      <div className="flex justify-center space-x-4 mt-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              selectedCategory === category
                ? "bg-gold text-black"
                : "bg-gray-300 text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ✅ Carousel with Filtered Data */}
      {filteredCards.length > 0 ? (
        <Carousel
          items={filteredCards.map((card, index) => (
            <div key={card.src} onClick={() => openModal(card)}>
              {card ? <Card card={card} index={index} /> : <p>Loading...</p>}
            </div>
          ))}
        />
      ) : (
        <p className="text-center text-gray-500 mt-6">No packages available.</p>
      )}

      {/* ✅ Modal Component */}
      {selectedPackage && (
        <Modal onClose={closeModal}>
          <PackageDetail packageData={selectedPackage} />
        </Modal>
      )}
    </div>
  );
}

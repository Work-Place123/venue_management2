"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

// Card component
export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    setSelectedImage, // Pass function to set clicked image
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>; // Function to set clicked image
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => setSelectedImage(card.src)} // Set the image source on click
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

// FocusCards component
export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Track the clicked image

  // Function to close the image modal
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto md:px-8 w-full">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            setSelectedImage={setSelectedImage} // Pass setter function to Card
          />
        ))}
      </div>

      {/* Modal to show the selected image with background blur */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={closeModal} // Close the modal when clicking outside
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={800} // Set the image size
              height={800}
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal} // Close the modal when clicking on the close button
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

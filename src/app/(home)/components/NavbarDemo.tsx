"use client";
import React, { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react"; // Icons for mobile menu
import { HoveredLink, Menu, MenuItem } from "@/app/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle

  return (
    <div className={cn("fixed top-6 inset-x-0 max-w-4xl mx-auto  z-50 bg-black/50 backdrop-blur-md px-4 md:px-8 py-3 rounded-lg shadow-lg", className)}>
      <div className="flex items-center justify-between">
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="px-2 py-4 text-white hover:text-gray-500">Home</a>
          <a href="/about" className="px-2 py-4 text-white hover:text-gray-500">About Us</a>
          <a href="/facilities" className="px-2 py-4 text-white hover:text-gray-500">Facilities</a>
          <a href="/gallery" className="px-2 py-4 text-white hover:text-gray-500">Gallery</a>
          <a href="/packages" className="px-2 py-4 text-white hover:text-gray-500">Packages</a>
          <a href="/contact" className="px-2 py-4 text-white hover:text-gray-500">Contact Us</a>
        </div>

        {/* Buttons Section (Desktop) */}
        <div className="hidden md:flex gap-2">
          <a href="/customplanner" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">Custom Planner</a>
          <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Login</a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-md p-4 rounded-lg shadow-lg transition-all ${isOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col space-y-3">
          <a href="/" className="px-3 py-2 text-white hover:text-gray-500">Home</a>
          <a href="/about" className="px-3 py-2 text-white hover:text-gray-500">About Us</a>
          <a href="/facilities" className="px-3 py-2 text-white hover:text-gray-500">Facilities</a>
          <a href="/gallery" className="px-3 py-2 text-white hover:text-gray-500">Gallery</a>
          <a href="/packages" className="px-3 py-2 text-white hover:text-gray-500">Packages</a>
          <a href="/contact" className="px-3 py-2 text-white hover:text-gray-500">Contact Us</a>

          {/* Buttons Section (Mobile) */}
          <div className="flex flex-col gap-2 mt-4">
            <a href="/customplanner" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">Custom Planner</a>
            <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

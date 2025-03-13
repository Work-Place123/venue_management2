"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/app/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>

        {/* Home */}
        <MenuItem setActive={setActive} active={active} item="Home">
          <HoveredLink href="/(home)">Home</HoveredLink>
        </MenuItem>

        {/* About Us */}
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">Our Story</HoveredLink>
            <HoveredLink href="/team">Meet the Team</HoveredLink>
            <HoveredLink href="/mission">Our Mission</HoveredLink>
          </div>
        </MenuItem>

        {/* Services */}
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>

        {/* Booking */}
        <MenuItem setActive={setActive} active={active} item="Booking">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/appointment">Book an Appointment</HoveredLink>
            <HoveredLink href="/pricing">View Pricing</HoveredLink>
          </div>
        </MenuItem>

        {/* Contact Us */}
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Get in Touch</HoveredLink>
            <HoveredLink href="/support">Support</HoveredLink>
          </div>
        </MenuItem>

        {/* Login Button */}
        <div className="ml-4">
          <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Login
          </a>
        </div>

      </Menu>
    </div>
  );
}

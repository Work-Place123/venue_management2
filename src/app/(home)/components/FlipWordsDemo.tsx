import React from "react";
import { FlipWords } from "@/app/components/ui/flip-words";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export function FlipWordsDemo() {
  const words = ["better", "energetic", "beautiful", "modern"];

  return (
    <div className="h-auto flex pt-20 mt-20 pb-10 flex-col justify-center items-center px-4 py-8 bg-black">
      <div className="text-2xl mx-auto font-normal text-white dark:text-neutral-400 text-center">
        Ready to light up the night{" "}
        <FlipWords words={words} className="text-slate-500" /> <br />
        Follow us on social media and never miss a beat!
      </div>

      {/* Social media icons */}
      <div className="mt-6 flex space-x-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white dark:text-neutral-400 hover:text-blue-500"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white dark:text-neutral-400 hover:text-pink-500"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white dark:text-neutral-400 hover:text-blue-400"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white dark:text-neutral-400 hover:text-red-500"
        >
          <FaYoutube size={24} />
        </a>
      </div>

      {/* Line and All rights reserved text */}
      <hr className="mt-20 w-full border-gray-600" />
      <p className="mt-4 text-sm text-neutral-400 text-center">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
    </div>
  );
}

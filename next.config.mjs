/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com", // Allow Unsplash images
      "assets.aceternity.com", // Allow Aceternity images
    ],
  },
};

export default nextConfig;

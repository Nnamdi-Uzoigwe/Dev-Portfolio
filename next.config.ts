// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // allow all paths from Cloudinary
      },
    ],
    // if on older Next version:
    // domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;

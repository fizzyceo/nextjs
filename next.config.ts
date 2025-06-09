import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "img.redbull.com",
      },
    ],
  },
};

export default nextConfig;

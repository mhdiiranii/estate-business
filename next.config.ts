import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // همه‌ی دامنه‌ها
      },
      {
        protocol: "http",
        hostname: "**", // اگه http هم بخوای
      },
    ],
  },
};

export default nextConfig;

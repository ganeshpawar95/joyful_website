import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "0.0.0.0",
        port: "8000",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;

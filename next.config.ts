import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "18.60.221.64",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;

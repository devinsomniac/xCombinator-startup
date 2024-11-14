import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable strict mode
  images: {
    domains: ['e7.pngegg.com', 't3.ftcdn.net',"w0.peakpx.com","img.freepik.com"],
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL, 
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in the home directory otherwise confuses root detection.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;

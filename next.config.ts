import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/Portfolio",
  images: { unoptimized: true },
};

export default nextConfig;

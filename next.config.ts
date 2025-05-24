import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nextjs-github-pages",
  distDir: "docs",
  images: { unoptimized: true },
  
};
export default nextConfig;
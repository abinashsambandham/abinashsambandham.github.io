import type { NextConfig } from "next";

// Static export so the site can be hosted on GitHub Pages.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

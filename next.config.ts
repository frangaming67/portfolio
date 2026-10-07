import type { NextConfig } from "next";

// Fully static site: `next build` writes plain HTML/CSS/JS to `out/`,
// deployable to Vercel, GitHub Pages or any static host.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

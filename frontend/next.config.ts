import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    // This rule prevents issues with pdf.js and canvas
    config.externals = [...(config.externals || []), { canvas: "canvas" }];
    
    // Ensure node native modules are ignored
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
    };
    
    return config;
  },
};

export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"], 
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disables ESLint during builds
  },
};

export default nextConfig;

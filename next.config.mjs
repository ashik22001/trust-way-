// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false, // 🔧 Fix LightningCSS build error on Vercel
  },
  images: {
    unoptimized: true, // 🔧 Disable sharp (image optimization) so it builds on Vercel
  },
};

export default nextConfig;


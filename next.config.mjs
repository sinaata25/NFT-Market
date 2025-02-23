/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['ipfs.io'],  // Allow images from ipfs.io
    },
    eslint:{
      ignoreDuringBuilds:true,
    },
  };
  
  export default nextConfig;
  
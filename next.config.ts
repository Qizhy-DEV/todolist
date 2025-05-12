import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  appDir: 'src/pages',
  images: {
    domains: ['cdn3d.iconscout.com', 'res.cloudinary.com'],
  },
};

export default nextConfig;

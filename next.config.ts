import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  // distDir: 'out',
  assetPrefix: isProd ? '/ShotGunChamber/' : '',
  basePath: isProd ? '/ShotGunChamber' : ''
  // basePath: '/ShotGunChamber',
  // assetPrefix: '/ShotGunChamber/'
};

export default nextConfig;

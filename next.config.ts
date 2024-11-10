import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/ShotGunChamber',
  assetPrefix: '/ShotGunChamber/'
};

export default nextConfig;

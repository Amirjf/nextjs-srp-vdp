/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: { styledComponents: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: [
      'mbspokane.datgate.com',
      'vehicle-photos-published.vauto.com',
      'mbmarin.datgate.com',
      's3.amazonaws.com',
      'salemnissan.datgate.com',
      'partnerstatic.carfax.com',
    ],
  },
};

module.exports = nextConfig;

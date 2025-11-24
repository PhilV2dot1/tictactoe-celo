/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Self-hosted Farcaster manifest at public/.well-known/farcaster.json
};

module.exports = nextConfig;

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
  async redirects() {
    return [
      {
        source: '/.well-known/farcaster.json',
        destination: 'https://api.farcaster.xyz/miniapps/hosted-manifest/019ab36d-c3e6-e0db-cf30-f84f58ebcf5a',
        permanent: false,
        statusCode: 307,
      },
    ];
  },
};

module.exports = nextConfig;

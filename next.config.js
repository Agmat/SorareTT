/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.sorare.com', 'sorare.com'],
  },
  rewrites: () => {
    return [
      {
        source: '/graphql',
        destination: 'https://api.sorare.com/',
      },
    ];
  },
};

module.exports = nextConfig;

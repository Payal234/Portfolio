/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: ' ', // ✅ allow Unsplash
      },
    ],
  },
};

export default nextConfig;

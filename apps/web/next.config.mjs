/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.angela-spa.com',
      },
    ],
  },
  async rewrites() {
    const backendApi = process.env.NEXT_PUBLIC_BACKEND_API;
    // Only add rewrite if backend API is configured
    if (!backendApi) {
      return [];
    }
    return [
      {
        source: '/api/backend/:path*',
        destination: `${backendApi}/:path*`,
      },
    ];
  },
  env: {
    NEXT_PUBLIC_BACKEND_API: process.env.NEXT_PUBLIC_BACKEND_API,
    NEXT_PUBLIC_WHATSAPP_NUMBER: '5562981260247',
  },
};

export default nextConfig;

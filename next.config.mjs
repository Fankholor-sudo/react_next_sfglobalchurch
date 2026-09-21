/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zvve3t2t9mgsxztu.public.blob.vercel-storage.com',
      },
    ],
  },
  allowedDevOrigins: ['192.168.18.175'],
}

export default nextConfig

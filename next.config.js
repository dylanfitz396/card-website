/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'moonpig.github.io',
        port: '',
        pathname: '/tech-test-frontend/**',
      },
    ],
  },
}

module.exports = nextConfig

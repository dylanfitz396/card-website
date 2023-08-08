/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
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

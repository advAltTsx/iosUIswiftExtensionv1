/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/redirects/virtuals/alice',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/redirects/virtuals/unauth',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

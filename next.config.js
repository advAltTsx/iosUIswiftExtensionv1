/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      source: '/',
      destination: '/redirects/virtuals/alice'
    ]
  },
}

module.exports = nextConfig

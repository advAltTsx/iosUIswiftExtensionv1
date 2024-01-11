/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/redirect_blocked',
        permanent: true,
      },
      {
        source: '/redirect_blocked',
        destination: 'https://instagram.com/accounts/login',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

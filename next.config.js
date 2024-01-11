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
        destination: 'https://advnote.vercel.app/preview/j575sndcw237zjgtrkc7bsjgk56hbhzc',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

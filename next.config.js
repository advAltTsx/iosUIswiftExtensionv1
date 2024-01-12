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
        destination: 'https://advnote.vercel.app/preview/j574z73xntr9a9026cqm9qw1f56hcghm',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

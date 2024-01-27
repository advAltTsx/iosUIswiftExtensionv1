/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://youtube.com/shorts/xd2DCWUE1AE?si=yPlV5BlqPXooYbEZ',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

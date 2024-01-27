/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://youtube.com/shorts/cplThaynp84?si=MyjI-M61wQgR75UA',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

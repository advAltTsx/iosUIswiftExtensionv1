/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://youtube.com/shorts/8uGFDnDuLoQ?si=FGpEB31-L2_DU8Q5',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

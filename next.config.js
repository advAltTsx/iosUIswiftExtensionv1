/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://advnote.vercel.app/preview/j576evhv5a7kkbdye7ckbx2z1s6hk4g7',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/biostat-consulting',
  trailingSlash: true,
  assetPrefix: '/biostat-consulting/',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 
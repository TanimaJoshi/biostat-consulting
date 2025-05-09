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

// Copy sitemap.xml to the output directory during build
const fs = require('fs');
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  const sitemap = fs.readFileSync(path.join(__dirname, 'sitemap.xml'), 'utf8');
  if (!fs.existsSync(path.join(__dirname, 'out'))) {
    fs.mkdirSync(path.join(__dirname, 'out'), { recursive: true });
  }
  fs.writeFileSync(path.join(__dirname, 'out', 'sitemap.xml'), sitemap);
}

module.exports = nextConfig 
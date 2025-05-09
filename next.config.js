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

// Copy sitemap.xml and robots.txt to the output directory during build
const fs = require('fs');
const path = require('path');

const copyFileToOutput = (filename) => {
  try {
    const content = fs.readFileSync(path.join(__dirname, filename), 'utf8');
    if (!fs.existsSync(path.join(__dirname, 'out'))) {
      fs.mkdirSync(path.join(__dirname, 'out'), { recursive: true });
    }
    fs.writeFileSync(path.join(__dirname, 'out', filename), content);
    console.log(`Successfully copied ${filename} to output directory`);
  } catch (error) {
    console.error(`Error copying ${filename}:`, error);
  }
};

if (process.env.NODE_ENV === 'production') {
  copyFileToOutput('sitemap.xml');
  copyFileToOutput('robots.txt');
}

module.exports = nextConfig 
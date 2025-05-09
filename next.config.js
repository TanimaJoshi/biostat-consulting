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
    const sourcePath = path.join(__dirname, 'public', filename);
    const destPath = path.join(__dirname, 'out', filename);
    
    if (fs.existsSync(sourcePath)) {
      const content = fs.readFileSync(sourcePath, 'utf8');
      fs.writeFileSync(destPath, content);
      console.log(`Successfully copied ${filename} to output directory`);
    }
  } catch (error) {
    console.error(`Error copying ${filename}:`, error);
  }
};

if (process.env.NODE_ENV === 'production') {
  copyFileToOutput('sitemap.xml');
  copyFileToOutput('robots.txt');
}

module.exports = nextConfig 
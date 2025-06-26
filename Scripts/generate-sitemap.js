const fs = require('fs');
const path = require('path');
const { SitemapStream } = require('sitemap');

const SITE_URL = 'https://solarwings.xyz';
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/home', changefreq: 'daily', priority: 1.0 },
  { url: '/service', priority: 0.9 },
  { url: '/about-us', priority: 0.7 },
  { url: '/contact', priority: 0.7 }
];

async function generateSitemap() {
  try {
    // Generate sitemap.xml
    const sitemapPath = path.join('public', 'sitemap.xml');
    const sitemap = new SitemapStream({ hostname: SITE_URL });
    const writeStream = fs.createWriteStream(sitemapPath);
    
    sitemap.pipe(writeStream);
    routes.forEach(route => sitemap.write(route));
    sitemap.end();
    
    // Generate robots.txt
    const robotsPath = path.join('public', 'robots.txt');
    const robotsContent = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: ${SITE_URL}/sitemap.xml`;
    
    fs.writeFileSync(robotsPath, robotsContent);
    
    console.log('✅ Generated:');
    console.log(`- ${sitemapPath}`);
    console.log(`- ${robotsPath}`);
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

generateSitemap();
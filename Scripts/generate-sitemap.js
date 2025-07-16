const fs = require('fs');
const path = require('path');
const { SitemapStream } = require('sitemap');

const SITE_URL = 'https://solarwings.xyz';
const PUBLIC_DIR = path.join(__dirname, '..', 'public'); // Points to project_root/public

const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/home', changefreq: 'daily', priority: 1.0 },
  { url: '/service', priority: 0.9 },
  { url: '/about-us', priority: 0.7 },
  { url: '/contact', priority: 0.7 }
];

async function generateSitemap() {
  try {
    console.log('Starting sitemap generation...');
    
    // 1. Create public directory if it doesn't exist
    if (!fs.existsSync(PUBLIC_DIR)) {
      fs.mkdirSync(PUBLIC_DIR, { recursive: true });
      console.log(`Created directory: ${PUBLIC_DIR}`);
    }

    // 2. Generate sitemap.xml
    const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
    const sitemap = new SitemapStream({ 
      hostname: SITE_URL,
      xmlns: { news: false, xhtml: false, image: false, video: false }
    });
    
    const writeStream = fs.createWriteStream(sitemapPath);
    sitemap.pipe(writeStream);
    
    routes.forEach(route => sitemap.write(route));
    sitemap.end();
    
    // Wait for stream to finish
    await new Promise(resolve => writeStream.on('finish', resolve));
    console.log(`✅ Sitemap generated: ${sitemapPath}`);
    
    // 3. Generate robots.txt
    const robotsPath = path.join(PUBLIC_DIR, 'robots.txt');
    const robotsContent = `# Auto-generated robots.txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /dashboard/

Sitemap: ${SITE_URL}/sitemap.xml`;
    
    fs.writeFileSync(robotsPath, robotsContent);
    console.log(`✅ robots.txt generated: ${robotsPath}`);
    
    // 4. Verify file sizes
    const sitemapStats = fs.statSync(sitemapPath);
    const robotsStats = fs.statSync(robotsPath);
    
    console.log('File verification:');
    console.log(`- sitemap.xml size: ${sitemapStats.size} bytes`);
    console.log(`- robots.txt size: ${robotsStats.size} bytes`);
    
  } catch (error) {
    console.error('❌ Generation failed:', error);
    process.exit(1); // Exit with error code
  }
}

generateSitemap();
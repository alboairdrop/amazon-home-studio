import fs from 'fs';
import { getAllSlugs } from './content';

export function generateSitemap(domain = 'https://votre-site.com') {
  const allSlugs = getAllSlugs();
  
  const urls = [
    { loc: '/', priority: 1.0, changefreq: 'daily' },
    { loc: '/articles/', priority: 0.8, changefreq: 'daily' },
    { loc: '/reviews/', priority: 0.8, changefreq: 'daily' },
    { loc: '/comparatifs/', priority: 0.8, changefreq: 'daily' },
  ];

  allSlugs.forEach(({ type, slug }) => {
    urls.push({
      loc: `/${type}/${slug}/`,
      priority: 0.7,
      changefreq: 'weekly'
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${domain}${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', xml);
  console.log('✓ Sitemap generated successfully');
}

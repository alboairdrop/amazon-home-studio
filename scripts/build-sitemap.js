const { generateSitemap } = require('../lib/generateSitemap');

// Change this to your actual domain
const domain = process.env.SITE_URL || 'https://votre-site.com';

generateSitemap(domain);

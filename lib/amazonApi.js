import crypto from 'crypto';

class AmazonProductAPI {
  constructor() {
    this.affiliateId = process.env.AMAZON_AFFILIATE_ID || 'bltech-21';
    this.accessKey = process.env.AMAZON_ACCESS_KEY;
    this.secretKey = process.env.AMAZON_SECRET_KEY;
    this.region = process.env.AMAZON_REGION || 'fr';
    this.host = process.env.AMAZON_HOST || 'webservices.amazon.fr';
  }

  // Générer un lien d'affiliation Amazon
  generateAffiliateLink(asin, customParams = {}) {
    const baseUrl = `https://www.amazon.fr/dp/${asin}`;
    const params = new URLSearchParams({
      tag: this.affiliateId,
      ...customParams
    });
    return `${baseUrl}?${params.toString()}`;
  }

  // Créer un lien de recherche avec tag affilié
  generateSearchLink(keyword) {
    const params = new URLSearchParams({
      k: keyword,
      tag: this.affiliateId
    });
    return `https://www.amazon.fr/s?${params.toString()}`;
  }

  // Widget de produit Amazon
  getProductWidget(asin) {
    return {
      asin,
      affiliateLink: this.generateAffiliateLink(asin),
      imageUrl: `https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=${asin}&Format=_SL250_&ID=AsinImage&MarketPlace=FR&ServiceVersion=20070822&WS=1&tag=${this.affiliateId}`,
      trackingPixel: `https://ir-fr.amazon-adsystem.com/e/ir?t=${this.affiliateId}&l=li3&o=8&a=${asin}`
    };
  }

  // Template de carte produit
  renderProductCard(product) {
    const { asin, title, price, imageUrl, rating } = product;
    const link = this.generateAffiliateLink(asin);
    
    return {
      html: `
        <div class="product-card">
          <a href="${link}" target="_blank" rel="nofollow noopener">
            <img src="${imageUrl}" alt="${title}" loading="lazy" />
            <h3>${title}</h3>
            ${rating ? `<div class="rating">⭐ ${rating}/5</div>` : ''}
            ${price ? `<div class="price">${price}</div>` : ''}
            <button class="cta-button">Voir sur Amazon</button>
          </a>
        </div>
      `,
      link,
      trackingPixel: `https://ir-fr.amazon-adsystem.com/e/ir?t=${this.affiliateId}&l=li3&o=8&a=${asin}`
    };
  }

  // Tableau comparatif
  renderComparisonTable(products) {
    const headers = ['Produit', 'Prix', 'Note', 'Action'];
    const rows = products.map(p => `
      <tr>
        <td><strong>${p.title}</strong></td>
        <td>${p.price || 'N/A'}</td>
        <td>${p.rating ? `⭐ ${p.rating}/5` : 'N/A'}</td>
        <td><a href="${this.generateAffiliateLink(p.asin)}" class="cta-button" target="_blank" rel="nofollow">Voir sur Amazon</a></td>
      </tr>
    `).join('');

    return `
      <table class="comparison-table">
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }
}

export default new AmazonProductAPI();

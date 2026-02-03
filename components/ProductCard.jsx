export default function ProductCard({ product }) {
  const { asin, title, price, imageUrl, rating, description } = product;
  const affiliateLink = `https://www.amazon.fr/dp/${asin}?tag=bltech-21`;

  return (
    <div className="product-card">
      <a href={affiliateLink} target="_blank" rel="nofollow noopener noreferrer">
        {imageUrl && (
          <div className="product-image">
            <img src={imageUrl} alt={title} loading="lazy" />
          </div>
        )}
        <div className="product-info">
          <h3>{title}</h3>
          {description && <p className="product-description">{description}</p>}
          {rating && (
            <div className="product-rating">
              {'⭐'.repeat(Math.floor(rating))} {rating}/5
            </div>
          )}
          {price && <div className="product-price">{price}</div>}
        </div>
        <button className="cta-button">Voir sur Amazon</button>
      </a>
      <img 
        src={`https://ir-fr.amazon-adsystem.com/e/ir?t=bltech-21&l=li3&o=8&a=${asin}`}
        width="1" 
        height="1" 
        alt=""
        style={{ border: 'none', margin: 0, padding: 0 }}
      />
    </div>
  );
}

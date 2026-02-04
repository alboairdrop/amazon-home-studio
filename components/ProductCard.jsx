import ProductImage from './ProductImage';

export default function ProductCard({ product }) {
  const { asin, title, price, imageUrl, rating, description } = product;
  const affiliateLink = `https://www.amazon.fr/dp/${asin}?tag=bltech-21`;

  return (
    <div className="product-card">
      <a href={affiliateLink} target="_blank" rel="nofollow noopener noreferrer" style={{ textDecoration: 'none' }}>
        {imageUrl && (
          <div className="product-image">
            <ProductImage 
              src={imageUrl} 
              alt={title}
              width="100%"
              height="280px"
            />
          </div>
        )}
        <div className="product-info">
          <h3>{title}</h3>
          {description && <p className="product-description">{description}</p>}
          {rating && (
            <div className="product-rating rating-stars">
              {'⭐'.repeat(Math.floor(rating))} <strong>{rating}/5</strong>
            </div>
          )}
          {price && <div className="product-price price-badge">{price}</div>}
        </div>
      </a>
      
      {/* Amazon CTA Button with icon */}
      <a 
        href={affiliateLink} 
        target="_blank" 
        rel="nofollow noopener noreferrer"
        className="cta-button"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.26 18.54c-4.5 3.32-11.03 5.08-16.66 1.84-.17-.1-.01-.25.19-.17 5.35 2.62 11.92 4.2 18.68 1.56.42-.16.78.28.4.56zM22.5 16.38c-.58-.74-3.83-.35-5.3-.18-.21.03-.24-.16-.05-.3 2.59-1.82 6.84-1.3 7.34-.69.5.62-.13 4.88-2.57 6.92-.18.15-.36.07-.28-.13.55-1.38 1.78-4.48 1.19-5.23z"/>
        </svg>
        Voir sur Amazon
      </a>
      
      {/* Tracking pixel */}
      <img 
        src={`https://ir-fr.amazon-adsystem.com/e/ir?t=bltech-21&l=li3&o=8&a=${asin}`}
        width="1" 
        height="1" 
        alt=""
        style={{ border: 'none', position: 'absolute', left: '-9999px' }}
      />
    </div>
  );
}

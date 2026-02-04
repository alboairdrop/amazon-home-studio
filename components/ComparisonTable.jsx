export default function ComparisonTable({ products }) {
  return (
    <div className="comparison-table-container">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Prix</th>
            <th>Note</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            const affiliateLink = `https://www.amazon.fr/dp/${product.asin}?tag=bltech-21`;
            return (
              <tr key={index}>
                <td>
                  <strong>{product.title}</strong>
                  {product.description && (
                    <div className="table-description">{product.description}</div>
                  )}
                </td>
                <td className="price-cell" style={{ color: '#FF9900' }}>
                  {product.price || 'Voir prix'}
                </td>
                <td className="rating-cell rating-stars">
                  {product.rating ? (
                    <>
                      {'⭐'.repeat(Math.floor(product.rating))} 
                      <strong>{product.rating}/5</strong>
                    </>
                  ) : 'N/A'}
                </td>
                <td>
                  <a 
                    href={affiliateLink} 
                    className="cta-button-small" 
                    target="_blank" 
                    rel="nofollow noopener noreferrer"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                      <path d="M20.26 18.54c-4.5 3.32-11.03 5.08-16.66 1.84-.17-.1-.01-.25.19-.17 5.35 2.62 11.92 4.2 18.68 1.56.42-.16.78.28.4.56zM22.5 16.38c-.58-.74-3.83-.35-5.3-.18-.21.03-.24-.16-.05-.3 2.59-1.82 6.84-1.3 7.34-.69.5.62-.13 4.88-2.57 6.92-.18.15-.36.07-.28-.13.55-1.38 1.78-4.48 1.19-5.23z"/>
                    </svg>
                    Voir sur Amazon
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

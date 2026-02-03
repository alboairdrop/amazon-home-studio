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
                <td className="price-cell">{product.price || 'Voir prix'}</td>
                <td className="rating-cell">
                  {product.rating ? `⭐ ${product.rating}/5` : 'N/A'}
                </td>
                <td>
                  <a 
                    href={affiliateLink} 
                    className="cta-button-small" 
                    target="_blank" 
                    rel="nofollow noopener noreferrer"
                  >
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

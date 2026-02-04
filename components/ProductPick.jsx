/**
 * ProductPick - Composant Wirecutter-style pour les recommandations
 * Types: "top" (Top Pick), "budget" (Budget Pick), "upgrade" (Upgrade Pick)
 */
export default function ProductPick({ product, pickType = "top" }) {
  const { asin, title, price, imageUrl, rating, description, pros, cons } = product;
  const affiliateLink = `https://www.amazon.fr/dp/${asin}?tag=bltech-21`;

  const pickConfig = {
    top: {
      label: "Notre Choix Principal",
      icon: "🏆",
      color: "#FF9900",
      bgColor: "rgba(255, 153, 0, 0.05)",
      borderColor: "#FF9900"
    },
    budget: {
      label: "Meilleur Rapport Qualité-Prix",
      icon: "💰",
      color: "#10B981",
      bgColor: "rgba(16, 185, 129, 0.05)",
      borderColor: "#10B981"
    },
    upgrade: {
      label: "Choix Premium",
      icon: "⭐",
      color: "#8B5CF6",
      bgColor: "rgba(139, 92, 246, 0.05)",
      borderColor: "#8B5CF6"
    }
  };

  const config = pickConfig[pickType] || pickConfig.top;

  return (
    <div className="product-pick" style={{
      border: `3px solid ${config.borderColor}`,
      backgroundColor: config.bgColor,
      borderRadius: '16px',
      overflow: 'hidden',
      marginBottom: '2rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Badge */}
      <div style={{
        background: config.color,
        color: 'white',
        padding: '1rem 1.5rem',
        fontWeight: '700',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        <span style={{ fontSize: '1.5rem' }}>{config.icon}</span>
        {config.label}
      </div>

      <div style={{
        padding: '2rem',
        display: 'grid',
        gridTemplateColumns: '300px 1fr',
        gap: '2rem',
        alignItems: 'start'
      }}>
        {/* Image */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '280px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
        }}>
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title}
              loading="lazy"
              style={{
                maxWidth: '100%',
                maxHeight: '250px',
                objectFit: 'contain'
              }}
            />
          ) : (
            <div style={{ color: '#9CA3AF', fontSize: '3rem' }}>📦</div>
          )}
        </div>

        {/* Content */}
        <div>
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '800',
            marginBottom: '1rem',
            color: '#111827',
            lineHeight: '1.2'
          }}>
            {title}
          </h3>

          {rating && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
              fontSize: '1rem',
              color: '#F59E0B',
              fontWeight: '600'
            }}>
              {'⭐'.repeat(Math.floor(rating))} {rating}/5
            </div>
          )}

          {price && (
            <div style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: config.color,
              marginBottom: '1.5rem'
            }}>
              {price}
            </div>
          )}

          {description && (
            <p style={{
              color: '#4B5563',
              lineHeight: '1.7',
              marginBottom: '1.5rem',
              fontSize: '1.05rem'
            }}>
              {description}
            </p>
          )}

          {/* Pros & Cons */}
          {(pros || cons) && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              {pros && (
                <div>
                  <h4 style={{
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    color: '#10B981',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    ✓ Avantages
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    fontSize: '0.95rem',
                    color: '#4B5563'
                  }}>
                    {pros.map((pro, i) => (
                      <li key={i} style={{ marginBottom: '0.4rem' }}>• {pro}</li>
                    ))}
                  </ul>
                </div>
              )}
              {cons && (
                <div>
                  <h4 style={{
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    color: '#EF4444',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    ✗ Inconvénients
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    fontSize: '0.95rem',
                    color: '#4B5563'
                  }}>
                    {cons.map((con, i) => (
                      <li key={i} style={{ marginBottom: '0.4rem' }}>• {con}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* CTA Button Amazon Orange */}
          <a
            href={affiliateLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="amazon-cta-button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1.25rem 2.5rem',
              backgroundColor: '#FF9900',
              color: '#111',
              fontWeight: '700',
              fontSize: '1.1rem',
              borderRadius: '8px',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 14px rgba(255, 153, 0, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#F08804';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(255, 153, 0, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#FF9900';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 14px rgba(255, 153, 0, 0.4)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.26 18.54c-4.5 3.32-11.03 5.08-16.66 1.84-.17-.1-.01-.25.19-.17 5.35 2.62 11.92 4.2 18.68 1.56.42-.16.78.28.4.56zM22.5 16.38c-.58-.74-3.83-.35-5.3-.18-.21.03-.24-.16-.05-.3 2.59-1.82 6.84-1.3 7.34-.69.5.62-.13 4.88-2.57 6.92-.18.15-.36.07-.28-.13.55-1.38 1.78-4.48 1.19-5.23z"/>
            </svg>
            Voir sur Amazon
          </a>
        </div>
      </div>

      {/* Pixel de suivi */}
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

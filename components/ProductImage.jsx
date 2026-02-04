/**
 * ProductImage - Component optimisé pour images Amazon avec lazy loading
 */
import { useState } from 'react';

export default function ProductImage({ 
  src, 
  alt, 
  width = '100%', 
  height = '280px',
  aspectRatio = '4/3'
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div 
      style={{
        position: 'relative',
        width,
        height,
        aspectRatio,
        background: 'linear-gradient(135deg, #f9fafb 0%, #fff 100%)',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {!isLoaded && !hasError && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#9CA3AF',
          fontSize: '2rem'
        }}>
          📦
        </div>
      )}

      {hasError ? (
        <div style={{
          textAlign: 'center',
          color: '#9CA3AF',
          padding: '1rem'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📦</div>
          <div style={{ fontSize: '0.9rem' }}>Image non disponible</div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        />
      )}
    </div>
  );
}

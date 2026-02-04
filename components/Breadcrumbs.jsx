/**
 * Breadcrumbs - Navigation fil d'Ariane
 */
import Link from 'next/link';

export default function Breadcrumbs({ items }) {
  return (
    <nav style={{
      padding: '1rem 0',
      fontSize: '0.9rem',
      color: '#6B7280'
    }}>
      <ol style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        flexWrap: 'wrap'
      }}>
        <li>
          <Link 
            href="/"
            style={{
              color: '#8B5CF6',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#7C3AED'}
            onMouseLeave={(e) => e.target.style.color = '#8B5CF6'}
          >
            🏠 Accueil
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#D1D5DB' }}>›</span>
            {item.href ? (
              <Link 
                href={item.href}
                style={{
                  color: index === items.length - 1 ? '#111827' : '#8B5CF6',
                  textDecoration: 'none',
                  fontWeight: index === items.length - 1 ? '600' : '500',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (index !== items.length - 1) e.target.style.color = '#7C3AED';
                }}
                onMouseLeave={(e) => {
                  if (index !== items.length - 1) e.target.style.color = '#8B5CF6';
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ 
                color: '#111827',
                fontWeight: '600'
              }}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

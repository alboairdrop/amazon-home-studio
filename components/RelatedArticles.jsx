/**
 * RelatedArticles - Articles connexes (style Wirecutter)
 */
import Link from 'next/link';

export default function RelatedArticles({ articles }) {
  if (!articles || articles.length === 0) return null;

  return (
    <section style={{
      marginTop: '4rem',
      padding: '2.5rem',
      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.03) 0%, rgba(245, 158, 11, 0.03) 100%)',
      borderRadius: '16px',
      border: '2px solid #F3F4F6'
    }}>
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: '800',
        color: '#111827',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <span style={{ fontSize: '1.75rem' }}>📚</span>
        Articles Connexes
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {articles.slice(0, 3).map((article, index) => (
          <Link 
            key={index}
            href={article.href}
            style={{
              textDecoration: 'none',
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 92, 246, 0.15)';
              e.currentTarget.style.borderColor = '#8B5CF6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
              e.currentTarget.style.borderColor = '#E5E7EB';
            }}
          >
            <span style={{
              fontSize: '0.8rem',
              fontWeight: '600',
              color: '#8B5CF6',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {article.type || 'Article'}
            </span>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              color: '#111827',
              lineHeight: '1.4',
              margin: 0
            }}>
              {article.title}
            </h4>
            {article.excerpt && (
              <p style={{
                fontSize: '0.9rem',
                color: '#6B7280',
                lineHeight: '1.5',
                margin: 0
              }}>
                {article.excerpt}
              </p>
            )}
            <span style={{
              fontSize: '0.9rem',
              color: '#8B5CF6',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: 'auto'
            }}>
              Lire l'article →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

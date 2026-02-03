import { getAllSlugs, getContentBySlug } from '../../lib/content';
import ReactMarkdown from 'react-markdown';
import ProductCard from '../../components/ProductCard';
import ComparisonTable from '../../components/ComparisonTable';

export default function ContentPage({ content }) {
  if (!content) {
    return <div>Contenu non trouvé</div>;
  }

  return (
    <div className="container">
      <article className="article-page">
        <header className="article-header">
          <h1>{content.title}</h1>
          {content.date && (
            <time className="article-date">
              {new Date(content.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          )}
          {content.excerpt && (
            <p className="article-excerpt">{content.excerpt}</p>
          )}
        </header>

        {content.image && (
          <div className="article-image">
            <img src={content.image} alt={content.title} />
          </div>
        )}

        <div className="article-content">
          <ReactMarkdown>{content.content}</ReactMarkdown>
        </div>

        {content.products && content.products.length > 0 && (
          <section className="products-section">
            <h2>Produits recommandés</h2>
            <div className="products-grid">
              {content.products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </section>
        )}

        {content.comparison && content.comparison.length > 0 && (
          <section className="comparison-section">
            <h2>Tableau comparatif</h2>
            <ComparisonTable products={content.comparison} />
          </section>
        )}

        <div className="article-footer">
          <p className="disclaimer">
            ℹ️ En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises.
          </p>
        </div>
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const allSlugs = getAllSlugs();
  
  const paths = allSlugs.map(({ type, slug }) => ({
    params: { type, slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { type, slug } = params;
  const content = getContentBySlug(type, slug);

  return {
    props: {
      content
    }
  };
}

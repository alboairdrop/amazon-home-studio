import { getAllSlugs, getContentBySlug, getAllContent } from '../../lib/content';
import ReactMarkdown from 'react-markdown';
import ProductCard from '../../components/ProductCard';
import ProductPick from '../../components/ProductPick';
import ComparisonTable from '../../components/ComparisonTable';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedArticles from '../../components/RelatedArticles';

export default function ContentPage({ content, relatedArticles }) {
  if (!content) {
    return <div>Contenu non trouvé</div>;
  }

  // Type labels en français
  const typeLabels = {
    articles: 'Articles',
    reviews: 'Reviews',
    comparatifs: 'Comparatifs'
  };

  return (
    <div className="container">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={[
        { label: typeLabels[content.type] || content.type, href: `/${content.type}` },
        { label: content.title }
      ]} />

      <article className="article-page">
        <header className="article-header">
          <h1>{content.title}</h1>
          {content.date && (
            <time className="article-date">
              📅 {new Date(content.date).toLocaleDateString('fr-FR', {
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
            <img src={content.image} alt={content.title} loading="lazy" />
          </div>
        )}

        <div className="article-content">
          <ReactMarkdown>{content.content}</ReactMarkdown>
        </div>

        {/* ProductPick style Wirecutter pour produits avec "pick" */}
        {content.topPick && (
          <section className="products-section">
            <h2>🏆 Nos Recommandations</h2>
            <div className="products-grid-wirecutter">
              <ProductPick product={content.topPick} pickType="top" />
              
              {content.budgetPick && (
                <ProductPick product={content.budgetPick} pickType="budget" />
              )}
              
              {content.upgradePick && (
                <ProductPick product={content.upgradePick} pickType="upgrade" />
              )}
            </div>
          </section>
        )}

        {/* Grid classique pour autres produits */}
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
            <h2>📊 Tableau comparatif</h2>
            <ComparisonTable products={content.comparison} />
          </section>
        )}

        <div className="article-footer">
          <div className="disclaimer">
            <strong>ℹ️ Note de transparence</strong><br/>
            En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises. 
            Cela n'affecte pas le prix que vous payez et nous permet de continuer à créer du contenu de qualité.
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <RelatedArticles articles={relatedArticles} />
      )}
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
  
  // Get related articles (same type, exclude current, max 3)
  const allContent = getAllContent();
  const relatedArticles = allContent
    .filter(item => item.type === type && item.slug !== slug)
    .slice(0, 3)
    .map(item => ({
      title: item.title,
      href: `/${item.type}/${item.slug}`,
      type: item.type,
      excerpt: item.excerpt
    }));

  return {
    props: {
      content,
      relatedArticles
    }
  };
}

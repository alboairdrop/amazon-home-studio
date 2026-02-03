import { getAllContent } from '../lib/content';
import Link from 'next/link';

export default function Home({ latestContent }) {
  return (
    <div className="container">
      <section className="hero">
        <h1>Découvrez les Meilleurs Produits Tech</h1>
        <p>Reviews détaillées, comparatifs et guides d'achat pour faire le meilleur choix</p>
      </section>

      <section className="latest-content">
        <h2>Derniers contenus</h2>
        <div className="content-grid">
          {latestContent.map((item) => (
            <article key={item.slug} className="content-card">
              {item.image && (
                <div className="content-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
              )}
              <div className="content-body">
                <span className="content-type">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <Link href={`/${item.type}/${item.slug}`} className="read-more">
                  Lire la suite →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Parcourir par catégorie</h2>
        <div className="category-grid">
          <Link href="/articles" className="category-card">
            <h3>📝 Articles</h3>
            <p>Guides et conseils d'achat</p>
          </Link>
          <Link href="/reviews" className="category-card">
            <h3>⭐ Reviews</h3>
            <p>Tests détaillés de produits</p>
          </Link>
          <Link href="/comparatifs" className="category-card">
            <h3>📊 Comparatifs</h3>
            <p>Comparez les meilleurs produits</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const allContent = getAllContent();
  const latestContent = allContent.slice(0, 6);

  return {
    props: {
      latestContent
    }
  };
}

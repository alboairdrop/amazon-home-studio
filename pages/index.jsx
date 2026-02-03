import { getAllContent } from '../lib/content';
import Link from 'next/link';

export default function Home({ latestContent }) {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-badge">🎧 Guide Expert Home Studio</div>
        <h1>
          Équipez votre <span>Home Studio</span> avec les meilleurs produits
        </h1>
        <p>
          Reviews détaillées, comparatifs experts et guides d'achat pour créer 
          votre studio d'enregistrement professionnel
        </p>
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
            <h3>📝 Articles & Guides</h3>
            <p>Conseils experts et guides d'achat détaillés pour votre home studio</p>
          </Link>
          <Link href="/reviews" className="category-card">
            <h3>⭐ Reviews Produits</h3>
            <p>Tests approfondis et analyses détaillées d'équipements audio</p>
          </Link>
          <Link href="/comparatifs" className="category-card">
            <h3>📊 Comparatifs</h3>
            <p>Comparez les meilleurs produits côte à côte pour faire le bon choix</p>
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

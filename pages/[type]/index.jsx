import { getContentByType } from '../../lib/content';
import Link from 'next/link';

export default function TypeIndex({ type, content }) {
  const titles = {
    articles: 'Articles',
    reviews: 'Reviews',
    comparatifs: 'Comparatifs'
  };

  return (
    <div className="container">
      <h1>{titles[type]}</h1>
      <div className="content-grid">
        {content.map((item) => (
          <article key={item.slug} className="content-card">
            {item.image && (
              <div className="content-image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
            )}
            <div className="content-body">
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
              {item.date && (
                <time className="content-date">{new Date(item.date).toLocaleDateString('fr-FR')}</time>
              )}
              <Link href={`/${type}/${item.slug}`} className="read-more">
                Lire la suite →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const types = ['articles', 'reviews', 'comparatifs'];
  
  const paths = types.map(type => ({
    params: { type }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { type } = params;
  const content = getContentByType(type);

  return {
    props: {
      type,
      content
    }
  };
}

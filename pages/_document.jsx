import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Découvrez les meilleurs produits tech sur Amazon. Reviews, comparatifs et guides d'achat." />
        <meta name="keywords" content="amazon, affiliation, tech, reviews, comparatifs, high-tech" />
        <meta name="author" content="Tech Deals" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tech Deals - Meilleurs Produits Amazon" />
        <meta property="og:description" content="Reviews détaillées et comparatifs des meilleurs produits tech" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tech Deals - Meilleurs Produits Amazon" />
        <meta name="twitter:description" content="Reviews détaillées et comparatifs des meilleurs produits tech" />
        
        {/* Performance optimization */}
        <link rel="preconnect" href="https://www.amazon.fr" />
        <link rel="preconnect" href="https://m.media-amazon.com" />
        <link rel="dns-prefetch" href="https://ws-eu.amazon-adsystem.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

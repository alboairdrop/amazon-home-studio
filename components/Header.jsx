import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">
          <div className="logo-icon">🎧</div>
          <h1>
            Amazon <span>Home Studio</span>
          </h1>
        </Link>
        <nav className="nav">
          <Link href="/articles">📝 Articles</Link>
          <Link href="/reviews">⭐ Reviews</Link>
          <Link href="/comparatifs">📊 Comparatifs</Link>
        </nav>
      </div>
    </header>
  );
}

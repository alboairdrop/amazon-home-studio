import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">
          <h1>Tech Deals</h1>
        </Link>
        <nav className="nav">
          <Link href="/articles">Articles</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/comparatifs">Comparatifs</Link>
        </nav>
      </div>
    </header>
  );
}

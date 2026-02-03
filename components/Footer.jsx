export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>À propos</h3>
            <p>Nous vous aidons à trouver les meilleurs produits tech sur Amazon.</p>
          </div>
          <div className="footer-section">
            <h3>Liens rapides</h3>
            <ul>
              <li><a href="/articles">Articles</a></li>
              <li><a href="/reviews">Reviews</a></li>
              <li><a href="/comparatifs">Comparatifs</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Mentions légales</h3>
            <p className="disclaimer">
              En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tech Deals. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

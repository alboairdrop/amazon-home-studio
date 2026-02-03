export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🎧 Amazon Home Studio</h3>
            <p>
              Votre guide de référence pour l'équipement audio professionnel et home studio. 
              Découvrez les meilleurs produits, comparatifs détaillés et guides d'achat pour 
              créer votre studio parfait.
            </p>
          </div>
          <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
              <li><a href="/articles">📝 Articles & Guides</a></li>
              <li><a href="/reviews">⭐ Reviews Produits</a></li>
              <li><a href="/comparatifs">📊 Comparatifs</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Catégories</h3>
            <ul>
              <li><a href="/articles">Microphones</a></li>
              <li><a href="/articles">Interfaces Audio</a></li>
              <li><a href="/articles">Casques Studio</a></li>
              <li><a href="/articles">Monitoring</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Informations</h3>
            <ul>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Politique de confidentialité</a></li>
              <li><a href="#terms">Conditions d'utilisation</a></li>
            </ul>
          </div>
        </div>
        
        <div className="amazon-disclaimer">
          <p>
            <strong>Programme Partenaires Amazon :</strong> En tant que Partenaire Amazon, 
            nous réalisons un bénéfice sur les achats remplissant les conditions requises. 
            Les prix et la disponibilité des produits mentionnés sur ce site sont sujets à 
            changement. Amazon et le logo Amazon sont des marques commerciales d'Amazon.com, 
            Inc. ou de ses affiliés. Nous recommandons des produits de manière objective et 
            indépendante.
          </p>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Amazon Home Studio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

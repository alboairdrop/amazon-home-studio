# Guide Design Wirecutter - Amazon Home Studio

## 🎨 Vue d'ensemble

Le site a été transformé pour adopter le style **Wirecutter (NYT)** avec les **couleurs Amazon**.

### Couleurs principales

- **Amazon Orange**: `#FF9900` (boutons CTA)
- **Noir**: `#111111` (texte principal, header)
- **Blanc**: `#FFFFFF` (backgrounds)
- **Gris**: `#6B7280` (texte secondaire)

---

## 🆕 Nouveaux Composants

### 1. **ProductPick** - Encadrés Produits Style Wirecutter

Le composant phare ! Trois types disponibles :

```jsx
import ProductPick from '../components/ProductPick';

// Top Pick (Orange Amazon)
<ProductPick 
  product={{
    asin: "B08N5WRWNW",
    title: "Sony WH-1000XM4",
    price: "299€",
    imageUrl: "/images/sony-xm4.jpg",
    rating: 4.8,
    description: "Le meilleur casque audio...",
    pros: [
      "Excellente réduction de bruit",
      "Autonomie exceptionnelle",
      "Confort premium"
    ],
    cons: [
      "Prix élevé",
      "Poids légèrement supérieur"
    ]
  }}
  pickType="top"
/>

// Budget Pick (Vert)
<ProductPick product={...} pickType="budget" />

// Upgrade Pick (Violet)
<ProductPick product={...} pickType="upgrade" />
```

**Caractéristiques** :
- Badge de catégorie coloré en haut
- Layout 2 colonnes (image + contenu)
- Section Avantages/Inconvénients
- Bouton CTA Amazon orange géant
- Bordure colorée selon le type
- Responsive (1 colonne sur mobile)

---

### 2. **ProductImage** - Images Optimisées

Images produits avec lazy loading et fallback :

```jsx
import ProductImage from '../components/ProductImage';

<ProductImage 
  src="/images/produit.jpg"
  alt="Nom du produit"
  width="100%"
  height="280px"
  aspectRatio="4/3"
/>
```

**Fonctionnalités** :
- Lazy loading automatique
- Placeholder pendant le chargement
- Fallback si l'image n'existe pas
- Aspect ratio maintenu
- Transition smooth

---

### 3. **Breadcrumbs** - Fil d'Ariane

Navigation contextuelle :

```jsx
import Breadcrumbs from '../components/Breadcrumbs';

<Breadcrumbs items={[
  { label: "Articles", href: "/articles" },
  { label: "Casques Audio", href: "/articles/casques" },
  { label: "Meilleurs Casques 2026" } // Dernier = page actuelle
]} />
```

**Style** :
- Icônes 🏠 et séparateurs ›
- Hover states
- Couleur Amazon orange pour les liens
- Page actuelle en gras noir

---

### 4. **RelatedArticles** - Articles Connexes

Section de suggestions en bas d'article :

```jsx
import RelatedArticles from '../components/RelatedArticles';

<RelatedArticles articles={[
  {
    title: "Meilleurs microphones 2026",
    href: "/articles/meilleurs-microphones",
    type: "Article",
    excerpt: "Notre sélection des meilleurs micros..."
  },
  // ... jusqu'à 3 articles
]} />
```

**Features** :
- Grid responsive
- Cards avec hover effect
- Badge de type d'article
- Extrait de description
- Lien "Lire l'article →"

---

## 🎯 Boutons CTA Amazon

### Style Officiel Amazon

Tous les boutons CTA utilisent le **orange Amazon** `#FF9900` :

```jsx
// Bouton standard (dans ProductCard)
<a href={amazonLink} className="cta-button">
  <svg>...</svg> {/* Logo Amazon */}
  Voir sur Amazon
</a>

// Bouton petit (dans ComparisonTable)
<a href={amazonLink} className="cta-button-small">
  <svg>...</svg>
  Voir sur Amazon
</a>
```

**Effets** :
- Background orange #FF9900
- Hover : #F08804 (orange foncé)
- Box-shadow orange
- Transform translateY(-2px) au hover
- Logo Amazon SVG inclus

---

## 📐 Layout & Typography

### Police

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, ...
```

**Import automatique** via Google Fonts dans `globals.css`.

### Hiérarchie

```css
h1: clamp(2rem, 5vw, 3.5rem) - Font-weight: 700
h2: clamp(1.75rem, 4vw, 2.5rem) - Font-weight: 700
h3: clamp(1.25rem, 3vw, 1.75rem) - Font-weight: 700
p: 1rem - Line-height: 1.7
```

### Containers

```css
.container: max-width 1280px, padding 0 1rem
.article-page: max-width 850px (Wirecutter-style)
```

---

## 🎨 Classes Utilitaires Ajoutées

### Boxes

```html
<!-- Alert Box -->
<div class="alert-box">
  <div class="alert-box-icon">⚠️</div>
  <div class="alert-box-content">
    <h4>Important</h4>
    <p>Information importante...</p>
  </div>
</div>

<!-- Highlight Box -->
<div class="highlight-box">
  <h3>💡 Le Saviez-Vous ?</h3>
  <p>Information mise en avant...</p>
</div>

<!-- Section Divider -->
<div class="section-divider"></div>
<div class="section-divider-bold"></div>
```

### Grilles

```html
<!-- Comparison Grid -->
<div class="comparison-grid">
  <div class="comparison-item winner">
    <!-- Gagnant avec badge 🏆 -->
  </div>
  <div class="comparison-item">
    <!-- Autre produit -->
  </div>
</div>

<!-- Products Grid Wirecutter -->
<div class="products-grid-wirecutter">
  <ProductPick ... />
  <ProductPick ... />
  <ProductPick ... />
</div>
```

---

## 📱 Responsive Design

### Breakpoints

```css
max-width: 1024px → Grid ajustements
max-width: 768px → 1 colonne, mobile nav
max-width: 480px → Tailles réduites
```

### Mobile Features

- **Sticky CTA Bar** : Barre fixe en bas avec CTA Amazon
- Navigation horizontale centrée
- Images adaptatives
- Typography responsive (clamp)

---

## 🎯 Exemple Complet : Page Article

```jsx
// pages/articles/[slug].jsx
import Breadcrumbs from '../../components/Breadcrumbs';
import ProductPick from '../../components/ProductPick';
import RelatedArticles from '../../components/RelatedArticles';
import ComparisonTable from '../../components/ComparisonTable';

export default function Article({ article }) {
  return (
    <div className="container">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: "Articles", href: "/articles" },
        { label: article.title }
      ]} />

      {/* Article Header */}
      <article className="article-page">
        <header className="article-header">
          <h1>{article.title}</h1>
          <div className="article-date">📅 {article.date}</div>
          <p className="article-excerpt">{article.excerpt}</p>
        </header>

        {/* Content */}
        <div className="article-content">
          <p>Introduction...</p>

          <h2>Notre Sélection</h2>

          {/* Top Pick */}
          <ProductPick 
            product={article.topPick}
            pickType="top"
          />

          {/* Budget Pick */}
          <ProductPick 
            product={article.budgetPick}
            pickType="budget"
          />

          {/* Upgrade Pick */}
          <ProductPick 
            product={article.upgradePick}
            pickType="upgrade"
          />

          {/* Alert Box */}
          <div className="alert-box">
            <div className="alert-box-icon">💡</div>
            <div className="alert-box-content">
              <h4>Conseil d'Expert</h4>
              <p>Astuce importante...</p>
            </div>
          </div>

          {/* Comparison Table */}
          <h2>Tableau Comparatif</h2>
          <ComparisonTable products={article.allProducts} />

          {/* Highlight */}
          <div className="highlight-box">
            <h3>🔥 Promotion en Cours</h3>
            <p>Offre limitée...</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="article-footer">
          <div className="disclaimer">
            En tant que Partenaire Amazon, nous réalisons un bénéfice 
            sur les achats remplissant les conditions requises.
          </div>
        </footer>
      </article>

      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />
    </div>
  );
}
```

---

## 🚀 Checklist Migration

Pour migrer une page existante vers le nouveau design :

- [ ] Importer les nouveaux composants
- [ ] Remplacer `ProductCard` classique par `ProductPick` pour les tops
- [ ] Ajouter `Breadcrumbs` en haut de page
- [ ] Utiliser `ProductImage` pour images optimisées
- [ ] Ajouter `RelatedArticles` en bas
- [ ] Utiliser `.alert-box` / `.highlight-box` pour les encadrés
- [ ] Vérifier que tous les liens Amazon ont le logo SVG
- [ ] Tester responsive mobile
- [ ] Vérifier les couleurs (orange Amazon partout)

---

## 🎨 Variables CSS Disponibles

```css
--amazon-orange: #FF9900
--amazon-orange-dark: #F08804
--amazon-orange-light: #FFAC31
--primary: #111111 (noir)
--text: #111827
--text-light: #6B7280
--text-muted: #9CA3AF
--bg: #FFFFFF
--bg-gray: #F9FAFB
--border: #E5E7EB
```

---

## 📊 Avantages du Nouveau Design

✅ **Style Wirecutter authentique** : Encadrés produits reconnaissables  
✅ **Amazon Branding** : Orange #FF9900 partout  
✅ **Meilleure UX** : Navigation claire, breadcrumbs, articles connexes  
✅ **Performance** : Lazy loading images, transitions optimisées  
✅ **Responsive** : Mobile-first, sticky CTA  
✅ **Accessibilité** : Contraste, focus states, semantic HTML  
✅ **SEO-friendly** : Structured data ready, breadcrumbs, internal linking  

---

## 🛠️ Maintenance

**Fichiers modifiés** :
- `styles/globals.css` → Nouveau thème Amazon/Wirecutter
- `components/ProductCard.jsx` → Bouton orange, ProductImage
- `components/ComparisonTable.jsx` → Bouton orange, icône Amazon
- `components/Header.jsx` → Émojis, style Amazon
- **Nouveaux** : `ProductPick.jsx`, `ProductImage.jsx`, `Breadcrumbs.jsx`, `RelatedArticles.jsx`

**Pour ajouter un nouveau produit Pick** :
1. Créer l'objet produit avec `pros` et `cons`
2. Utiliser `<ProductPick product={...} pickType="top|budget|upgrade" />`
3. Le badge et les couleurs s'adaptent automatiquement

**Pour personnaliser** :
- Couleurs : Modifier les variables CSS dans `:root`
- Espacements : Ajuster les `margin` / `padding` des classes
- Typography : Modifier les `clamp()` pour responsive

---

## 📞 Support

Questions ? Consultez :
- `QUICK_START_DESIGN.md` - Démarrage rapide
- `README_DESIGN.md` - Documentation complète
- `VISUAL_GUIDE.md` - Guide visuel

---

**Design by OpenClaw** 🤖  
**Inspired by Wirecutter × Amazon**  
**Version 2.0 - Feb 2026**

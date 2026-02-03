# Site d'Affiliation Amazon - Tech Deals

Site moderne d'affiliation Amazon avec intégration Product Advertising API, système de gestion de contenu et optimisations SEO.

## 🚀 Fonctionnalités

- ✅ Site responsive moderne (Next.js)
- ✅ Intégration Amazon Product Advertising API
- ✅ ID affilié Amazon : **bltech-21**
- ✅ Système de gestion de contenu (CMS) basé sur Markdown
- ✅ Templates pour articles, reviews et comparatifs
- ✅ Optimisations SEO (métadonnées, Open Graph, structure)
- ✅ Optimisations performance (static export, lazy loading)
- ✅ Design professionnel et responsive

## 📁 Structure du Projet

```
amazon-affiliate-site/
├── pages/              # Pages Next.js
├── components/         # Composants React réutilisables
├── lib/               # Bibliothèques et utilitaires
│   ├── amazonApi.js   # API Amazon
│   └── content.js     # Gestion du contenu
├── content/           # Contenu Markdown (CMS)
│   ├── articles/      # Articles et guides
│   ├── reviews/       # Tests de produits
│   └── comparatifs/   # Tableaux comparatifs
├── styles/            # Styles CSS
└── public/            # Assets statiques
```

## 🛠️ Installation et Développement

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation

```bash
cd amazon-affiliate-site
npm install
```

### Configuration

1. Éditez `.env.local` avec vos clés Amazon Product Advertising API :
```env
AMAZON_AFFILIATE_ID=bltech-21
AMAZON_ACCESS_KEY=votre_access_key
AMAZON_SECRET_KEY=votre_secret_key
AMAZON_REGION=fr
AMAZON_HOST=webservices.amazon.fr
```

### Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Build et Export

```bash
npm run build
npm run export
```

Les fichiers statiques seront générés dans le dossier `/out`

## 📝 Gestion du Contenu

### Créer un Article

Créez un fichier `.md` dans `content/articles/` :

```markdown
---
title: "Titre de l'article"
excerpt: "Description courte"
date: "2026-02-03"
image: "/images/article.jpg"
products:
  - asin: "B0XXXXXXXX"
    title: "Nom du produit"
    price: "99€"
    rating: 4.5
    imageUrl: "https://..."
---

# Votre contenu ici...
```

### Créer une Review

Créez un fichier `.md` dans `content/reviews/` :

```markdown
---
title: "Test : Nom du produit"
excerpt: "Notre avis complet"
date: "2026-02-03"
products:
  - asin: "B0XXXXXXXX"
    ...
---

# Contenu de la review...
```

### Créer un Comparatif

Créez un fichier `.md` dans `content/comparatifs/` :

```markdown
---
title: "Produit A vs Produit B"
excerpt: "Comparatif détaillé"
date: "2026-02-03"
comparison:
  - asin: "B0XXXXXXXX"
    title: "Produit A"
    price: "99€"
    rating: 4.5
  - asin: "B0YYYYYYYY"
    title: "Produit B"
    price: "129€"
    rating: 4.7
---

# Contenu du comparatif...
```

## 🚀 Déploiement

### Option 1 : Vercel (Recommandé)

1. Poussez votre code sur GitHub
2. Connectez-vous sur [Vercel](https://vercel.com)
3. Importez votre repository
4. Configurez les variables d'environnement
5. Déployez !

### Option 2 : Netlify

1. Poussez votre code sur GitHub
2. Connectez-vous sur [Netlify](https://netlify.com)
3. Nouveau site depuis Git
4. Build command: `npm run build && npm run export`
5. Publish directory: `out`
6. Configurez les variables d'environnement
7. Déployez !

### Option 3 : GitHub Pages

```bash
npm run export
# Poussez le contenu du dossier /out sur la branche gh-pages
```

## 🔧 Personnalisation

### Modifier les Couleurs

Éditez `styles/globals.css` :

```css
:root {
  --primary: #FF9900;        /* Couleur principale */
  --secondary: #232F3E;      /* Couleur secondaire */
  --text: #333;              /* Couleur du texte */
}
```

### Ajouter un Logo

Placez votre logo dans `public/` et modifiez `components/Header.jsx`

### Modifier le Nom du Site

Éditez `components/Header.jsx` et `pages/_document.jsx`

## 📊 SEO et Optimisations

### SEO Intégré

- ✅ Métadonnées Open Graph
- ✅ Meta descriptions
- ✅ Structure sémantique HTML5
- ✅ Sitemap automatique
- ✅ URLs propres
- ✅ Lazy loading des images

### Performance

- ✅ Static Site Generation (SSG)
- ✅ Optimisation des images
- ✅ Code splitting automatique
- ✅ Minification CSS/JS
- ✅ Preconnect aux domaines externes

## 🔒 Mentions Légales

Le site affiche automatiquement la mention légale Amazon requise :

> "En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises."

Cette mention apparaît :
- Dans le footer
- En bas de chaque article/review

## 📈 Prochaines Étapes

Pour améliorer le site :

1. **Obtenir les clés Amazon PA-API** : Inscrivez-vous au programme Product Advertising API
2. **Ajouter du contenu** : Créez plus d'articles, reviews et comparatifs
3. **Optimiser les images** : Ajoutez des images de qualité
4. **Analytics** : Intégrez Google Analytics
5. **Newsletter** : Ajoutez un formulaire d'inscription
6. **Recherche** : Implémentez une barre de recherche
7. **Catégories** : Organisez le contenu par catégories

## 🆘 Support

Pour toute question ou problème :
- Vérifiez la documentation Next.js
- Consultez la documentation Amazon Product Advertising API
- Vérifiez les logs de build

## 📄 Licence

MIT - Utilisez ce projet librement pour vos sites d'affiliation.

---

**Note** : Ce site est configuré avec l'ID affilié Amazon `bltech-21`. Assurez-vous d'avoir un compte Amazon Associates actif.

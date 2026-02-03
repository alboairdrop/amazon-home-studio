# 🚀 QUICK START - Lancer le site en 5 minutes

## ⚡ Démarrage Ultra-Rapide

### 1. Tester le site localement (2 min)

```bash
cd /root/.openclaw/workspace/amazon-affiliate-site

# Installer les dépendances (si pas déjà fait)
npm install

# Lancer en mode développement
npm run dev
```

➡️ **Ouvrez** : `http://localhost:3000`

### 2. Voir le site déjà buildé (Immédiat)

Le site a déjà été compilé ! Les fichiers statiques sont dans `/out`

```bash
# Voir les fichiers générés
ls -la out/

# Servir le site statique
npx serve out
```

➡️ **Ouvrez** : `http://localhost:3000`

---

## 📝 Personnaliser le Site (10 min)

### Changer le nom du site

**Fichier** : `components/Header.jsx`

```jsx
// Ligne 7
<h1>Votre Nom Ici</h1>  // Au lieu de "Tech Deals"
```

### Changer les couleurs

**Fichier** : `styles/globals.css`

```css
:root {
  --primary: #FF9900;        /* Couleur principale */
  --secondary: #232F3E;      /* Couleur secondaire */
}
```

### Ajouter votre logo

1. Placez `logo.png` dans `/public`
2. Modifiez `components/Header.jsx` :

```jsx
<Link href="/" className="logo">
  <img src="/logo.png" alt="Logo" />
</Link>
```

---

## 📄 Créer du Contenu (15 min)

### Créer un nouvel article

```bash
# Créez le fichier
nano content/articles/mon-article.md
```

**Template minimal** :

```markdown
---
title: "Titre de mon article"
excerpt: "Description courte"
date: "2026-02-03"
products:
  - asin: "B0XXXXXXXX"
    title: "Nom du produit"
    price: "99€"
    rating: 4.5
---

# Mon article

Contenu en Markdown ici...
```

**Trouver un ASIN** :
1. Allez sur Amazon.fr
2. Trouvez un produit
3. L'ASIN est dans l'URL : `amazon.fr/dp/B0XXXXXXXX`

### Rebuild après modifications

```bash
npm run build
```

---

## 🌍 Déployer sur Vercel (5 min)

### Étape 1 : Créer un repo GitHub

```bash
# Sur GitHub, créez un nouveau repository
# Puis :

git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
git branch -M main
git push -u origin main
```

### Étape 2 : Connecter à Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. "New Project"
4. Importez votre repository
5. **Deploy** !

### Étape 3 : Configurer les variables

Dans Vercel > Settings > Environment Variables :

```
AMAZON_AFFILIATE_ID = bltech-21
```

### Étape 4 : Domaine personnalisé (optionnel)

Settings > Domains > Add Domain

---

## 🌐 Déployer sur Netlify (Alternative)

### Étape 1 : Push sur GitHub (même que Vercel)

### Étape 2 : Netlify

1. [netlify.com](https://netlify.com)
2. "New site from Git"
3. Sélectionnez votre repo
4. Build command : `npm run build`
5. Publish directory : `out`
6. **Deploy** !

---

## 📄 Déployer sur GitHub Pages (100% Gratuit)

```bash
# Installez gh-pages
npm install -D gh-pages

# Ajoutez dans package.json :
"scripts": {
  "deploy": "npm run build && gh-pages -d out"
}

# Déployez
npm run deploy
```

Puis activez GitHub Pages dans Settings > Pages > Source : `gh-pages`

➡️ **Site live à** : `https://VOTRE-USERNAME.github.io/VOTRE-REPO/`

---

## ✅ Checklist Post-Déploiement

### Immédiatement

- [ ] Tester toutes les pages
- [ ] Vérifier les liens Amazon
- [ ] Tester sur mobile/tablette
- [ ] Vérifier les images

### Semaine 1

- [ ] Ajouter Google Analytics
- [ ] Soumettre sitemap à Google Search Console
- [ ] Vérifier compte Amazon Associates
- [ ] Créer 5-10 articles de qualité

### Mois 1

- [ ] Publier régulièrement (2-3 articles/semaine)
- [ ] Analyser les conversions
- [ ] Optimiser le SEO
- [ ] Promouvoir sur réseaux sociaux

---

## 📚 Documentation Complète

| Fichier | Contenu |
|---------|---------|
| **README.md** | Documentation principale du projet |
| **DEPLOYMENT.md** | Guide détaillé de déploiement (3 options) |
| **CONTENT_GUIDE.md** | Comment créer du contenu (templates, SEO) |
| **API_SETUP.md** | Configuration Amazon Product Advertising API |

---

## 🆘 Problèmes Fréquents

### Build échoue

```bash
# Nettoyez et réinstallez
rm -rf .next node_modules
npm install
npm run build
```

### Port déjà utilisé

```bash
# Utilisez un autre port
npm run dev -- -p 3001
```

### Images ne s'affichent pas

- Vérifiez le chemin : `/images/nom.jpg` (avec `/` au début)
- Placez les images dans `/public/images/`

### Liens Amazon ne fonctionnent pas

- Format : `https://www.amazon.fr/dp/ASIN?tag=bltech-21`
- Vérifiez que l'ASIN est correct (10 caractères)

---

## 💡 Tips pour Réussir

### Contenu

- **Qualité > Quantité** : Mieux vaut 1 bon article que 10 médiocres
- **Mots-clés** : Utilisez Google Keyword Planner
- **Longueur** : 1500-2500 mots minimum
- **Visuels** : Ajoutez des images, screenshots
- **MAJ régulières** : Mettez à jour les prix et infos

### SEO

- **Titres** : Incluez le mot-clé principal
- **Meta description** : 150-160 caractères
- **URLs** : Courtes et descriptives
- **Internal linking** : Liez vos articles entre eux
- **External links** : Citez des sources de qualité

### Monétisation

- **Placement CTA** : Plusieurs fois dans l'article
- **Comparatifs** : Convertissent mieux que les reviews
- **Prix** : Ne les fixez pas, ils changent
- **Transparence** : Mentionnez que c'est de l'affiliation

### Performance

- **Images** : Optimisez avec TinyPNG
- **Lazy loading** : Déjà implémenté
- **Cache** : Vercel/Netlify gèrent automatiquement
- **Lighthouse** : Visez 90+ sur tous les critères

---

## 📊 Objectifs Premiers Mois

### Mois 1
- ✅ Site live et fonctionnel
- ✅ 10-15 articles publiés
- ✅ Google Analytics configuré
- 🎯 Premiers clics Amazon

### Mois 2-3
- 🎯 20-30 articles au total
- 🎯 Premières ventes
- 🎯 Trafic organique commence
- 🎯 50-100 visiteurs/jour

### Mois 4-6
- 🎯 40-50 articles
- 🎯 Revenus réguliers (100-500€)
- 🎯 200-500 visiteurs/jour
- 🎯 Taux de conversion 2-5%

---

## 🎯 Commandes Essentielles

```bash
# Développement
npm run dev              # Lance le serveur local

# Build
npm run build            # Compile pour production

# Test du build
npx serve out            # Teste le site statique

# Git
git add .                # Ajoute tous les fichiers
git commit -m "message"  # Commit
git push                 # Push vers GitHub

# Déploiement
npm run deploy           # (si gh-pages configuré)
```

---

## 🎉 Félicitations !

Votre site d'affiliation Amazon est **opérationnel** !

**Prochaine étape** : Choisissez votre plateforme de déploiement et lancez-vous !

- 🟢 **Débutant** : GitHub Pages (gratuit, simple)
- 🟡 **Intermédiaire** : Netlify (gratuit, features avancées)
- 🔵 **Pro** : Vercel (gratuit, optimal pour Next.js)

**Temps total de lancement** : Moins de 30 minutes !

---

**Questions ?** Consultez les guides dans le projet :
- README.md
- DEPLOYMENT.md
- CONTENT_GUIDE.md
- API_SETUP.md

**Bon succès ! 🚀💰**

# Guide de Déploiement

Ce guide vous aidera à déployer votre site d'affiliation Amazon sur différentes plateformes gratuites.

## 🚀 Déploiement sur Vercel (Recommandé)

Vercel est la plateforme créée par les développeurs de Next.js. C'est l'option la plus simple et la plus optimisée.

### Étapes :

1. **Créer un compte Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Inscrivez-vous avec GitHub

2. **Pousser votre code sur GitHub**
   ```bash
   # Créez un nouveau repository sur GitHub, puis :
   git remote add origin https://github.com/votre-username/amazon-affiliate-site.git
   git branch -M main
   git push -u origin main
   ```

3. **Importer sur Vercel**
   - Cliquez sur "New Project"
   - Importez votre repository GitHub
   - Vercel détectera automatiquement Next.js
   - Cliquez sur "Deploy"

4. **Configurer les variables d'environnement**
   - Dans les settings du projet sur Vercel
   - Ajoutez :
     - `AMAZON_AFFILIATE_ID` = `bltech-21`
     - `AMAZON_ACCESS_KEY` = votre clé (si PA-API configurée)
     - `AMAZON_SECRET_KEY` = votre secret (si PA-API configurée)

5. **Domaine personnalisé (optionnel)**
   - Dans Settings > Domains
   - Ajoutez votre domaine
   - Suivez les instructions DNS

### ✅ Avantages Vercel
- Déploiement automatique à chaque push
- Preview deployments pour les PR
- CDN global ultra-rapide
- SSL automatique
- Analytics intégrés

---

## 🌐 Déploiement sur Netlify

Alternative populaire avec d'excellentes performances.

### Étapes :

1. **Créer un compte Netlify**
   - Allez sur [netlify.com](https://netlify.com)
   - Inscrivez-vous avec GitHub

2. **Pousser sur GitHub** (même étape que Vercel)

3. **Nouveau site sur Netlify**
   - Cliquez sur "New site from Git"
   - Sélectionnez votre repository
   - Build settings :
     - Build command : `npm run build`
     - Publish directory : `out`
   - Deploy !

4. **Variables d'environnement**
   - Site settings > Environment variables
   - Ajoutez les mêmes variables que Vercel

5. **Domaine personnalisé**
   - Domain settings > Add custom domain
   - Configurez vos DNS

### ✅ Avantages Netlify
- Interface très intuitive
- Forms intégrés (pour newsletter)
- Functions serverless
- Split testing A/B
- CDN rapide

---

## 📄 Déploiement sur GitHub Pages

Option 100% gratuite, idéale pour commencer.

### Étapes :

1. **Pousser sur GitHub**
   ```bash
   git remote add origin https://github.com/votre-username/amazon-affiliate-site.git
   git branch -M main
   git push -u origin main
   ```

2. **Modifier next.config.js**
   
   Ajoutez le basePath si votre repo n'est pas `username.github.io` :
   ```js
   const nextConfig = {
     output: 'export',
     basePath: '/amazon-affiliate-site', // Nom de votre repo
     images: { unoptimized: true },
   }
   ```

3. **Build et deploy**
   ```bash
   npm run build
   
   # Installez gh-pages si pas déjà fait
   npm install -D gh-pages
   
   # Déployez
   npx gh-pages -d out
   ```

4. **Activer GitHub Pages**
   - Repository settings > Pages
   - Source : branche `gh-pages`
   - Save

5. **Votre site sera disponible à :**
   - `https://votre-username.github.io/amazon-affiliate-site/`

### Script de déploiement automatique

Ajoutez dans `package.json` :
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d out"
}
```

Puis déployez avec :
```bash
npm run deploy
```

### ⚠️ Limitations GitHub Pages
- Pas de variables d'environnement serveur
- Pas de serverless functions
- Seulement sites statiques

---

## 🔧 Configuration Post-Déploiement

### 1. Vérifier le site
- Testez toutes les pages
- Vérifiez les liens Amazon
- Testez la responsiveness

### 2. SEO
- Soumettez votre sitemap : `https://votre-site.com/sitemap.xml`
- Google Search Console : ajoutez votre propriété
- Bing Webmaster Tools

### 3. Analytics
- Ajoutez Google Analytics
- Configurez les objectifs de conversion
- Suivez les clics sur les liens Amazon

### 4. Amazon Associates
- Connectez-vous à Amazon Associates
- Vérifiez que votre tag `bltech-21` est actif
- Ajoutez votre site dans les propriétés

---

## 📊 Monitoring et Optimisations

### Performance
- Utilisez Lighthouse pour auditer
- PageSpeed Insights de Google
- WebPageTest.org

### Conversions
- Amazon Associates Dashboard
- Google Analytics > Conversions
- Heatmaps (Hotjar, Microsoft Clarity)

### Contenu
- Ajoutez régulièrement du nouveau contenu
- Mettez à jour les prix et disponibilités
- Répondez aux tendances

---

## 🆘 Dépannage

### Build échoue
```bash
# Nettoyez le cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Images ne s'affichent pas
- Vérifiez que les images sont dans `/public`
- Chemins relatifs : `/images/nom.jpg` (pas `./images`)

### Liens Amazon ne fonctionnent pas
- Vérifiez l'ASIN dans le frontmatter
- Format : `https://www.amazon.fr/dp/ASIN?tag=bltech-21`

### Variables d'environnement
- Redéployez après avoir ajouté des variables
- Vercel/Netlify : clear cache and redeploy

---

## 🎯 Checklist de Lancement

Avant de lancer votre site :

- [ ] Build réussit sans erreur
- [ ] Tous les liens Amazon fonctionnent
- [ ] Site responsive (mobile/tablet/desktop)
- [ ] robots.txt configuré
- [ ] Sitemap.xml généré
- [ ] Meta descriptions sur toutes les pages
- [ ] Images optimisées
- [ ] Mentions légales Amazon présentes
- [ ] Google Analytics configuré
- [ ] Site soumis à Google Search Console
- [ ] Compte Amazon Associates vérifié
- [ ] Domaine personnalisé configuré (optionnel)

---

## 🚀 Vous êtes prêt !

Choisissez votre plateforme préférée et déployez votre site en quelques minutes.

**Notre recommandation :** Commencez avec Vercel pour la simplicité, ou GitHub Pages si vous voulez 100% gratuit.

Bon succès avec votre site d'affiliation ! 🎉

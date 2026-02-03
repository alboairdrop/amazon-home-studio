# Guide de Création de Contenu

Ce guide vous explique comment créer et publier du contenu sur votre site d'affiliation Amazon.

## 📝 Structure d'un Article Markdown

Chaque contenu est un fichier `.md` (Markdown) avec des métadonnées en frontmatter (YAML).

### Template de base

```markdown
---
title: "Titre de votre contenu"
excerpt: "Description courte qui apparaît dans les listings"
date: "2026-02-03"
image: "/images/votre-image.jpg"
---

# Introduction

Votre contenu ici en Markdown...

## Section 1

Paragraphes, **gras**, *italique*, [liens](https://example.com)

### Sous-section

- Liste
- À puces

1. Liste
2. Numérotée

> Citation

\`\`\`javascript
// Bloc de code
console.log("Hello");
\`\`\`
```

---

## 📄 Types de Contenu

### 1. Articles (`content/articles/`)

**Usage :** Guides d'achat, conseils, tendances, actualités

**Template :**

```markdown
---
title: "10 Meilleurs Casques Gaming en 2026"
excerpt: "Notre sélection complète des meilleurs casques pour joueurs PC et console"
date: "2026-02-03"
image: "/images/casques-gaming.jpg"
products:
  - asin: "B0XXXXXXXX"
    title: "Logitech G Pro X"
    price: "129€"
    rating: 4.5
    imageUrl: "https://m.media-amazon.com/images/I/..."
    description: "Meilleur son surround"
  - asin: "B0YYYYYYYY"
    title: "SteelSeries Arctis Nova Pro"
    price: "349€"
    rating: 4.7
    imageUrl: "https://m.media-amazon.com/images/I/..."
    description: "Premium wireless"
---

# Introduction

Le gaming audio a énormément évolué...

## Critères de Sélection

### 1. Qualité Audio
...

### 2. Confort
...

## Notre Top 5

### 1. Logitech G Pro X
Le meilleur rapport qualité-prix...

[Reste de votre article]
```

### 2. Reviews (`content/reviews/`)

**Usage :** Test détaillé d'un produit spécifique

**Template :**

```markdown
---
title: "Test Complet : Samsung Galaxy S24 Ultra"
excerpt: "Notre avis détaillé après 2 semaines d'utilisation intensive"
date: "2026-02-03"
image: "/images/galaxy-s24-ultra.jpg"
products:
  - asin: "B0XXXXXXXX"
    title: "Samsung Galaxy S24 Ultra - 512 Go"
    price: "1 459€"
    rating: 4.8
    imageUrl: "https://..."
    description: "Le flagship Samsung 2024"
---

# Introduction

Après deux semaines d'utilisation intensive du Galaxy S24 Ultra...

## Design et Ergonomie

### Prise en main
Le S24 Ultra adopte...

## Performances

### Benchmarks
- Geekbench : XXX
- 3DMark : XXX

## Appareil Photo

### Photos de jour
Excellente qualité...

### Photos de nuit
Le mode nuit...

## Autonomie

En utilisation normale...

## Verdict Final

**Note : 9/10**

**Points forts :**
- Écran sublime
- Performances exceptionnelles
- Excellente autonomie

**Points faibles :**
- Prix élevé
- Lourd
- Pas de chargeur inclus

## Où Acheter

Disponible sur Amazon...
```

### 3. Comparatifs (`content/comparatifs/`)

**Usage :** Comparer plusieurs produits similaires

**Template :**

```markdown
---
title: "iPad Pro vs Surface Pro vs Galaxy Tab S9 : Quel est le Meilleur ?"
excerpt: "Comparatif complet des 3 meilleures tablettes premium de 2026"
date: "2026-02-03"
image: "/images/tablettes-comparatif.jpg"
comparison:
  - asin: "B0XXXXXXXX"
    title: "iPad Pro 12.9\" M2"
    price: "1 469€"
    rating: 4.8
    description: "Puce M2, ProMotion 120Hz, Apple Pencil 2"
  - asin: "B0YYYYYYYY"
    title: "Surface Pro 9"
    price: "1 299€"
    rating: 4.6
    description: "Intel i7, Windows 11, Clavier Type Cover"
  - asin: "B0ZZZZZZZZ"
    title: "Samsung Galaxy Tab S9 Ultra"
    price: "1 199€"
    rating: 4.7
    description: "Snapdragon 8 Gen 2, S Pen inclus"
---

# Introduction

Les tablettes premium sont devenues de véritables ordinateurs portables...

## Tableau Comparatif

[Le tableau s'affiche automatiquement via le frontmatter `comparison`]

## Critères de Comparaison

### 1. Performances
...

### 2. Écran
...

### 3. Système d'exploitation
...

## Notre Recommandation

**Pour les créatifs : iPad Pro**
Raisons...

**Pour la productivité : Surface Pro**
Raisons...

**Pour le multimédia : Galaxy Tab S9**
Raisons...
```

---

## 🎯 Bonnes Pratiques

### 1. Trouver les ASINs Amazon

1. Allez sur la page du produit sur Amazon.fr
2. L'ASIN est dans l'URL : `amazon.fr/dp/B0XXXXXXXX`
3. Ou dans les détails du produit

### 2. Images de Produits

**Option 1 : Images Amazon officielles**

Format : `https://m.media-amazon.com/images/I/[CODE]._AC_SL1500_.jpg`

Trouvez le code en faisant clic-droit > "Copier l'adresse de l'image" sur Amazon.

**Option 2 : Vos propres images**

- Placez-les dans `public/images/`
- Référencez : `/images/nom-image.jpg`
- Optimisez-les (WebP, max 200ko)

### 3. SEO - Optimisation du Titre

**❌ Mauvais :**
- "Test casque"
- "Review"

**✅ Bon :**
- "Test Complet Sony WH-1000XM5 : Le Meilleur Casque 2026 ?"
- "MacBook Air M3 vs MacBook Pro M3 : Lequel Choisir ?"

### 4. Excerpt (Description)

**Règles :**
- 150-160 caractères
- Résumé attractif
- Inclure des mots-clés
- Call-to-action subtil

**Exemple :**
> "Découvrez notre test complet de l'iPhone 15 Pro après 1 mois d'utilisation. Performances, appareil photo, autonomie : notre verdict détaillé."

### 5. Structure de l'Article

**Format recommandé :**

1. **Introduction** (1-2 paragraphes)
   - Contexte
   - Ce que vous allez découvrir

2. **Contenu principal** (sections H2/H3)
   - Tests/comparaisons
   - Détails techniques
   - Expérience utilisateur

3. **Verdict/Conclusion**
   - Résumé
   - Pour qui ?
   - Note éventuelle

4. **CTA** (Call-to-Action)
   - "Voir sur Amazon"
   - "Comparer les prix"

---

## 🚀 Workflow de Publication

### Étape 1 : Créer le fichier

```bash
# Créez le fichier dans le bon dossier
touch content/articles/mon-nouvel-article.md
```

### Étape 2 : Écrire le contenu

Utilisez un éditeur Markdown (VS Code, Typora, etc.)

### Étape 3 : Tester en local

```bash
npm run dev
# Visitez http://localhost:3000
```

### Étape 4 : Commit et push

```bash
git add content/
git commit -m "Ajout article: Titre de l'article"
git push
```

### Étape 5 : Déploiement automatique

Si vous êtes sur Vercel/Netlify, le site se met à jour automatiquement !

---

## 💡 Idées de Contenu

### Articles

- "Top 10 des meilleurs [catégorie] en [année]"
- "Guide d'achat : Comment choisir son [produit] ?"
- "[Produit] pour [usage spécifique]"
- "Les tendances [catégorie] en [année]"
- "[Budget] vs [Premium] : Quelle différence ?"

### Reviews

- "Test complet : [Produit]"
- "[Produit] après [durée] d'utilisation"
- "Unboxing et premières impressions : [Produit]"
- "Avantages et inconvénients du [Produit]"

### Comparatifs

- "[Produit A] vs [Produit B] : Lequel choisir ?"
- "Les 3 meilleurs [catégorie] comparés"
- "[Marque A] vs [Marque B] : La bataille"
- "Budget vs Premium : [Catégorie]"

---

## 📊 Optimisation pour la Conversion

### 1. Placement des produits

- **En haut** : Produit principal/recommandé
- **Milieu** : Alternatives
- **Bas** : Résumé avec tous les produits

### 2. Call-to-Action efficaces

**❌ Évitez :**
- "Cliquez ici"
- "Lien"

**✅ Utilisez :**
- "Voir le prix sur Amazon"
- "Découvrir sur Amazon"
- "Vérifier la disponibilité"
- "Comparer les offres"

### 3. Mentions de prix

**Toujours préciser :**
- "Prix indicatif"
- "Prix constaté le [date]"
- "Voir le prix actuel sur Amazon"

Les prix changent, ne les fixez pas dans le contenu.

### 4. Transparence

**Obligatoire :**

Mentionner dans chaque article :
> "En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises."

(Déjà inclus automatiquement dans le footer et en bas d'article)

---

## 🎨 Markdown - Aide-mémoire

```markdown
# Titre 1
## Titre 2
### Titre 3

**Gras**
*Italique*
***Gras et italique***

[Texte du lien](https://url.com)

![Texte alternatif](/images/image.jpg)

> Citation

- Liste non ordonnée
- Item 2
  - Sous-item

1. Liste ordonnée
2. Item 2

---

Ligne horizontale

`code inline`

\`\`\`javascript
// Bloc de code
const x = 10;
\`\`\`

| Colonne 1 | Colonne 2 |
|-----------|-----------|
| Donnée    | Donnée    |
```

---

## ✅ Checklist Avant Publication

- [ ] Titre optimisé SEO (50-60 caractères)
- [ ] Excerpt accrocheur (150-160 caractères)
- [ ] Date correcte
- [ ] Image featured définie
- [ ] ASINs vérifiés
- [ ] Liens Amazon fonctionnels
- [ ] Orthographe/grammaire vérifiée
- [ ] Structure H2/H3 claire
- [ ] Images optimisées
- [ ] Testé en local
- [ ] Responsive vérifié

---

## 🆘 Besoin d'Aide ?

- **Markdown** : [Guide Markdown](https://www.markdownguide.org/)
- **Frontmatter** : [YAML Spec](https://yaml.org/)
- **ASINs** : Cherchez dans l'URL Amazon
- **Problèmes** : Vérifiez les logs de build

---

Bon writing ! 🚀✍️

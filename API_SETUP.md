# Configuration de l'API Amazon Product Advertising

Ce guide vous aide à configurer l'API Amazon Product Advertising pour obtenir automatiquement les prix, images et détails des produits.

## ⚠️ Important

Le site fonctionne **sans** l'API Product Advertising. Vous pouvez :
- Créer des liens d'affiliation manuellement
- Utiliser les images Amazon publiques
- Entrer les prix manuellement dans le frontmatter

L'API est **optionnelle** mais permet d'automatiser :
- Récupération des prix en temps réel
- Images de produits officielles
- Données techniques
- Disponibilité en stock

## 📋 Prérequis

1. **Compte Amazon Associates actif**
   - Inscrivez-vous sur [https://partenaires.amazon.fr](https://partenaires.amazon.fr)
   - ID affilié : `bltech-21` (déjà configuré dans le site)

2. **Accès à Product Advertising API**
   - Après 3 ventes qualifiées sur Amazon Associates
   - OU demande directe via le support Amazon

## 🔑 Obtenir vos Clés API

### Étape 1 : Accéder à PA-API

1. Connectez-vous à [Amazon Associates](https://partenaires.amazon.fr)
2. Menu **Outils** > **Product Advertising API**
3. Cliquez sur **"Gérer vos informations d'identification"**

### Étape 2 : Créer des clés

1. Cliquez sur **"Ajouter des informations d'identification"**
2. Notez vos clés :
   - **Access Key ID** (20 caractères)
   - **Secret Access Key** (40 caractères)
   
⚠️ **IMPORTANT** : La clé secrète n'est affichée qu'une seule fois ! Sauvegardez-la.

### Étape 3 : Configurer le site

Éditez `.env.local` :

```env
AMAZON_AFFILIATE_ID=bltech-21
AMAZON_ACCESS_KEY=AKIAIOSFODNN7EXAMPLE
AMAZON_SECRET_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
AMAZON_REGION=fr
AMAZON_HOST=webservices.amazon.fr
```

## 🛠️ Installer le SDK (optionnel)

Si vous voulez utiliser l'API complète :

```bash
npm install amazon-paapi
```

Puis créez `lib/amazonPAAPI.js` :

```javascript
const amazonPaapi = require('amazon-paapi');

const commonParameters = {
  AccessKey: process.env.AMAZON_ACCESS_KEY,
  SecretKey: process.env.AMAZON_SECRET_KEY,
  PartnerTag: process.env.AMAZON_AFFILIATE_ID,
  PartnerType: 'Associates',
  Marketplace: 'www.amazon.fr'
};

async function getProductDetails(asin) {
  const requestParameters = {
    ItemIds: [asin],
    Resources: [
      'ItemInfo.Title',
      'Offers.Listings.Price',
      'Images.Primary.Large',
      'ItemInfo.Features',
      'CustomerReviews.StarRating'
    ]
  };

  try {
    const data = await amazonPaapi.GetItems(commonParameters, requestParameters);
    
    if (data.ItemsResult && data.ItemsResult.Items) {
      const item = data.ItemsResult.Items[0];
      
      return {
        asin: item.ASIN,
        title: item.ItemInfo.Title.DisplayValue,
        price: item.Offers?.Listings?.[0]?.Price?.DisplayAmount,
        imageUrl: item.Images?.Primary?.Large?.URL,
        rating: item.CustomerReviews?.StarRating?.Value,
        url: item.DetailPageURL
      };
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

module.exports = { getProductDetails };
```

## 🔄 Utilisation dans le Site

### Option 1 : Frontmatter manuel (Actuel)

```markdown
---
products:
  - asin: "B0XXXXXXXX"
    title: "Nom du produit"
    price: "99€"
    rating: 4.5
    imageUrl: "https://..."
---
```

**Avantages :**
- Fonctionne sans API
- Contrôle total
- Pas de limite d'appels

**Inconvénients :**
- Prix manuels
- Mise à jour manuelle

### Option 2 : Avec l'API (Automatique)

Créez `pages/api/product/[asin].js` :

```javascript
import { getProductDetails } from '../../../lib/amazonPAAPI';

export default async function handler(req, res) {
  const { asin } = req.query;
  
  try {
    const product = await getProductDetails(asin);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
}
```

Puis utilisez dans votre composant :

```javascript
useEffect(() => {
  fetch(`/api/product/${asin}`)
    .then(res => res.json())
    .then(data => setProduct(data));
}, [asin]);
```

**Avantages :**
- Prix en temps réel
- Données toujours à jour
- Images officielles

**Inconvénients :**
- Nécessite l'API
- Limites d'appels (1 req/sec, 8640/jour)
- Build time plus long

## 📊 Limites de l'API

### Quotas

- **Gratuit** : 1 requête/seconde, 8 640 requêtes/jour
- **Payant** : Augmentation possible avec frais

### Best Practices

1. **Caching** : Stockez les résultats
2. **Static Generation** : Récupérez lors du build
3. **Fallback** : Données manuelles si API fail

### Exemple avec cache :

```javascript
const cache = new Map();
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24h

async function getCachedProduct(asin) {
  const cached = cache.get(asin);
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  
  const data = await getProductDetails(asin);
  cache.set(asin, {
    data,
    timestamp: Date.now()
  });
  
  return data;
}
```

## 🚀 Mode Hybride (Recommandé)

Combinez manuel + API pour le meilleur des deux mondes :

```javascript
async function getProduct(frontmatterProduct) {
  // Essayez l'API d'abord
  try {
    const apiData = await getProductDetails(frontmatterProduct.asin);
    return {
      ...frontmatterProduct, // Données manuelles en fallback
      ...apiData             // Données API en priorité
    };
  } catch {
    // Si l'API échoue, utilisez les données manuelles
    return frontmatterProduct;
  }
}
```

## ⚙️ Variables d'Environnement

### Développement (.env.local)

```env
AMAZON_AFFILIATE_ID=bltech-21
AMAZON_ACCESS_KEY=votre_access_key
AMAZON_SECRET_KEY=votre_secret_key
AMAZON_REGION=fr
AMAZON_HOST=webservices.amazon.fr
```

### Production (Vercel/Netlify)

Ajoutez les mêmes variables dans :
- **Vercel** : Settings > Environment Variables
- **Netlify** : Site settings > Environment variables
- **GitHub Pages** : Pas de support (utilisez mode manuel)

## 🔒 Sécurité

### ❌ Ne JAMAIS

- Commiter `.env.local` dans Git
- Exposer les clés côté client
- Partager vos clés secrètes

### ✅ TOUJOURS

- Garder les clés dans `.env.local`
- Utiliser les variables d'environnement
- API calls côté serveur uniquement
- Régénérer les clés si compromises

## 🧪 Tester l'API

Script de test (`test-api.js`) :

```javascript
require('dotenv').config({ path: '.env.local' });
const { getProductDetails } = require('./lib/amazonPAAPI');

async function test() {
  const asin = 'B0CY7V5QMN'; // Sony WH-1000XM5
  console.log('Testing API with ASIN:', asin);
  
  const product = await getProductDetails(asin);
  console.log('Result:', product);
}

test();
```

Exécutez :

```bash
node test-api.js
```

## 📚 Ressources

- [Documentation PA-API officielle](https://webservices.amazon.fr/paapi5/documentation/)
- [SDK amazon-paapi](https://www.npmjs.com/package/amazon-paapi)
- [Amazon Associates Central](https://partenaires.amazon.fr)
- [Forum PA-API](https://forums.aws.amazon.com/forum.jspa?forumID=9)

## ❓ FAQ

### L'API est-elle obligatoire ?

**Non !** Le site fonctionne parfaitement sans. Vous pouvez :
- Entrer les infos produits manuellement
- Utiliser des liens d'affiliation simples
- Copier les images Amazon publiques

### Comment obtenir l'accès PA-API ?

Deux options :
1. Faire 3 ventes via Amazon Associates (délai ~1 mois)
2. Demander l'accès directement au support

### L'API est-elle gratuite ?

Oui, jusqu'à 8 640 requêtes/jour (1/seconde).

### Que se passe-t-il si je dépasse les limites ?

Les requêtes supplémentaires sont bloquées jusqu'au lendemain. Utilisez du caching.

### Puis-je utiliser l'API sans compte Associates ?

Non, vous devez avoir un compte Amazon Associates actif.

---

## ✅ Résumé

1. **Sans API** : Site fonctionne parfaitement, données manuelles
2. **Avec API** : Automatisation, prix en temps réel, limites à respecter
3. **Hybride** : Meilleure solution (API + fallback manuel)

Le site actuel utilise le mode **manuel** pour fonctionner immédiatement. Vous pouvez ajouter l'API plus tard quand vous êtes prêt.

---

Besoin d'aide ? Consultez la [documentation officielle](https://webservices.amazon.fr/paapi5/documentation/) ou le forum de la communauté.

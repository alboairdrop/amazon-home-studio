# 🚀 DÉPLOIEMENT VERCEL - GUIDE RAPIDE

## ✅ Ce qui est déjà fait
- ✅ Site créé et compilé
- ✅ 6 articles reviews publiés (Shure MV7, Blue Yeti, Rode PodMic, Audio-Technica AT2020, Focusrite Scarlett, ATH-M50X)
- ✅ Code commité dans Git
- ✅ ID affilié bltech-21 intégré

---

## 🚀 DÉPLOIEMENT EN 5 MINUTES

### Étape 1 : Créer un compte GitHub (si pas déjà fait)

1. Va sur https://github.com
2. Sign up (gratuit)
3. Confirme ton email

---

### Étape 2 : Créer un repository GitHub

1. Sur GitHub, clique **"New repository"** (bouton vert)
2. Nomme-le : `amazon-home-studio` (ou autre nom)
3. **Laisse tout par défaut** (public, pas de README)
4. Clique **"Create repository"**

5. GitHub va te montrer des commandes. **Utilise celles-ci** :

```bash
# Sur ton serveur, exécute ces commandes :
cd /root/.openclaw/workspace/amazon-affiliate-site

git remote add origin https://github.com/TON-USERNAME/amazon-home-studio.git
git branch -M main
git push -u origin main
```

**Remplace `TON-USERNAME`** par ton username GitHub !

---

### Étape 3 : Déployer sur Vercel

1. Va sur https://vercel.com
2. **Sign up with GitHub** (connexion GitHub)
3. Autorise Vercel à accéder à tes repos
4. Clique **"New Project"** ou **"Import Project"**
5. Sélectionne ton repo `amazon-home-studio`
6. Vercel détecte automatiquement Next.js ✅
7. Dans **Environment Variables**, ajoute :
   ```
   AMAZON_AFFILIATE_ID = bltech-21
   ```
8. Clique **"Deploy"** 🚀

⏳ **Attends 1-2 minutes...**

✅ **TON SITE EST LIVE !**

---

## 🎉 RÉSULTAT

Tu auras un lien comme :
```
https://amazon-home-studio.vercel.app
```

**C'est ton site en ligne, accessible partout dans le monde !** 🌍

---

## 🔧 PROCHAINES ÉTAPES

### Immédiatement
- [ ] Teste le site sur mobile
- [ ] Vérifie que les liens Amazon fonctionnent
- [ ] Partage le lien à quelques amis pour feedback

### Cette semaine
- [ ] Attendre les 9 articles restants (comparatifs, guides)
- [ ] Les publier sur le site
- [ ] Configurer Google Analytics
- [ ] Soumettre à Google Search Console

### Ce mois
- [ ] Publier 2-3 nouveaux articles par semaine
- [ ] Premiers clics Amazon
- [ ] Premières ventes 💰

---

## 💡 MIGRATION WORDPRESS + DOMAINE (Plus tard)

Quand tu voudras passer à WordPress avec un nom de domaine :

### 1. Choisir un nom de domaine

**Suggestions pour Home Studio** :
- `studiohome.fr`
- `mon-home-studio.fr`
- `podcast-studio.fr`
- `home-studio-guide.fr`
- `audio-studio.fr`

**Acheter sur** :
- OVH.com (~10€/an)
- Gandi.net (~15€/an)
- Namecheap.com (~12€/an)

### 2. Hébergement WordPress

**Options** :
- **o2switch** (~5€/mois, français, illimité, excellent)
- **Hostinger** (~3€/mois, bon rapport qualité/prix)
- **Kinsta** (~30€/mois, premium)

### 3. Migration

**Deux options** :

**Option A - Site Nextjs sur domaine personnalisé**
1. Achète le domaine
2. Dans Vercel → Settings → Domains
3. Ajoute ton domaine
4. Configure les DNS (Vercel te guide)
5. ✅ Ton site Next.js sur ton domaine !

**Option B - Migration vers WordPress**
1. Installe WordPress chez l'hébergeur
2. Thème : Astra, GeneratePress (légers, SEO-friendly)
3. Plugins :
   - **AAWP** (Amazon Affiliate WordPress Plugin) - 49€
   - **Yoast SEO** (gratuit)
   - **WP Rocket** (cache/vitesse) - 49€
4. Copie/colle ton contenu
5. Configure les liens Amazon

**Avantages WordPress** :
- ✅ Interface plus simple pour éditer
- ✅ Plugins puissants (AAWP pour Amazon)
- ✅ Thèmes professionnels
- ✅ Plus facile pour gérer beaucoup de contenu

**Avantages Next.js actuel** :
- ✅ Plus rapide (statique)
- ✅ Gratuit (Vercel)
- ✅ Parfait pour débuter
- ✅ Excellent SEO

---

## 🎯 MA RECOMMANDATION

**Maintenant (gratuit)** :
- Reste sur Vercel avec Next.js
- Publie 30-50 articles
- Valide que ça marche (trafic, ventes)

**Dans 3-6 mois (si ça marche)** :
- Achète un bon domaine
- Migre vers WordPress si tu veux
- Ou garde Next.js + domaine personnalisé sur Vercel

**Pourquoi attendre ?**
- Pas de risque financier au début
- Tu valides le concept
- Tu apprends ce qui marche
- Tu investis APRÈS avoir des résultats

---

## 📊 NOMS DE DOMAINE - IDÉES

### Pour Home Studio & Podcasting

**Courts et mémorables** :
- `studiohome.fr` ⭐
- `podcast-guide.fr` ⭐
- `audio-studio.fr`
- `home-studio.info`

**Descriptifs SEO** :
- `guide-home-studio.fr` ⭐⭐
- `meilleur-micro-podcast.fr`
- `home-studio-pro.fr`
- `podcast-materiel.fr`

**Brandables** :
- `soundbox.fr`
- `podcastlab.fr`
- `studibox.fr`
- `audiomate.fr`

**Mon conseil** : `guide-home-studio.fr` - SEO fort, descriptif, brandable

**Vérifier disponibilité** : https://www.ovh.com/fr/domaines/

---

## 🆘 BESOIN D'AIDE ?

Si tu as des problèmes :

1. **GitHub** : https://docs.github.com/
2. **Vercel** : https://vercel.com/docs
3. **Ou demande-moi** : Je peux t'aider !

---

## ✅ CHECKLIST DÉPLOIEMENT

- [ ] Compte GitHub créé
- [ ] Repository créé
- [ ] Code pushé sur GitHub
- [ ] Compte Vercel créé (via GitHub)
- [ ] Projet importé sur Vercel
- [ ] Variable AMAZON_AFFILIATE_ID configurée
- [ ] Site déployé ✅
- [ ] Site testé (mobile + desktop)
- [ ] Liens Amazon vérifiés

**Temps total** : 10-15 minutes max !

---

**Bon déploiement ! 🚀**

Une fois live, envoie-moi le lien ! 😊

#!/bin/bash

# Script de déploiement automatique pour le site Amazon Home Studio
# Utilisation: ./deploy.sh

set -e

echo "🚀 Déploiement du site Amazon Home Studio"
echo "==========================================="
echo ""

# Vérifier que nous sommes dans le bon dossier
if [ ! -f "package.json" ]; then
    echo "❌ Erreur: package.json non trouvé. Êtes-vous dans le dossier du site?"
    exit 1
fi

# Vérifier l'authentification GitHub
echo "📝 Vérification de l'authentification GitHub..."
if ! gh auth status &> /dev/null; then
    echo "⚠️  Vous n'êtes pas connecté à GitHub."
    echo "   Lançons la connexion GitHub..."
    gh auth login
fi

echo ""
echo "✅ GitHub authentifié !"
echo ""

# Demander le nom du repository
read -p "📦 Nom du repository GitHub (ex: amazon-home-studio): " REPO_NAME
REPO_NAME=${REPO_NAME:-amazon-home-studio}

echo ""
echo "🔨 Création du repository GitHub: $REPO_NAME"

# Créer le repository sur GitHub
gh repo create "$REPO_NAME" --public --source=. --remote=origin --push

echo ""
echo "✅ Code poussé sur GitHub !"
echo ""

# Afficher le lien du repo
GITHUB_USER=$(gh api user -q .login)
REPO_URL="https://github.com/$GITHUB_USER/$REPO_NAME"

echo "📍 Votre repository: $REPO_URL"
echo ""

# Instructions Vercel
echo "🌐 PROCHAINE ÉTAPE: VERCEL"
echo "=========================="
echo ""
echo "1. Allez sur: https://vercel.com/signup"
echo "2. Connectez-vous avec GitHub"
echo "3. Cliquez 'New Project'"
echo "4. Sélectionnez le repo: $REPO_NAME"
echo "5. Ajoutez cette variable d'environnement:"
echo "   - Name: AMAZON_AFFILIATE_ID"
echo "   - Value: bltech-21"
echo "6. Cliquez 'Deploy' 🚀"
echo ""
echo "⏳ Attendez 2-3 minutes..."
echo "✅ Votre site sera live sur: https://$REPO_NAME.vercel.app"
echo ""
echo "🎉 Félicitations ! Votre site d'affiliation est déployé !"

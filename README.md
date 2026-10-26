# Ma Page Dev — Portfolio professionnel

Portfolio de Khaoula Meherzi, réalisé dans le cadre de ma formation Conceptrice Développeuse d'Applications (CDA) à l'AFPA.

## Présentation

Versionnée avec Git et publiée avec GitHub Pages.
Ce projet est une page de présentation professionnelle comprenant :

- Une présentation de mon parcours
- Mes compétences techniques
- Mes projets de développement
- Une section contact

## Technologies utilisées

- HTML5
- CSS3
- JavaScript (environnement Vite)
- Vite 8
- Tailwind CSS 4
- Node.js 24
- npm
- Prettier
- ESLint

## Mon poste de développement

- Système : Windows 11, architecture x64
- Éditeur : Visual Studio Code
- Node.js : version 24
- Gestionnaire de paquets : npm
- SDK .NET : 10.0.402
- Runtime .NET : 10.0.13
- Extensions : C# Dev Kit, C#, .NET Install Tool, Tailwind CSS IntelliSense, Prettier, ESLint et EditorConfig

## Installer et lancer le projet

Ouvrir un terminal dans le dossier du projet :

```powershell
cd C:\dev\ma-page-dev
```

Installer les dépendances :

```powershell
npm ci
```

Démarrer le serveur de développement :

```powershell
npm run dev
```

Ouvrir l'adresse locale affichée par Vite.

## Routine qualité

Avant de livrer le projet :

```powershell
npm run verifier
```

Cette commande exécute successivement :

1. `npm run format:check`
2. `npm run lint`
3. `npm run build`

Elle s'arrête si une étape échoue.

Pour corriger automatiquement le formatage :

```powershell
npm run format
```

Pour vérifier la version construite :

```powershell
npm run preview
```

## Structure du projet

- `index.html` : page principale
- `src/style.css` : thème Tailwind et styles
- `public/` : ressources publiques
- `vite.config.js` : configuration de Vite
- `package.json` : dépendances et scripts
- `dist/` : fichiers générés pour la publication

## Projet C# de découverte

Un premier projet console C# a également été réalisé dans :

`C:\dev\essais\bonjour-dotnet`

Il utilise .NET 10 et un fichier `global.json` pour sélectionner un SDK compatible.

## Évolution du projet

Le portfolio sera enrichi progressivement pendant la formation CDA, notamment avec de nouveaux projets et des fonctionnalités supplémentaires.

## Règles du dépôt

Les modifications sont enregistrées avec Git et partagées sur GitHub.

**Convention des commits :**

- `feat:` nouvelle fonctionnalité.
- `fix:` correction d'un bug.
- `docs:` modification de la documentation.
- `test:` ajout ou modification de tests.
- `chore:` configuration ou maintenance.

**Justification :** cette convention permet de comprendre rapidement les modifications, de faciliter le suivi du projet et la collaboration en équipe.

**Sécurité :** les fichiers confidentiels (`.env`), les dépendances (`node_modules/`) et les fichiers générés (`dist/`) sont exclus du dépôt grâce à `.gitignore`.

### GitHub Flow

- Partir de la branche `main` à jour.
- Créer une branche pour chaque modification.
- Enregistrer les modifications avec des commits explicites.
- Envoyer la branche sur GitHub avec `git push`.
- Ouvrir une Pull Request liée à une Issue.
- Relire les modifications et vérifier les tests.
- Fusionner dans `main` après validation.
- Supprimer la branche temporaire après fusion.

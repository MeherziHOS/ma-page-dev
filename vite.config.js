import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// Chemin du dossier racine du projet
const racine = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    // Chemins relatifs pour la publication
    base: './',

    // Activation de Tailwind CSS
    plugins: [tailwindcss()],

    // Configuration du serveur de développement
    server: {
        host: true,
        watch: {
            usePolling: process.env.DANS_DOCKER === 'oui',
        },
    },

    // Configuration de la construction du site
    build: {
        rolldownOptions: {
            input: {
                accueil: resolve(racine, 'index.html'),
            },
        },
    },
});

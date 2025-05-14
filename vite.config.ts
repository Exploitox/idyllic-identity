import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { keycloakify } from 'keycloakify/vite-plugin';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    tailwindcss(),
    keycloakify({
      themeName: 'keycloakify-starter-svelte',
      accountThemeImplementation: 'none',
    }),
  ],
});

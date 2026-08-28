import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  trailingSlash: 'always',

  build: {
    format: 'directory', // Ensures pages are built as /page/index.html
  },

  site: 'https://quivr.ad-pages.com',

  integrations: [sitemap()],
  
  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 3000,
    open: true, 
  },
});
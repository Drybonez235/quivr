import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";
//npm install tailwindcss @tailwindcss/vite

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',

  build: {
    format: 'directory', // Ensures pages are built as /page/index.html
  },

  site: 'https://example.com',

  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 3000,
    open: true, 
  },
});
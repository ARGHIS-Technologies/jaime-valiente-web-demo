import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages por defecto; el contenedor self-hosted construye con ASTRO_SITE/ASTRO_BASE=/.
const site = process.env.ASTRO_SITE || 'https://arghis-technologies.github.io';
const base = process.env.ASTRO_BASE || '/jaime-valiente-web-demo';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
});

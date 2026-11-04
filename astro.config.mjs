import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://arghis-technologies.github.io',
  base: '/jaime-valiente-web-demo',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
});

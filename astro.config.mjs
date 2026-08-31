import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // AQUÍ PONES TU DOMINIO REAL (o uno de prueba por ahora)
  site: 'https://www.tudominio.com', 
  integrations: [tailwind(), sitemap()],
});
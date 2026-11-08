import type { APIRoute } from 'astro';

// Mapa del sitio estático: una URL por página indexable (la 404 no entra).
export const routes = ['', 'particulares/', 'empresas/', 'reclamaciones/', 'el-despacho/', 'contacto/', 'area-clientes/', 'aviso-legal/', 'privacidad/', 'cookies/', 'accesibilidad/'];

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://jaimevaliente.com')).origin;
  const urls = routes.map((route) => `  <url><loc>${origin}/${route}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

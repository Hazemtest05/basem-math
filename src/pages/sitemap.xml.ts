import type { APIRoute } from 'astro';

const routes = ['/', '/curriculum', '/lessons', '/methodology', '/about', '/contact'];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? 'https://math.hazem.ae').replace(/\/$/, '');
  const urls = routes
    .map((r) => `  <url><loc>${base}${r}</loc><changefreq>monthly</changefreq></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};

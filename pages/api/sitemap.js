const BASE_URL = "https://mi-proyecto-seo-sooty.vercel.app";

// Simulación de consulta a base de datos o CMS
async function getDynamicRoutes() {
  return [
    "/",
    "/blog",
    "/contacto",
    "/servicios"
  ];
}

export default async function handler(req, res) {
  try {
    const urls = await getDynamicRoutes();
    const currentDate = new Date().toISOString();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => 
    `  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

    // Configurar headers apropiados
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
    
    return res.status(200).send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return res.status(500).json({ error: 'Failed to generate sitemap' });
  }
}
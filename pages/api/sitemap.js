const BASE_URL = "https://mi-proyecto-seo-sooty.vercel.app";

async function getDynamicRoutes() {
  return [
    "/",
    "/blog",
    "/contacto",
    "/blog/articulo-seo",
    "/blog/optimizacion-nextjs",
    "/servicios",
  ];
}

export default async function handler(req, res) {
  const urls = await getDynamicRoutes();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(url => `<url><loc>${BASE_URL}${url}</loc></url>`).join("\n") +
    `\n</urlset>`;

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/xml");
  res.end(sitemap);
}

const BASE_URL = "https://mi-proyecto-seo-git-master-jimmyjd10s-projects.vercel.app";


// Simulación de consulta a base de datos o CMS
async function getDynamicRoutes() {
  // Aquí podrías consultar una base de datos real
  return [
    "/",
    "/blog",
    "/contacto",
    "/blog/articulo-seo",
    "/blog/optimizacion-nextjs",
  ];
}
export default async function handler(req, res) {
  const urls = await getDynamicRoutes();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}

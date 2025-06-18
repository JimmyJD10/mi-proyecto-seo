import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Consejos de SEO y Desarrollo Web</title>
        <meta name="description" content="Lee artículos sobre SEO, optimización web y mejores prácticas en desarrollo con Next.js." />
        <meta property="og:title" content="Blog | Consejos de SEO y Desarrollo Web" />
        <meta property="og:description" content="Artículos y tutoriales para mejorar el SEO y el rendimiento de tu sitio web con Next.js." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="article" />
      </Head>
      <h1>Blog</h1>
      <p>Bienvenido al blog. Aquí encontrarás consejos y novedades sobre SEO y desarrollo web.</p>
    </>
  );
}

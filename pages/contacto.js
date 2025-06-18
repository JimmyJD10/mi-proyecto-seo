import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Sitio Optimizado</title>
        <meta name="description" content="Ponte en contacto para consultas sobre SEO, desarrollo web y servicios digitales." />
        <meta property="og:title" content="Contacto | Mi Sitio Optimizado" />
        <meta property="og:description" content="Contáctanos para recibir asesoría en SEO y optimización web con Next.js." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>
      <h1>Contacto</h1>
      <p>¿Tienes dudas? Escríbenos para recibir más información sobre nuestros servicios.</p>
    </>
  );
}

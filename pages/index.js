import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Sitio Optimizado para SEO</title>
        <meta name="description" content="Página principal con técnicas avanzadas de SEO y rendimiento en Next.js." />
        <meta property="og:title" content="Inicio | Mi Sitio Optimizado para SEO" />
        <meta property="og:description" content="Descubre cómo optimizar tu web con Next.js y mejorar tu posicionamiento en Google." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="WwwK0yJWq51OIagEKBf--z8o_Kvktoj3YDbzLsFFboA" />
      </Head>

      <h1>Bienvenido a mi página optimizada</h1>
      <p>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>
      <DynamicComponent />
    </>
  );
}
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";

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
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="7zq1ruh1pOnwPzw2/odtng" async></script>
      </Head>

      <div style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "32px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)"
      }}>
        <h1 style={{ color: "#1a202c", marginBottom: "16px" }}>Bienvenido a mi página optimizada</h1>
        <p style={{ color: "#4a5568", fontSize: "18px", marginBottom: "32px" }}>
          Aprende cómo mejorar el rendimiento y SEO en Next.js.
        </p>
        <Image
          src="/images/seo-image.png"
          width={800}
          height={400}
          alt="Ejemplo de imagen optimizada"
          priority
          style={{ borderRadius: "8px", marginBottom: "32px" }}
        />
        <DynamicComponent />
      </div>
      <style jsx global>{`
        body {
          background: #f7fafc;
          font-family: 'Inter', Arial, sans-serif;
        }
      `}</style>
    </>
  );
}
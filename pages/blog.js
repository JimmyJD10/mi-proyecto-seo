import Head from "next/head";
import Image from "next/image";

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
      <div style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "32px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)"
      }}>
        <h1 style={{ color: "#1a202c", marginBottom: "16px" }}>Blog</h1>
        <p style={{ color: "#4a5568", fontSize: "18px" }}>
          Bienvenido al blog. Aquí encontrarás consejos y novedades sobre SEO y desarrollo web.
        </p>
        <Image
          src="/images/seo-image.png"
          width={800}
          height={400}
          alt="Ejemplo de imagen optimizada"
          priority
          style={{ borderRadius: "8px", marginTop: "24px" }}
        />
      </div>
    </>
  );
}

import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Sitio Optimizado</title>
        <meta name="description" content="Ponte en contacto para consultas sobre SEO, desarrollo web y servicios digitales." />
        <meta property="og:title" content="Contacto | Mi Sitio Optimizado" />
        <meta property="og:description" content="Contáctanos para recibir asesoría en SEO y optimización web con Next.js." />
        <meta property="og:image" content="/images/contacto-image.png" />
        <meta property="og:type" content="website" />
      </Head>
      <div style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "32px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)"
      }}>
        <h1 style={{ color: "#1a202c", marginBottom: "16px" }}>Contacto</h1>
        <p style={{ color: "#4a5568", fontSize: "18px" }}>
          ¿Tienes dudas? Escríbenos para recibir más información sobre nuestros servicios.
        </p>
      </div>
    </>
  );
}

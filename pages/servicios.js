import Head from "next/head";

export default function Servicios() {
  return (
    <>
      <Head>
        <title>Servicios | Optimización Web y SEO Profesional</title>
        <meta name="description" content="Descubre nuestros servicios de optimización web, SEO y desarrollo profesional con Next.js." />
        <meta property="og:title" content="Servicios | Optimización Web y SEO Profesional" />
        <meta property="og:description" content="Ofrecemos servicios de SEO, optimización de rendimiento y desarrollo web moderno con Next.js." />
        <meta property="og:image" content="/images/servicios-image.png" />
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
        <h1 style={{ color: "#1a202c", marginBottom: "16px" }}>Nuestros Servicios</h1>
        <p style={{ color: "#4a5568", fontSize: "18px", marginBottom: "24px" }}>
          Te ayudamos a mejorar la visibilidad y el rendimiento de tu sitio web con soluciones profesionales de SEO y desarrollo.
        </p>
        <ul style={{ color: "#2d3748", fontSize: "17px", lineHeight: "2" }}>
          <li>Optimización SEO para buscadores</li>
          <li>Mejora de velocidad y rendimiento web</li>
          <li>Desarrollo de sitios modernos con Next.js</li>
          <li>Consultoría y auditoría técnica</li>
        </ul>
      </div>
    </>
  );
}

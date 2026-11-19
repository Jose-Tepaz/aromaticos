import { Puntos } from "./home/InnovacionSection.jsx";
import { useRef } from "react";
import { Placeholder, PersonalCTA } from "./components.jsx";
import Slider from "./slider.jsx";
import { Reveal, useInView, useEscalera } from "./motion.jsx";

// Fila de la línea del tiempo: el año y el título suben, luego el texto y el número, en cascada (como en miligram.pt)
const FilaTiempo = ({ t, i, total }) => {
  const [ref, seen] = useInView({ threshold: 0.35, rootMargin: "0px 0px -6% 0px" });
  return (
    <div ref={ref} className={`timeline-row tl-fila${seen ? " tl-in" : ""}`}>
      <div className="tl-parte tl-a serif tl-year">{t.year}</div>
      <h3 className="tl-parte tl-a serif" style={{ fontSize: 34, margin: 0 }}>{t.title}</h3>
      <p className="tl-parte tl-b" style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>{t.text}</p>
      <span className="tl-parte tl-c mono tl-num">{String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
    </div>
  );
};

// Fotos del carrusel de "Nuestra esencia"
const FOTOS_ESENCIA = [
  { src: "/imagenes/nosotros-polvos-collage.webp", alt: "Polvos y materias primas en frascos, cápsulas y latas de acero" },
  { src: "/imagenes/nosotros-frascos.webp", alt: "Frascos ámbar etiquetados con sabores en la mesa del laboratorio", pos: "50% 60%" },
  { src: "/imagenes/nosotros-polvos.webp", alt: "Frascos y cápsulas con polvos de distintos tonos en la planta" },
];

const About = ({ go }) => {
  const valores = useRef(null);
  useEscalera(valores);
  const timeline = [
    { year: "1956", title: "Fundación", text: "Nace Aromáticos en la Ciudad de México como un pequeño laboratorio familiar dedicado al arte de la perfumería." },
    { year: "1962", title: "Agua de Colonia Sanborns", text: "Desarrollamos la fórmula de la icónica Agua de Colonia Sanborns, que se volvería parte de la memoria olfativa de México." },
    { year: "1978", title: "División de Sabores", text: "Ampliamos el laboratorio para atender a la industria alimenticia con una unidad dedicada a sabores." },
    { year: "1995", title: "Materias Primas", text: "Consolidamos nuestra red de importación global para ofrecer materias primas técnicas a la industria." },
    { year: "2015", title: "ISO 9001", text: "Obtenemos la certificación ISO 9001:2015, consolidando nuestros procesos de calidad y trazabilidad." },
    { year: "Hoy",  title: "Segunda generación", text: "Seguimos siendo una empresa mexicana de raíces familiares, combinando tradición e innovación." },
  ];

  return (
    <div className="page">
      <section className="about-hero" style={{ padding: "var(--section-y) 0 40px" }}>
        <div className="wrap">
          <div className="eyebrow">Nuestra esencia</div>
          <h1 className="serif stagger-in" style={{
            fontSize: "clamp(44px, 9vw, 160px)", lineHeight: .95,
            letterSpacing: "-.03em", margin: "24px 0 0", fontWeight: 400, maxWidth: 1200,
          }}>
            Transformando <em style={{ fontStyle: "italic", color: "var(--accent)" }}>emociones</em> en aromas y sabores desde <em style={{ fontStyle: "italic" }}>1956</em>.
          </h1>
        </div>
      </section>

      <section className="about-intro" style={{ padding: "var(--section-y-lg) 0" }}>
        <div className="wrap">
          <div className="split-2" style={{ alignItems: "center" }}>
            <Reveal>
              <p style={{ fontSize: 20, lineHeight: 1.55, marginBottom: 24, opacity: .9 }}>
                En Aromáticos llevamos más de seis décadas transformando emociones
                en aromas y sabores. Somos una empresa mexicana con raíces familiares,
                apasionada por crear soluciones sensoriales a la medida que han
                marcado generaciones.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.6, opacity: .8, marginBottom: 24 }}>
                Desde 1956, nuestra historia está ligada a la creación de fórmulas icónicas,
                como la esencia de la legendaria <em>Agua de Colonia Sanborns</em>, un aroma
                que se convirtió en parte de la identidad y la memoria colectiva de México.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.6, opacity: .8 }}>
                Hoy, honramos ese legado combinando tradición, innovación y cercanía
                para seguir desarrollando fragancias y sabores que fortalecen marcas
                y despiertan emociones.
              </p>
            </Reveal>
            <Reveal variant="scale" delay={150}>
              <Slider slides={FOTOS_ESENCIA} />
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--section-y-lg) 0", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 40 }}>Nuestros valores</div>
          <div className="paso-escalera valores" ref={valores}>
            {[
              ["Tradición", "Siete décadas perfeccionando el arte de la perfumería y los sabores."],
              ["Innovación", "Laboratorios activos en I+D, con procesos modernos y trazables."],
              ["Cercanía", "Operamos como compañeros de desarrollo, no como proveedores."],
            ].map(([k, v], i) => (
              <article key={i} className="paso-card">
                <div className="paso-top">
                  <span className="mono">Valor {i + 1}</span>
                  <Puntos n={i + 1} />
                </div>
                <div className="paso-bottom">
                  <h3 className="serif paso-titulo">{k}</h3>
                  <p className="p-card" style={{ margin: 0 }}>{v}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--section-y-lg) 0" }}>
        <div className="wrap">
          <Reveal className="head-row tl-cab" style={{ marginBottom: 60 }}>
            <div>
              <div className="eyebrow">Línea del tiempo</div>
              <h2 className="section-title">Setenta años,<br/><em>una sola historia</em>.</h2>
            </div>
            <span className="mono" style={{ opacity: .5 }}>1956 → 2026</span>
          </Reveal>

          <div>
            {timeline.map((t, i) => (
              <FilaTiempo key={i} t={t} i={i} total={timeline.length} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--section-y-lg) 0", textAlign: "center" }}>
        <Reveal className="wrap" style={{ maxWidth: 1100 }}>
          <div className="serif" style={{ fontSize: "clamp(28px, 4.2vw, 60px)", lineHeight: 1.2, fontStyle: "italic", letterSpacing: "-.01em" }}>
            "Una fragancia no se vende, se <em style={{ color: "var(--accent)", fontStyle: "italic" }}>recuerda</em>. Por eso cada fórmula que sale de nuestro laboratorio se trabaja como si fuera la primera — y la última."
          </div>
          <div className="mono" style={{ marginTop: 40, opacity: .6 }}>
            — Equipo de desarrollo · Aromáticos
          </div>
        </Reveal>
      </section>

      <PersonalCTA go={go} />
    </div>
  );
};

export default About;

import { Placeholder, PersonalCTA } from "./components.jsx";
import { Reveal } from "./motion.jsx";

const About = ({ go }) => {
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
      <section style={{ padding: "clamp(33px, 4.2vw, 60px) 0 40px" }}>
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

      <section style={{ padding: "clamp(44px, 5.6vw, 80px) 0" }}>
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
              <Placeholder variant="navy" label="Archivo · fábrica 1960s" height="clamp(320px, 90vw, 560px)" />
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(55px, 6.9vw, 100px) 0", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 40 }}>Nuestros valores</div>
          <div className="cols-3-values">
            {[
              ["Tradición", "Siete décadas perfeccionando el arte de la perfumería y los sabores."],
              ["Innovación", "Laboratorios activos en I+D, con procesos modernos y trazables."],
              ["Cercanía", "Operamos como compañeros de desarrollo, no como proveedores."],
            ].map(([k, v], i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="serif" style={{ fontSize: 64, lineHeight: 1, letterSpacing: "-.02em", marginBottom: 14 }}>0{i+1}</div>
                <h3 className="serif" style={{ fontSize: 30, margin: "0 0 10px", fontWeight: 500 }}>{k}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, opacity: .8 }}>{v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(66px, 8.3vw, 120px) 0" }}>
        <div className="wrap">
          <Reveal className="head-row" style={{ marginBottom: 60 }}>
            <div>
              <div className="eyebrow">Línea del tiempo</div>
              <h2 className="section-title">Setenta años,<br/><em>una sola historia</em>.</h2>
            </div>
            <span className="mono" style={{ opacity: .5 }}>1956 → 2026</span>
          </Reveal>

          <div>
            {timeline.map((t, i) => (
              <Reveal key={i} className="timeline-row" variant="left" delay={(i % 3) * 60}>
                <div className="serif" style={{ fontSize: 48, lineHeight: 1, letterSpacing: "-.02em" }}>{t.year}</div>
                <h3 className="serif" style={{ fontSize: 26, margin: 0, fontWeight: 500 }}>{t.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, opacity: .8, margin: 0 }}>{t.text}</p>
                <span className="mono" style={{ opacity: .4, textAlign: "right" }}>{String(i+1).padStart(2, "0")} / {String(timeline.length).padStart(2, "0")}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(66px, 8.3vw, 120px) 0", textAlign: "center" }}>
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

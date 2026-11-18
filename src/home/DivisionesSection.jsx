import { Placeholder } from "../components.jsx";
import { Reveal } from "../motion.jsx";

const DIVISIONES = [
  {
    id: "fragancias",
    title: "Fragancias",
    tag: "Perfumería fina · Cosmética · Limpieza",
    variant: "navy",
    image: "/imagenes/fragancias.webp",
    desc: "Desarrollamos fragancias para perfumería, cosmética, cuidado personal y productos de limpieza, adaptadas a las necesidades e identidad de cada marca.",
  },
  {
    id: "sabores",
    title: "Sabores",
    tag: "Alimenticia · Bebidas · Farmacéutica",
    variant: "orange",
    image: "/imagenes/sabores.webp",
    desc: "Creamos sabores para una amplia variedad de productos alimenticios y bebidas, adaptándonos a las necesidades de cada cliente y proyecto.",
  },
  {
    id: "materias",
    title: "Materias Primas",
    tag: "Industrial · Desarrollo · Investigación",
    variant: "cream",
    image: "/imagenes/materia-prima.webp",
    desc: "Ofrecemos materias primas para distintas aplicaciones industriales, respaldadas por nuestra experiencia y compromiso con la calidad.",
  },
];

const DivisionCard = ({ d, go }) => (
  <article className="card-lift" onClick={() => go(d.id)}>
    <Placeholder
      variant={d.variant}
      label={`${d.title} · ${d.variant === "cream" ? "flat lay" : "producto"}`}
      height="clamp(280px, 90vw, 440px)"
      parallax
      dark={d.variant === "cream"}
      image={d.image}
      solidLabel
    />
    <div style={{ padding: "20px 4px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, marginBottom: 10 }}>
        <h3 className="serif" style={{ fontSize: "var(--title-card)", margin: 0, letterSpacing: "-.01em", fontWeight: 400 }}>{d.title}</h3>
        <span className="mono" style={{ opacity: .6, whiteSpace: "nowrap" }}>Ver ↗</span>
      </div>
      <div className="mono" style={{ opacity: .65, marginBottom: 14 }}>{d.tag}</div>
      <p style={{ fontSize: 14, lineHeight: 1.6, opacity: .82 }}>{d.desc}</p>
    </div>
  </article>
);

const DivisionesSection = ({ go }) => (
  <section style={{ padding: "var(--section-y) 0" }}>
    <div className="wrap">
      <Reveal className="head-row" style={{ marginBottom: 40 }}>
        <div>
          <div className="eyebrow">Nuestras divisiones</div>
          <h2 className="section-title">Conoce nuestras divisiones</h2>
        </div>
        <p style={{ maxWidth: 460, opacity: .75, fontSize: 15, lineHeight: 1.6, textWrap: "balance" }}>
          Desarrollamos y comercializamos fragancias, sabores y materias primas,
          ofreciendo soluciones adaptadas a las necesidades de cada cliente e industria.
        </p>
      </Reveal>

      <div className="cols-3">
        {DIVISIONES.map((d, i) => (
          <Reveal key={d.id} delay={i * 120}>
            <DivisionCard d={d} go={go} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default DivisionesSection;

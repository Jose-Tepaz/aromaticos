import { Placeholder } from "../components.jsx";
import { Reveal } from "../motion.jsx";

const DIVISIONES = [
  {
    id: "fragancias",
    num: "01",
    title: "Fragancias",
    tag: "Perfumería fina · Cosmética · Limpieza",
    variant: "navy",
    image: "/imagenes/fragancias.webp",
    desc: "Fragancias que se vuelven identidad. Desde la legendaria Agua de Colonia Sanborns hasta desarrollos contemporáneos para marcas líderes.",
  },
  {
    id: "sabores",
    num: "02",
    title: "Sabores",
    tag: "Alimenticia · Bebidas · Farmacéutica",
    variant: "orange",
    image: "/imagenes/sabores.webp",
    desc: "Soluciones saborísticas con carácter: dulces, ácidos, frutales, lácteos y tropicales. Estabilidad y fidelidad sensorial.",
  },
  {
    id: "materias",
    num: "03",
    title: "Materias Primas",
    tag: "Industrial · Desarrollo · Investigación",
    variant: "cream",
    image: "/imagenes/materia-prima.webp",
    desc: "Proveemos materias primas de alta pureza para la industria. Red global de abastecimiento con trazabilidad y certificaciones.",
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
    />
    <div style={{ padding: "20px 4px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
        <span className="mono" style={{ opacity: .5 }}>{d.num}</span>
        <span className="mono" style={{ opacity: .5 }}>Ver división ↗</span>
      </div>
      <h3 className="serif" style={{ fontSize: 40, margin: "0 0 10px", letterSpacing: "-.01em", fontWeight: 400 }}>{d.title}</h3>
      <div className="mono" style={{ opacity: .65, marginBottom: 14 }}>{d.tag}</div>
      <p style={{ fontSize: 14, lineHeight: 1.6, opacity: .82 }}>{d.desc}</p>
    </div>
  </article>
);

const DivisionesSection = ({ go }) => (
  <section style={{ padding: "clamp(36px, 5vw, 60px) 0 clamp(56px, 8vw, 100px)" }}>
    <div className="wrap">
      <Reveal className="head-row" style={{ marginBottom: 40 }}>
        <div>
          <div className="eyebrow">Nuestras divisiones</div>
          <h2 className="section-title">Conoce nuestras divisiones</h2>
        </div>
        <p style={{ maxWidth: 360, opacity: .75, fontSize: 15, lineHeight: 1.6 }}>
          Fórmulas desarrolladas y producidas en México para industrias que requieren
          precisión, consistencia y una firma sensorial propia.
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

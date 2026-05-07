import { Placeholder } from "../components.jsx";

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
  <article
    onClick={() => go(d.id)}
    style={{ cursor: "pointer", transition: "transform .35s ease" }}
    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
  >
    <Placeholder
      variant={d.variant}
      label={`${d.title} · ${d.variant === "cream" ? "flat lay" : "producto"}`}
      height="440px"
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
  <section style={{ padding: "60px 0 100px" }}>
    <div className="wrap">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, gap: 24, flexWrap: "wrap" }}>
        <div>
          <div className="eyebrow">Nuestras divisiones</div>
          <h2 className="section-title">Conoce nuestras divisiones</h2>
        </div>
        <p style={{ maxWidth: 360, opacity: .75, fontSize: 15, lineHeight: 1.6 }}>
          Fórmulas desarrolladas y producidas en México para industrias que requieren
          precisión, consistencia y una firma sensorial propia.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {DIVISIONES.map(d => <DivisionCard key={d.id} d={d} go={go} />)}
      </div>
    </div>
  </section>
);

export default DivisionesSection;

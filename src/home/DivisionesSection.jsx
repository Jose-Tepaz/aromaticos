import { Placeholder } from "../components.jsx";
import { useSearchParams } from "react-router-dom";
import { Reveal } from "../motion.jsx";
import { DIVISIONES } from "./divisionesData.js";
import { DivisionesPaneles, DivisionesLista, DivisionesApiladas, DivisionesIndice, DivisionesBento, DivisionesGaleria, DivisionesPin } from "./DivisionesVariantes.jsx";


const DivisionCard = ({ d, go }) => (
  <article
    className="card-lift division-card"
    role="link"
    tabIndex={0}
    onClick={() => go(d.id)}
    onKeyDown={(e) => { if (e.key === "Enter") go(d.id); }}
  >
    <Placeholder
      variant={d.variant}
      label={d.label}
      height="clamp(280px, 90vw, 440px)"
      parallax
      dark={d.variant === "cream"}
      image={d.image}
      solidLabel
    />
    <div style={{ padding: "20px 4px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, marginBottom: 10 }}>
        <h3 className="serif division-title" style={{ fontSize: "var(--title-card)", margin: 0, letterSpacing: "-.01em", fontWeight: 400 }}>{d.title}</h3>
        <span className="mono division-ver" style={{ whiteSpace: "nowrap" }}>Ver <span className="arrow">↗</span></span>
      </div>
      <div className="mono" style={{ opacity: .65, marginBottom: 14 }}>{d.tag}</div>
      <p className="p-card">{d.desc}</p>
    </div>
  </article>
);

const DivisionesSection = ({ go }) => {
  const [params] = useSearchParams();
  const variante = params.get("divisiones");
  if (!variante) return <section className="dv-seccion-pin"><DivisionesPin go={go} /></section>;
  return (
  <section style={{ padding: "var(--section-y) 0" }}>
    <div className="wrap">
      <Reveal className="head-row" style={{ marginBottom: 40 }}>
        <div>
          <div className="eyebrow eyebrow-naranja">Nuestras divisiones</div>
          <h2 className="section-title">Conoce nuestras divisiones</h2>
        </div>
        <p className="p-intro" style={{ maxWidth: 460, textWrap: "balance" }}>
          Desarrollamos y comercializamos fragancias, sabores y materias primas,
          ofreciendo soluciones adaptadas a las necesidades de cada cliente e industria.
        </p>
      </Reveal>

      {variante === "paneles" ? (
        <DivisionesPaneles go={go} />
      ) : variante === "lista" ? (
        <DivisionesLista go={go} />
      ) : variante === "apiladas" ? (
        <DivisionesApiladas go={go} />
      ) : variante === "indice" ? (
        <DivisionesIndice go={go} />
      ) : variante === "bento" ? (
        <DivisionesBento go={go} />
      ) : variante !== "cuadricula" ? (
        <DivisionesGaleria go={go} />
      ) : (
        <div className="cols-3">
          {DIVISIONES.map((d, i) => (
            <Reveal key={d.id} delay={i * 120}>
              <DivisionCard d={d} go={go} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  </section>
  );
};

export default DivisionesSection;

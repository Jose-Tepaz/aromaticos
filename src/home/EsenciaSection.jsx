import { Placeholder } from "../components.jsx";
import { Reveal } from "../motion.jsx";
import esenciaImage from "../../public/imagenes/img-1.webp";

const EsenciaSection = ({ go }) => (
  <section style={{ padding: "var(--section-y) 0" }}>
    <div className="wrap">
      <div className="split-2" style={{ alignItems: "center" }}>
        <Reveal variant="left">
          <Placeholder variant="navy" label="Archivo histórico · frasco 1956" height="clamp(340px, 95vw, 620px)" image={esenciaImage} parallax />
        </Reveal>
        <Reveal delay={150}>
          <div className="eyebrow">Nuestra esencia</div>
          <h2 className="section-title">
            La memoria olfativa de <em>una nación</em>.
          </h2>
          <p className="p-lead" style={{ marginBottom: 20 }}>
            Desde 1956, nuestra historia está ligada a la creación de fórmulas icónicas,
            como la esencia de la legendaria Agua de Colonia Sanborns, un aroma que
            se convirtió en parte de la identidad y la memoria colectiva de México.
          </p>
          <p className="p-lead" style={{ marginBottom: 32 }}>
            Hoy honramos ese legado combinando tradición, innovación y cercanía
            para seguir desarrollando fragancias y sabores que fortalecen marcas
            y despiertan emociones.
          </p>
          <button className="btn-ghost" onClick={() => go("nosotros")}>
            Nuestra historia <span className="arrow">↗</span>
          </button>
        </Reveal>
      </div>
    </div>
  </section>
);

export default EsenciaSection;

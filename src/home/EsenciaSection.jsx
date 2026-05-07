import { Placeholder } from "../components.jsx";
import esenciaImage from "../../public/imagenes/img-1.webp";

const EsenciaSection = ({ go }) => (
  <section style={{ padding: "140px 0" }}>
    <div className="wrap">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        <Placeholder variant="navy" label="Archivo histórico · frasco 1956" height="620px" image={esenciaImage} />
        <div>
          <div className="eyebrow">Nuestra esencia</div>
          <h2 className="section-title" style={{ marginBottom: 20 }}>
            La memoria olfativa de <em>una nación</em>.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, opacity: .85, marginBottom: 20 }}>
            Desde 1956, nuestra historia está ligada a la creación de fórmulas icónicas,
            como la esencia de la legendaria Agua de Colonia Sanborns, un aroma que
            se convirtió en parte de la identidad y la memoria colectiva de México.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, opacity: .85, marginBottom: 32 }}>
            Hoy honramos ese legado combinando tradición, innovación y cercanía
            para seguir desarrollando fragancias y sabores que fortalecen marcas
            y despiertan emociones.
          </p>
          <button className="btn-ghost" onClick={() => go("nosotros")}>
            Leer historia completa <span className="arrow">↗</span>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default EsenciaSection;

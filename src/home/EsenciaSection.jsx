import { Placeholder } from "../components.jsx";
import { Reveal } from "../motion.jsx";

const EsenciaSection = ({ go }) => (
  <section style={{ padding: "var(--section-y-lg) 0" }}>
    <div className="wrap">
      <Reveal className="head-row" style={{ marginBottom: "clamp(40px, 6vw, 80px)", alignItems: "flex-start", gap: "clamp(32px, 6vw, 96px)" }}>
        <div style={{ flex: "1 1 360px", maxWidth: 560 }}>
          <div className="eyebrow">Nuestra esencia</div>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            La memoria olfativa de <em>una nación</em>.
          </h2>
        </div>
        <div style={{ flex: "1 1 360px", maxWidth: 520 }}>
          <p className="serif" style={{ fontSize: "clamp(22px, 2.1vw, 28px)", lineHeight: 1.35, letterSpacing: "-.01em", marginBottom: 24 }}>
            Desde 1956, nuestra historia está ligada a la creación de fórmulas icónicas,
            como la esencia de la legendaria Agua de Colonia Sanborns, un aroma que
            se convirtió en parte de la identidad y la memoria colectiva de México.
          </p>
          <p className="p-lead" style={{ marginBottom: 36, lineHeight: 1.75 }}>
            Hoy honramos ese legado combinando tradición, innovación y cercanía
            para seguir desarrollando fragancias y sabores que fortalecen marcas
            y despiertan emociones.
          </p>
          <button className="btn-ghost" onClick={() => go("nosotros")}>
            Nuestra historia <span className="arrow">↗</span>
          </button>
        </div>
      </Reveal>

      <Reveal variant="fade">
        <Placeholder
          variant="navy"
          label="Nuestras instalaciones · producción y almacén"
          height="auto"
          style={{ aspectRatio: "1672 / 941" }}
          image="/imagenes/instalaciones.webp"
          solidLabel
        />
      </Reveal>
    </div>
  </section>
);

export default EsenciaSection;

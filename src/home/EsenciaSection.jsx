import { Placeholder } from "../components.jsx";
import { Reveal } from "../motion.jsx";

const EsenciaSection = ({ go }) => (
  <section style={{ padding: "var(--section-y-lg) 0" }}>
    <div className="wrap">
      <div className="split-2 esencia-split">
        <Reveal>
          <div className="esencia-foto">
            <Placeholder
              variant="navy"
              label="Frascos de esencia con etiqueta Aromáticos"
              height="100%"
              image="/imagenes/esencia-frascos.webp"
              solidLabel
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="eyebrow">Nuestra esencia</div>
          <h2 className="section-title">
            La memoria olfativa de <em>una nación</em>.
          </h2>
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
        </Reveal>
      </div>
    </div>
  </section>
);

export default EsenciaSection;

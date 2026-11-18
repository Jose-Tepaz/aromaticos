import { Reveal } from "../motion.jsx";

const PASOS = [
  ["Briefing",    "Entendemos tu marca, el mercado y el perfil sensorial que buscas."],
  ["Desarrollo",  "Nuestro laboratorio crea y ajusta fórmulas a la medida de tu proyecto."],
  ["Validación",  "Pruebas de estabilidad, desempeño y evaluación sensorial con tu equipo."],
  ["Producción",  "Escalamos con trazabilidad, consistencia y certificación ISO 9001."],
];

const InnovacionSection = ({ go }) => (
  <section style={{ padding: "var(--section-y) 0", borderTop: "1px solid var(--rule)" }}>
    <div className="wrap">
      <Reveal className="head-row" style={{ marginBottom: 40 }}>
        <div>
          <div className="eyebrow">Innovación y desarrollo</div>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            De la <em>idea</em> al producto final.
          </h2>
        </div>
        <p className="p-intro" style={{ maxWidth: 460, textWrap: "balance" }}>
          Tradición que respalda y creatividad que desarrolla: formulamos contigo
          en un proceso claro, de 4 a 8 semanas.
        </p>
      </Reveal>

      <div className="cols-4" style={{ gap: 32 }}>
        {PASOS.map(([k, v], i) => (
          <Reveal key={k} delay={i * 100} style={{ borderTop: "1px solid var(--rule)", paddingTop: 20 }}>
            <div className="mono" style={{ color: "var(--accent)", marginBottom: 14 }}>Paso {i + 1}</div>
            <h3 className="serif" style={{ fontSize: "var(--title-card)", margin: "0 0 10px", fontWeight: 400 }}>{k}</h3>
            <p className="p-card" style={{ margin: 0 }}>{v}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} style={{ marginTop: 40 }}>
        <button className="btn-ghost" onClick={() => go("personalizacion")}>
          Conoce el proceso <span className="arrow">↗</span>
        </button>
      </Reveal>
    </div>
  </section>
);

export default InnovacionSection;

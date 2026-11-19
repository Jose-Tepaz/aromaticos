import { useRef } from "react";
import { Reveal, useEscalera } from "../motion.jsx";

const PASOS = [
  ["Briefing",    "Entendemos tu marca, el mercado y el perfil sensorial que buscas."],
  ["Desarrollo",  "Nuestro laboratorio crea y ajusta fórmulas a la medida de tu proyecto."],
  ["Validación",  "Pruebas de estabilidad, desempeño y evaluación sensorial con tu equipo."],
  ["Producción",  "Escalamos con trazabilidad, consistencia y certificación ISO 9001."],
];

// Cuatro puntos que se llenan según el paso (1 de 4, 2 de 4…)
export const Puntos = ({ n }) => (
  <span className="paso-puntos" aria-hidden="true">
    {[1, 2, 3, 4].map((i) => <i key={i} className={i <= n ? "on" : ""} />)}
  </span>
);

const InnovacionSection = ({ go }) => {
  const cab = useRef(null);

  const escalera = useRef(null);
  useEscalera(escalera, cab);

  return (
  <section style={{ padding: "var(--section-y-lg) 0 var(--section-y)" }}>
    <div className="wrap">
      <Reveal className="paso-cab">
        <div ref={cab}>
          <div className="eyebrow">Innovación y desarrollo</div>
          <h2 className="section-title" style={{ margin: "18px 0 0" }}>
            De la <em>idea</em> al producto final.
          </h2>
        </div>
        <div className="paso-cab-der">
          <p className="p-intro" style={{ maxWidth: 440, margin: 0, textWrap: "balance" }}>
            Tradición que respalda y creatividad que desarrolla: formulamos contigo
            en un proceso claro, de 4 a 8 semanas.
          </p>
          <div className="paso-cta">
            <p className="paso-cta-texto">¿Listo para empezar?</p>
            <button className="btn-primary" onClick={() => go("personalizacion")}>
              Conoce el proceso <span className="arrow">↗</span>
            </button>
          </div>
        </div>
      </Reveal>

      {/* Tarjetas en escalera: cada paso es un poco más alto que el anterior */}
      <div className="paso-escalera" ref={escalera}>
        {PASOS.map(([k, v], i) => (
          <article key={k} className="paso-card">
            <div className="paso-top">
              <span className="mono">Paso {i + 1}</span>
              <Puntos n={i + 1} />
            </div>
            <div className="paso-bottom">
              <h3 className="serif paso-titulo">{k}</h3>
              <p className="p-card" style={{ margin: 0 }}>{v}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};

export default InnovacionSection;

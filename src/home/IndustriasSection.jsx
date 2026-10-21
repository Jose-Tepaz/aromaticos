import { Reveal } from "../motion.jsx";

const INDUSTRIAS = [
  ["Alimenticia",   "Sabores, colores, extractos para bebidas, confitería, panadería y lácteos."],
  ["Cosmética",     "Perfumería fina, cuidado personal, skincare, higiene y baño."],
  ["Farmacéutica",  "Agentes saborizantes y aromáticos estables para formulaciones sensibles."],
  ["Limpieza",      "Fragancias técnicas de alto rendimiento y gran estabilidad."],
];

const IndustriasSection = () => (
  <section style={{ padding: "clamp(48px, 6vw, 80px) 0", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
    <div className="wrap">
      <div className="split-1-2" style={{ alignItems: "center" }}>
        <Reveal>
          <div className="eyebrow">Industrias</div>
          <h2 className="serif" style={{ fontSize: "clamp(36px, 4vw, 48px)", lineHeight: 1.05, margin: "16px 0 0", letterSpacing: "-.02em", fontWeight: 400 }}>
            Donde nuestro trabajo <em style={{ color: "var(--accent)" }}>cobra vida</em>.
          </h2>
        </Reveal>

        <div className="cols-2-tight">
          {INDUSTRIAS.map(([k, v], i) => (
            <Reveal key={i} delay={i * 90} variant="fade" style={{ background: "var(--bg)", padding: "28px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                <h3 className="serif" style={{ fontSize: 26, margin: 0, fontWeight: 500 }}>{k}</h3>
                <span className="mono" style={{ opacity: .5 }}>0{i + 1}</span>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.55, opacity: .75, margin: 0 }}>{v}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default IndustriasSection;

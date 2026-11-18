import { Reveal } from "../motion.jsx";

const INDUSTRIAS = [
  ["Alimenticia",   "Desarrollamos sabores y ofrecemos soluciones para alimentos, bebidas, confitería, panadería, productos lácteos, entre otros."],
  ["Cosmética",     "Desarrollamos fragancias para perfumería, cosmética, cuidado personal y productos de higiene, entre otros."],
  ["Farmacéutica",  "Ofrecemos sabores y fragancias para diferentes aplicaciones de la industria farmacéutica."],
  ["Limpieza",      "Desarrollamos fragancias para productos de limpieza y cuidado del hogar, adaptadas a las necesidades de cada formulación."],
];

const IndustriasSection = () => (
  <section style={{ padding: "var(--section-y) 0", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
    <div className="wrap">
      <div className="split-1-2" style={{ alignItems: "center" }}>
        <Reveal>
          <div className="eyebrow">Industrias</div>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            Nuestra experiencia en cada <em style={{ color: "var(--accent)" }}>industria</em>.
          </h2>
        </Reveal>

        <div className="cols-2-tight">
          {INDUSTRIAS.map(([k, v], i) => (
            <Reveal key={i} delay={i * 90} variant="fade" style={{ background: "var(--bg)", padding: "28px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                <h3 className="serif" style={{ fontSize: "var(--title-card)", margin: 0, fontWeight: 400 }}>{k}</h3>
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

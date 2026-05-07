const INDUSTRIAS = [
  ["Alimenticia",   "Sabores, colores, extractos para bebidas, confitería, panadería y lácteos."],
  ["Cosmética",     "Perfumería fina, cuidado personal, skincare, higiene y baño."],
  ["Farmacéutica",  "Agentes saborizantes y aromáticos estables para formulaciones sensibles."],
  ["Limpieza",      "Fragancias técnicas de alto rendimiento y gran estabilidad."],
];

const IndustriasSection = () => (
  <section style={{ padding: "80px 0", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
    <div className="wrap">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, alignItems: "center" }}>
        <div>
          <div className="eyebrow">Industrias</div>
          <h2 className="serif" style={{ fontSize: 48, lineHeight: 1.05, margin: "16px 0 0", letterSpacing: "-.02em", fontWeight: 400 }}>
            Donde nuestro trabajo <em style={{ color: "var(--accent)" }}>cobra vida</em>.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, background: "var(--rule)" }}>
          {INDUSTRIAS.map(([k, v], i) => (
            <div key={i} style={{ background: "var(--bg)", padding: "28px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                <h3 className="serif" style={{ fontSize: 26, margin: 0, fontWeight: 500 }}>{k}</h3>
                <span className="mono" style={{ opacity: .5 }}>0{i + 1}</span>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.55, opacity: .75, margin: 0 }}>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default IndustriasSection;

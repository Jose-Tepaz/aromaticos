const logo = "/imagenes/AromaticosColor.png";

const HeroSection = ({ go }) => (
  <section style={{ padding: "80px 0 120px" }}>
    <div className="wrap">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32, textAlign: "center" }}>
        <img src={logo} alt="Aromáticos" style={{ width: "250px", height: "auto" }} />

        <div style={{ maxWidth: 920 }}>
          <div className="eyebrow">Desde 1956 · Hecho en México</div>
          <h1 className="serif" style={{
            fontSize: "clamp(56px, 7vw, 62px)",
            lineHeight: .98,
            letterSpacing: "-.02em",
            margin: "24px 0 28px",
            fontWeight: 400,
          }}>
            Más de siete décadas transformando emociones en
            <em style={{ color: "var(--accent)" }}> aromas</em> y
            <em style={{ fontStyle: "italic" }}> sabores</em>.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, maxWidth: 620, margin: "0 auto 40px", opacity: .82 }}>
            Empresa mexicana líder en el desarrollo y comercialización de fragancias,
            sabores y materias primas para las industrias alimenticia, cosmética,
            farmacéutica y de limpieza.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <button className="btn-primary" onClick={() => go("personalizacion")}>
              Desarrollar contigo <span className="arrow">↗</span>
            </button>
            <button className="btn-ghost" onClick={() => go("nosotros")}>
              Conocer Aromáticos <span className="arrow">↗</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

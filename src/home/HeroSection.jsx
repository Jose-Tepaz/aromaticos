const logo = "/imagenes/AromaticosColor.png";

const d = (ms) => ({ "--d": `${ms}ms` });

const HeroSection = ({ go }) => (
  <section style={{ padding: "clamp(40px, 6vw, 80px) 0 clamp(64px, 8vw, 120px)" }}>
    <div className="wrap">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32, textAlign: "center" }}>
        <img className="stagger-in" style={{ ...d(0), width: "clamp(170px, 22vw, 250px)", height: "auto" }} src={logo} alt="Aromáticos" />

        <div style={{ maxWidth: 920 }}>
          <div className="eyebrow stagger-in" style={d(150)}>Desde 1956 · Hecho en México</div>
          <h1 className="serif stagger-in" style={{
            ...d(280),
            fontSize: "clamp(40px, 7vw, 62px)",
            lineHeight: .98,
            letterSpacing: "-.02em",
            margin: "24px 0 28px",
            fontWeight: 400,
          }}>
            Más de siete décadas transformando emociones en
            <em className="em-draw" style={{ color: "var(--accent)" }}> aromas</em> y
            <em style={{ fontStyle: "italic" }}> sabores</em>.
          </h1>
          <p className="stagger-in" style={{ ...d(440), fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.55, maxWidth: 620, margin: "0 auto 40px", opacity: .82 }}>
            Empresa mexicana líder en el desarrollo y comercialización de fragancias,
            sabores y materias primas para las industrias alimenticia, cosmética,
            farmacéutica y de limpieza.
          </p>
          <div className="hero-actions stagger-in" style={d(580)}>
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

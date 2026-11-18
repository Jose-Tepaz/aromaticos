import StatsSection from "./StatsSection.jsx";

const logo = "/imagenes/AromaticosColor.png";

const d = (ms) => ({ "--d": `${ms}ms` });

const HeroSection = ({ go }) => (
  <section className="hero">
    <div className="wrap hero-main">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(20px, 3vh, 32px)", textAlign: "center" }}>
        <img className="stagger-in" style={{ ...d(0), width: "clamp(200px, 25vw, 340px)", height: "auto" }} src={logo} alt="Aromáticos" />

        <div style={{ maxWidth: 1080 }}>
          <div className="eyebrow stagger-in" style={d(150)}>Desde 1956 · Hecho en México</div>
          <h1 className="serif stagger-in" style={{
            ...d(280),
            fontSize: "clamp(40px, 5.4vw, 78px)",
            lineHeight: 1.04,
            letterSpacing: "-.02em",
            margin: "28px 0 32px",
            fontWeight: 400,
          }}>
            Desde 1956, creando
            <em className="em-draw" style={{ color: "var(--accent)" }}> aromas</em> y
            <em className="em-draw" style={{ color: "var(--accent)" }}> sabores</em> que dejan huella.
          </h1>
          <p className="stagger-in p-lead" style={{ ...d(440), maxWidth: 680, margin: "0 auto 44px" }}>
            Empresa mexicana líder en el desarrollo y comercialización de fragancias,
            sabores y materias primas para las industrias alimenticia, cosmética,
            farmacéutica, de limpieza y otros sectores.
          </p>
          <div className="hero-actions stagger-in" style={d(580)}>
            <button className="btn-primary" onClick={() => go("personalizacion")}>
              Cuéntanos tu proyecto <span className="arrow">↗</span>
            </button>
            <button className="btn-ghost" onClick={() => go("nosotros")}>
              Conócenos <span className="arrow">↗</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <StatsSection />
  </section>
);

export default HeroSection;

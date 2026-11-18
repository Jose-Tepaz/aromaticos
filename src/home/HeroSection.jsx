const d = (ms) => ({ "--d": `${ms}ms` });

// Fotos del carrusel de fondo (se funden una a otra)
const SLIDES = [
  { src: "/imagenes/division-fragancias.jpg", pos: "50% 50%" },
  { src: "/imagenes/hero-frascos.webp",       pos: "50% 62%" },   // frascos ámbar con etiquetas
  { src: "/imagenes/hero-polvos.webp",        pos: "50% 45%" },   // polvos y materias primas
];

const HeroSection = ({ go }) => (
    <section className="hero-photo">
      <div className="hero-bg" aria-hidden="true">
        {SLIDES.map(({ src, pos }, i) => (
          <img
            key={src}
            className="hero-slide"
            style={{ "--i": i, objectPosition: pos }}
            src={src}
            alt=""
            fetchpriority={i === 0 ? "high" : "auto"}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
        <div className="hero-shade" />
      </div>

      <div className="wrap hero-inner">
        <div className="hero-meta mono stagger-in" style={d(700)}>
          <span>Hecho en México</span><span className="hero-sep">//</span><span>Desde 1956</span>
        </div>

        <div className="hero-copy">
          <h1 className="serif stagger-in hero-title" style={d(150)}>
            Desde 1956, creando
            <em className="em-draw" style={{ color: "var(--accent)" }}> aromas</em> y
            <em className="em-draw" style={{ color: "var(--accent)" }}> sabores</em> que dejan huella.
          </h1>

          <div className="hero-bottom">
            <div>
              <p className="hero-lead stagger-in" style={d(380)}>
                Empresa mexicana líder en el desarrollo y comercialización de fragancias,
                sabores y materias primas para las industrias alimenticia, cosmética,
                farmacéutica, de limpieza y otros sectores.
              </p>
              <div className="hero-actions stagger-in" style={d(520)}>
                <button className="btn-primary" onClick={() => go("personalizacion")}>
                  Cuéntanos tu proyecto <span className="arrow">↗</span>
                </button>
                <button className="btn-ghost hero-ghost" onClick={() => go("nosotros")}>
                  Conócenos <span className="arrow">↗</span>
                </button>
              </div>
            </div>
            <a className="hero-cue mono stagger-in" style={d(700)} href="#inicio-contenido"
               onClick={(e) => { e.preventDefault(); document.getElementById("inicio-contenido")?.scrollIntoView({ behavior: "smooth" }); }}>
              Descubre más <span className="hero-cue-arrow" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
);

export default HeroSection;

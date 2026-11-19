const d = (ms) => ({ "--d": `${ms}ms` });

// Fotos del carrusel de fondo (se funden una a otra)
const SLIDES = [
  { src: "/imagenes/hero-tambores.webp", pos: "50% 42%" },   // tambores de esencias en el almacén
  { src: "/imagenes/hero-operario.webp", pos: "50% 36%" },   // operario pesando una esencia
  { src: "/imagenes/hero-planta.webp",   pos: "50% 50%" },   // collage: producción, almacén y laboratorio
];

const HeroSection = ({ go }) => (
    <section className="hero-photo">
      <div className="hero-bg" aria-hidden="true" style={{ "--n": SLIDES.length }}>
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
        <div className="hero-copy">
          <div className="hero-eyebrow stagger-in" style={d(100)}>
            <i aria-hidden="true" />Desde 1956 <span className="hero-sep">·</span> Hecho en México
          </div>
          <h1 className="serif stagger-in hero-title" style={d(200)}>
            <span className="hero-l1"><em>Aromas</em> y <em>sabores</em></span>
            <span className="hero-l2">que dejan huella.</span>
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

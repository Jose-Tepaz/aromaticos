import { useEffect, useState } from "react";
import { Reveal, useParallax } from "./motion.jsx";

export const Nav = ({ page, go }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = [
    { id: "home", label: "Inicio" },
    { id: "fragancias", label: "Fragancias" },
    { id: "sabores", label: "Sabores" },
    { id: "materias", label: "Materias Primas" },
    { id: "nosotros", label: "Nosotros" },
    { id: "contacto", label: "Contacto" },
  ];
  const logo = "/imagenes/AromaticosSello.png";

  useEffect(() => { setOpen(false); }, [page]);

  useEffect(() => {
    // Histéresis: al encogerse, el menú reduce la altura de la página y el navegador
    // reajusta el scroll unos píxeles; con un solo umbral eso lo hacía alternar sin parar.
    const onScroll = () => setScrolled((prev) => (prev ? window.scrollY > 8 : window.scrollY > 64));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}`}>
      <div className="nav-inner">
        <div className="nav-brand" onClick={() => go("home")}>
          <img className="nav-logo" src={logo} alt="Aromáticos" />
        </div>
        <div className="nav-links" id="nav-links">
          {items.map((it, i) => (
            <button
              key={it.id}
              style={{ "--i": i }}
              className={page === it.id ? "active" : ""}
              onClick={() => go(it.id)}
            >{it.label}</button>
          ))}
          <button className="btn-primary nav-panel-cta" onClick={() => go("personalizacion")}>
            Personalizar <span className="arrow">↗</span>
          </button>
        </div>
        <div className="nav-right">
          <span className="mono">EST. 1956</span>
          <button className="nav-cta" onClick={() => go("personalizacion")}>Personalizar</button>
          <button
            className="nav-toggle"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen(o => !o)}
          >
            <span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
};

export const Footer = ({ go }) => {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-big serif">
          Hecho en <em>México</em>,<br/>
          desde <em>1956</em>.
        </div>

        <div className="footer-grid">
          <div>
            <h4>Aromáticos S.A. de C.V.</h4>
            <p className="p-card" style={{ maxWidth: 380 }}>
              Desarrollo y comercialización de fragancias, sabores y materias primas
              para las industrias alimenticia, cosmética, farmacéutica y de limpieza.
            </p>
            <div className="mono" style={{ marginTop: 14, opacity: .6 }}>ISO 9001:2015 · Certificados</div>
          </div>
          <div>
            <h4>Divisiones</h4>
            <ul>
              <li><a onClick={() => go("fragancias")}>Fragancias</a></li>
              <li><a onClick={() => go("sabores")}>Sabores</a></li>
              <li><a onClick={() => go("materias")}>Materias primas</a></li>
            </ul>
          </div>
          <div>
            <h4>Compañía</h4>
            <ul>
              <li><a onClick={() => go("nosotros")}>Nuestra esencia</a></li>
              <li><a onClick={() => go("personalizacion")}>Personalización</a></li>
              <li><a onClick={() => go("contacto")}>Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li>hola@aromaticos.mx</li>
              <li>+52 55 0000 0000</li>
              <li>Ciudad de México</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Aromáticos S.A. de C.V.</span>
          <span className="mono">70+ años · Mx</span>
        </div>
      </div>
    </footer>
  );
};

export const Placeholder = ({ variant = "", label, height = "auto", style = {}, dark = false, image = null, parallax = false, solidLabel = false }) => {
  const imgRef = useParallax(parallax && !!image);
  return (
    <div className={`ph ${variant}`} style={{ height, ...style }}>
      <span className={`ph-label ${dark ? "dark" : ""} ${solidLabel ? "solid" : ""}`}>{label}</span>
      {image && <img ref={imgRef} className="ph-img" src={image} alt={label} loading="lazy" decoding="async" />}
    </div>
  );
};

export const PersonalCTA = ({ go }) => (
  <section style={{ padding: "var(--section-y-lg) 0" }}>
    <div className="wrap">
      <div className="cta-grid">
        <Reveal>
          <div className="eyebrow">¿Buscas algo personalizado?</div>
          <h2 className="serif" style={{
            fontSize: "var(--title-section)",
            lineHeight: 1.05, margin: "20px 0 28px", letterSpacing: "-.02em", fontWeight: 400,
          }}>
            Si tu proyecto requiere <em style={{ color: "var(--accent)" }}>aromas</em>,
            <em style={{ color: "var(--accent)" }}> sabores</em> o materias primas,
            en Aromáticos <em>lo hacemos posible</em>.
          </h2>
          <p className="p-lead" style={{ maxWidth: 520, marginBottom: 40, lineHeight: 1.75 }}>
            Desarrollamos, conseguimos y personalizamos soluciones a la medida,
            adaptándonos a las necesidades específicas de cada cliente.
            Cuéntanos qué buscas y nosotros lo desarrollamos contigo.
          </p>
          <div className="cta-actions">
            <button className="btn-primary" onClick={() => go("personalizacion")}>
              Cuéntanos tu proyecto <span className="arrow">↗</span>
            </button>
            <div className="cta-time">
              <div className="mono" style={{ opacity: .6, marginBottom: 6 }}>Tiempo típico</div>
              <div className="serif" style={{ fontSize: 32, lineHeight: 1 }}>
                4–8 <span style={{ fontSize: 16, opacity: .6 }}>semanas</span>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal variant="scale" delay={150}>
          <Placeholder
            variant="navy"
            label="Preparación de esencias"
            height="auto"
            style={{ aspectRatio: "4 / 5", maxHeight: 640, width: "100%" }}
            image="/imagenes/personalizacion.webp"
            solidLabel
          />
        </Reveal>
      </div>
    </div>
  </section>
);

export const TweaksPanel = ({ theme, setTheme, visible }) => {
  if (!visible) return null;
  const themes = [
    { id: "cream", label: "Crema" },
    { id: "navy",  label: "Azul" },
    { id: "orange", label: "Naranja" },
  ];
  return (
    <div className="tweaks-panel">
      <h3>Tweaks</h3>
      <span className="mono">Color dominante</span>
      <div className="swatches">
        {themes.map(t => (
          <div
            key={t.id}
            className={`swatch ${t.id} ${theme === t.id ? "on" : ""}`}
            onClick={() => setTheme(t.id)}
          >
            <span className="name">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

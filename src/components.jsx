import { useEffect, useRef, useState } from "react";
import { Reveal, useParallax } from "./motion.jsx";

export const Nav = ({ page, go }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
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

  // Altura del menú sin encoger: la portada con foto se sube esa altura para quedar debajo del menú transparente
  useEffect(() => {
    const set = () => {
      if (navRef.current && window.scrollY <= 8) {
        document.documentElement.style.setProperty("--nav-h", `${navRef.current.offsetHeight}px`);
      }
    };
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, [page]);


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
    <nav ref={navRef} className={`nav${scrolled ? " scrolled" : ""}${open ? " open" : ""}${page === "home" && !scrolled && !open ? " over-hero" : ""}`}>
      <div className="nav-inner">
        <button type="button" className="nav-brand" aria-label="Aromáticos, ir al inicio" onClick={() => go("home")}>
          <img className="nav-logo" src={logo} alt="" width="100" height="101" />
        </button>
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
  const link = (id, label) => (
    <li><button type="button" className="footer-link" onClick={() => go(id)}>{label}</button></li>
  );
  return (
    <footer className="footer footer-foto">
      <div className="wrap footer-inner">
        <div className="footer-big serif">
          Hecho en <em>México</em>,<br/>
          desde <em>1956</em>.
        </div>

        <div className="footer-grid">
          <div>
            <img className="footer-sello" src="/imagenes/AromaticosSello.png" alt="" width="64" height="65" loading="lazy" />
            <h4>Aromáticos S.A. de C.V.</h4>
            <p className="p-card" style={{ maxWidth: 380 }}>
              Desarrollo y comercialización de fragancias, sabores y materias primas
              para las industrias alimenticia, cosmética, farmacéutica y de limpieza.
            </p>
            <div className="mono" style={{ marginTop: 14, opacity: .65 }}>ISO 9001:2015 · Certificados</div>
          </div>
          <div>
            <h4>Divisiones</h4>
            <ul>
              {link("fragancias", "Fragancias")}
              {link("sabores", "Sabores")}
              {link("materias", "Materias primas")}
            </ul>
          </div>
          <div>
            <h4>Compañía</h4>
            <ul>
              {link("nosotros", "Nuestra esencia")}
              {link("personalizacion", "Personalización")}
              {link("contacto", "Contacto")}
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
      <div className="cta-panel">
        <Reveal>
          <div className="eyebrow">¿Buscas algo personalizado?</div>
          <h2 className="serif" style={{
            fontSize: "var(--title-section)",
            lineHeight: 1.05, margin: "20px 0 24px", letterSpacing: "-.02em", fontWeight: 400,
          }}>
            Si tu proyecto requiere <em style={{ color: "var(--accent)" }}>aromas</em>,
            <em style={{ color: "var(--accent)" }}> sabores</em> o materias primas,
            en Aromáticos <em>lo hacemos posible</em>.
          </h2>
          <p className="p-lead" style={{ maxWidth: 520, marginBottom: 28, lineHeight: 1.75 }}>
            Desarrollamos, conseguimos y personalizamos soluciones a la medida,
            adaptándonos a las necesidades específicas de cada cliente.
            Cuéntanos qué buscas y nosotros lo desarrollamos contigo.
          </p>
          <ul className="cta-tags" aria-label="Lo que desarrollamos">
            <li>Aromas</li><li>Sabores</li><li>Materias primas</li><li>Desarrollo a la medida</li>
          </ul>
          <div className="cta-actions">
            <button className="btn-primary" onClick={() => go("personalizacion")}>
              Cuéntanos tu proyecto <span className="arrow">↗</span>
            </button>
            <div className="cta-time">
              <div className="mono" style={{ opacity: .7, marginBottom: 6 }}>Tiempo típico</div>
              <div className="serif" style={{ fontSize: 32, lineHeight: 1 }}>
                4–8 <span style={{ fontSize: 16, opacity: .7 }}>semanas</span>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="cta-photo">
            <div className="cta-photo-main">
              <Placeholder
                  variant="navy"
                  label="Preparación de esencias"
                  height="100%"
                  image="/imagenes/personalizacion.webp"
                  solidLabel
              />
            </div>
          </div>
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

import { Placeholder, PersonalCTA } from "./components.jsx";
import { Reveal } from "./motion.jsx";

const DIVISION_DATA = {
  fragancias: {
    num: "01",
    name: "Fragancias",
    image: "/imagenes/fragancias.webp",
    variant: "navy",
    tag: "Perfumería fina · Cosmética · Limpieza",
    lead: "Fragancias que se vuelven identidad. Desde la legendaria Agua de Colonia Sanborns hasta desarrollos contemporáneos, creamos firmas olfativas que perduran en la memoria.",
    heroLabel: "Perfume · bodegón editorial",
    catalogTitle: "Familias olfativas",
    catalogDesc: "Nuestra paleta creativa cubre siete familias principales. Cada una con decenas de acordes, materias nobles y sintéticas, y posibilidad de desarrollo a la medida.",
    items: [
      { code: "FL-01", name: "Florales",    notes: "Rosa, jazmín, neroli, ylang-ylang", variant: "cream" },
      { code: "CT-02", name: "Cítricos",    notes: "Bergamota, limón, mandarina, toronja", variant: "orange" },
      { code: "AM-03", name: "Amaderados",  notes: "Sándalo, cedro, vetiver, pachulí", variant: "sage" },
      { code: "OR-04", name: "Orientales",  notes: "Vainilla, ámbar, benjuí, incienso", variant: "navy" },
      { code: "AC-05", name: "Acuáticos",   notes: "Notas marinas, ozónicas, pepino", variant: "cream" },
      { code: "GR-06", name: "Gourmand",    notes: "Caramelo, café, chocolate, tonka", variant: "orange" },
      { code: "VE-07", name: "Verdes",      notes: "Hierba recién cortada, higuera, gálbano", variant: "sage" },
      { code: "FO-08", name: "Fougère",     notes: "Lavanda, cumarina, roble, heno", variant: "navy" },
    ],
    applications: [
      "Perfumería fina", "Cuidado capilar", "Cuidado de la piel",
      "Higiene bucal", "Ambientadores", "Detergentes",
      "Suavizantes", "Velas aromáticas",
    ],
  },
  sabores: {
    num: "02",
    name: "Sabores",
    image: "/imagenes/sabores.webp",
    variant: "orange",
    tag: "Alimenticia · Bebidas · Farmacéutica",
    lead: "Sabores con carácter: dulces, ácidos, frutales, lácteos y tropicales. Desarrollamos perfiles sensoriales estables, versátiles y fieles al ingrediente original.",
    heroLabel: "Frutas · alta velocidad / splash",
    catalogTitle: "Perfiles saborísticos",
    catalogDesc: "Nuestro laboratorio desarrolla y reformula sabores para cada tipo de aplicación: bebidas, lácteos, confitería, panadería y productos farmacéuticos.",
    items: [
      { code: "FR-01", name: "Frutales",    notes: "Fresa, mango, manzana, durazno", variant: "orange" },
      { code: "CT-02", name: "Cítricos",    notes: "Naranja, limón, toronja, mandarina", variant: "cream" },
      { code: "TR-03", name: "Tropicales",  notes: "Piña, coco, maracuyá, guayaba", variant: "orange" },
      { code: "LA-04", name: "Lácteos",     notes: "Crema, yogurt, mantequilla, queso", variant: "cream" },
      { code: "DU-05", name: "Dulces",      notes: "Vainilla, caramelo, miel, chocolate", variant: "navy" },
      { code: "HE-06", name: "Herbales",    notes: "Menta, hierbabuena, albahaca, cilantro", variant: "sage" },
      { code: "BE-07", name: "Bebidas",     notes: "Cola, energético, té helado, horchata", variant: "navy" },
      { code: "NX-08", name: "Notas México",notes: "Tamarindo, jamaica, chile, mezcal", variant: "orange" },
    ],
    applications: [
      "Bebidas carbonatadas", "Jugos y néctares", "Lácteos y yogurt",
      "Confitería y goma de mascar", "Panadería", "Helados",
      "Productos farmacéuticos", "Nutracéuticos",
    ],
  },
  materias: {
    num: "03",
    name: "Materias Primas",
    image: "/imagenes/materia-prima.webp",
    variant: "cream",
    tag: "Industrial · Desarrollo · Investigación",
    lead: "Proveemos materias primas de alta pureza para la industria: extractos, aceites esenciales, aromaquímicos y solventes. Red global de abastecimiento con trazabilidad total.",
    heroLabel: "Materias primas · laboratorio vidrio",
    catalogTitle: "Catálogo de materias primas",
    catalogDesc: "Más de 800 referencias en nuestro inventario, con capacidad de importación especializada para proyectos con requerimientos únicos.",
    items: [
      { code: "AE-01", name: "Aceites esenciales", notes: "Lavanda, eucalipto, menta, cítricos", variant: "sage" },
      { code: "EX-02", name: "Extractos naturales", notes: "Vainilla, café, té, hierbas", variant: "cream" },
      { code: "AQ-03", name: "Aromaquímicos",   notes: "Linalol, geraniol, vainillina, cumarina", variant: "navy" },
      { code: "OL-04", name: "Oleorresinas",    notes: "Pimienta, jengibre, chile, clavo", variant: "orange" },
      { code: "SO-05", name: "Solventes técnicos", notes: "Propilenglicol, MCT, etanol USP", variant: "cream" },
      { code: "FI-06", name: "Fijadores",       notes: "Benjuí, ámbar gris sintético, musk", variant: "navy" },
      { code: "IS-07", name: "Isolates",        notes: "Mentol, timol, eugenol cristalino", variant: "sage" },
      { code: "ES-08", name: "Especialidades",  notes: "Encapsulados, microemulsiones", variant: "orange" },
    ],
    applications: [
      "Formulación industrial", "Reventa técnica", "Desarrollo I+D",
      "Prototipos y pruebas", "Producción a escala", "Proyectos especiales",
      "Importación dirigida", "Consultoría técnica",
    ],
  },
};

const Division = ({ id, go }) => {
  const d = DIVISION_DATA[id];
  if (!d) return null;

  return (
    <div className="page">
      <section style={{ padding: "40px 0 clamp(66px, 8.3vw, 120px)" }}>
        <div className="wrap">
          <div className="crumbs" style={{ marginBottom: 40 }}>
            <div className="mono" style={{ opacity: .6 }}>
              <span style={{ cursor: "pointer" }} onClick={() => go("home")}>Inicio</span>
              <span style={{ margin: "0 10px", opacity: .5 }}>/</span>
              <span>División {d.num}</span>
              <span style={{ margin: "0 10px", opacity: .5 }}>/</span>
              <span style={{ opacity: .8 }}>{d.name}</span>
            </div>
            <div className="mono" style={{ opacity: .5 }}>{d.num} — 03</div>
          </div>

          <div className="split-2" style={{ alignItems: "stretch" }}>
            <div className="stagger-in" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            
              <div>
                <div className="eyebrow">{d.tag}</div>
                <h1 className="serif" style={{
                  fontSize: "clamp(52px, 11vw, 180px)", lineHeight: .9,
                  letterSpacing: "-.03em", margin: "24px 0", fontWeight: 400,
                }}>
                  {d.name.split(" ").map((w, i, arr) => (
                    <span key={i} style={{ fontStyle: i === arr.length - 1 ? "italic" : "normal", color: i === arr.length - 1 ? "var(--accent)" : "inherit" }}>
                      {w}{i < arr.length - 1 ? " " : ""}
                    </span>
                  ))}
                </h1>
                <p style={{ fontSize: 19, lineHeight: 1.5, maxWidth: 520, opacity: .85 }}>
                  {d.lead}
                </p>
              </div>

              <div style={{ display: "flex", gap: 32, marginTop: 40, flexWrap: "wrap" }}>
                <div>
                  <div className="serif" style={{ fontSize: 44, lineHeight: 1 }}>{d.items.length * 8}+</div>
                  <div className="mono" style={{ opacity: .6, marginTop: 6 }}>Fórmulas activas</div>
                </div>
                
                <div>
                  <div className="serif" style={{ fontSize: 44, lineHeight: 1 }}>70+</div>
                  <div className="mono" style={{ opacity: .6, marginTop: 6 }}>Años de experiencia</div>
                </div>
                
              </div>
              
            </div>
            <Reveal variant="scale" delay={150}>
              <Placeholder variant={d.variant} label={d.heroLabel} height="clamp(340px, 95vw, 640px)" dark={d.variant === "cream"} image={d.image} parallax />
            </Reveal>
           
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 0 clamp(66px, 8.3vw, 120px)" }}>
        <div className="wrap">
          <Reveal className="head-row" style={{ marginBottom: 48 }}>
            <div>
              <div className="eyebrow">Catálogo</div>
              <h2 className="section-title">{d.catalogTitle}</h2>
            </div>
            <p style={{ maxWidth: 380, opacity: .75, fontSize: 15, lineHeight: 1.6 }}>
              {d.catalogDesc}
            </p>
          </Reveal>

          <div className="grid-4-tight" style={{ border: "1px solid var(--rule)" }}>
            {d.items.map((it, i) => (
              <Reveal key={it.code} delay={(i % 4) * 80} variant="fade" style={{ background: "var(--bg)" }}>
              <article style={{ background: "var(--bg)", cursor: "pointer", transition: "background .3s ease", height: "100%" }}
                onMouseEnter={e => e.currentTarget.style.background = "color-mix(in oklab, var(--fg) 4%, var(--bg))"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--bg)"}>
                <Placeholder variant={it.variant} label={it.name} height="220px" dark={it.variant === "cream"} />
                <div style={{ padding: "20px 18px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                    <h3 className="serif" style={{ fontSize: 24, margin: 0, fontWeight: 500 }}>{it.name}</h3>
                    <span className="mono" style={{ opacity: .5 }}>{it.code}</span>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.55, opacity: .7, margin: 0 }}>{it.notes}</p>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(44px, 5.6vw, 80px) 0", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="wrap">
          <div className="split-1-2" style={{ alignItems: "flex-start" }}>
            <Reveal>
              <div className="eyebrow">Aplicaciones</div>
              <h2 className="serif" style={{ fontSize: "clamp(34px, 4vw, 44px)", lineHeight: 1.05, margin: "16px 0", letterSpacing: "-.02em", fontWeight: 400 }}>
                Donde cobra <em style={{ color: "var(--accent)" }}>vida</em>.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.6, opacity: .8 }}>
                Desarrollamos en conjunto con tus equipos de I+D, marketing y producción.
              </p>
            </Reveal>
            <div className="cols-2">
              {d.applications.map((a, i) => (
                <Reveal key={i} delay={(i % 2) * 80 + Math.floor(i / 2) * 60} variant="fade" style={{
                  padding: "22px 0", borderBottom: "1px solid var(--rule)",
                  display: "flex", alignItems: "baseline", gap: 18,
                }}>
                  <span className="mono" style={{ opacity: .5, width: 28 }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="serif" style={{ fontSize: 24, fontWeight: 500 }}>{a}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(55px, 6.9vw, 100px) 0" }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 20 }}>Otras divisiones</div>
          <div className="split-2" style={{ gap: 24 }}>
            {Object.entries(DIVISION_DATA).filter(([k]) => k !== id).map(([k, other], i) => (
              <Reveal key={k} delay={i * 120}>
              <article className="card-lift" onClick={() => go(k)}>
                <div className="ph" style={{ aspectRatio: "4 / 3" }}>
                  <img className="ph-img" src={other.image} alt={other.name} loading="lazy" />
                </div>
                <div style={{ padding: "16px 4px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <h3 className="serif" style={{ fontSize: 28, margin: 0, fontWeight: 500 }}>{other.name}</h3>
                  <span className="mono" style={{ opacity: .5 }}>Ver ↗</span>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PersonalCTA go={go} />
    </div>
  );
};

export default Division;

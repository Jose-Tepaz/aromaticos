import { Reveal } from "../motion.jsx";

// Iconos de línea simples (24×24), heredan el color del texto
const ICONS = {
  alimenticia: (
    <>
      <path d="M5 3v6a3 3 0 0 0 3 3v9" />
      <path d="M8 3v6" />
      <path d="M11 3v6a3 3 0 0 1-3 3" />
      <path d="M17 21V3c-2.2 1.2-3.5 4-3.5 7.5H17" />
    </>
  ),
  cosmetica: (
    <>
      <path d="M8 10h8a1 1 0 0 1 1 1v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8a1 1 0 0 1 1-1z" />
      <path d="M10 10V7.5h4V10" />
      <path d="M9.5 7.5V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2.5" />
    </>
  ),
  farmaceutica: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v6l-5 10a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 19l-5-10V3" />
      <path d="M7.5 15h9" />
    </>
  ),
  limpieza: (
    <>
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
      <path d="M9.5 15a2.8 2.8 0 0 0 2.5 2.5" />
    </>
  ),
};

const INDUSTRIAS = [
  { icon: "alimenticia",  name: "Alimenticia",  via: "Sabores",
    text: "Desarrollamos sabores y ofrecemos soluciones para alimentos, bebidas, confitería, panadería, productos lácteos, entre otros." },
  { icon: "cosmetica",    name: "Cosmética",    via: "Fragancias",
    text: "Desarrollamos fragancias para perfumería, cosmética, cuidado personal y productos de higiene, entre otros." },
  { icon: "farmaceutica", name: "Farmacéutica", via: "Sabores · Fragancias",
    text: "Ofrecemos sabores y fragancias para diferentes aplicaciones de la industria farmacéutica." },
  { icon: "limpieza",     name: "Limpieza",     via: "Fragancias",
    text: "Desarrollamos fragancias para productos de limpieza y cuidado del hogar, adaptadas a las necesidades de cada formulación." },
];

const IndustriasSection = () => (
  <section className="industrias-azul" style={{ padding: "var(--section-y-lg) 0" }}>
    <div className="wrap">
      <div className="split-1-2" style={{ alignItems: "center" }}>
        <Reveal>
          <div className="eyebrow">Industrias</div>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            Soluciones para diferentes <em style={{ color: "var(--accent)" }}>industrias</em>.
          </h2>
        </Reveal>

        <div className="cols-2-tight">
          {INDUSTRIAS.map((it, i) => (
            <Reveal key={it.name} delay={i * 90} variant="fade" className="industria-card">
              <svg className="industria-icon" viewBox="0 0 24 24" width="34" height="34" fill="none"
                   stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {ICONS[it.icon]}
              </svg>
              <h3 className="serif" style={{ fontSize: "var(--title-card)", margin: "20px 0 8px", fontWeight: 400 }}>{it.name}</h3>
              <div className="mono industria-via">{it.via}</div>
              <p className="p-card" style={{ margin: "14px 0 0" }}>{it.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default IndustriasSection;

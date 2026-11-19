import { useEffect, useRef } from "react";
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

// Bloque azul con las tarjetas en fila: al bajar, la sección se queda fija y las tarjetas avanzan hacia un lado (estilo Sunvane)
const IndustriasSection = () => {
  const fuera = useRef(null), pista = useRef(null);

  useEffect(() => {
    const el = fuera.current, track = pista.current;
    if (!el || !track) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0, x = 0, meta = 0, recorrido = 0;
    const clamp01 = (v) => Math.min(1, Math.max(0, v));

    // Mide el recorrido: hasta que la última tarjeta quede alineada con el borde derecho del contenido
    const medir = () => {
      if (reduce || window.innerWidth <= 900) { el.style.removeProperty("--alto"); track.style.transform = ""; recorrido = 0; return; }
      const ancho = track.parentElement.previousElementSibling?.querySelector(".ind-h-cab")?.clientWidth || (window.innerWidth - 80);
      recorrido = Math.max(0, track.scrollWidth - ancho);
      // La sección se queda fija ~2,6 veces el recorrido: el avance es lento y suave, como en Sunvane
      el.style.setProperty("--alto", `${Math.round(window.innerHeight + Math.max(recorrido * 2.6, window.innerHeight * 0.8))}px`);
    };
    const objetivo = () => {
      const r = el.getBoundingClientRect();
      meta = -recorrido * clamp01(-r.top / Math.max(1, r.height - window.innerHeight));
    };
    // Bucle con inercia: la fila persigue el scroll en vez de saltar
    const paso = () => {
      raf = 0;
      objetivo();
      x += (meta - x) * 0.14;
      if (Math.abs(meta - x) < 0.3) x = meta;
      track.style.transform = `translate3d(${x.toFixed(2)}px,0,0)`;
      if (x !== meta) raf = requestAnimationFrame(paso);
    };
    const pedir = () => { if (!raf) raf = requestAnimationFrame(paso); };
    const alCambiar = () => { medir(); objetivo(); x = meta; pedir(); };
    alCambiar();
    window.addEventListener("scroll", pedir, { passive: true });
    window.addEventListener("resize", alCambiar);
    return () => { window.removeEventListener("scroll", pedir); window.removeEventListener("resize", alCambiar); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="industrias-azul ind-h" ref={fuera}>
      <div className="ind-h-fijo">
        <div className="wrap">
          <Reveal className="ind-h-cab">
            <div>
              <div className="eyebrow">Industrias</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                Soluciones para diferentes <em>industrias</em>.
              </h2>
            </div>
            <p className="p-intro ind-h-intro">
              Un mismo laboratorio, cuatro industrias: cada formulación se adapta a las necesidades de tu producto.
            </p>
          </Reveal>
        </div>

        <div className="ind-h-ventana">
          <div className="ind-h-pista" ref={pista}>
            {INDUSTRIAS.map((it, i) => (
              <article key={it.name} className="ind4-card ind-h-card">
                <div className="ind4-top">
                  <span className="ind4-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mono ind4-via">{it.via}</span>
                </div>
                <svg className="ind4-icon" viewBox="0 0 24 24" width="64" height="64" fill="none"
                     stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {ICONS[it.icon]}
                </svg>
                <div className="ind4-bottom">
                  <h3 className="serif ind4-nombre">{it.name}</h3>
                  <p className="p-card" style={{ margin: 0 }}>{it.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriasSection;

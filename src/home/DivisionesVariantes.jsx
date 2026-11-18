import { useEffect, useRef, useState } from "react";
import { DIVISIONES } from "./divisionesData.js";
import { Reveal } from "../motion.jsx";

const abrir = (go, id) => () => go(id);
const conTeclado = (go, id) => (e) => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(id); }
};

/* ───────── Propuesta B · Paneles verticales ─────────
   Tres paneles altos, pegados, con la foto como protagonista. Todo el texto
   está siempre visible (no depende del cursor); al pasar el cursor el panel
   se acerca y los demás se atenúan. Solo transform/opacity. */
export const DivisionesPaneles = ({ go }) => (
  <Reveal className="dv-paneles" role="list">
    {DIVISIONES.map((d) => (
      <article
        key={d.id}
        className="dv-panel"
        role="link"
        tabIndex={0}
        aria-label={`${d.title}: ver división`}
        onClick={abrir(go, d.id)}
        onKeyDown={conTeclado(go, d.id)}
      >
        <img className="dv-panel-img" src={d.image} alt="" loading="lazy" decoding="async" />
        <div className="dv-panel-shade" />
        <div className="dv-panel-top mono">{d.tag.split(" · ")[0]}</div>
        <div className="dv-panel-body">
          <h3 className="serif dv-panel-title">{d.title}</h3>
          <p className="dv-panel-desc">{d.desc}</p>
          <span className="dv-panel-cta mono">Ver división <span className="arrow">↗</span></span>
        </div>
      </article>
    ))}
  </Reveal>
);

/* ───────── Propuesta A · Lista editorial con foto activa ─────────
   Títulos grandes a la izquierda; la foto de la división activa a la derecha.
   Se activa con cursor, foco de teclado o toque, así que funciona sin hover. */
export const DivisionesLista = ({ go }) => {
  const [activo, setActivo] = useState(0);
  return (
    <Reveal className="dv-lista">
      <ul className="dv-lista-items">
        {DIVISIONES.map((d, i) => (
          <li key={d.id}>
            <button
              type="button"
              className={`dv-fila${activo === i ? " activa" : ""}`}
              onMouseEnter={() => setActivo(i)}
              onFocus={() => setActivo(i)}
              onClick={() => (activo === i ? go(d.id) : setActivo(i))}
              aria-label={`${d.title}${activo === i ? ": ver división" : ""}`}
            >
              <span className="dv-fila-titulo serif">{d.title}</span>
              <span className="dv-fila-tag mono">{d.tag}</span>
              <span className="dv-fila-detalle">
                <span>
                  <span className="dv-fila-desc">{d.desc}</span>
                  <span className="dv-fila-cta mono">
                    Ver división <span className="arrow">↗</span>
                  </span>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="dv-lista-visor" aria-hidden="true">
        {DIVISIONES.map((d, i) => (
          <img
            key={d.id}
            className={`dv-visor-img${activo === i ? " activa" : ""}`}
            src={d.image}
            alt=""
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </Reveal>
  );
};

/* ───────── Propuesta C · Tarjetas apiladas (como cannele.framer.website) ─────────
   Cada división es una tarjeta ancha: texto a la izquierda y foto grande a la derecha.
   Al bajar, cada tarjeta se queda fija arriba y la siguiente sube y la cubre. */
export const DivisionesApiladas = ({ go }) => {
  const pilaRef = useRef(null);

  // Mientras la tarjeta siguiente sube y la cubre, la anterior se encoge y se oscurece poco a poco
  useEffect(() => {
    const pila = pilaRef.current;
    if (!pila || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tarjetas = [...pila.children];
    let raf = 0;
    const actualizar = () => {
      raf = 0;
      if (window.innerWidth <= 900) { tarjetas.forEach((t) => t.style.removeProperty("--p")); return; }
      tarjetas.forEach((t, i) => {
        const sig = tarjetas[i + 1];
        if (!sig) { t.style.setProperty("--p", "0"); return; }
        const fijo = parseFloat(getComputedStyle(t).top) || 0;      // posición donde se queda fija
        const alto = t.offsetHeight;
        const dist = sig.getBoundingClientRect().top - fijo;         // cuánto falta para que la siguiente la cubra
        const p = Math.min(1, Math.max(0, 1 - dist / alto));
        t.style.setProperty("--p", p.toFixed(3));
      });
    };
    const alScroll = () => { if (!raf) raf = requestAnimationFrame(actualizar); };
    actualizar();
    window.addEventListener("scroll", alScroll, { passive: true });
    window.addEventListener("resize", alScroll);
    return () => {
      window.removeEventListener("scroll", alScroll);
      window.removeEventListener("resize", alScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
  <div className="dv-stack" ref={pilaRef}>
    {DIVISIONES.map((d, i) => (
      <article key={d.id} className={`dv-stack-card dv-s${i}`} style={{ "--i": i }}>
        <div className="dv-stack-texto">
          <div>
            <h3 className="serif dv-stack-titulo">{d.title}</h3>
            <p className="dv-stack-tag">{d.tag}</p>
            <p className="dv-stack-desc">{d.desc}</p>
          </div>
          <button type="button" className="dv-stack-cta" onClick={() => go(d.id)}>
            Ver división <span className="arrow">↗</span>
          </button>
        </div>
        <div className="dv-stack-foto" onClick={() => go(d.id)}>
          <div className="dv-stack-foto-in">
            <img src={d.image} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
      </article>
    ))}
  </div>
  );
};

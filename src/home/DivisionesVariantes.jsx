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

/* ---------- Índice lateral + texto que avanza + foto fija (estilo lujoliving) ----------
   A la izquierda un índice con la división activa; en medio los textos; a la derecha una foto
   fija que cambia con un fundido suave según el texto que se está leyendo. */
export const DivisionesIndice = ({ go }) => {
  const [activa, setActiva] = useState(0);
  const bloques = useRef([]);
  const raiz = useRef(null);

  useEffect(() => {
    let raf = 0;
    const medir = () => {
      raf = 0;
      const centro = window.innerHeight * 0.42;
      let mejor = 0, dist = Infinity;
      bloques.current.forEach((b, i) => {
        if (!b) return;
        const r = b.getBoundingClientRect();
        const d = Math.abs(r.top + Math.min(r.height, 260) / 2 - centro);
        if (d < dist) { dist = d; mejor = i; }
      });
      setActiva(mejor);
      // Avance de la raya naranja: 0 al entrar la sección, 1 al llegar al final
      const r = raiz.current;
      if (r) {
        const b = r.getBoundingClientRect();
        const p = (window.innerHeight * 0.55 - b.top) / b.height;
        r.style.setProperty("--prog", Math.min(1, Math.max(0, p)).toFixed(3));
      }
    };
    const alScroll = () => { if (!raf) raf = requestAnimationFrame(medir); };
    medir();
    window.addEventListener("scroll", alScroll, { passive: true });
    window.addEventListener("resize", alScroll);
    return () => { window.removeEventListener("scroll", alScroll); window.removeEventListener("resize", alScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="dv-ind" ref={raiz}>
      <div className="dv-ind-textos">
        {DIVISIONES.map((d, i) => (
          <article key={d.id} ref={(el) => (bloques.current[i] = el)} className={`dv-ind-bloque${i === activa ? " on" : ""}`}>
            <h3 className="serif dv-ind-titulo">{d.title}</h3>
            <p className="dv-ind-tag">{d.tag}</p>
            <p className="dv-ind-desc">{d.desc}</p>
            <button type="button" className="dv-ind-cta" onClick={() => go(d.id)}>Ver división <span className="arrow">↗</span></button>
            <div className="dv-ind-foto-movil"><img src={d.image} alt="" loading="lazy" decoding="async" /></div>
          </article>
        ))}
      </div>

      <div className="dv-ind-fotos" aria-hidden="true">
        {DIVISIONES.map((d, i) => (
          <img key={d.id} src={d.image} alt="" className={i === activa ? "on" : ""} loading="lazy" decoding="async" />
        ))}
      </div>
    </div>
  );
};

/* ---------- Bento de tres tarjetas (estilo Sunvane) ----------
   Una tarjeta grande con foto de fondo, una clara con foto abajo y una azul con foto abajo. */
export const DivisionesBento = ({ go }) => (
  <div className="dv-bento">
    {DIVISIONES.map((d, i) => (
      <Reveal key={d.id} delay={i * 130} className={`dv-bento-card dv-b${i}`}>
        <article role="link" tabIndex={0} onClick={() => go(d.id)} onKeyDown={(e) => { if (e.key === "Enter") go(d.id); }}>
          {i === 0 && <img className="dv-b-bg" src={d.image} alt="" loading="lazy" decoding="async" />}
          <div className="dv-b-top">
            <span className="dv-b-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="dv-b-tag">{d.tag}</span>
          </div>
          <div className="dv-b-body">
            <h3 className="serif dv-b-titulo">{d.title}</h3>
            <p className="dv-b-desc">{d.desc}</p>
            <button type="button" className="dv-ind-cta" onClick={(e) => { e.stopPropagation(); go(d.id); }}>Ver división <span className="arrow">↗</span></button>
          </div>
          {i > 0 && <div className="dv-b-foto"><img src={d.image} alt="" loading="lazy" decoding="async" /></div>}
        </article>
      </Reveal>
    ))}
  </div>
);

/* ---------- Galería escalonada: foto grande con texto debajo, cada tarjeta un poco más abajo ---------- */
export const DivisionesGaleria = ({ go }) => (
  <div className="dv-gal">
    {DIVISIONES.map((d, i) => (
      <Reveal key={d.id} delay={i * 130} className="dv-gal-item">
        <article role="link" tabIndex={0} onClick={() => go(d.id)} onKeyDown={(e) => { if (e.key === "Enter") go(d.id); }}>
          <div className="dv-gal-foto">
            <img src={d.image} alt="" loading="lazy" decoding="async" />
            <span className="dv-gal-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="dv-gal-tag">{d.tag}</span>
          </div>
          <h3 className="serif dv-gal-titulo">{d.title}</h3>
          <p className="dv-gal-desc">{d.desc}</p>
          <button type="button" className="dv-ind-cta" onClick={(e) => { e.stopPropagation(); go(d.id); }}>Ver división <span className="arrow">↗</span></button>
        </article>
      </Reveal>
    ))}
  </div>
);

/* ---------- Divisiones fijas con tarjetas que se apilan (estilo "Lo que hacemos" de vst) ----------
   La sección se queda fija mientras bajas: a la izquierda el título y la lista, en medio la foto de la
   división activa y a la derecha las tarjetas suben una sobre otra. En pantallas chicas es la galería. */
const Cabecera = () => (
  <>
    <div className="eyebrow">Nuestras divisiones</div>
    <h2 className="section-title dv-pin-titulo">Conoce nuestras divisiones</h2>
    <p className="p-intro dv-pin-intro">
      Desarrollamos y comercializamos fragancias, sabores y materias primas,
      ofreciendo soluciones adaptadas a las necesidades de cada cliente e industria.
    </p>
  </>
);

export const DivisionesPin = ({ go }) => {
  const [activa, setActiva] = useState(0);
  const raiz = useRef(null);
  const tarjetas = useRef([]);
  const n = DIVISIONES.length;

  useEffect(() => {
    const el = raiz.current;
    if (!el) return;
    let raf = 0, ultima = 0;
    const medir = () => {
      raf = 0;
      if (window.innerWidth <= 900) return;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - window.innerHeight)));
      const t = p * (n - 1);
      tarjetas.current.forEach((c, i) => {
        if (!c) return;
        const entra = i === 0 ? 1 : Math.min(1, Math.max(0, t - (i - 1)));        // 0 = abajo fuera, 1 = en su sitio
        const cubierta = i < n - 1 ? Math.min(1, Math.max(0, t - i)) : 0;            // cuánto la tapa la siguiente
        c.style.transform = `translate3d(0, ${((1 - entra) * 170).toFixed(2)}%, 0) scale(${(1 - cubierta * 0.05).toFixed(3)})`;
        c.style.filter = cubierta > 0 ? `brightness(${(1 - cubierta * 0.12).toFixed(3)})` : "";
      });
      const a = Math.round(t);
      if (a !== ultima) { ultima = a; setActiva(a); }
    };
    const pedir = () => { if (!raf) raf = requestAnimationFrame(medir); };
    medir();
    window.addEventListener("scroll", pedir, { passive: true });
    window.addEventListener("resize", pedir);
    return () => { window.removeEventListener("scroll", pedir); window.removeEventListener("resize", pedir); if (raf) cancelAnimationFrame(raf); };
  }, [n]);

  const ir = (i) => {
    const el = raiz.current; if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + (i / (n - 1)) * total + 2, behavior: "smooth" });
  };

  return (
    <>
      <div className="dv-pin" ref={raiz} style={{ "--n": n }}>
        <div className="dv-pin-fijo wrap">
          <div className="dv-pin-izq">
            <Cabecera />
            <ul className="dv-pin-lista">
              {DIVISIONES.map((d, i) => (
                <li key={d.id}>
                  <button type="button" className={i === activa ? "on" : ""} onClick={() => ir(i)} aria-current={i === activa}>
                    <span className="dv-pin-nombre">{d.title}</span>
                    <span className="dv-pin-mas" aria-hidden="true">{i === activa ? "↗" : "+"}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="dv-pin-centro" aria-hidden="true">
            <div className="dv-pin-marco">
              {DIVISIONES.map((d, i) => (
                <img key={d.id} src={d.image} alt="" className={i === activa ? "on" : ""} loading="lazy" decoding="async" />
              ))}
            </div>
          </div>

          <div className="dv-pin-der">
            {DIVISIONES.map((d, i) => (
              <article key={d.id} ref={(el) => (tarjetas.current[i] = el)} className={`dv-pin-card dv-pc${i}`} style={{ zIndex: i + 1 }}>
                <div>
                  <h3 className="serif dv-pin-card-titulo">{d.title}</h3>
                  <p className="dv-pin-card-desc">{d.desc}</p>
                  <ul className="dv-pin-card-lista">
                    {d.tag.split(" · ").map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
                <button type="button" className="dv-ind-cta" onClick={() => go(d.id)}>Ver división <span className="arrow">↗</span></button>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="dv-pin-movil wrap">
        <div className="dv-pin-movil-cab"><Cabecera /></div>
        <DivisionesGaleria go={go} />
      </div>
    </>
  );
};

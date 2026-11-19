import { useCallback, useEffect, useRef, useState } from "react";

/* Slider de fotos: fundido suave con un ligero zoom, flechas redondas, barras de progreso y contador.
   Avanza solo cada 5 s (se detiene al pasar el cursor, al enfocar o con movimiento reducido) y se puede deslizar con el dedo. */
const Slider = ({ slides, intervalo = 5000, className = "" }) => {
  const [i, setI] = useState(0);
  const [pausa, setPausa] = useState(false);
  const x0 = useRef(null);
  const n = slides.length;

  const ir = useCallback((k) => setI(((k % n) + n) % n), [n]);
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (pausa || reduce || n < 2) return;
    const t = setTimeout(() => ir(i + 1), intervalo);
    return () => clearTimeout(t);
  }, [i, pausa, reduce, n, intervalo, ir]);

  const alTeclado = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); ir(i + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); ir(i - 1); }
  };
  const alTocar = (e) => { x0.current = e.touches[0].clientX; };
  const alSoltar = (e) => {
    if (x0.current == null) return;
    const dx = e.changedTouches[0].clientX - x0.current;
    x0.current = null;
    if (Math.abs(dx) > 40) ir(i + (dx < 0 ? 1 : -1));
  };

  return (
    <div
      className={`slider ${className}`}
      role="group" aria-roledescription="carrusel" aria-label="Fotos de nuestras instalaciones"
      tabIndex={0} onKeyDown={alTeclado}
      onMouseEnter={() => setPausa(true)} onMouseLeave={() => setPausa(false)}
      onFocus={() => setPausa(true)} onBlur={() => setPausa(false)}
      onTouchStart={alTocar} onTouchEnd={alSoltar}
    >
      <div className="slider-pista">
        {slides.map((s, k) => (
          <figure key={s.src} className={`slider-slide${k === i ? " on" : ""}`} aria-hidden={k !== i}>
            <img src={s.src} alt={s.alt || ""} style={{ objectPosition: s.pos || "50% 50%" }} loading={k === 0 ? "eager" : "lazy"} decoding="async" />
            {s.titulo && <figcaption className="slider-pie">{s.titulo}</figcaption>}
          </figure>
        ))}
      </div>

      <div className="slider-controles">
        <span className="slider-cuenta" aria-live="polite">{String(i + 1).padStart(2, "0")} <i>/</i> {String(n).padStart(2, "0")}</span>
        <div className="slider-flechas">
          <button type="button" className="slider-flecha" aria-label="Foto anterior" onClick={() => ir(i - 1)}>←</button>
          <button type="button" className="slider-flecha" aria-label="Foto siguiente" onClick={() => ir(i + 1)}>→</button>
        </div>
      </div>

      <div className="slider-barras" role="tablist" aria-label="Elegir foto">
        {slides.map((s, k) => (
          <button
            key={s.src} type="button" role="tab" aria-selected={k === i} aria-label={`Foto ${k + 1}`}
            className={`slider-barra${k === i ? " on" : ""}${k < i ? " hecha" : ""}`}
            style={{ "--dur": `${intervalo}ms` }} data-pausa={pausa ? "1" : "0"}
            onClick={() => ir(k)}
          ><span key={pausa ? "p" : "a"} /></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;

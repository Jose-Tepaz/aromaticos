import { Puntos } from "./home/InnovacionSection.jsx";
import { useState } from "react";
import { Reveal } from "./motion.jsx";

const Personalization = ({ go }) => {
  const [form, setForm] = useState({
    tipo: "Fragancia",
    industria: "Cosmética",
    descripcion: "",
    volumen: "1,000 – 5,000 kg / año",
    plazo: "1–3 meses",
    nombre: "",
    empresa: "",
    email: "",
  });
  const [sent, setSent] = useState(false);

  const set = (k, v) => setForm({ ...form, [k]: v });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: "100%", padding: "14px 0",
    background: "transparent", border: "none",
    borderBottom: "1px solid var(--rule)",
    color: "var(--fg)", fontFamily: "inherit", fontSize: 16, borderRadius: 0,
    outline: "none",
  };
  const labelStyle = {
    display: "block", fontFamily: "var(--font-sans)", fontWeight: 500,
    fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase",
    opacity: .6, marginBottom: 4,
  };
  const chip = (active) => ({
    padding: "11px 16px", borderRadius: 999,
    border: `1px solid ${active ? "var(--fg)" : "var(--rule)"}`,
    background: active ? "var(--fg)" : "transparent",
    color: active ? "var(--bg)" : "var(--fg)",
    fontSize: 13, cursor: "pointer",
    transition: "background .2s ease, color .2s ease, border-color .2s ease",
  });

  return (
    <div className="page">
      <section style={{ padding: "var(--section-y) 0 40px" }}>
        <div className="wrap">
          <div className="eyebrow">Personalización · Briefing</div>
          <h1 className="serif stagger-in" style={{
            fontSize: "clamp(40px, 9vw, 140px)", lineHeight: .95,
            letterSpacing: "-.03em", margin: "24px 0 0", fontWeight: 400,
          }}>
            Cuéntanos qué buscas,<br/>
            y nosotros lo <em style={{ color: "var(--accent)" }}>desarrollamos</em> contigo.
          </h1>
          <p className="stagger-in" style={{ "--d": "250ms", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.5, maxWidth: 720, opacity: .85, marginTop: 32 }}>
            Si tu proyecto requiere aromas, sabores o materias primas, en Aromáticos lo hacemos
            posible. Desarrollamos, conseguimos y personalizamos soluciones a la medida,
            adaptándonos a las necesidades específicas de cada cliente.
          </p>
        </div>
      </section>

      <section style={{ padding: "var(--section-y) 0 40px" }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 40 }}>Así trabajamos</div>
          <div className="paso-escalera">
            {[
              ["Diagnóstico", "Sesión inicial para entender tu producto, marca e industria."],
              ["Desarrollo", "Laboratorio trabaja muestras y perfiles hasta afinar la fórmula."],
              ["Validación", "Pruebas de estabilidad, regulatorio y producción piloto."],
              ["Entrega", "Producción a escala con trazabilidad y acompañamiento técnico."],
            ].map(([t, d], i) => (
              <Reveal key={i} className="paso-card">
                <div className="paso-top">
                  <span className="mono">Paso {i + 1}</span>
                  <Puntos n={i + 1} />
                </div>
                <div className="paso-bottom">
                  <h3 className="serif paso-titulo">{t}</h3>
                  <p className="p-card" style={{ margin: 0 }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--section-y-lg) 0" }}>
        <div className="wrap">
          <div className="split-form">
            <div className="sticky-side">
              <div className="eyebrow">Briefing rápido</div>
              <h2 className="serif" style={{ fontSize: "clamp(38px, 4.5vw, 56px)", lineHeight: 1, margin: "18px 0 24px", letterSpacing: "-.02em", fontWeight: 400 }}>
                Dinos por dónde <em style={{ color: "var(--accent)" }}>empezar</em>.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.6, opacity: .8, marginBottom: 32 }}>
                Tomamos máximo 5 minutos. Uno de nuestros desarrolladores de producto
                te contactará dentro de 48 horas hábiles.
              </p>
              <div className="caja-dato">
                <div className="mono" style={{ opacity: .6, marginBottom: 8 }}>Respuesta típica</div>
                <div className="serif" style={{ fontSize: 36, lineHeight: 1 }}>
                  48<span style={{ fontSize: 18, opacity: .6 }}> hrs hábiles</span>
                </div>
              </div>
            </div>

            <form onSubmit={submit}>
              <div style={{ marginBottom: 40 }}>
                <div id="lbl-tipo" style={labelStyle}>01 — ¿Qué tipo de proyecto?</div>
                <div role="group" aria-labelledby="lbl-tipo" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
                  {["Fragancia", "Sabor", "Materia prima", "No estoy seguro"].map(opt => (
                    <button type="button" key={opt} aria-pressed={form.tipo === opt} style={chip(form.tipo === opt)} onClick={() => set("tipo", opt)}>{opt}</button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 40 }}>
                <div id="lbl-industria" style={labelStyle}>02 — Industria</div>
                <div role="group" aria-labelledby="lbl-industria" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
                  {["Alimenticia", "Cosmética", "Farmacéutica", "Limpieza", "Otra"].map(opt => (
                    <button type="button" key={opt} aria-pressed={form.industria === opt} style={chip(form.industria === opt)} onClick={() => set("industria", opt)}>{opt}</button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 40 }}>
                <label htmlFor="pf-descripcion" style={labelStyle}>03 — Descríbenos el proyecto</label>
                <textarea
                  id="pf-descripcion" name="descripcion" autoComplete="off"
                  value={form.descripcion} onChange={e => set("descripcion", e.target.value)}
                  placeholder="Ej. Necesito una fragancia floral-amaderada para una línea de shampoos premium…"
                  rows={4}
                  style={{ ...inputStyle, padding: "14px 0", resize: "vertical" }}
                />
              </div>

              <div className="fields-2" style={{ marginBottom: 40 }}>
                <div>
                  <label htmlFor="pf-volumen" style={labelStyle}>04 — Volumen estimado</label>
                  <select id="pf-volumen" name="volumen" value={form.volumen} onChange={e => set("volumen", e.target.value)} style={inputStyle}>
                    {["Muestra / piloto", "100 – 1,000 kg / año", "1,000 – 5,000 kg / año", "5,000 – 20,000 kg / año", "20,000+ kg / año"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="pf-plazo" style={labelStyle}>05 — Plazo</label>
                  <select id="pf-plazo" name="plazo" value={form.plazo} onChange={e => set("plazo", e.target.value)} style={inputStyle}>
                    {["Urgente (≤1 mes)", "1–3 meses", "3–6 meses", "Sin prisa"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 40, marginBottom: 40 }}>
                <div className="mono" style={{ opacity: .6, marginBottom: 20 }}>Tus datos</div>
                <div className="fields-2" style={{ marginBottom: 32 }}>
                  <div>
                    <label htmlFor="pf-nombre" style={labelStyle}>Nombre</label>
                    <input id="pf-nombre" name="nombre" autoComplete="name" value={form.nombre} onChange={e => set("nombre", e.target.value)} style={inputStyle} placeholder="Tu nombre…" />
                  </div>
                  <div>
                    <label htmlFor="pf-empresa" style={labelStyle}>Empresa</label>
                    <input id="pf-empresa" name="empresa" autoComplete="organization" value={form.empresa} onChange={e => set("empresa", e.target.value)} style={inputStyle} placeholder="Nombre de tu empresa…" />
                  </div>
                </div>
                <label htmlFor="pf-email" style={labelStyle}>Email</label>
                <input id="pf-email" name="email" type="email" autoComplete="email" inputMode="email" spellCheck={false} value={form.email} onChange={e => set("email", e.target.value)} style={inputStyle} placeholder="tu@empresa.com" />
              </div>

              <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                <button type="submit" className="btn-primary">
                  {sent ? "Enviado ✓" : "Enviar solicitud"} <span className="arrow">↗</span>
                </button>
                <span className="mono" style={{ opacity: .5 }}>
                  O escríbenos a hola@aromaticos.mx
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Personalization;

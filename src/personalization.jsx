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
    display: "block", fontFamily: "'JetBrains Mono', monospace",
    fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase",
    opacity: .6, marginBottom: 4,
  };
  const chip = (active) => ({
    padding: "11px 16px", borderRadius: 999,
    border: `1px solid ${active ? "var(--fg)" : "var(--rule)"}`,
    background: active ? "var(--fg)" : "transparent",
    color: active ? "var(--bg)" : "var(--fg)",
    fontSize: 13, cursor: "pointer",
    transition: "all .2s",
  });

  return (
    <div className="page">
      <section style={{ padding: "clamp(33px, 4.2vw, 60px) 0 40px" }}>
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

      <section style={{ padding: "clamp(44px, 5.6vw, 80px) 0 40px" }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 40 }}>Así trabajamos</div>
          <div className="grid-4-tight">
            {[
              ["01", "Diagnóstico", "Sesión inicial para entender tu producto, marca e industria."],
              ["02", "Desarrollo", "Laboratorio trabaja muestras y perfiles hasta afinar la fórmula."],
              ["03", "Validación", "Pruebas de estabilidad, regulatorio y producción piloto."],
              ["04", "Entrega", "Producción a escala con trazabilidad y acompañamiento técnico."],
            ].map(([n, t, d], i) => (
              <Reveal key={i} delay={i * 100} variant="fade" style={{ background: "var(--bg)", padding: "36px 28px" }}>
                <div className="mono" style={{ opacity: .5, marginBottom: 20 }}>{n}</div>
                <h3 className="serif" style={{ fontSize: 30, margin: "0 0 12px", fontWeight: 500 }}>{t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, opacity: .75, margin: 0 }}>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(55px, 6.9vw, 100px) 0" }}>
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
              <div style={{ border: "1px solid var(--rule)", padding: "20px 24px" }}>
                <div className="mono" style={{ opacity: .6, marginBottom: 8 }}>Respuesta típica</div>
                <div className="serif" style={{ fontSize: 36, lineHeight: 1 }}>
                  48<span style={{ fontSize: 18, opacity: .6 }}> hrs hábiles</span>
                </div>
              </div>
            </div>

            <form onSubmit={submit}>
              <div style={{ marginBottom: 40 }}>
                <label style={labelStyle}>01 — ¿Qué tipo de proyecto?</label>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
                  {["Fragancia", "Sabor", "Materia prima", "No estoy seguro"].map(opt => (
                    <span key={opt} style={chip(form.tipo === opt)} onClick={() => set("tipo", opt)}>{opt}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 40 }}>
                <label style={labelStyle}>02 — Industria</label>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
                  {["Alimenticia", "Cosmética", "Farmacéutica", "Limpieza", "Otra"].map(opt => (
                    <span key={opt} style={chip(form.industria === opt)} onClick={() => set("industria", opt)}>{opt}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 40 }}>
                <label style={labelStyle}>03 — Descríbenos el proyecto</label>
                <textarea
                  value={form.descripcion} onChange={e => set("descripcion", e.target.value)}
                  placeholder="Ej. Necesito una fragancia floral-amaderada para una línea de shampoos premium…"
                  rows={4}
                  style={{ ...inputStyle, padding: "14px 0", resize: "vertical" }}
                />
              </div>

              <div className="fields-2" style={{ marginBottom: 40 }}>
                <div>
                  <label style={labelStyle}>04 — Volumen estimado</label>
                  <select value={form.volumen} onChange={e => set("volumen", e.target.value)} style={inputStyle}>
                    {["Muestra / piloto", "100 – 1,000 kg / año", "1,000 – 5,000 kg / año", "5,000 – 20,000 kg / año", "20,000+ kg / año"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>05 — Plazo</label>
                  <select value={form.plazo} onChange={e => set("plazo", e.target.value)} style={inputStyle}>
                    {["Urgente (≤1 mes)", "1–3 meses", "3–6 meses", "Sin prisa"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 40, marginBottom: 40 }}>
                <div className="mono" style={{ opacity: .6, marginBottom: 20 }}>Tus datos</div>
                <div className="fields-2" style={{ marginBottom: 32 }}>
                  <div>
                    <label style={labelStyle}>Nombre</label>
                    <input value={form.nombre} onChange={e => set("nombre", e.target.value)} style={inputStyle} placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label style={labelStyle}>Empresa</label>
                    <input value={form.empresa} onChange={e => set("empresa", e.target.value)} style={inputStyle} placeholder="Nombre de tu empresa" />
                  </div>
                </div>
                <label style={labelStyle}>Email</label>
                <input type="email" value={form.email} onChange={e => set("email", e.target.value)} style={inputStyle} placeholder="tu@empresa.com" />
              </div>

              <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                <button type="submit" className="btn-primary">
                  {sent ? "Enviado ✓" : "Enviar briefing"} <span className="arrow">↗</span>
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

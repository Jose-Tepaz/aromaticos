import { Placeholder } from "./components.jsx";

const Contact = ({ go }) => {
  return (
    <div className="page">
      <section style={{ padding: "60px 0 40px" }}>
        <div className="wrap">
          <div className="eyebrow">Contacto</div>
          <h1 className="serif" style={{
            fontSize: "clamp(80px, 11vw, 180px)", lineHeight: .92,
            letterSpacing: "-.03em", margin: "24px 0 0", fontWeight: 400,
          }}>
            Hablemos de tu <em style={{ color: "var(--accent)" }}>proyecto</em>.
          </h1>
        </div>
      </section>

      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
            <div>
              <div style={{ display: "grid", gap: 24 }}>
                {[
                  ["Comercial", "Proyectos, briefings y desarrollo", "hola@aromaticos.mx"],
                  ["Servicio técnico", "Soporte a clientes y regulatorio", "tecnico@aromaticos.mx"],
                  ["Materias primas", "Catálogo y cotizaciones", "mp@aromaticos.mx"],
                  ["Prensa", "Entrevistas y comunicación", "prensa@aromaticos.mx"],
                ].map(([k, v, mail], i) => (
                  <div key={i} style={{ padding: "28px 0", borderTop: "1px solid var(--rule)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                      <h3 className="serif" style={{ fontSize: 28, margin: 0, fontWeight: 500 }}>{k}</h3>
                      <span className="mono" style={{ opacity: .5 }}>0{i+1}</span>
                    </div>
                    <p style={{ fontSize: 14, opacity: .75, margin: "0 0 10px" }}>{v}</p>
                    <a href={`mailto:${mail}`} className="mono" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>{mail}</a>
                  </div>
                ))}
                <div style={{ padding: "28px 0", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
                  <h3 className="serif" style={{ fontSize: 28, margin: 0, fontWeight: 500, marginBottom: 10 }}>Teléfono</h3>
                  <div className="mono">+52 55 0000 0000</div>
                </div>
              </div>
            </div>

            <div>
              <Placeholder variant="cream" label="Mapa · Ciudad de México" height="380px" dark />
              <div style={{ padding: "28px 0", borderBottom: "1px solid var(--rule)" }}>
                <div className="mono" style={{ opacity: .6, marginBottom: 8 }}>Oficina central</div>
                <div style={{ fontSize: 17, lineHeight: 1.55 }}>
                  Calle Aromáticos 1956<br/>
                  Col. Industrial<br/>
                  Ciudad de México, 00000<br/>
                  México
                </div>
              </div>
              <div style={{ padding: "28px 0" }}>
                <div className="mono" style={{ opacity: .6, marginBottom: 8 }}>Horario</div>
                <div style={{ fontSize: 15, opacity: .85 }}>Lunes a Viernes · 9:00 – 18:00</div>
              </div>
              <button className="btn-primary" onClick={() => go("personalizacion")} style={{ marginTop: 20 }}>
                Iniciar briefing <span className="arrow">↗</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

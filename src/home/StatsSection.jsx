const STATS = [
  ["70+",  "años de experiencia"],
  ["1956", "año de fundación"],
  ["4",    "industrias clave"],
  ["ISO",  "9001 : 2015"],
];

const StatsSection = () => (
  <section style={{ padding: "100px 0 40px" }}>
    <div className="wrap">
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 40,
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
        padding: "32px 0",
      }}>
        {STATS.map(([k, v], i) => (
          <div key={i}>
            <div className="serif" style={{ fontSize: 54, lineHeight: 1, letterSpacing: "-.02em" }}>{k}</div>
            <div className="mono" style={{ marginTop: 10, opacity: .6 }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;

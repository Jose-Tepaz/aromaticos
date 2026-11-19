import { CountUp, Line, Reveal } from "../motion.jsx";

const STATS = [
  [<CountUp to={70} suffix="+" />, "años de experiencia"],
  ["Multisector",                  "Alimenticia, cosmética, farmacéutica, limpieza y más"],
  ["ISO",                          "Certificación ISO 9001:2015"],
];

const StatsSection = () => (
  <section className="hero-stats">
    <div className="wrap">
      <Line />
      <div className="stats-grid" style={{ padding: "clamp(32px, 5vh, 52px) 0" }}>
        {STATS.map(([k, v], i) => (
          <Reveal key={i} delay={i * 110}>
            <div className="serif stat-num">{k}</div>
            <div className="mono" style={{ marginTop: 10, opacity: .6 }}>{v}</div>
          </Reveal>
        ))}
      </div>
      <Line />
    </div>
  </section>
);

export default StatsSection;

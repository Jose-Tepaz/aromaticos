import { CountUp, Line, Reveal } from "../motion.jsx";

const STATS = [
  [<CountUp to={70} suffix="+" />,                 "años de experiencia"],
  [<CountUp from={1900} to={1956} />,              "año de fundación"],
  [<CountUp to={4} />,                             "industrias clave"],
  ["ISO",                                          "9001 : 2015"],
];

const StatsSection = () => (
  <section style={{ padding: "clamp(56px, 7vw, 100px) 0 40px" }}>
    <div className="wrap">
      <Line />
      <div className="cols-4" style={{ padding: "32px 0" }}>
        {STATS.map(([k, v], i) => (
          <Reveal key={i} delay={i * 110}>
            <div className="serif" style={{ fontSize: "clamp(40px, 5vw, 54px)", lineHeight: 1, letterSpacing: "-.02em" }}>{k}</div>
            <div className="mono" style={{ marginTop: 10, opacity: .6 }}>{v}</div>
          </Reveal>
        ))}
      </div>
      <Line />
    </div>
  </section>
);

export default StatsSection;

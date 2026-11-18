import { useEffect, useRef, useState } from "react";

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const useInView = ({ threshold = 0.15, rootMargin = "0px 0px -8% 0px", skipInSection = false } = {}) => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Dentro de una <section> la entrada la dispara la sección completa (ver useSectionReveal)
    if (skipInSection && el.closest("section")) return;
    if (prefersReduced() || !("IntersectionObserver" in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    }, { threshold, rootMargin });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, skipInSection]);

  return [ref, seen];
};

export const Reveal = ({ as: Tag = "div", delay = 0, variant, className = "", style, children, ...rest }) => {
  const [ref, seen] = useInView({ skipInSection: true });
  const cls = ["reveal", variant && `reveal-${variant}`, seen && "in", className].filter(Boolean).join(" ");
  return (
    <Tag ref={ref} className={cls} style={{ "--d": `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
};

export const Line = ({ className = "" }) => {
  const [ref, seen] = useInView({ threshold: 0.5, rootMargin: "0px" });
  return <div ref={ref} className={`line-draw ${seen ? "in" : ""} ${className}`} />;
};

export const CountUp = ({ from = 0, to, suffix = "", duration = 1600 }) => {
  const [ref, seen] = useInView({ threshold: 0.6, rootMargin: "0px" });
  const [n, setN] = useState(prefersReduced() ? to : from);

  useEffect(() => {
    if (!seen) return;
    if (prefersReduced()) {
      setN(to);
      return;
    }
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(from + (to - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, from, to, duration]);

  return <span ref={ref}>{n}{suffix}</span>;
};

export const useParallax = (enabled = true, strength = 0.06) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el || prefersReduced()) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const box = el.parentElement.getBoundingClientRect();
      const vh = window.innerHeight;
      if (box.bottom < 0 || box.top > vh) return;
      const offset = (box.top + box.height / 2 - vh / 2) * strength;
      el.style.transform = `translate3d(0, ${-offset}px, 0) scale(1.16)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled, strength]);

  return ref;
};

// Entrada sección por sección: cuando una <section> llega al 80 % de la pantalla,
// se marca con .sec-in y todos sus .reveal se animan juntos (con su escalonado).
export const useSectionReveal = (key) => {
  useEffect(() => {
    const sections = [...document.querySelectorAll("main section")];
    if (prefersReduced() || !("IntersectionObserver" in window)) {
      sections.forEach((s) => s.classList.add("sec-in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          // Escalonado de 0.15 s entre bloques (máximo 6 pasos) y luego se activa la sección
          entry.target.querySelectorAll(".reveal").forEach((el, i) => {
            el.style.setProperty("--d", `${Math.min(i, 5) * 150}ms`);
          });
          entry.target.classList.add("sec-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -20% 0px" });
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [key]);
};

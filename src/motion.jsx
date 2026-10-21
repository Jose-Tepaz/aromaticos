import { useEffect, useRef, useState } from "react";

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const useInView = ({ threshold = 0.15, rootMargin = "0px 0px -8% 0px" } = {}) => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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
  }, [threshold, rootMargin]);

  return [ref, seen];
};

export const Reveal = ({ as: Tag = "div", delay = 0, variant, className = "", style, children, ...rest }) => {
  const [ref, seen] = useInView();
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

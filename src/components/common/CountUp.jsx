import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "", duration = 1400 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(target * eased);
            if (p < 1) requestAnimationFrame(step);
            else setVal(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  const display = Number.isInteger(target) ? Math.round(val) : val.toFixed(1);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ----------------------------------------------------------------------- */
/*  Small shared bits                                                      */
/* ----------------------------------------------------------------------- */

export default CountUp;

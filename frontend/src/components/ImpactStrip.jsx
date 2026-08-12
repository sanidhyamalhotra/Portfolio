import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { impactMetrics } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1];

function Counter({ to, suffix = "", duration = 1400 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="font-heading text-5xl font-black tracking-tighter text-primary md:text-6xl lg:text-7xl">
      {value}
      {suffix}
    </span>
  );
}

export default function ImpactStrip() {
  return (
    <section
      id="impact"
      data-testid="impact-strip"
      className="relative w-full border-y border-border py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-px w-12 bg-primary" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            / Impact by the numbers
          </span>
        </div>
        <div className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
          {impactMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.06 }}
              data-testid={`impact-metric-${i}`}
              className="flex flex-col justify-between gap-6 bg-background p-6 md:min-h-[220px] md:p-10"
            >
              <Counter to={m.value} suffix={m.suffix} />
              <p className="text-xs font-bold uppercase leading-relaxed tracking-[0.2em] text-muted-foreground md:text-sm md:leading-snug">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

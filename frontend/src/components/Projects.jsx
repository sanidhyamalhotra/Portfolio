import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, projectCategories } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1];

function SpotlightCard({ project, index }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease, delay: (index % 3) * 0.05 }}
      data-testid={`project-card-${index}`}
      className="group relative flex flex-col overflow-hidden border border-border bg-card"
      style={{
        backgroundImage:
          "radial-gradient(320px circle at var(--mx, -100px) var(--my, -100px), rgba(223,255,0,0.10), transparent 70%)",
      }}
    >
      <Link
        to={`/case/${project.slug}`}
        data-testid={`project-link-${project.slug}`}
        className="flex flex-1 flex-col"
      >
        <div className="relative h-56 overflow-hidden border-b border-border md:h-64">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="h-full w-full object-cover opacity-70 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0"
          />
          <span className="absolute left-4 top-4 bg-background/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
            {project.tag}
          </span>
          {project.impact && (
            <span
              data-testid={`impact-ribbon-${project.slug}`}
              className="absolute right-4 top-4 bg-primary px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary-foreground"
            >
              {project.impact}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-heading text-2xl font-medium tracking-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
              {project.name}
            </h3>
            <ArrowUpRight className="h-6 w-6 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
          </div>
          <p className="mt-4 flex-1 text-base font-light leading-relaxed tracking-tight text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
            Read case study
            <span className="h-px w-8 bg-primary transition-all duration-300 group-hover:w-16" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  const countFor = (cat) =>
    cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;

  return (
    <section id="work" className="relative w-full border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-heading text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            Selected Projects
          </h2>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            / {String(filtered.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")} Case Files
          </span>
        </div>

        {/* Category filter strip */}
        <div
          data-testid="project-filter-strip"
          className="mb-12 flex flex-wrap items-center gap-2 border-y border-border py-5"
        >
          <span className="mr-3 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            / Filter
          </span>
          {projectCategories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActive(cat)}
                className={`group flex items-center gap-2 border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-all ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {cat}
                <span
                  className={`text-[10px] font-black ${
                    isActive ? "text-primary-foreground/70" : "text-primary"
                  }`}
                >
                  {String(countFor(cat)).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <SpotlightCard key={p.slug} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm font-light tracking-tight text-muted-foreground">
            No case files in this category yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}

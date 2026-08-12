import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github, Terminal } from "lucide-react";
import { projects, RESUME_URL } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1];

const Section = ({ label, title, children, testId }) => (
  <section data-testid={testId} className="border-t border-border py-20 md:py-28">
    <div className="mx-auto max-w-[1400px] px-6 md:px-12">
      <div className="mb-10 flex items-center gap-3">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">/ {label}</span>
      </div>
      {title && (
        <h2 className="mb-12 font-heading text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

export default function CaseStudy() {
  const { slug } = useParams();
  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);
  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-primary">/ 404 · Not Found</p>
          <Link to="/" className="border border-primary bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground">
            Return home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main data-testid="case-study-page" className="relative w-full bg-background text-foreground">
      {/* Mini nav */}
      <div className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
          <Link
            to="/#work"
            data-testid="case-back-btn"
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="flex h-9 w-9 items-center justify-center border border-border transition-colors group-hover:border-primary">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            </span>
            All Case Files
          </Link>
          <Link to="/" className="font-heading text-sm font-black uppercase tracking-tighter">
            S<span className="text-primary">/</span>M
          </Link>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
          >
            Resume
          </a>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 md:pt-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-primary"
          >
            / Case File · {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="font-heading text-4xl font-black uppercase leading-[0.95] tracking-tighter text-foreground md:text-6xl lg:text-7xl"
          >
            {project.name}
          </motion.h1>

          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Category</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-primary">{project.tag}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Duration</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-foreground">{project.period}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Role</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-foreground">Design · Build · Report</p>
            </div>
          </div>

          {project.githubUrl && (
            <div className="mt-10">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`case-github-${project.slug}`}
                className="group inline-flex items-center gap-3 border border-primary bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
              >
                <Github className="h-4 w-4" />
                View source on GitHub
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          )}
        </div>

        <div className="relative mt-16 h-[45vh] w-full overflow-hidden border-y border-border md:h-[65vh]">
          <img src={project.image} alt={project.name} className="h-full w-full object-cover opacity-70 grayscale" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          {project.impact && (
            <div className="absolute right-6 top-6 bg-primary px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-primary-foreground md:right-12 md:top-10">
              {project.impact}
            </div>
          )}
        </div>
      </section>

      {/* Overview */}
      <Section label="Overview" title="Mission Brief" testId="case-overview">
        <p className="max-w-4xl text-lg font-light leading-relaxed tracking-tight text-muted-foreground md:text-xl">
          {project.overview}
        </p>
      </Section>

      {/* Stats */}
      {project.stats && (
        <section data-testid="case-stats" className="border-t border-border py-16">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <div className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
              {project.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                  className="flex flex-col justify-between gap-6 bg-background p-8 md:p-10"
                >
                  <p className="font-heading text-4xl font-black tracking-tighter text-primary md:text-5xl">
                    {s.value}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Methodology */}
      <Section label="Methodology" title="How I ran the play" testId="case-methodology">
        <div className="flex flex-col gap-0">
          {project.methodology.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
              className="grid grid-cols-1 gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-12"
            >
              <div className="md:col-span-2">
                <span className="font-heading text-5xl font-black tracking-tighter text-primary md:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-heading text-2xl font-medium tracking-tight text-foreground md:col-span-3 md:text-3xl">
                {step.title}
              </h3>
              <p className="text-base font-light leading-relaxed tracking-tight text-muted-foreground md:col-span-7">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Tech stack */}
      <Section label="Tech Stack" title="Tools & primitives" testId="case-stack">
        <div className="flex flex-wrap gap-3">
          {project.stack.map((s) => (
            <span
              key={s}
              className="border border-border px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* IOCs / Findings */}
      {project.iocs && (
        <Section label="Findings" title="Key IOCs & controls" testId="case-iocs">
          <div className="border border-border bg-card">
            <div className="flex items-center gap-3 border-b border-border bg-background/60 px-6 py-4">
              <Terminal className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                artifacts / {project.slug}.log
              </span>
            </div>
            <div className="divide-y divide-border">
              {project.iocs.map((ioc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease, delay: i * 0.04 }}
                  className="grid grid-cols-1 gap-2 px-6 py-5 font-mono text-sm md:grid-cols-[140px_1fr] md:gap-6"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                    ▸ {ioc.type}
                  </span>
                  <span className="break-all text-muted-foreground">{ioc.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Takeaways */}
      {project.takeaways && (
        <Section label="Defender Takeaways" title="What I'd tell the next team" testId="case-takeaways">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {project.takeaways.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: i * 0.06 }}
                className="border border-border bg-card p-8"
              >
                <p className="mb-4 font-heading text-4xl font-black tracking-tighter text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-base font-light leading-relaxed tracking-tight text-muted-foreground">
                  {t}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* Next project + Back */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">/ Up Next</p>
              <Link
                to={`/case/${next.slug}`}
                data-testid="case-next-link"
                className="group inline-flex items-center gap-6"
              >
                <span className="font-heading text-3xl font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary md:text-5xl">
                  {next.name}
                </span>
                <ArrowUpRight className="h-8 w-8 flex-shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary md:h-10 md:w-10" />
              </Link>
            </div>
            <Link
              to="/#work"
              className="self-start border border-primary bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary md:self-end"
            >
              ← All Case Files
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

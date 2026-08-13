import { motion } from "framer-motion";
import { skills, education, certifications } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-heading text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            Capabilities
          </h2>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            / Stack & Toolkit
          </span>
        </div>

        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: (i % 3) * 0.05 }}
              data-testid={`skill-group-${cat.group.toLowerCase()}`}
              className="bg-background p-8"
            >
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-primary">{cat.group}</p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <span
                    key={s}
                    className="border border-border px-3 py-1.5 text-sm font-light tracking-tight text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-primary">/ Education</p>
            {education.map((e) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                data-testid={`education-${e.degree}`}
                className="border-t border-border py-6"
              >
                <h3 className="font-heading text-xl font-medium tracking-tight text-foreground">{e.degree}</h3>
                <p className="mt-1 text-sm font-light text-muted-foreground">{e.school}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-primary">{e.period} · {e.detail}</p>
              </motion.div>
            ))}
          </div>
          <div>
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-primary">/ Certifications</p>
            {certifications.map((c) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="flex items-center gap-4 border-t border-border py-6"
              >
                <span className="h-2 w-2 bg-primary" />
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-lg font-medium tracking-tight text-foreground transition-colors hover:text-primary"
                >
                  {c.name}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

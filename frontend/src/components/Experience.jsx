import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-heading text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            Experience
          </h2>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            / The Timeline
          </span>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:block" />
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.05 }}
              data-testid={`experience-item-${i}`}
              className="group relative grid grid-cols-1 gap-6 border-t border-border py-12 pl-0 md:grid-cols-12 md:gap-8 md:pl-12"
            >
              <span className="absolute left-[-5px] top-[52px] hidden h-2.5 w-2.5 bg-border transition-colors duration-300 group-hover:bg-primary md:block" />
              <div className="md:col-span-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{job.period}</p>
                <p className="mt-2 text-sm font-light text-muted-foreground">{job.location}</p>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-heading text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  {job.company}
                </p>
                <ul className="mt-6 space-y-3">
                  {job.points.map((p, idx) => (
                    <li key={idx} className="flex gap-3 text-base font-light leading-relaxed tracking-tight text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

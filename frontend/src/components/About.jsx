import { motion } from "framer-motion";
import { manifesto } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <section id="about" className="relative w-full border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-20 flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">/ Manifesto</span>
        </div>

        <div className="flex flex-col gap-16 md:gap-0">
          {manifesto.map((m, i) => (
            <motion.div
              key={m.n}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
              data-testid={`manifesto-chapter-${m.n}`}
              className="grid grid-cols-1 gap-6 border-t border-border py-12 md:grid-cols-12 md:gap-12"
            >
              <div className="md:col-span-3">
                <span className="font-heading text-6xl font-black tracking-tighter text-primary md:text-7xl">
                  {m.n}
                </span>
              </div>
              <h3 className="font-heading text-2xl font-medium tracking-tight text-foreground md:col-span-5 md:text-3xl">
                {m.title}
              </h3>
              <p className="text-base font-light leading-relaxed tracking-tight text-muted-foreground md:col-span-4">
                {m.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

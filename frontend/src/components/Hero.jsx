import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import { profile } from "@/data/portfolio";

const ease = [0.76, 0, 0.24, 1];

const MaskLine = ({ children, delay = 0 }) => (
  <span className="mask-line">
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </motion.span>
  </span>
);

export default function Hero() {
  const scrollTo = (id) =>
    window.__lenis
      ? window.__lenis.scrollTo(`#${id}`, { offset: -20 })
      : document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70">
        <ParticleField />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-background/10 via-transparent to-background" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-28 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-px w-12 bg-primary" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            {profile.location} — Available for work
          </span>
        </motion.div>

        <h1 className="font-heading text-[15vw] font-black uppercase leading-[0.86] tracking-tighter text-foreground md:text-[11vw] lg:text-[9.5vw]">
          <MaskLine delay={0.35}>{profile.firstName}</MaskLine>
          <MaskLine delay={0.5}>
            <span className="text-stroke">{profile.lastName}</span>
          </MaskLine>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease }}
            className="max-w-md text-base font-light leading-relaxed tracking-tight text-muted-foreground md:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8, ease }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {profile.roles.map((r, i) => (
              <span key={r} className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
                {i > 0 && <span className="h-1 w-1 bg-primary" />}
                {r}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.button
          data-testid="hero-scroll-cue"
          onClick={() => scrollTo("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="group mt-16 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="flex h-10 w-10 items-center justify-center border border-border transition-colors group-hover:border-primary">
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </span>
          Scroll to explore
        </motion.button>
      </div>
    </section>
  );
}

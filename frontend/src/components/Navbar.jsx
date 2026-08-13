import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { RESUME_URL } from "@/data/portfolio";

const links = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "work" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (id) => {
    setOpen(false);
    setTimeout(() => {
      if (window.__lenis) {
        window.__lenis.scrollTo(`#${id}`, { offset: -20 });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        data-testid="main-navbar"
        className={`fixed top-0 left-0 z-50 w-full border-b transition-colors duration-300 ${
          scrolled || open ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
          <button
            data-testid="nav-logo"
            onClick={() => (window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" }))}
            className="font-heading text-sm font-black uppercase tracking-tighter text-foreground"
          >
            S<span className="text-primary">/</span>M
          </button>

          <div className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <button
                key={l.id}
                data-testid={`nav-link-${l.id}`}
                onClick={() => scrollTo(l.id)}
                className="group relative text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-resume-btn"
              className="border border-primary bg-primary px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary md:px-5 md:text-xs"
            >
              Resume
            </a>
            <button
              data-testid="nav-mobile-toggle"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            data-testid="mobile-menu"
            className="fixed inset-0 top-0 z-40 flex flex-col bg-background pt-[72px] md:hidden"
          >
            <div className="flex flex-1 flex-col justify-between px-6 pb-10 pt-10">
              <div className="flex flex-col gap-6">
                {links.map((l, i) => (
                  <motion.button
                    key={l.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                    data-testid={`nav-mobile-link-${l.id}`}
                    onClick={() => scrollTo(l.id)}
                    className="group flex items-baseline justify-between border-b border-border py-4 text-left"
                  >
                    <span className="font-heading text-3xl font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {l.label}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                      / {String(i + 1).padStart(2, "0")}
                    </span>
                  </motion.button>
                ))}
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  / Sanidhya Malhotra · Cybersecurity
                </p>
                <p className="mt-3 text-xs font-light text-muted-foreground">
                  Carson, California — Available for work
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

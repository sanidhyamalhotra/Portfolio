import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactStrip from "@/components/ImpactStrip";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import EditorialMarquee from "@/components/Marquee";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Portfolio() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    // Give Lenis a beat to init, then scroll to the target
    const t = setTimeout(() => {
      if (window.__lenis) {
        window.__lenis.scrollTo(`#${id}`, { offset: -20 });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }, 250);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <main className="relative w-full bg-background" data-testid="portfolio-page">
      <Navbar />
      <Hero />
      <ImpactStrip />
      <About />
      <Experience />
      <Projects />
      <EditorialMarquee />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

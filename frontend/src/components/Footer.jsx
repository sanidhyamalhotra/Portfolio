import { profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-border py-10" data-testid="footer">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          © {year} {profile.name}
        </p>
        <p className="text-xs font-light tracking-tight text-muted-foreground">
          Built with intent — React · Motion
        </p>
        <button
          onClick={() => (window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" }))}
          data-testid="back-to-top"
          className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

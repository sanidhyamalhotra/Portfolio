import Marquee from "react-fast-marquee";
import { marqueeItems } from "@/data/portfolio";

export default function EditorialMarquee() {
  return (
    <section className="w-full overflow-hidden border-y border-border py-10 md:py-14" data-testid="editorial-marquee">
      <Marquee speed={45} gradient={false}>
        {marqueeItems.concat(marqueeItems).map((item, i) => (
          <span
            key={i}
            className="mx-8 font-heading text-6xl font-black uppercase tracking-tighter text-stroke-muted md:text-8xl"
          >
            {item}
            <span className="mx-8 text-primary" style={{ WebkitTextStroke: "0" }}>
              ✦
            </span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}

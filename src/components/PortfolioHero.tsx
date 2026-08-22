import primaryHeadshot from "@/assets/images/bruce-johnson-primary.png";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-24 md:pb-32 md:pt-32">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm text-muted-foreground shadow-sm">
            Building. Operating. Learning.
          </div>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Bruce Johnson</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-muted-foreground md:text-2xl">
            A portfolio of businesses, systems, and independent projects being built with a focus on operations, technology, and continuous learning.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild>
              <a href="#projects">Explore projects <ArrowRight /></a>
            </Button>
          </div>
        </div>
        <img src={primaryHeadshot} alt="Bruce Johnson" className="h-72 w-72 rounded-3xl object-cover shadow-xl" />
      </div>
    </section>
  );
}

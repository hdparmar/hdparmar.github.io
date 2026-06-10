import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle } from "lucide-react";

const Tonestruments = () => {
  return (
    <section id="tonestruments" aria-labelledby="tonestruments-heading" className="py-12 md:py-16">
      <article className="border-y border-border bg-card/35 py-8 transition-colors dark:border-border/70 dark:bg-card/30 md:py-10">
        <div className="min-w-0">
          <div className="space-y-7">
            <div className="space-y-3">
              <h2 id="tonestruments-heading" className="text-3xl font-bold leading-tight text-foreground md:text-[2.75rem]">
                TonePad Beat Blocks
              </h2>
              <p className="text-lg font-light leading-8 text-muted-foreground">
                What if making music felt like Tetris?
              </p>
            </div>

            <div className="space-y-2 border-l border-accent/35 pl-4">
              <p className="text-base font-light leading-7 text-muted-foreground">
                A game that teaches lo-fi beat making by turning falling bricks into rhythm and beats.
              </p>
              <p className="text-base font-semibold text-foreground">
                No theory, no manuals, just play.
              </p>
            </div>

            <ul className="grid gap-2 border-y border-border/80 py-4">
              {[
                "Love music but never learned?",
                "Tried FL Studio and gave up?",
                "Want to express feelings in sound?",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-light text-muted-foreground">
                  <CheckCircle className="h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="btn-rustic-hover h-10 border border-accent bg-accent px-4 text-sm font-medium text-accent-foreground"
                data-track-id="tonepad-learn-more"
              >
                <a href="https://tonestruments.se" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Learn More
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="btn-rustic-hover h-10 border border-border bg-transparent px-4 text-sm font-medium"
                data-track-id="tonepad-join-waitlist"
              >
                <a href="https://tonestruments.se" target="_blank" rel="noopener noreferrer">
                  Join the Waitlist
                </a>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Tonestruments;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle } from "lucide-react";
import logomark from "@/assets/logo/logomark.svg";

const Tonestruments = () => {
  return (
    <section id="tonestruments" className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <img src={logomark} alt="Tonestruments" className="h-8 w-8 md:h-10 md:w-10" />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
            tonestruments
          </h2>
        </div>

        <Card className="p-6 md:p-8 lg:p-12 border-2 border-accent/20 bg-card">
          <div className="space-y-5 md:space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl md:text-2xl font-bold text-primary">
                  TonePad
                </h3>
                <span className="text-lg md:text-xl text-muted-foreground">—</span>
                <span className="text-lg md:text-xl font-medium text-accent italic">
                  Tetris lo-fi
                </span>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground italic">
                What if making music felt like Tetris?
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                A game that teaches you lo-fi beat-making by turning rhythm into falling bricks.
              </p>
              <p className="text-sm md:text-base font-bold italic text-foreground">
                No theory, no manuals, just play.
              </p>
            </div>

            {/* Checkmarks */}
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" />
                <span>Love music but never learned?</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" />
                <span>Tried FL Studio and gave up?</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" />
                <span>Want to express feelings in sound?</span>
              </div>
            </div>

            {/* Buttons and Launch Date */}
            <div className="pt-4 space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  className="btn-rustic-hover bg-accent text-accent-foreground w-full sm:w-auto"
                  onClick={() => window.open("https://tonestruments.se", "_blank")}
                  data-track-id="tonepad-learn-more"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
                <Button
                  variant="outline"
                  className="btn-rustic-hover w-full sm:w-auto"
                  onClick={() => window.open("https://tonestruments.se", "_blank")}
                  data-track-id="tonepad-join-waitlist"
                >
                  Join the Waitlist!
                </Button>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <span className="text-muted-foreground">Launch:</span>
                <span className="font-semibold text-accent">Late Spring 2026</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Tonestruments;

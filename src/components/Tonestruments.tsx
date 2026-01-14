import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, ExternalLink } from "lucide-react";

const Tonestruments = () => {
  return (
    <section id="tonestruments" className="py-24 px-6 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Music className="h-6 w-6 text-accent" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            tonestruments
          </h2>
        </div>

        <Card className="p-8 md:p-12 border-2 border-accent/20 bg-card">
          <div className="space-y-6">
            <div>
              <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Founder & Creator
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">TonePad</h3>
              <p className="text-xl text-muted-foreground italic mb-6">
                Learn sound by playing with it.
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                TonePad is a compact, gamified music device that helps beginners 
                learn music production and sound design by playing with loops, 
                beats, and tweaks. It teaches music structure and sound shaping 
                through interactive, playful exploration—no theory, no manuals.
              </p>

              <div className="pt-4">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Our Vision
                </h4>
                <p>
                  We believe anyone can make music, if the tools are friendly. 
                  TonePad is the first step into a new category of playful, 
                  educational audio tools.
                </p>
              </div>

              <div className="pt-4">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Startup Prompt: "What vibe are you in today?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Guided sound-based teaching: bars, beats, loops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Real-time tweaking with feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Physical knobs, screen, and grid buttons</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-4">
                <Button
                  variant="outline"
                  className="btn-rustic-hover"
                  onClick={() => window.open("https://tonestruments.com/beta", "_blank")}
                >
                  Sign up for beta test
                </Button>
                <Button
                  variant="default"
                  className="btn-rustic-hover bg-accent text-accent-foreground"
                  onClick={() => window.open("https://tonestruments.com", "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Learn More
                </Button>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Launch target:</span>
                  <span className="font-semibold text-accent">Late Spring 2026</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Tonestruments;

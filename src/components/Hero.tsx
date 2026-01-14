import { Button } from "@/components/ui/button";
import { Calendar, Coffee } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-8 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="animate-fade-in space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
              Harshdeep Parmar
            </h1>
            <p className="text-base text-muted-foreground">
              Tjena!
            </p>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            I capture moments through a viewfinder, write about the ones I can't forget, and read about everything in between. Still figuring out the rest — but hey, that's the fun part.
          </p>

          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            Research-oriented computer scientist specializing in embedded systems, edge computing, and secure partitioning. Currently developing tonepad — helping you learn and make your first lo-fi drum song.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="btn-rustic-hover bg-primary text-primary-foreground border-2 border-primary"
              onClick={() => window.open("https://calendly.com/hdp-1798/30min", "_blank")}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Online Meet
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-rustic-hover border-2"
              onClick={() => window.open("https://calendly.com", "_blank")}
            >
              <Coffee className="mr-2 h-5 w-5" />
              In Stockholm? Grab a fika!
            </Button>
          </div>

          <div className="pt-6 space-y-4">
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="mailto:hdp1798@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                hdp1798@gmail.com
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="https://github.com/hdparmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                GitHub
              </a>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm pt-2 border-t border-border/50">
              <a
                href="#tonestruments"
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                tonestruments
              </a>
              <a
                href="#writing"
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                Writing
              </a>
              <a
                href="#photography"
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                Photography
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

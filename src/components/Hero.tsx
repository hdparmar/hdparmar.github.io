import DarkModeToggle from "@/components/DarkModeToggle";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="mx-auto flex min-h-[52vh] w-full max-w-[44rem] items-center px-5 pt-16 sm:px-6 md:pt-20">
      <div className="w-full">
        <div className="space-y-6 motion-safe:animate-fade-in motion-reduce:animate-fade-in-reduced">
          <div className="border-b border-border/70 pb-5 dark:border-border/60">
            <h1 className="mb-1 text-[2.35rem] font-bold leading-none text-foreground md:text-[3.35rem]">
              Harshdeep Parmar
            </h1>
            <p className="mb-4 text-sm font-light italic text-muted-foreground md:text-base">
              /ˈhɑːrʃ.diːp pɑːr.mɑːr/
            </p>
          </div>

          <p className="max-w-[68ch] text-base font-light leading-7 text-muted-foreground">
            I am the founder of{" "}
            <a
              href="https://tonestruments.se"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline font-normal text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              tonestruments.se
              <ArrowUpRight className="ml-0.5 inline h-3.5 w-3.5 translate-y-0.5" aria-hidden="true" />
            </a>{" "}
            where I am trying to figure out if people who want to get the intuition of beat making and why certain songs make them feel the way it does, are able to build a song themselves to express themselves in a musical way.
          </p>

          <p className="max-w-[68ch] text-base font-light leading-7 text-muted-foreground">
            I am interested in making a musical instrument that lowers the barriers of making music for non-experts, and I am learning a lot on this path, if you would like to collaborate or talk about it, hit me up @{" "}
            <a
              href="mailto:hello@tonestruments.se"
              className="inline-flex items-baseline font-normal text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              hello@tonestruments.se
              <ArrowUpRight className="ml-0.5 inline h-3.5 w-3.5 translate-y-0.5" aria-hidden="true" />
            </a>.
          </p>

          <p className="max-w-[68ch] text-base font-light leading-7 text-muted-foreground">
            Apart from that, I read literature and sometimes when I feel like it write some myself, and I tend to capture images on which I can tell stories, and sometimes I play chess, and a lot of time cook good food!
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between gap-4 text-sm">
              <div className="flex min-w-0 flex-wrap items-center gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  LinkedIn
                </a>
                <span className="font-extralight text-muted-foreground">/</span>
                <a
                  href="https://github.com/hdparmar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  GitHub
                </a>
              </div>
              <DarkModeToggle className="ml-auto" />
            </div>

            <nav aria-label="Portfolio sections" className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border/60 pt-3 text-sm dark:border-border/50">
              <a
                href="#tonestruments"
                className="font-medium text-foreground transition-colors hover:text-accent"
              >
                TonePad
              </a>
              <a
                href="#research"
                className="font-medium text-foreground transition-colors hover:text-accent"
              >
                Research
              </a>
              <a
                href="#writing"
                className="font-medium text-foreground transition-colors hover:text-accent"
              >
                Writing
              </a>
              <a
                href="#photography"
                className="font-medium text-foreground transition-colors hover:text-accent"
              >
                Photography
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

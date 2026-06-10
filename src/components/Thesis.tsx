const Thesis = () => {
  return (
    <section id="research" aria-labelledby="research-heading" className="min-w-0 py-12 md:py-14">
      <div className="border-t border-border pt-5">
        <h2 id="research-heading" className="mb-6 text-xl font-semibold text-foreground md:text-2xl">
          Research Project
        </h2>

        <div className="divide-y divide-border/80 border-b border-border/80">
          <article className="grid gap-3 py-4 md:grid-cols-[7rem_minmax(0,1fr)_auto] md:gap-5">
            <p className="text-sm font-medium text-muted-foreground">Research</p>
            <div className="min-w-0">
              <h3 className="text-base font-semibold leading-6 text-foreground">
                  Tradi-fusion Refined: Evaluating and Fine-tuning the Riffusion Model for Irish Traditional Music
              </h3>
              <p className="mt-1 text-sm font-light text-muted-foreground">
                Supervisor: Prof. Bob L. T. Sturm
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm md:items-end">
              <a
                href="https://github.com/hdparmar/Tradifusion"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
              >
                View on GitHub →
              </a>
              <a
                href="https://hdparmar.github.io/Tradifusion/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
              >
                Listen to generated samples →
              </a>
            </div>
          </article>
        </div>

        <h2 className="mb-6 mt-12 text-xl font-semibold text-foreground md:text-2xl">
          Education
        </h2>

        <div className="divide-y divide-border/80 border-y border-border/80">
          <article className="grid gap-3 py-4 md:grid-cols-[7rem_minmax(0,1fr)_auto] md:gap-5">
            <span className="text-sm font-medium tabular-nums text-muted-foreground">
              2021-2024
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-foreground">
                KTH Royal Institute of Technology
              </p>
              <p className="text-sm font-light text-muted-foreground">
                MSc in ICT Innovation
              </p>
              <p className="mt-1 text-sm font-light text-muted-foreground">
                Focus: Edge Computing, Embedded Software-Hardware Integration, Generative AI
              </p>
            </div>
            <span className="text-sm font-medium text-muted-foreground md:text-right">
              Stockholm
            </span>
          </article>

          <article className="grid gap-3 py-4 md:grid-cols-[7rem_minmax(0,1fr)_auto] md:gap-5">
            <span className="text-sm font-medium tabular-nums text-muted-foreground">
              2016-2020
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-foreground">
                Vellore Institute of Technology
              </p>
              <p className="text-sm font-light text-muted-foreground">
                B.Tech in Electronics and Communication Engineering
              </p>
              <p className="mt-1 text-sm font-light text-muted-foreground">
                Member: Embedded Systems Research Group
              </p>
            </div>
            <span className="text-sm font-medium text-muted-foreground md:text-right">
              Vellore
            </span>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Thesis;

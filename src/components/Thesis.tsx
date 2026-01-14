const Thesis = () => {
  return (
    <section className="py-16 px-6">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-lg font-semibold text-foreground mb-8">
          Research Project
        </h2>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Tradi-fusion Refined: Evaluating and Fine-tuning the Riffusion Model for Irish Traditional Music
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Supervisor: Prof. Bob L. T. Sturm
                </p>
              </div>
            </div>
            <a
              href="https://github.com/hdparmar/Tradifusion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline mt-2 inline-block"
            >
              View on GitHub →
            </a>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-foreground mt-16 mb-8">
          Education
        </h2>

        <div className="space-y-6">
          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="font-medium text-foreground">
                KTH Royal Institute of Technology
              </p>
              <p className="text-sm text-muted-foreground">
                MSc in ICT Innovation
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Focus: Edge Computing, Embedded Software-Hardware Integration, Generative AI
              </p>
            </div>
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              2021 – 2024
            </span>
          </div>

          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="font-medium text-foreground">
                Vellore Institute of Technology
              </p>
              <p className="text-sm text-muted-foreground">
                B.Tech in Electronics and Communication Engineering
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Member: Embedded Systems Research Group
              </p>
            </div>
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              2016 – 2020
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thesis;
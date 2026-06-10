const experiences = [
  {
    title: "Embedded Software Developer",
    company: "ORB Spatial Media Industries",
    period: "Nov 2023 – Dec 2024",
    type: "Contract",
    highlights: [
      "Developed secure edge computing architecture inspired by ARM TrustZone principles",
      "Implemented container-level isolation for secure and non-secure workloads",
      "Created and maintained ORB OS using Buildroot",
      "Developed low-level device drivers in C for STM32L4 platform",
    ],
  },
  {
    title: "Embedded Software Developer",
    company: "Funki Instruments AB",
    period: "Jun 2023 – Nov 2023",
    highlights: [
      "Led MQTT protocol integration project",
      "Designed publish-subscribe architecture for real-time data exchange",
      "Implemented secure communication protocols",
    ],
  },
  {
    title: "Embedded System Developer",
    company: "Spektrer AB",
    period: "Jul 2022 – Jun 2023",
    highlights: [
      "Optimized FastGRNN algorithm implementation",
      "Achieved 20% performance improvement through SIMD optimizations",
      "Implemented FreeRTOS-based system architecture",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="mx-auto w-full max-w-[44rem] px-5 py-12 sm:px-6 md:py-14">
      <div className="border-t border-border pt-5">
        <h2 className="mb-6 text-xl font-semibold text-foreground md:text-2xl">
          Experience
        </h2>

        <div className="divide-y divide-border/80 border-b border-border/80">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className="grid gap-3 py-4 motion-safe:animate-fade-in motion-reduce:animate-fade-in-reduced md:grid-cols-[7rem_minmax(0,1fr)] md:gap-5"
            >
              <p className="text-sm font-medium tabular-nums text-muted-foreground">{exp.period}</p>
              <div className="min-w-0 space-y-3">
                <div>
                  <h3 className="text-base font-semibold leading-6 text-foreground">
                    {exp.title}
                    {exp.type && (
                      <span className="ml-2 text-sm font-light text-muted-foreground">
                        ({exp.type})
                      </span>
                    )}
                  </h3>
                  <p className="text-sm font-medium text-accent">{exp.company}</p>
                </div>

                <ul className="space-y-1.5">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm font-light leading-6 text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

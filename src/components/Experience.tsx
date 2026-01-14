import { Card } from "@/components/ui/card";

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
    <section id="experience" className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 border-border animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-primary">
                    {exp.title}
                    {exp.type && (
                      <span className="text-sm text-muted-foreground ml-2">
                        ({exp.type})
                      </span>
                    )}
                  </h3>
                  <p className="text-lg text-accent font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-accent mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

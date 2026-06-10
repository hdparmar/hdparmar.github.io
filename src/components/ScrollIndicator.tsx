import { useState, useEffect } from "react";

interface Section {
    id: string;
    label: string;
}

const sections: Section[] = [
    { id: "about", label: "About" },
    { id: "tonestruments", label: "Tonestruments" },
    { id: "research", label: "Research" },
    { id: "writing", label: "Writing" },
    { id: "photography", label: "Photography" },
];

const ScrollIndicator = () => {
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i].id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    if (scrollPosition >= offsetTop) {
                        setActiveSection(i);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
        }
    };

    return (
        <nav aria-label="Section shortcuts" className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex">
            {sections.map((section, index) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`group relative h-6 w-3 border-l transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${activeSection === index
                            ? "border-accent"
                            : "border-muted-foreground/25 hover:border-muted-foreground/65"
                        }`}
                    aria-label={`Go to ${section.label}`}
                >
                    <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap border-b border-border pb-0.5 text-xs font-light text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                        {section.label}
                    </span>
                </button>
            ))}
        </nav>
    );
};

export default ScrollIndicator;

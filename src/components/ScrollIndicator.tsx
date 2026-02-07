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

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
            {sections.map((section, index) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${activeSection === index
                            ? "bg-accent scale-125"
                            : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                        }`}
                    aria-label={`Go to ${section.label}`}
                >
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 px-2 py-1 bg-card border border-border rounded text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {section.label}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default ScrollIndicator;

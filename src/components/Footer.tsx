import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Harshdeep Parmar</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-accent fill-accent" /> in Stockholm
            </span>
          </div>

          <div className="flex gap-6 text-sm">
            <a
              href="mailto:harshdeep.parmar@outlook.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/hdparmar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

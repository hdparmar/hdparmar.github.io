import { FileText, Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

import { links } from "@/content/site";
import { trackButtonClick } from "@/lib/analytics";

type Contact = { id: string; label: string; href: string; icon: LucideIcon; external?: boolean };

const contacts: Contact[] = [
  { id: "contact-email", label: links.email, href: `mailto:${links.email}`, icon: Mail },
  { id: "contact-github", label: "GitHub", href: links.github, icon: Github, external: true },
  { id: "contact-linkedin", label: "LinkedIn", href: links.linkedin, icon: Linkedin, external: true },
  ...(links.cv ? [{ id: "contact-cv", label: "CV", href: links.cv, icon: FileText, external: true }] : []),
];

const ContactLinks = () => (
  <nav aria-label="Contact" className="flex flex-wrap gap-x-6 gap-y-1">
    {contacts.map(({ id, label, href, icon: Icon, external }) => (
      <a
        key={id}
        href={href}
        data-track-id={id}
        onClick={() => trackButtonClick(id, label)}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="inline-flex min-h-[44px] items-center gap-2 text-[15px]"
      >
        <Icon className="h-[15px] w-[15px] shrink-0 text-muted-foreground" strokeWidth={1.6} aria-hidden="true" />
        <span>{label}</span>
      </a>
    ))}
  </nav>
);

export default ContactLinks;

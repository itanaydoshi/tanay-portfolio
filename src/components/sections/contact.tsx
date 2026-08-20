import Link from "next/link";

import { EmailCopyPopover } from "@/components/contact/email-copy-popover";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { contactIntro, siteConfig, socialLinks } from "@/data/content";
import { cn } from "@/lib/utils";

const icons = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
} as const;

export function Contact() {
  return (
    <Section id="contact" title="Contact" description={contactIntro}>
      <ul className="flex flex-wrap gap-2">
        {socialLinks.map((link) => {
          if (link.label === "Email") {
            return (
              <li key={link.label}>
                <EmailCopyPopover email={siteConfig.email} />
              </li>
            );
          }

          const Icon = icons[link.label as keyof typeof icons];

          return (
            <li key={link.label}>
              <Link
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
              >
                {Icon ? <Icon className="size-4" /> : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

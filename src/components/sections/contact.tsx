import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { contactIntro, socialLinks } from "@/data/content";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <Section id="contact" title="Contact" description={contactIntro}>
      <ul className="flex flex-wrap gap-2">
        {socialLinks.map((link) => {
          const isEmail = link.href.startsWith("mailto:");

          return (
            <li key={link.label}>
              <Link
                href={link.href}
                {...(!isEmail
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "gap-1.5"
                )}
              >
                {link.label}
                <ArrowUpRightIcon className="size-3.5" />
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

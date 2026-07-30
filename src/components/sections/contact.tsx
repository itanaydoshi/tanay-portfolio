import { ArrowUpRightIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

import { CopyEmailButton } from "@/components/copy-email-button";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { contactIntro, siteConfig, socialLinks } from "@/data/content";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <Section id="contact" title="Contact" description={contactIntro}>
      <div className="max-w-2xl space-y-8">
        <div className="space-y-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 text-base font-medium transition-colors hover:text-foreground/80"
          >
            <MailIcon className="size-4 text-muted-foreground" />
            {siteConfig.email}
          </a>

          {siteConfig.phone ? (
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              <PhoneIcon className="size-4" />
              {siteConfig.phone}
            </a>
          ) : null}
        </div>

        <ul className="flex flex-wrap gap-2">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "gap-1.5"
                )}
              >
                {link.label}
                <ArrowUpRightIcon className="size-3.5" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${siteConfig.email}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full justify-center px-5 sm:w-auto"
            )}
          >
            Send Email
          </a>
          <CopyEmailButton email={siteConfig.email} />
        </div>
      </div>
    </Section>
  );
}

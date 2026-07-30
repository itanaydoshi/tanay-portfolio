import { DownloadIcon } from "lucide-react";
import Link from "next/link";

import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { experience, experienceIntro, siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      description={experienceIntro}
      actions={
        <Link
          href={siteConfig.resumeUrl}
          download
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "w-full shrink-0 gap-2 px-5 sm:w-auto"
          )}
        >
          <DownloadIcon />
          Resume
        </Link>
      }
    >
      <ol className="space-y-8">
        {experience.map((role) => (
          <li key={role.id}>
            <article className="grid gap-4 border-t border-border pt-6 lg:grid-cols-[200px_1fr] lg:gap-10">
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>
                  {role.startDate} — {role.endDate}
                </p>
                <p>{role.location}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {role.role}
                </h3>
                <p className="mt-1 text-muted-foreground">{role.company}</p>

                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {role.summary}
                </p>

                <div className="mt-4">
                  <h4 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    Products
                  </h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {role.products.map((product) => (
                      <li key={product}>
                        <Badge>{product}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className="mt-4 space-y-2">
                  {role.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="border-l border-border pl-4 text-sm leading-relaxed"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {role.techStack.map((tech) => (
                    <li key={tech}>
                      <Badge>{tech}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

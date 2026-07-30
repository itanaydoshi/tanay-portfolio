import { DownloadIcon } from "lucide-react";
import Link from "next/link";

import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  education,
  experience,
  experienceIntro,
  siteConfig,
} from "@/data/content";
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
      <ol className="space-y-10 lg:space-y-14">
        {experience.map((role) => (
          <li key={role.id}>
            <article className="grid gap-6 border-t border-border pt-10 lg:grid-cols-[220px_1fr] lg:gap-12">
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

                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {role.summary}
                </p>

                <div className="mt-6">
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

                <ul className="mt-6 space-y-3">
                  {role.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="border-l border-border pl-4 text-sm leading-relaxed"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
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

      <div className="mt-14 border-t border-border pt-10">
        <h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          Education
        </h3>
        <ul className="mt-5 space-y-4">
          {education.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div>
                <p className="font-medium">{item.degree}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.institution}
                  {item.details ? ` · ${item.details}` : null}
                </p>
              </div>
              <p className="shrink-0 text-sm text-muted-foreground">
                {item.startDate} — {item.endDate}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

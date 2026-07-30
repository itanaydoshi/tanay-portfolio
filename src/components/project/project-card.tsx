import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

function CaseBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h4 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {text}
      </p>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const hasLinks = Boolean(project.liveUrl || project.githubUrl);

  return (
    <article className="rounded-lg border border-border p-4 transition-colors hover:border-foreground/20 sm:p-5">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {project.domain}
      </p>
      <h3 className="mt-1.5 text-xl font-semibold tracking-tight">
        {project.name}
      </h3>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed sm:text-base">
        {project.summary}
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <CaseBlock label="Challenge" text={project.challenge} />
        <CaseBlock label="Approach" text={project.approach} />
        <CaseBlock label="Outcome" text={project.outcome} />
      </div>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>

      {hasLinks ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "sm" }), "gap-1.5")}
            >
              Live Demo
              <ArrowUpRightIcon />
            </Link>
          ) : null}
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "gap-1.5"
              )}
            >
              GitHub
              <ArrowUpRightIcon />
            </Link>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

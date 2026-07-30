import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/project/project-card";
import { projects, projectsIntro } from "@/data/content";

export function Projects() {
  return (
    <Section id="work" title="Selected Work" description={projectsIntro}>
      <ul className="space-y-6 sm:space-y-8">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

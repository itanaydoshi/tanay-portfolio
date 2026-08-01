import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/project/project-card";
import { projects, projectsIntro } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" title="Projects" description={projectsIntro}>
      <ul className="space-y-4 sm:space-y-5">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

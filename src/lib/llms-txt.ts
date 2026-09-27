import {
  experience,
  overview,
  projects,
  siteConfig,
  skillCategories,
} from "@/data/content";
import { formatList } from "@/lib/utils";

export function getLlmsTxt(): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const skills = skillCategories
    .map((category) => `${category.name}: ${category.skills.join(", ")}`)
    .join("; ");

  const industries = formatList(overview.industries);
  const projectDomains = formatList(projects.map((project) => project.domain));

  const experienceLines = experience
    .map(
      (item) =>
        `${item.role} at ${item.company} (${item.startDate}–${item.endDate}, ${item.location}): ${item.summary} ${item.highlights.join(" ")}`,
    )
    .join(" ");

  const projectLines = projects
    .map(
      (project) =>
        `${project.name} (${project.domain}): ${project.summary} Tools: ${project.techStack.join(", ")}.`,
    )
    .join(" ");

  return `# ${siteConfig.name}

> ${siteConfig.headline}

${siteConfig.name} is a ${siteConfig.designation} based in ${siteConfig.location}. ${siteConfig.summary} ${overview.intro} Industries: ${overview.industries.join(", ")}.

Experience: ${experienceLines}

Projects: ${projectLines}

Skills: ${skills}.

## Pages

- [Portfolio](${base}/): Personal portfolio covering overview, experience, projects, stack, and contact
- [Resume](${base}${siteConfig.resumeUrl}): Downloadable PDF resume

## Sections

- [Overview](${base}/#overview): Summary of web and mobile work across ${industries}
- [Experience](${base}/#experience): Professional experience and shipped features
- [Projects](${base}/#projects): Projects in ${projectDomains}
- [Stack](${base}/#stack): Frontend, APIs and data, and tooling skills
- [Contact](${base}/#contact): Email and social links for opportunities

## Optional

- [LinkedIn](${siteConfig.socials.linkedin}): Professional profile
- [GitHub](${siteConfig.socials.github}): Code samples and open-source work
- [Sitemap](${base}/sitemap.xml): Machine-readable list of public URLs
- [Robots](${base}/robots.txt): Crawler access rules
`;
}

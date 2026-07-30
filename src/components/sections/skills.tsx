import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { skillCategories, stackIntro } from "@/data/content";

export function Skills() {
  return (
    <Section id="stack" title="Stack" description={stackIntro}>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <li
            key={category.id}
            className="rounded-lg border border-border p-5 sm:p-6"
          >
            <h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              {category.name}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li key={skill}>
                  <Badge>{skill}</Badge>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}

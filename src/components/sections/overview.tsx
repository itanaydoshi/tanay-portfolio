import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { overview } from "@/data/content";

export function Overview() {
  return (
    <Section id="overview" title={overview.title} description={overview.intro}>
      <div>
        <h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          Domains
        </h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {overview.industries.map((item) => (
            <li key={item}>
              <Badge>{item}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

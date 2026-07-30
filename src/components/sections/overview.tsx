import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { overview } from "@/data/content";

export function Overview() {
  return (
    <Section id="overview" title={overview.title} description={overview.intro}>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Product surfaces
            </h3>
            <ul className="mt-4 space-y-2.5">
              {overview.productTypes.map((item) => (
                <li key={item} className="text-sm leading-relaxed sm:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Domains
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {overview.industries.map((item) => (
                <li key={item}>
                  <Badge>{item}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Engineering approach
            </h3>
            <ul className="mt-4 space-y-3">
              {overview.philosophy.map((item) => (
                <li
                  key={item}
                  className="border-l border-border pl-4 text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Daily stack
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {overview.dailyStack.map((item) => (
                <li key={item}>
                  <Badge>{item}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

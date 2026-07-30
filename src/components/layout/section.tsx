import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  actions?: React.ReactNode;
};

export function Section({
  id,
  title,
  description,
  children,
  className,
  actions,
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "scroll-mt-20 border-t border-border/60 py-12 sm:py-14 lg:py-16",
        className
      )}
    >
      <Container>
        <div
          className={cn(
            "mb-6 sm:mb-8",
            actions &&
              "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          )}
        >
          <div className="max-w-2xl">
            <h2
              id={headingId}
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-2 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
          {actions}
        </div>
        {children}
      </Container>
    </section>
  );
}

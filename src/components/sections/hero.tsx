import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="border-b border-border/60">
      <Container className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-muted-foreground">
            {siteConfig.name} · {siteConfig.designation}
          </p>

          <h1
            id="hero-heading"
            className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          >
            {siteConfig.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.summary}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#experience"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full justify-center px-5 sm:w-auto"
              )}
            >
              View Experience
            </Link>
            <Link
              href="#work"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full justify-center px-5 sm:w-auto"
              )}
            >
              Selected Work
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

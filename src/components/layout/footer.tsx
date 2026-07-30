import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/content";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60">
      <Container className="flex items-center justify-between gap-4 py-6">
        <p className="text-sm text-muted-foreground">
          Copyright © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
      </Container>
    </footer>
  );
}

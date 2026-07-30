"use client";

import { MenuIcon, MoonIcon, SunIcon, XIcon } from "lucide-react";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/data/content";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Toggle theme" disabled>
        <SunIcon />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  // Clear any leftover scroll lock from earlier menu opens
  useEffect(() => {
    document.body.style.overflow = "";
    lenis?.start();
  }, [lenis]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setOpen(false);

    // Ensure scrolling works again before navigating
    document.body.style.overflow = "";
    lenis?.start();

    const target = document.querySelector(href);
    if (!target) return;

    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -80 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    window.history.pushState(null, "", href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <Container className="flex h-14 items-center justify-between gap-4 sm:h-16">
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-foreground transition-opacity hover:opacity-80 sm:text-lg"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={(event) => handleSectionClick(event, item.href)}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background md:hidden"
        >
          <Container className="flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={(event) => handleSectionClick(event, item.href)}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}

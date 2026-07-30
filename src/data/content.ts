import type {
  ExperienceItem,
  NavItem,
  OverviewContent,
  Project,
  SiteConfig,
  SkillCategory,
  SocialLink,
} from "@/types";

export const siteConfig: SiteConfig = {
  name: "Tanay Doshi",
  designation: "Software Developer",
  headline:
    "I build production web and mobile products with React, Next.js, and React Native - focused on performance, clean architecture, and reliable delivery.",
  summary:
    "2+ years of frontend work across security, logistics, and healthcare — integrating APIs and shipping features from development to production.",
  email: "tanaydoshi84@gmail.com",
  location: "India",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  resumeUrl: "/resume.pdf",
  seo: {
    title:
      "Tanay Doshi | Software Developer — React, Next.js & React Native",
    description:
      "Tanay Doshi is a software developer with 2+ years of frontend experience building production web and mobile apps using React, Next.js, React Native, and TypeScript across security, logistics, and healthcare.",
    keywords: [
      "Tanay Doshi",
      "Software Developer",
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "React Native Developer",
      "TypeScript",
      "Mobile App Developer",
      "India",
    ],
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/tanaydoshi",
    github: "https://github.com/tanaydoshi",
  },
};

export const navItems: NavItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
  { label: "GitHub", href: siteConfig.socials.github },
];

export const overview: OverviewContent = {
  title: "What I Built",
  intro:
    "I develop frontend for web and mobile products — admin platforms, partner apps, and camera-based workflows. Day to day I work with TypeScript, React, Next.js, and React Native, integrate REST APIs, and ship features to production.",
  industries: ["Security", "Logistics", "Healthcare"],
};

export const experienceIntro =
  "Frontend work across web platforms and mobile apps — from feature development to production release.";

export const experience: ExperienceItem[] = [
  {
    id: "rudisn",
    company: "Rudisn",
    role: "Frontend Developer",
    location: "Remote",
    startDate: "Apr 2026",
    endDate: "Present",
    summary:
      "Building web platforms with Next.js, TypeScript, and modern UI systems.",
    highlights: [
      "Built searchable CVE portal and responsive admin surfaces with Next.js, TypeScript, and Supabase.",
      "Shipped an AI-assisted article pipeline with live preview to speed up content publishing.",
    ],
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase", "OpenAI"],
  },
  {
    id: "upperthrust",
    company: "Upperthrust Technologies",
    role: "Software Developer",
    location: "Pune",
    startDate: "Feb 2024",
    endDate: "Mar 2026",
    summary:
      "Part of the mobile application development team, building cross-platform apps with React Native.",
    highlights: [
      "Built partner order assignment, tracking, and payment flows with Redux Toolkit and REST APIs.",
      "Developed a live camera capture and preprocessing pipeline for AI-backed diagnostic analysis.",
    ],
    techStack: ["TypeScript", "React Native", "Redux Toolkit", "REST APIs"],
  },
];

export const projectsIntro =
  "Selected work with problem context, technical approach, and outcomes.";

export const projects: Project[] = [
  {
    id: "appsecure",
    name: "AppSecure Vulnerability CMS",
    domain: "Security",
    summary:
      "Web CMS for browsing CVEs and managing editorial publishing for security content teams.",
    challenge:
      "CVE content needed to stay searchable and publishable without slow, fully manual workflows.",
    approach:
      "Built a Next.js and TypeScript portal with Supabase, REST admin flows, and OpenAI-assisted drafts with live preview.",
    outcome:
      "Faster path from research to published guidance, with admin control over content quality.",
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase", "OpenAI"],
  },
  {
    id: "delish",
    name: "Delish Delivery Partner",
    domain: "Logistics",
    summary:
      "Cross-platform partner app for order assignment, delivery tracking, and payment status.",
    challenge:
      "Delivery partners needed accurate order state during frequent operational and payment updates.",
    approach:
      "Built React Native screens with REST sync and Redux Toolkit for predictable client state.",
    outcome:
      "Clearer order lifecycle visibility for partners during day-to-day delivery operations.",
    techStack: ["TypeScript", "React Native", "Redux Toolkit", "REST APIs"],
  },
  {
    id: "kidneycheq",
    name: "KidneyCheQ",
    domain: "Healthcare",
    summary:
      "Real-time diagnostics app with on-device camera capture and AI backend analysis.",
    challenge:
      "Diagnostic quality depended on stable live frame capture and preprocessing across Android devices.",
    approach:
      "Built a camera capture pipeline with preprocessing and integration to an AI analysis service.",
    outcome:
      "Reliable camera-driven diagnostic flow validated across tested Android devices.",
    techStack: ["React Native", "Camera Pipeline", "AI Integration"],
  },
];

export const stackIntro =
  "Tools I use to build TypeScript web platforms, React Native apps, and API-driven features.";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: ["TypeScript", "React", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    id: "backend",
    name: "APIs & Data",
    skills: ["REST APIs", "Supabase", "PostgreSQL"],
  },
  {
    id: "tools",
    name: "Tooling",
    skills: ["Git", "GitHub", "Postman", "Jira"],
  },
];

export const contactIntro =
  "Open to new opportunities, collaborations, and conversations about frontend architecture and product engineering.";

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
    "I build production web and mobile products with React, Next.js, and React Native — focused on performance, clean architecture, and reliable delivery.",
  summary:
    "I ship frontend systems across security tooling, logistics apps, and healthcare diagnostics, owning API integration and end-to-end feature delivery.",
  email: "tanaydoshi84@gmail.com",
  location: "India",
  resumeUrl: "/resume.pdf",
  seo: {
    title:
      "Tanay Doshi | Software Developer — React, Next.js & React Native",
    description:
      "Portfolio of Tanay Doshi, a software developer with 2+ years building production web and mobile apps. Experience in Next.js, React Native, TypeScript, Supabase, and API-driven product systems across security, logistics, and healthcare.",
    keywords: [
      "Tanay Doshi",
      "Software Developer",
      "React Developer",
      "Next.js Developer",
      "React Native Developer",
      "TypeScript",
      "Frontend Engineer",
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
  title: "What I Build",
  intro:
    "I build frontend for web and mobile products — admin platforms, partner apps, and camera-based workflows. Day to day I work with TypeScript, React, Next.js, and React Native, integrating REST APIs and shipping features to production.",
  productTypes: [
    "Admin dashboards and content platforms",
    "Cross-platform React Native applications",
    "API-backed operational tools",
  ],
  industries: ["Security", "Logistics", "Healthcare"],
  philosophy: [
    "Design reusable UI and state patterns before adding one-off screens.",
    "Model API contracts, loading states, and failure paths as product requirements.",
    "Measure success by delivery speed, reliability, and clarity for end users.",
  ],
  dailyStack: [
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
  ],
};
export const experienceIntro =
  "Frontend ownership across web platforms and mobile products — from architecture decisions to production release.";

export const experience: ExperienceItem[] = [
  {
    id: "rudisn",
    company: "Rudisn",
    role: "Frontend Developer",
    location: "Remote",
    startDate: "Apr 2026",
    endDate: "Present",
    summary:
      "Working as a frontend developer building web platforms with Next.js, TypeScript, and modern UI systems.",
    products: ["AppSecure Vulnerability CMS"],
    highlights: [
      "Built the CVE search portal and responsive admin surfaces on Next.js, TypeScript, and Supabase.",
      "Shipped an AI-assisted article pipeline with live preview to shorten research-to-publish cycles.",
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
      "Worked on the mobile application development team building cross-platform apps with React Native.",
    products: ["Delish Delivery Partner", "KidneyCheQ"],
    highlights: [
      "Implemented Delish partner flows for order assignment, tracking, and payment updates with Redux Toolkit and REST APIs.",
      "Engineered KidneyCheQ’s live camera capture and preprocessing pipeline for AI-backed diagnostic analysis.",
    ],
    techStack: ["TypeScript", "React Native", "Redux Toolkit", "REST APIs"],
  },
];

export const projectsIntro =
  "Selected product work with problem context, technical approach, and delivery outcomes.";

export const projects: Project[] = [
  {
    id: "appsecure",
    name: "AppSecure Vulnerability CMS",
    domain: "Security tooling",
    summary:
      "Web CMS for CVE discovery and editorial publishing, built for security content teams.",
    challenge:
      "CVE knowledge needed to stay searchable and publishable without blocking on slow, fully manual workflows.",
    approach:
      "Next.js + TypeScript portal with Supabase data access, REST admin operations, and OpenAI-assisted drafts with live preview.",
    outcome:
      "Reduced friction between research and published guidance while keeping admin control over content quality.",
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase", "OpenAI"],
  },
  {
    id: "delish",
    name: "Delish Delivery Partner",
    domain: "Logistics",
    summary:
      "Cross-platform partner app for order assignment, delivery tracking, and payment status.",
    challenge:
      "Delivery partners needed accurate order state under frequent operational and payment updates.",
    approach:
      "React Native screens backed by REST synchronization and Redux Toolkit for predictable client state.",
    outcome:
      "Stable partner workflow with clearer order lifecycle visibility during live operations.",
    techStack: ["React Native", "Redux Toolkit", "REST APIs"],
  },
  {
    id: "kidneycheq",
    name: "KidneyCheQ",
    domain: "Healthcare diagnostics",
    summary:
      "Real-time diagnostics app combining on-device camera capture with AI backend analysis.",
    challenge:
      "Diagnostic quality depended on consistent live frame capture and preprocessing across Android hardware.",
    approach:
      "TextureView-based capture pipeline with preprocessing steps and integration against an AI analysis service.",
    outcome:
      "Validated high diagnostic accuracy across tested Android devices in production-like conditions.",
    techStack: ["React Native", "TextureView", "AI Integration"],
  },
];

export const stackIntro =
  "Primary stack for shipping TypeScript web platforms, React Native apps, and API-driven product features.";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: ["TypeScript", "React", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    id: "backend",
    name: "Backend & Data",
    skills: ["Node.js", "REST APIs", "Supabase", "PostgreSQL", "MongoDB"],
  },
  {
    id: "tools",
    name: "Tooling",
    skills: ["Git", "GitHub", "Postman", "Jira"],
  },
];

export const contactIntro =
  "Open to new opportunities, collaborations, and conversations about frontend architecture and product engineering.";

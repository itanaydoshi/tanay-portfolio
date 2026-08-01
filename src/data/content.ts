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
    "I build production web and mobile products with React, Next.js, and React Native, with a focus on performance, clean architecture, and reliable delivery.",
  summary:
    "I have over two years of frontend experience across security, logistics, and healthcare. I integrate APIs and ship features from development through production.",
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
      "Tanay Doshi | Software Developer | React, Next.js & React Native",
    description:
      "Tanay Doshi is a software developer with 2+ years of experience building production React, Next.js, and React Native apps across security, logistics, and healthcare.",
    keywords: [
      "Tanay Doshi",
      "Software Developer",
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "React Native Developer",
      "TypeScript Developer",
      "Mobile App Developer",
      "India",
    ],
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/itanaydoshi",
    github: "https://github.com/itanaydoshi",
  },
};

export const navItems: NavItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
  { label: "GitHub", href: siteConfig.socials.github },
];

export const overview: OverviewContent = {
  title: "Overview",
  intro:
    "I build frontends for web and mobile products, including admin platforms, partner apps, and camera-based workflows. Day to day, I work with TypeScript, React, Next.js, and React Native, integrate REST APIs, and ship features to production.",
  industries: ["Security", "Logistics", "Healthcare"],
};

export const experienceIntro =
  "Frontend work across web platforms and mobile apps, from feature development through production release.";

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
      "Built a searchable CVE portal and responsive admin interfaces with Next.js, TypeScript, and Supabase.",
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
      "Worked on mobile application development, building cross-platform React Native apps.",
    highlights: [
      "Built partner flows for assigned buckets, priority-based orders, delivery tracking, and payments with Redux Toolkit and REST APIs.",
      "Developed a live camera capture and image preprocessing pipeline for KidneyCheQ, integrating with AI-backed diagnostic analysis on Android.",
    ],
    techStack: ["TypeScript", "React Native", "Redux Toolkit", "REST APIs"],
  },
];

export const projectsIntro =
  "Projects with problem context, technical approach, and outcomes.";

export const projects: Project[] = [
  {
    id: "appsecure",
    name: "AppSecure Vulnerability CMS",
    domain: "Security",
    summary:
      "A web CMS for browsing CVEs and managing editorial publishing for security content teams.",
    challenge:
      "CVE content needed to stay searchable and easy to publish without slow, fully manual workflows.",
    approach:
      "Built a Next.js and TypeScript portal with Supabase, REST admin flows, and OpenAI-assisted drafts with live preview.",
    outcome:
      "Shortened the path from research to published guidance, while keeping admin control over content quality.",
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase", "OpenAI"],
  },
  {
    id: "delish",
    name: "Delish Delivery Partner",
    domain: "Logistics",
    summary:
      "An Android and iOS app for delivery partners to view assigned buckets and orders, follow priority, and manage the full delivery flow.",
    challenge:
      "Delivery partners needed a clear view of assigned buckets, priority orders, and status updates throughout the delivery cycle.",
    approach:
      "Built React Native screens for Android and iOS with REST sync and Redux Toolkit so partners could track assignments, priority, and order progress in one place.",
    outcome:
      "Partners could follow assigned work by priority and complete the full order flow with clearer day-to-day visibility.",
    techStack: ["TypeScript", "React Native", "Redux Toolkit", "REST APIs"],
  },
  {
    id: "kidneycheq",
    name: "KidneyCheQ",
    domain: "Healthcare",
    summary:
      "An Android app for at-home kidney health testing, using the phone camera to capture a reagent device and send frames for AI analysis.",
    challenge:
      "Results depended on stable live camera capture and image preprocessing across Android devices, including lighting, angle, and color variation.",
    approach:
      "Built a live camera capture and preprocessing pipeline in React Native, then integrated it with a cloud AI service for diagnostic analysis.",
    outcome:
      "Delivered a reliable camera-to-result flow on Android, with corrected frames ready for AI inference.",
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

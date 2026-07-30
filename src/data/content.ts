import type {
  EducationItem,
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
    "Building scalable web and mobile products with React, Next.js, and React Native — focused on performance, reusable architecture, and reliable user experiences.",
  summary:
    "2+ years shipping production applications across security tooling, logistics, and healthcare diagnostics — owning frontend systems, API integrations, and product delivery end to end.",
  email: "tanaydoshi84@gmail.com",
  phone: "+91 7588117881",
  location: "Pune, India",
  resumeUrl: "/resume.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/tanaydoshi",
    github: "https://github.com/tanaydoshi",
    portfolio: "https://tanaydoshi.dev",
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
  { label: "LinkedIn", href: siteConfig.socials.linkedin },
  { label: "GitHub", href: siteConfig.socials.github },
  { label: "Portfolio", href: siteConfig.socials.portfolio },
];

export const overview: OverviewContent = {
  title: "What I Build",
  intro:
    "I design and ship product interfaces for teams that need reliability under real usage — admin platforms, partner apps, and camera-driven mobile workflows. My work sits at the intersection of frontend architecture, API integration, and product clarity.",
  productTypes: [
    "Admin dashboards & CMS platforms",
    "Cross-platform mobile applications",
    "API-driven operational tools",
    "AI-assisted content workflows",
    "Camera and real-time processing apps",
  ],
  industries: [
    "Cybersecurity & vulnerability intelligence",
    "Logistics & last-mile delivery",
    "Healthcare diagnostics",
  ],
  philosophy: [
    "Ship interfaces that stay fast and understandable as product scope grows.",
    "Prefer reusable architecture over one-off UI — shared patterns compound.",
    "Treat API contracts, loading states, and failure paths as first-class product work.",
    "Optimize for outcomes operators can measure: speed, accuracy, and fewer support loops.",
  ],
  dailyStack: [
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "Node.js",
    "Supabase",
    "PostgreSQL",
  ],
};

export const experienceIntro =
  "From production mobile apps to AI-assisted web platforms — two years owning frontend delivery across security, logistics, and healthcare products.";

export const experience: ExperienceItem[] = [
  {
    id: "rudisn",
    company: "Rudisn",
    role: "Software Developer",
    location: "Remote",
    startDate: "Apr 2026",
    endDate: "Present",
    summary:
      "Building AppSecure, a vulnerability intelligence CMS that helps teams browse, search, and publish CVE knowledge with an admin workflow designed for speed and editorial control.",
    products: ["AppSecure Vulnerability CMS"],
    highlights: [
      "Owned the web portal for CVE browsing and search, including responsive admin surfaces for content operations.",
      "Integrated REST APIs for search and admin workflows so editorial teams can manage vulnerability content without engineering bottlenecks.",
      "Implemented an AI-assisted CVE article pipeline with live preview, reducing time from research notes to publishable content.",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "OpenAI API",
    ],
  },
  {
    id: "upperthrust",
    company: "Upperthrust Technologies Private Limited",
    role: "Software Developer",
    location: "Pune, India",
    startDate: "Feb 2024",
    endDate: "Mar 2026",
    summary:
      "Delivered production mobile products for logistics partners and healthcare diagnostics — focusing on real-time sync, resilient state, and device-level performance.",
    products: ["Delish Delivery Partner App", "KidneyCheQ"],
    highlights: [
      "Built the Delish partner app for order assignment and delivery tracking, with real-time order and payment updates over REST APIs.",
      "Scaled client state with Redux Toolkit to keep partner workflows predictable under frequent operational updates.",
      "Engineered KidneyCheQ’s camera pipeline with live frame capture and preprocessing, integrating an AI backend that reached ~95% diagnostic accuracy across Android devices.",
    ],
    techStack: [
      "React Native",
      "Redux Toolkit",
      "REST APIs",
      "TextureView",
      "TypeScript",
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: "sinhgad",
    institution: "Sinhgad Institutes, Pune",
    degree: "Bachelor of Engineering in Computer Science",
    startDate: "Jun 2019",
    endDate: "Jul 2023",
    details: "CGPA: 7.98",
  },
];

export const projectsIntro =
  "Selected product work with emphasis on problem context, engineering decisions, and outcomes — not just feature lists.";

export const projects: Project[] = [
  {
    id: "appsecure",
    name: "AppSecure Vulnerability CMS",
    domain: "Security tooling",
    summary:
      "A web-based vulnerability database portal for browsing and publishing CVE intelligence, paired with an admin CMS for content operations.",
    challenge:
      "Security teams needed a searchable CVE knowledge base and a content workflow that could keep pace with new advisories — without slow, manual publishing steps.",
    approach:
      "Built a Next.js + TypeScript portal with Tailwind UI, Supabase-backed data access, and REST-powered search/admin flows. Added an OpenAI-assisted article generation path with live preview so editors can review AI drafts before publishing.",
    outcome:
      "Delivered a responsive product surface for both end users and admins, with a repeatable content pipeline that shortens the path from CVE research to published guidance.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "OpenAI API",
    ],
  },
  {
    id: "delish",
    name: "Delish Delivery Partner App",
    domain: "Logistics",
    summary:
      "A cross-platform partner app for order assignment, delivery tracking, and payment status — built for real-world delivery operations.",
    challenge:
      "Delivery partners needed a reliable mobile workflow where order state, assignment, and payment updates stay in sync without confusing UI under pressure.",
    approach:
      "Implemented React Native screens around assignment and tracking flows, wired REST APIs for live order/payment updates, and structured application state with Redux Toolkit for predictable updates at scale.",
    outcome:
      "Shipped a partner-facing mobile product that supports day-to-day delivery operations with clearer order lifecycle visibility and a maintainable state architecture.",
    techStack: ["React Native", "Redux Toolkit", "REST APIs"],
  },
  {
    id: "kidneycheq",
    name: "KidneyCheQ",
    domain: "Healthcare diagnostics",
    summary:
      "A real-time medical diagnostics app that captures camera frames, preprocesses them on-device, and sends them to an AI backend for analysis.",
    challenge:
      "Diagnostic accuracy depended on stable live camera capture and preprocessing across Android hardware — not just a polished UI shell.",
    approach:
      "Built a React Native pipeline using TextureView for live frame capture and preprocessing, then integrated an AI-powered backend for diagnostic analysis with careful attention to device variance.",
    outcome:
      "Achieved approximately 95% diagnostic accuracy across tested Android devices, validating a production path for camera-driven clinical workflows.",
    techStack: ["React Native", "TextureView", "AI Integration"],
  },
];

export const stackIntro =
  "Technologies used daily to ship web platforms, mobile apps, and API-driven product features.";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "SQL"],
  },
  {
    id: "frontend",
    name: "Frontend",
    skills: ["React", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    skills: ["Node.js", "Supabase", "REST APIs"],
  },
  {
    id: "database",
    name: "Data",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    id: "tools",
    name: "Tooling",
    skills: ["Git", "GitHub", "Postman", "Jira", "VS Code"],
  },
];

export const contactIntro =
  "Open to roles where product quality, frontend architecture, and shipping ownership matter. Happy to discuss work, trade-offs, and what’s next.";

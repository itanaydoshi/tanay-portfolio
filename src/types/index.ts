export type SocialLink = {
  label: string;
  href: string;
};

export type SeoConfig = {
  title: string;
  description: string;
  keywords: string[];
};

export type SiteConfig = {
  name: string;
  designation: string;
  headline: string;
  summary: string;
  email: string;
  location: string;
  url: string;
  resumeUrl: string;
  seo: SeoConfig;
  socials: {
    linkedin: string;
    github: string;
  };
};

export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  name: string;
  domain: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
  techStack: string[];
};

export type SkillCategory = {
  id: string;
  name: string;
  skills: string[];
};

export type OverviewContent = {
  title: string;
  intro: string;
  industries: string[];
};

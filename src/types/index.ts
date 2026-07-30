export type SocialLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  designation: string;
  headline: string;
  summary: string;
  email: string;
  phone?: string;
  location?: string;
  resumeUrl: string;
  socials: {
    linkedin: string;
    github: string;
    portfolio: string;
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
  products: string[];
  highlights: string[];
  techStack: string[];
};

export type EducationItem = {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  details?: string;
};

export type SkillCategory = {
  id: string;
  name: string;
  skills: string[];
};

export type OverviewContent = {
  title: string;
  intro: string;
  productTypes: string[];
  industries: string[];
  philosophy: string[];
  dailyStack: string[];
};

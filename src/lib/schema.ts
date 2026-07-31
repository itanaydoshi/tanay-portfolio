import {
  experience,
  projects,
  siteConfig,
  skillCategories,
} from "@/data/content";

export function getJsonLd() {
  const personId = `${siteConfig.url}/#person`;
  const websiteId = `${siteConfig.url}/#website`;
  const profileId = `${siteConfig.url}/#profile`;

  const knowsAbout = [
    ...new Set(skillCategories.flatMap((category) => category.skills)),
  ];

  const currentRole = experience.find((item) => item.endDate === "Present");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": profileId,
        url: siteConfig.url,
        name: siteConfig.seo.title,
        description: siteConfig.seo.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        inLanguage: "en-IN",
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.seo.description,
        publisher: { "@id": personId },
        inLanguage: "en-IN",
      },
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        url: siteConfig.url,
        image: `${siteConfig.url}/opengraph-image`,
        jobTitle: siteConfig.designation,
        description: siteConfig.summary,
        email: `mailto:${siteConfig.email}`,
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        sameAs: [siteConfig.socials.linkedin, siteConfig.socials.github],
        knowsAbout,
        ...(currentRole
          ? {
              worksFor: {
                "@type": "Organization",
                name: currentRole.company,
              },
            }
          : {}),
        hasOccupation: {
          "@type": "Occupation",
          name: siteConfig.designation,
          occupationLocation: {
            "@type": "Country",
            name: "India",
          },
          skills: knowsAbout.join(", "),
        },
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#projects`,
        name: "Selected Projects",
        description: "Selected projects by Tanay Doshi",
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: project.name,
            description: project.summary,
            about: project.domain,
            author: { "@id": personId },
            keywords: project.techStack.join(", "),
          },
        })),
      },
    ],
  };
}

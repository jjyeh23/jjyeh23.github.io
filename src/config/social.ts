import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/jjyeh23",
        linkTitle: `Follow Jin Yeh on Github`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "jjyeh9 at uw dot edu",
        linkTitle: `Send an email to Jin`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=shannon",
        linkTitle: `Jin Yeh on Google Scholar`,
        isActive: false,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/0009-0004-9808-8529",
        linkTitle: `Jin Yeh on ORCID`,
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/jin-yeh/",
        linkTitle: `Jin Yeh on LinkedIn`,
        isActive: true, //
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};

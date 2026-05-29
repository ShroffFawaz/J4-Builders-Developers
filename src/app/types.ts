export type Page = "home" | "about" | "projects" | "contact";

export const NAV_LINKS: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
  { label: "Contact", page: "contact" },
];

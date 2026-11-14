export type FileKind = "tsx" | "md" | "pdf";

export type ExplorerEntry = {
  file: string;
  label: string;
  href: string;
  kind: FileKind;
  external?: boolean;
};

export const RESUME_URL =
  "https://drive.google.com/file/d/1sukbeaymTuvuDgtmvPTIJR38AiHi_2Fz/view?usp=sharing";

export const pages: ExplorerEntry[] = [
  { file: "index.tsx", label: "Home", href: "/", kind: "tsx" },
  { file: "projects.tsx", label: "Projects", href: "/projects", kind: "tsx" },
  { file: "about.tsx", label: "About", href: "/about", kind: "tsx" },
  { file: "now.tsx", label: "Now", href: "/now", kind: "tsx" },
  { file: "contact.tsx", label: "Contact", href: "/contact", kind: "tsx" },
];

export const rootFiles: ExplorerEntry[] = [
  { file: "README.md", label: "Introduction", href: "/readme", kind: "md" },
  {
    file: "resume.pdf",
    label: "Resume",
    href: RESUME_URL,
    kind: "pdf",
    external: true,
  },
];

const internal = [...pages, ...rootFiles].filter((e) => !e.external);

export function entryForPath(pathname: string): ExplorerEntry | undefined {
  return internal.find((e) => e.href === pathname);
}

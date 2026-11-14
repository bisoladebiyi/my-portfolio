"use client";

import { usePathname } from "next/navigation";
import { entryForPath, type FileKind } from "@/content/navigation";

const languages: Record<FileKind, string> = {
  tsx: "TypeScript JSX",
  md: "Markdown",
  pdf: "PDF",
};

export function StatusBar() {
  const entry = entryForPath(usePathname());

  return (
    <footer className="bg-panel text-muted font-ui flex h-7 items-center justify-between gap-4 border-t px-4 text-[10px]">
      <span className="flex items-center gap-2">
        <span aria-hidden className="bg-sage size-2 rounded-full" />
        {entry ? entry.label : "Not found"}
      </span>
      <span className="flex gap-4">
        {entry && <span>{languages[entry.kind]}</span>}
        <span className="hidden sm:inline">UTF-8</span>
      </span>
    </footer>
  );
}

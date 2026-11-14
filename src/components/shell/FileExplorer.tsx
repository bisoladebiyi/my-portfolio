"use client";

import { ExternalLink, FolderOpen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages, rootFiles, type ExplorerEntry } from "@/content/navigation";
import { FileIcon } from "./FileIcon";

function EntryLink({
  entry,
  active,
  nested,
}: {
  entry: ExplorerEntry;
  active: boolean;
  nested?: boolean;
}) {
  const className = `rounded-control flex items-center gap-2 py-1 pr-2 font-ui text-[13px] transition-colors ${
    nested ? "pl-7" : "pl-2"
  } ${active ? "bg-raised text-fg" : "text-muted hover:bg-raised hover:text-fg"}`;
  const content = (
    <>
      <FileIcon kind={entry.kind} />
      <span className="truncate">{entry.file}</span>
      <span className="sr-only">({entry.label})</span>
    </>
  );

  if (entry.external) {
    return (
      <a
        href={entry.href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {content}
        <ExternalLink aria-hidden className="ml-auto size-3 opacity-60" />
        <span className="sr-only">, opens in a new tab</span>
      </a>
    );
  }

  return (
    <Link
      href={entry.href}
      aria-current={active ? "page" : undefined}
      className={className}
    >
      {content}
    </Link>
  );
}

export function FileExplorer() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Site"
      className="bg-panel hidden w-60 shrink-0 flex-col gap-1 overflow-y-auto border-r p-2 md:flex"
    >
      <p className="text-muted font-ui px-2 pt-1 pb-2 text-[11px] font-semibold tracking-wide uppercase">
        Explorer
      </p>
      <div className="text-fg font-ui flex items-center gap-2 px-2 py-1 text-[13px] font-semibold">
        <FolderOpen aria-hidden className="text-sage size-4" />
        pages
      </div>
      <ul className="grid gap-0.5">
        {pages.map((entry) => (
          <li key={entry.file}>
            <EntryLink entry={entry} active={pathname === entry.href} nested />
          </li>
        ))}
      </ul>
      <ul className="mt-1 grid gap-0.5">
        {rootFiles.map((entry) => (
          <li key={entry.file}>
            <EntryLink entry={entry} active={pathname === entry.href} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

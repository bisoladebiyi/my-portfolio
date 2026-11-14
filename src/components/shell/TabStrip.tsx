"use client";

import { usePathname } from "next/navigation";
import { entryForPath } from "@/content/navigation";
import { FileIcon } from "./FileIcon";

export function TabStrip() {
  const entry = entryForPath(usePathname());

  return (
    <div className="bg-panel flex h-10 shrink-0 items-end overflow-x-auto border-b">
      {entry && (
        <div className="bg-bg text-fg border-t-sage font-ui -mb-px flex h-full items-center gap-2 border-x border-t border-b border-b-transparent px-4 text-[12px]">
          <FileIcon kind={entry.kind} />
          {entry.file}
        </div>
      )}
    </div>
  );
}

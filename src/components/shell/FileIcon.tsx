import { FileCode, FileDown, FileText } from "lucide-react";
import type { FileKind } from "@/content/navigation";

const icons = {
  tsx: { Icon: FileCode, color: "text-lavender" },
  md: { Icon: FileText, color: "text-sage" },
  pdf: { Icon: FileDown, color: "text-peach" },
} as const;

export function FileIcon({ kind }: { kind: FileKind }) {
  const { Icon, color } = icons[kind];
  return <Icon aria-hidden className={`size-4 shrink-0 ${color}`} />;
}

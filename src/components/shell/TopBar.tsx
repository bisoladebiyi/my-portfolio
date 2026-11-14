import Link from "next/link";

export function TopBar() {
  return (
    <header className="bg-panel flex h-10 items-center justify-between gap-4 border-b px-4">
      <div className="w-20" />
      <Link href="/" className="rounded-control flex items-center gap-3">
        <span className="font-display hover:border-sage text-muted hover:text-fg rounded-lg border-2 px-15 py-0.5 text-xs font-semibold transition-colors">
          abisola.dev
        </span>
      </Link>
      <a
        href="https://github.com/bisoladebiyi"
        target="_blank"
        rel="noreferrer"
        className="text-muted hover:text-fg rounded-control w-20 px-2 py-1 font-mono text-xs transition-colors"
      >
        github ↗
      </a>
    </header>
  );
}

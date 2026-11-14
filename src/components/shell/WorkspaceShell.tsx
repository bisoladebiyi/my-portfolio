import { FileExplorer } from "./FileExplorer";
import { StatusBar } from "./StatusBar";
import { TabStrip } from "./TabStrip";
import { TopBar } from "./TopBar";

export function WorkspaceShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-dvh grid-rows-[auto_minmax(0,1fr)_auto]">
      <a
        href="#main"
        className="bg-sage-ink text-on-accent rounded-control sr-only z-50 px-3 py-2 focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        Skip to content
      </a>
      <TopBar />
      <div className="flex min-h-0">
        <FileExplorer />
        <div className="flex min-w-0 flex-1 flex-col">
          <TabStrip />
          <main
            id="main"
            tabIndex={-1}
            className="min-h-0 flex-1 overflow-y-auto focus:outline-none"
          >
            {children}
          </main>
        </div>
      </div>
      <StatusBar />
    </div>
  );
}

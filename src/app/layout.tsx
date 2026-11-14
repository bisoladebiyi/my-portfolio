import type { Metadata } from "next";
import { WorkspaceShell } from "@/components/shell/WorkspaceShell";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abisola Adebiyi — Software Engineer",
  description:
    "Portfolio of Abisola Adebiyi, a full-stack software engineer building useful, scalable web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="font-sans antialiased">
        <WorkspaceShell>{children}</WorkspaceShell>
      </body>
    </html>
  );
}

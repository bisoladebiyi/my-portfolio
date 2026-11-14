import type { Metadata } from "next";
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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

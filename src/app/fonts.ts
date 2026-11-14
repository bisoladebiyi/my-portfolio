import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

// Headlines and titles.
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// UI and body copy.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Filenames, code, terminal, labels and status.
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const fontVariables = [
  spaceGrotesk.variable,
  inter.variable,
  jetbrainsMono.variable,
].join(" ");

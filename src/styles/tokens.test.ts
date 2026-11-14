import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const css = readFileSync(join(process.cwd(), "src/app/globals.css"), "utf8");

function tokensIn(selector: string): Record<string, string> {
  const start = css.indexOf(`${selector} {`);
  const block = css.slice(start, css.indexOf("}", start));
  return Object.fromEntries(
    [...block.matchAll(/--([\w-]+):\s*(#[0-9a-f]{6})/gi)].map((m) => [
      m[1],
      m[2],
    ]),
  );
}

function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const themes = {
  dark: tokensIn(":root"),
  light: tokensIn(':root[data-theme="light"]'),
};

describe.each(Object.entries(themes))("%s theme", (_, t) => {
  const surfaces = ["bg", "panel", "raised"];

  it.each(["fg", "muted", "sage-ink", "lavender-ink", "peach-ink"])(
    "%s meets 4.5:1 on every surface",
    (text) => {
      for (const s of surfaces) {
        expect(contrast(t[text], t[s])).toBeGreaterThanOrEqual(4.5);
      }
    },
  );

  it.each(["sage", "lavender", "peach"])(
    "%s meets 3:1 on every surface",
    (accent) => {
      for (const s of surfaces) {
        expect(contrast(t[accent], t[s])).toBeGreaterThanOrEqual(3);
      }
    },
  );

  it.each(["sage-ink", "lavender-ink", "peach-ink"])(
    "on-accent text meets 4.5:1 on %s",
    (fill) => {
      expect(contrast(t["on-accent"], t[fill])).toBeGreaterThanOrEqual(4.5);
    },
  );
});

describe("theme parity", () => {
  it("system-light media block matches the explicit light theme", () => {
    expect(tokensIn(':root:not([data-theme="dark"])')).toEqual(themes.light);
  });

  it("both themes define the same tokens", () => {
    expect(Object.keys(themes.light).sort()).toEqual(
      Object.keys(themes.dark).sort(),
    );
  });
});

import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { WorkspaceShell } from "./WorkspaceShell";

const pathname = vi.hoisted(() => ({ current: "/" }));
vi.mock("next/navigation", () => ({ usePathname: () => pathname.current }));

function renderShell() {
  return render(
    <WorkspaceShell>
      <h1>Page content</h1>
    </WorkspaceShell>,
  );
}

describe("WorkspaceShell", () => {
  beforeEach(() => {
    pathname.current = "/";
  });

  it("renders the page inside semantic landmarks", () => {
    renderShell();
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Site" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(
      within(screen.getByRole("main")).getByRole("heading", {
        name: "Page content",
      }),
    ).toBeInTheDocument();
  });

  it("offers a skip link to the main content", () => {
    renderShell();
    expect(
      screen.getByRole("link", { name: "Skip to content" }),
    ).toHaveAttribute("href", "#main");
  });

  it("marks the current page in the explorer and shows its tab", () => {
    pathname.current = "/about";
    renderShell();
    const nav = screen.getByRole("navigation", { name: "Site" });
    expect(
      within(nav).getByRole("link", { name: /about\.tsx/ }),
    ).toHaveAttribute("aria-current", "page");
    expect(
      within(nav).getByRole("link", { name: /index\.tsx/ }),
    ).not.toHaveAttribute("aria-current");
    expect(screen.getAllByText("about.tsx")).toHaveLength(2);
  });

  it("opens the resume in a new tab", () => {
    renderShell();
    const resume = screen.getByRole("link", { name: /resume\.pdf/ });
    expect(resume).toHaveAttribute("target", "_blank");
    expect(resume.getAttribute("href")).toMatch(
      /^https:\/\/drive\.google\.com\//,
    );
  });

  it("shows no tab for a route outside the explorer", () => {
    pathname.current = "/missing";
    renderShell();
    expect(screen.getByRole("contentinfo")).toHaveTextContent("Not found");
  });
});

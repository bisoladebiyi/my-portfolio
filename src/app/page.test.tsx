import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the site owner's name as the main heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Abisola Adebiyi" }),
    ).toBeInTheDocument();
  });
});

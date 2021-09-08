/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Home from "../../pages";

describe("Home", () => {
  it("renders home page", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        name: "COVID-19 Fuzzy Time Series Prediction",
      })
    ).toBeInTheDocument();
  });

  it("renders a correct link for daily", async () => {
    render(<Home />);
    let link = document.getElementById("daily");
    expect(link.href).toContain('/api/daily')
  });

  it("renders a correct link for last-update", async () => {
    render(<Home />);
    let link = document.getElementById("last-update");
    expect(link.href).toContain('/api/last-update')
  });
});

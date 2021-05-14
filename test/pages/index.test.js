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

  it("renders a correct link", async () => {
    render(<Home />);
    let link = document.getElementById("api");
    expect(link.href).toContain('/api/daily')
  });
});

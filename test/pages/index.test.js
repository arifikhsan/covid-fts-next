/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Home from "../../pages";

describe("Home", () => {
  it("renders without crasing", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        name: "COVID-19 Fuzzy Time Series Prediction",
      })
    ).toBeInTheDocument();
  });
});

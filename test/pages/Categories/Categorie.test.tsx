import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Categorie from "../../../src/page/Categories/Categorie";
import { getWinesByTypeService } from "../../../src/services/wines.service";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

jest.mock("../../../src/services/wines.service", () => ({
  getWinesByTypeService: jest.fn().mockResolvedValue({
    response: [],
    nextPage: 2,
    prevPage: null
  })
}));

describe("Categorie component", () => {
  it("renders the correct title based on typeWine", () => {
    const { getByTestId } = render(
      <Router>
        <Categorie />
      </Router>
    );
    expect(getByTestId("click-vino")).toBeDefined();
  });

  it("renders the correct image based on typeWine", () => {
    const { getByTestId } = render(
      <Router>
        <Categorie />
      </Router>
    );
    expect(getByTestId("click-vino")).toBeDefined();
  });
});

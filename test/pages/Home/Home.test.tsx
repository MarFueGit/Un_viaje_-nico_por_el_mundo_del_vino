import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Home from "../../../src/page/Home/Home";
import { getWinesService } from "../../../src/services/wines.service";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

jest.mock("../../../src/services/wines.service", () => ({
  getWinesService: jest.fn().mockResolvedValue({
    response: [],
    nextPage: 2,
    prevPage: null
  })
}));

describe("Home component", () => {
  it("renders the correct title", () => {
    const { getByText } = render(
      <Router>
        <Home />{" "}
      </Router>
    );
    expect(getByText("UN VIAJE ÚNICO POR EL MUNDO DEL VINO")).toBeDefined();
  });

  it("renders the image", () => {
    const { getByAltText } = render(
      <Router>
        <Home />{" "}
      </Router>
    );
    expect(getByAltText("imagen vino")).toBeDefined();
  });

  it("calls getWinesService with the correct parameters when rendered", async () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    await waitFor(() => {
      expect(getWinesService).toHaveBeenCalledWith(1, 5, expect.any(String));
    });
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EmptyCart from "../../../src/components/EmptyCart/EmptyCart";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn() // Mock useNavigate function
}));

describe("EmptyCart component", () => {
  it("renders correctly", () => {
    const { getByAltText, getByText } = render(
      <Router>
        <EmptyCart />
      </Router>
    );

    expect(getByAltText("imagen de carrito vacio")).toBeTruthy();
    expect(getByText("No haz agregado nada al carrito")).toBeTruthy();
    expect(getByText("Ir a vinos")).toBeTruthy();
  });

  it("navigates to home page when button is clicked", () => {
    const navigateMock = jest.fn(); // Mock the navigate function
    useNavigate.mockReturnValue(navigateMock); // Mock the return value of useNavigate

    const { getByText } = render(
      <Router>
        <EmptyCart />
      </Router>
    );

    const button = getByText("Ir a vinos");
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalled(); // Expect the navigateMock to be called
  });
});

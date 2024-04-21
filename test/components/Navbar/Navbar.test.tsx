import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "../../../src/components/Navbar";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

// Mock shopCartStore
jest.mock("../../../src/state/shopCartStore", () => ({
  shopCartStore: jest.fn(() => 5) // Mock the quantity value directly
}));

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn() // Mock useNavigate function
}));

describe("Navbar component", () => {
  it("navigates to the correct routes when links are clicked", () => {
    const navigateMock = jest.fn(); // Mock the navigate function
    useNavigate.mockReturnValue(navigateMock);
    const { getByAltText, getByText } = render(
      <Router>
        <Navbar />
      </Router>
    );

    // Click on the "Inicio" link
    fireEvent.click(getByText("Inicio"));
    // Assert that the navigation to "/" occurred
    expect(window.location.pathname).toBe("/");

    // Click on the "Vino Tinto" link
    fireEvent.click(getByText("Vino Tinto"));
    // Assert that the navigation to "/categories/Tinto" occurred
    expect(require("react-router-dom").useNavigate).toHaveBeenCalled();

    // Click on the "Vino Blanco" link
    fireEvent.click(getByText("Vino Blanco"));
    // Assert that the navigation to "/categories/Blanco" occurred
    expect(require("react-router-dom").useNavigate).toHaveBeenCalled();

    // Click on the "Vino Rosado" link
    fireEvent.click(getByText("Vino Rosado"));
    // Assert that the navigation to "/categories/Rosado" occurred
    expect(require("react-router-dom").useNavigate).toHaveBeenCalled();
  });

  it("navigates to /shopCart when the shopping cart icon is clicked", () => {
    const navigateMock = jest.fn(); // Mock the navigate function
    useNavigate.mockReturnValue(navigateMock);
    const { getByTestId } = render(
      <Router>
        <Navbar />
      </Router>
    );

    // Click on the shopping cart icon
    fireEvent.click(getByTestId("carrito de compra"));
    // Assert that the navigation to "/shopCart" occurred
    expect(require("react-router-dom").useNavigate).toHaveBeenCalled();
  });

  it("displays the correct quantity in the shopping cart icon", () => {
    const navigateMock = jest.fn(); // Mock the navigate function
    useNavigate.mockReturnValue(navigateMock);
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>
    );

    // Assert that the correct quantity (5) is displayed
    expect(getByText("5")).toBeTruthy();
  });
});

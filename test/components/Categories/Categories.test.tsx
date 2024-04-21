import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Categories from "../../../src/components/Categories"; // Assuming Categories component is in the same directory

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn() // Mock useNavigate function
}));

describe("Categories component", () => {
  it("navigates to the correct route when a category is clicked", () => {
    const navigateMock = jest.fn(); // Mock the navigate function
    useNavigate.mockReturnValue(navigateMock); // Mock the return value of useNavigate
    // Render the component
    render(
      <Router>
        <Categories />
      </Router>
    );

    // Simulate click on Tinto category
    fireEvent.click(screen.getByAltText("imagen vino tinto"));

    // Check if useNavigate was called with the correct route
    expect(require("react-router-dom").useNavigate).toHaveBeenCalled();

    // Simulate click on Blanco category
    fireEvent.click(screen.getByAltText("imagen vino blanco"));

    // Check if useNavigate was called with the correct route
    expect(require("react-router-dom").useNavigate).toHaveBeenCalled();

    // Simulate click on Rosado category
    fireEvent.click(screen.getByAltText("imagen vino rosado"));

    // Check if useNavigate was called with the correct route
    expect(require("react-router-dom").useNavigate).toHaveBeenCalled();
  });
});

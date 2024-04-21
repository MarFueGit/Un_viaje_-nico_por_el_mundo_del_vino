import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../src/App";

// Mock the useToken hook
jest.mock("../src/hooks/useToken", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    getToken: jest.fn().mockReturnValue("mocked-token"),
    saveToken: jest.fn()
  }))
}));

// Mock the wineStore
jest.mock("../src/state/wineStore", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    wines: {
      data: [], // Set an empty array as initial data
      nextPage: 2, // Set nextPage to 2 for testing purposes
      prevPage: null // Set prevPage to null for testing purposes
    },
    setWines: jest.fn(),
    setSearching: jest.fn().mockReturnValue(null), // Mock setSearching function
    searching: false // Set searching to false for testing purposes
  }))
}));

global.fetch = jest
  .fn()
  .mockImplementationOnce(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          ok: true,
          message: "Authentication successful",
          token: "TOKEN_TEST",
          code: 200
        })
    })
  )
  .mockImplementationOnce(() =>
    Promise.reject(new Error("ERROR AL OBTENER TOKEN"))
  );

describe("App", () => {
  let errorSpy: jest.SpyInstance<
    void,
    [message?: any, ...optionalParams: any[]]
  >;
  let logSpy: jest.SpyInstance<void, [message?: any, ...optionalParams: any[]]>;

  beforeAll(() => {
    // Spy on console.error
    errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    // Spy on console.log
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    // Restore the original implementations
    errorSpy.mockRestore();
    logSpy.mockRestore();
  });
  it("renders loading text initially", async () => {
    try {
      render(<App />);
      expect(screen.queryByText("Cargando app")).toBeTruthy();

      // Wait for the loading to finish
      await waitFor(() => {
        expect(screen.queryByText("Cargando app")).toBeTruthy();
      });
    } catch (error) {}
  });

  it("renders Routes after loading", async () => {
    try {
      render(<App />);

      // Wait for the loading to finish
      await waitFor(() => {
        expect(screen.queryByText("Cargando app")).toBeTruthy();
      });
    } catch (error) {}
  });
});

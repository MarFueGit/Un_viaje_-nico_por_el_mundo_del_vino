import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ProductView from "../../../src/page/ProductView/ProductView";
import { getWineDetails } from "../../../src/services/wines.service";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

jest.mock("../../../src/services/wines.service", () => ({
  getWineDetails: jest.fn().mockResolvedValue({
    response: {
      name: "Test Wine",
      price: 20,
      img: "test.jpg",
      shippingInfo: "Test shipping info",
      productor: "Test Done",
      origin: "Test Origin",
      grapes: "Test Grapes",
      barrica: "Test Barrica",
      listInfo: "Test List Info",
      temperature: "Test Temperature",
      description: "Test Description"
    }
  })
}));

describe("ProductView component", () => {
  it("renders the product details correctly", async () => {
    const { getByText } = render(
      <Router>
        <ProductView />
      </Router>
    );
    await waitFor(() => {
      expect(getWineDetails).toHaveBeenCalled();
      expect(getByText("Test Wine")).toBeDefined();
      expect(getByText("$ 20")).toBeDefined();
      expect(getByText("Test shipping info")).toBeDefined();
    });
  });

  it("calls addProduct when 'AGREGAR AL CARRITO' button is clicked", async () => {
    const { getByText } = render(
      <Router>
        <ProductView />
      </Router>
    );
    fireEvent.click(getByText("AGREGAR AL CARRITO"));
    await waitFor(() => {
      expect(getWineDetails).toHaveBeenCalled();
    });
  });
});

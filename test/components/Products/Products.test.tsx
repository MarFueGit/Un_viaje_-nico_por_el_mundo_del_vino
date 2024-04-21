import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Products from "../../../src/components/Products";
import { IWine } from "../../../src/types/Wine";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn() // Mock useNavigate function
}));

describe("Products component", () => {
  const mockData: IWine[] = [
    {
      name: "Incógnito Tinto",
      type: "Tinto",
      price: 537,
      img: "https://res.cloudinary.com/dkkjgytmv/image/upload/v1710783738/wines/1_dqxbd6.png",
      barrica: "No tiene",
      description:
        "El vino tinto Incógnito es la combinación perfecta entre elegancia y gran sabor. Su textura es suave con notas a frutos rojos con aroma a frutos maduros, de final especiado. Excelente vino para acompañar con carnes blancas, pastas y tabla de quesos ¡Prueba su gran sabor y adquiérelo!",
      grapes: "Cabernet Sauvignon, Zinfandel, Grenache",
      listInfo:
        "Vino tinto ensamble (Cabernet Sauvignon, Zinfandel, Grenache) de La Estación de Oficios El Porvenir, Valle de Guadalupe",
      origin: "Valle de Guadalupe, B.C., México",
      productor: "Estación de Oficios El Porvenir",
      shippingInfo:
        "🚚 Envío GRATIS en pedidos superiores a $2,500 o en Vinopacks. Entrega de 2 a 5 días hábiles (excepto zonas extendidas).",
      temperature: "15ºC ",
      id: "65f741039f857a93e5eb8e96"
    }
  ];

  it("renders products with correct information", () => {
    const navigateMock = jest.fn(); // Mock the navigate function
    useNavigate.mockReturnValue(navigateMock);
    const { getByText, getByAltText } = render(
      <Router>
        <Products data={mockData} titleProducts="Some Title" />
      </Router>
    );

    expect(getByText("Some Title")).toBeTruthy();

    mockData.forEach((wine) => {
      expect(getByText(wine.name)).toBeTruthy();
      expect(getByText(wine.type)).toBeTruthy();
      expect(getByText(`$${wine.price}`)).toBeTruthy();
      expect(getByAltText("imagen de vino")).toBeTruthy();
    });
  });

  it("navigates to product details page when an image is clicked", () => {
    const navigateMock = jest.fn(); // Mock the navigate function
    useNavigate.mockReturnValue(navigateMock);
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => navigateMock
    }));

    const { getByAltText } = render(
      <Router>
        <Products data={mockData} titleProducts="ESCOGE UN VINO" />
      </Router>
    );

    fireEvent.click(getByAltText("imagen de vino"));

    expect(navigateMock).toHaveBeenCalled();
  });
});

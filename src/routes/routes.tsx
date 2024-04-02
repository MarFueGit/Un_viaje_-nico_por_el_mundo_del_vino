import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../page/Home/Home";
import VinoTinto from "../page/Categories/VinoTinto";
import VinoBlanco from "../page/Categories/VinoBlanco";
import VinoRosado from "../page/Categories/VinoRosado";
import ShortCart from "../page/ShopCart/ShortCart";
import ProductView from "../page/ProductView/ProductView";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <main>
        <Navbar />
        <Home />
      </main>
    )
  },
  {
    path: "/categories/Tinto",
    element: <VinoTinto />
  },
  {
    path: "/categories/Blanco",
    element: <VinoBlanco />
  },
  {
    path: "/categories/Rosado",
    element: <VinoRosado />
  },
  {
    path: "/shopCart",
    element: <ShortCart />
  },
  {
    path: "/product/details",
    element: <ProductView />
  }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;

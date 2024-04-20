import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../page/Home/Home";
import ShortCart from "../page/ShopCart/ShortCart";
import ProductView from "../page/ProductView/ProductView";
import Categorie from "../page/Categories/Categorie";

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
    path: "/categories/:typeWine",
    element: <Categorie />
  },
  {
    path: "/shopCart",
    element: <ShortCart />
  },
  {
    path: "/product/details/:productId",
    element: <ProductView />
  }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;

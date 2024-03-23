import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../page/Home/Home";
import VinoTinto from "../page/Categories/VinoTinto";
import VinoBlanco from "../page/Categories/VinoBlanco";
import VinoRosado from "../page/Categories/VinoRosado";

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
    path: "/categories/vino-tinto",
    element: <VinoTinto />
  },
  {
    path: "/categories/vino-blanco",
    element: <VinoBlanco />
  },
  {
    path: "/categories/vino-rosado",
    element: <VinoRosado />
  }
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;

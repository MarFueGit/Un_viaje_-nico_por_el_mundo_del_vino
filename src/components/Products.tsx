import React from "react";
import "./Products.css";
import { IWine } from "../types/Wine";
import { useNavigate } from "react-router-dom";
import { shopCartStore } from "../state/shopCartStore";

//Declaramos las props que va recibir products
interface ProductsProps {
  data: IWine[];
  titleProducts: string;
}

function Products({ data, titleProducts }: ProductsProps) {
  const navigate = useNavigate();
  const addProduct = shopCartStore((state) => state.addProduct);
  return (
    <>
      <h1 className="subtitle">
        {titleProducts ? titleProducts : "ESCOGE TU VINO FAVORITO"}
      </h1>
      <section id="products">
        {data?.map((wine: IWine) => (
          <div className={`list-products ${wine.type}`} key={wine.id}>
            <img
              src={wine.img}
              alt="imagen de vino"
              onClick={() => navigate(`/product/details/${wine.id}`)}
            />
            <p>{wine.name}</p>
            <p>{wine.type}</p>
            <p>${wine.price}</p>
            <button className="button-card" onClick={() => addProduct(wine, 1)}>
              Agregar al carrito
            </button>
          </div>
        ))}
        {}
      </section>
    </>
  );
}

export default Products;

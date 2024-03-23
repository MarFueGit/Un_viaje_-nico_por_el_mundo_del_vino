import React from "react";
import "./Products.css";
import { IWine } from "../types/Wine";

//Declaramos las props que va recibir products
interface ProductsProps {
  data: IWine[];
}

function Products({ data }: ProductsProps) {
  return (
    <>
      <h1 className="subtitle">ESCOGE TU VINO FAVORITO</h1>
      <section id="products">
        {data?.map((wine: IWine) => (
          <div className={`list-products ${wine.type}`} key={wine.id}>
            <img src={wine.img} alt="imagen de vino"/>
            <p>{wine.name}</p>
            <p>{wine.type}</p>
            <p>${wine.price}</p>
            <button className="button-card">Agregar al carrito</button>
          </div>
        ))}
        {}
      </section>
    </>
  );
}

export default Products;

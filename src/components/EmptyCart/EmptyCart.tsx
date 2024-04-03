import React from "react";
import "./EmptyCart.css";
import imgCart from "../../assets/img/cart.png";

export default function EmptyCart() {
  return (
   <section className="cart-container">
    <div className="empty-cart">
      <img src={imgCart} alt="imagen de carrito vacio" />
     <h2>No haz agregado nada al carrito</h2>
     <button>Ir a vinos</button>
    </div>
    </section>
  );
}

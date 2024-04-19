import React from "react";
import "./EmptyCart.css";
import imgCart from "../../assets/img/cart.png";
import { useNavigate } from "react-router-dom";

export default function EmptyCart() {
  const navigate = useNavigate();
  return (
    <section className="cart-container">
      <div className="empty-cart">
        <img src={imgCart} alt="imagen de carrito vacio" />
        <h2>No haz agregado nada al carrito</h2>
        <button onClick={() => navigate("/")}>Ir a vinos</button>
      </div>
    </section>
  );
}

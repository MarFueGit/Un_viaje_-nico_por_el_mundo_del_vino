import React from "react";
import LogoMenu from "../assets/icons/icon_menu.svg";
import LogoYard from "../assets/img/imagenVino-removebg-preview.png";
import IconCart from "../assets/icons/icon_shopping_cart.svg";
import "./Navbar.css";
import Search from "./Search";

export default function Navbar() {
  return (
    <div>
      <nav>
        <img src={LogoMenu} alt="menu" className="menu" />
        <div className="navbar-left">
          <img src={LogoYard} alt="logo" className="logo" />
          <h2 className="title">UN VIAJE ÚNICO POR EL MUNDO DEL VINO</h2>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Categorias</a>
            </li>
            <li>
              <a href="/">Ofertas</a>
            </li>
          </ul>
          <Search />
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-shopping-cart">
              <img src={IconCart} alt="carrito de compra" />
              <div>0</div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

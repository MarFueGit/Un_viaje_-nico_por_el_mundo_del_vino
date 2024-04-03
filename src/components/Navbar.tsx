import React from "react";
import LogoMenu from "../assets/icons/icon_menu.svg";
import LogoYard from "../assets/img/imagenVino-removebg-preview.png";
import IconCart from "../assets/icons/icon_shopping_cart.svg";
import "./Navbar.css";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { shopCartStore } from "../state/shopCartStore";

export default function Navbar() {
  const quantity = shopCartStore((state) => state.quantity);
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <img src={LogoMenu} alt="menu" className="menu" />
        <div className="navbar-left">
          <img src={LogoYard} alt="logo" className="logo" />
          <ul>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/categories/Tinto");
                }}
              >
                Vino Tinto
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/categories/Blanco");
                }}
              >
                Vino Blanco
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/categories/Rosado");
                }}
              >
                Vino Rosado
              </a>
            </li>
          </ul>
          <Search />
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-shopping-cart">
              <img
                src={IconCart}
                alt="carrito de compra"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/shopCart");
                }}
              />
              <div>{quantity}</div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

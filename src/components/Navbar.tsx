import React from "react";
import "./Navbar.css";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { shopCartStore } from "../state/shopCartStore";
import LogoMenu from "../assets/icons/icon_menu.jpg";
import LogoYard from "../assets/img/imagenVino-removebg-preview.png";
import IconCart from "../assets/icons/shoppingcart_80945.png";

export default function Navbar() {
  function MenuIcon() {
    return <img src={LogoMenu} alt="menu" className="menu" />;
  }

  function CartIcon() {
    return (
      <img
        data-testid="carrito de compra"
        src={IconCart}
        alt="carrito de compra"
        onClick={(e) => {
          e.preventDefault();
          navigate("/shopCart");
        }}
      />
    );
  }

  function LogoIcon() {
    return <img className="logo" src={LogoYard} alt="logo" />;
  }

  const quantity = shopCartStore((state) => state.quantity);
  const navigate = useNavigate();

  return (
    <section>
      <nav>
        <MenuIcon />
        <div className="navbar-left">
          <LogoIcon />
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
              <CartIcon />
              <div>{quantity}</div>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

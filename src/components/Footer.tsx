import React from "react";
import imgVino from "../assets/img/imgTin.jpg";
import imgVinoR from "../assets/img/imgRosado2.jpg";
import imgVinoB from "../assets/img/vinos-para-carnes-blancas-3.jpg";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <h2>
        ¿Qué vino servir? Blanco, tinto, rosado ...... Escoge tu favorito.
      </h2>
      <p>
        Los vinos blancos, rosados y tintos se diferencian por su color, pero
        también por la calidad de la uva, la variedad, el clima, el suelo, el
        tipo y duración de la maceración, la crianza… A grandes rasgos, cada uno
        de estos vinos está orientado a determinado tipo de guisos o alimentos.
        El público ha llegado a interiorizar estas ideas clave, que hoy en día
        están bastante asumidas:
      </p>
      <div className="list-wine">
        <a
          onClick={(e) => {
            e.preventDefault();
            navigate("/categories/vino-tinto");
          }}
        >
          <img src={imgVino} alt="imagen vino tinto" />
          <p>Tinto</p>
        </a>
        <a  onClick={(e) => {
            e.preventDefault();
            navigate("/categories/vino-blanco");
          }}>
          <img src={imgVinoB} alt="imagen vino blanco" />
          <p>Blanco</p>
        </a>
        <a  onClick={(e) => {
            e.preventDefault();
            navigate("/categories/vino-rosado");
          }}>
          <img src={imgVinoR} alt="imagen vino rosado" />
          <p>Rosado</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

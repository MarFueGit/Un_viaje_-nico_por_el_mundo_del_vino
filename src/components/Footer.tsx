import React from "react";
import LogoYard from "../assets/img/imagenVino-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <img src={LogoYard} alt="logo" className="logo" />
        <h1>Viñedo un viaje único por el mundo</h1>
        <div className="social-media">
          <a href="">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <div className="terminos">
          <p>POLITICA DE PRIVACIDAD</p>
          <p>TÉRMINOS Y CONDICIONES</p>
          <p>POLITICA DE COOKIES</p>
        </div>
        <span>Huehuetoca Edo.de México codigo postal 54480 México</span>
      </footer>
    </>
  );
}

export default Footer;

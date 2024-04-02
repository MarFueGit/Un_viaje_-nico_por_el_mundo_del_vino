import React from "react";
import Navbar from "../../components/Navbar";
import "./ProductView.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faPaypal,
  faCcVisa,
  faCcMastercard
} from "@fortawesome/free-brands-svg-icons";
import imgProduct from "../../assets/img/Productor_62673555-1404-480b-8c48-e0fcfb161f4b_icon.webp";
import imgLocation from "../../assets/img/49f7f01089a3ed59e4c3bc341a06ce2d.jpg";
import imgUvas from "../../assets/img/uvas_dc641770-743a-416c-9c82-1b45e34121d1_large.webp";
import imgBarrica from "../../assets/img/pngtree-cute-wind-bucket-free-element-png-image_4121354.png";
import imgAñadir from "../../assets/img/images-removebg-preview.png";
import imgTemp from "../../assets/img/temperatura_0e4e152d-19ab-4e0d-acec-6e2fe7a0884a_icon.webp";
import imgTinto from "../../assets/img/botellaVino-removebg-preview.png"


function ProductView() {
  return (
   <>
      <Navbar />
      <section className="container-details">
      <div className="img-left">
        <img src={imgTinto} alt="imagen del vino" />
      </div>
      <div className="detail-right">
        <h1>Pruno</h1>
        <p>$ 350.00</p>
        <p>
          🚚Envio GRATIS en pedidos superiores a $2,000. Entrega de 2 a 5 dias
          hábiles (excepto zonas extendidas).
        </p>
        <div className="agregar-cart">
          <FontAwesomeIcon icon={faMinus} />
          <span>1</span>
          <FontAwesomeIcon icon={faPlus} />
          <button>AGREGAR AL CARRITO</button>
        </div>
        <p>Pago seguro con :</p>
        <div className="payment-methods">
          <FontAwesomeIcon icon={faPaypal} />
          <FontAwesomeIcon icon={faCcVisa} />
          <FontAwesomeIcon icon={faCcMastercard} />
        </div>
        <p> Vino tinto ensamble(Garnacha, Cariñera)España</p>
        <p>93 puntos Guia peñin</p>
        <p>91 puntos Robert Parker</p>
       <p>Un excelente Priorat con elevados puntajes.</p>
        <ul className="list-caracteristicas">
          <li>
            <img src={imgProduct} alt="logo de productor" width={"25px"} />
            Productor: Ritme Celler
          </li>
          <li>
            <img src={imgLocation} alt="" width={"25px"} />
            Origen: D.O.Q Priorat, España
          </li>
          <li>
            <img src={imgUvas} alt="" width={"25px"} />
            Uvas: 55% Garnacha, 45% Cariñena
          </li>
          <li>
            <img src={imgBarrica} alt="" width={"25px"} />
            Barrica: 10 meses en barricas de roble frances, levemente tostadas
          </li>
          <li>
            <img src={imgAñadir} alt="" width={"25px"} />
            Añada: 2020
          </li>
          <li>
            <img src={imgTemp} alt="" width={"25px"} />
            Temperatura de servicio: 16C
          </li>
        </ul>
        <p>
          El vino Pruno es un vino tinto español producido por la bodega Finca
          Villacreces en la región vinícola de Ribera del Duero.
        </p>
      </div>
    </section>
    </>
  );
}

export default ProductView;

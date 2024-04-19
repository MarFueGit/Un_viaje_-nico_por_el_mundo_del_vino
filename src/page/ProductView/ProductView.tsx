import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "./ProductView.css";
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
import { useNavigate, useParams } from "react-router-dom";
import { getWineDetails } from "../../services/wines.service";
import { IWine } from "../../types/Wine";
import useToken from "../../hooks/useToken";

function ProductView() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [wine, setWine] = useState<IWine>();
  const { getToken } = useToken();

  useEffect(() => {
    getWineDetails(String(productId), String(getToken()))
      .then((data) => {
        setWine(data.response);
      })
      .catch((error) => console.log("ERRROR: ", error));
  }, [productId]);

  return (
    <>
      <Navbar />
      <section className="container-details">
        <div className="img-left">
          <button className="return" onClick={() => navigate("/")}>
            Regresar
          </button>
          <img src={wine?.img} alt="imagen del vino" />
        </div>
        <div className="detail-right">
          <h1>{wine?.name}</h1>
          <p>$ {wine?.price}</p>
          <p>{wine?.shippingInfo}</p>
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
          <p> {wine?.listInfo}</p>
          <ul className="list-caracteristicas">
            <li>
              <img src={imgProduct} alt="logo de productor" width={"25px"} />
              Productor: {wine?.productor}
            </li>
            <li>
              <img src={imgLocation} alt="" width={"25px"} />
              Origen: {wine?.origin}
            </li>
            <li>
              <img src={imgUvas} alt="" width={"25px"} />
              Uvas: {wine?.grapes}
            </li>
            <li>
              <img src={imgBarrica} alt="" width={"25px"} />
              Barrica: {wine?.barrica}
            </li>
            <li>
              <img src={imgAñadir} alt="" width={"25px"} />
              Añada: 2020
            </li>
            <li>
              <img src={imgTemp} alt="" width={"25px"} />
              Temperatura de servicio: {wine?.temperature}
            </li>
          </ul>
          <p>{wine?.description}</p>
        </div>
      </section>
    </>
  );
}

export default ProductView;

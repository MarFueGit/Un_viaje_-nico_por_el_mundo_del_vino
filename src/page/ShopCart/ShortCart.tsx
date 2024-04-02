import React from "react";
import Navbar from "../../components/Navbar";
import imgVino from "../../assets/img/botellaVino.jpg";
import "./ShortCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

function ShortCart() {
  return (
    <>
      <Navbar />
      <section className="section-principal">
        <div className="item-left">
          <div className="subtitles-items">
            <p>Mi carrito de compra </p>
            <p>3 productos</p>
          </div>
          <table className="table">
            <caption>Información del producto </caption>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="imagen">
                  <img
                    src={imgVino}
                    width={"80px"}
                    height={"80px"}
                    alt="imagen"
                  />
                </td>
                <td data-label="Nombre">
                  Vino tinto 
                  <button>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
                <td data-label="Cantidad">
                  <FontAwesomeIcon icon={faMinus} />
                  <span>2</span>
                  <FontAwesomeIcon icon={faPlus} />
                </td>
                <td data-label="Price">$150.00</td>
                <td data-label="Total">$300.00</td>
              </tr>
              <tr>
                <td data-label="imagen">
                  <img
                    src={imgVino}
                    width={"80px"}
                    height={"80px"}
                    alt="imagen"
                  />
                </td>
                <td data-label="Nombre">
                  Vino tinto
                  <button>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
                <td data-label="Cantidad">
                  <FontAwesomeIcon icon={faMinus} />
                  <span>2</span>
                  <FontAwesomeIcon icon={faPlus} />
                </td>
                <td data-label="Price">$150.00</td>
                <td data-label="Total">$300.00</td>
              </tr>
              <tr>
                <td data-label="imagen">
                  <img
                    src={imgVino}
                    width={"80px"}
                    height={"80px"}
                    alt="imagen"
                  />
                </td>
                <td data-label="Nombre">
                  Vino tinto
                  <button>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
                <td data-label="Cantidad">
                  <FontAwesomeIcon icon={faMinus} />
               <span>2</span>
                  <FontAwesomeIcon icon={faPlus} />
                </td>
                <td data-label="Price">$150.00</td>
                <td data-label="Total">$300.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="div-right">
          <h2>Order Summary</h2>
          <div className="items-right">
            <p>ITEMS 3</p>
            <p>$ 519</p>
          </div>
          <p>SHIPPING</p>
          <select name="" id="">
            <option value="5"> 5 registros por pág</option>
            <option value="10"> 10 registros por pág</option>
            <option value="15"> 15 registros por pág</option>
          </select>
          <label htmlFor="">
            Promocode
            <input type="text" placeholder="Enter your code" />
          </label>
          <button>Apply</button>
          <div className="order-total">
            <p>Total</p>
            <p>$524</p>
          </div>
          <button>Checkout</button>
        </div>
      </section>
    </>
  );
}

export default ShortCart;

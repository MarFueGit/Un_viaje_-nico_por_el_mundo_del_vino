import React from "react";
import Navbar from "../../components/Navbar";
import "./ShortCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { shopCartStore, ICartItem } from "../../state/shopCartStore";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

function ShortCart() {
  const products = shopCartStore((state) => state.wines);
  const quantity = shopCartStore((state) => state.quantity);
  const total = shopCartStore((state) => state.total);
  const addProduct = shopCartStore((state) => state.addProduct);
  const deleteProduct = shopCartStore((state) => state.deleteProduct);
  const reduceProductQuantity = shopCartStore(
    (state) => state.reduceProductQuantity
  );

  if (quantity === 0) {
    return (
      <>
        <Navbar />
        <EmptyCart />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="section-principal">
        <div className="item-left">
          <div className="subtitles-items">
            <p>Mi carrito de compra </p>
            <p>{quantity} productos</p>
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
              {products.map((product: ICartItem, i: number) => (
                <tr key={i}>
                  <td data-label="imagen">
                    <img
                      src={product.product.img}
                      width={"80px"}
                      height={"80px"}
                      alt="imagen"
                    />
                  </td>
                  <td data-label="Nombre">
                    {product.product.name}
                    <button>
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => deleteProduct(product.product.id)}
                      />
                    </button>
                  </td>
                  <td data-label="Cantidad">
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() =>
                        reduceProductQuantity(product.product.id, 1)
                      }
                    />
                    <span>{product.quantity}</span>
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => addProduct(product.product, 1)}
                    />
                  </td>
                  <td data-label="Price">${product.product.price}</td>
                  <td data-label="Total">
                    ${product.quantity * product.product.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="div-right">
          <h2>Orden</h2>
          <div className="items-right">
            <p>Productos {quantity}</p>
            <p>${total}</p>
          </div>
          <p>Entrega a domicilio</p>
          <select name="" id="">
            <option value="5"> Fedex</option>
            <option value="10"> DHL</option>
            <option value="15"> Estafeta</option>
          </select>
          <label htmlFor="">
            Códigos de descuento
            <input type="text" placeholder="Ingresa tu código" />
          </label>
          <button>Aplicar</button>
          <div className="order-total">
            <p>Total</p>
            <p>${total}</p>
          </div>
          <button>Checkout</button>
        </div>
      </section>
    </>
  );
}

export default ShortCart;

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./ShippingForm.css";
import { shopCartStore } from "../../state/shopCartStore";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  country: string;
  zipcode: string;
};

export default function ShippingForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("name"));
  console.log("ERROS: ", errors);

  const total = shopCartStore((state) => state.total);
  const quantity = shopCartStore((state) => state.quantity);
  return (
    <div className="div-right">
      <h2>Orden</h2>
      <div className="items-right">
        <p>Productos {quantity}</p>
        <p>${total}</p>
      </div>
      <p>Datos del cliente</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Nombre:
          <input
            type="text"
            placeholder="Escribe tu nombre"
            {...register("name")}
          />
        </label>
        <label htmlFor="email">
          Correo:
          <input
            type="email"
            placeholder="Escribe tu correo"
            {...register("email")}
          />
        </label>
        <label htmlFor="phone">
          Celular:
          <input
            type="tel"
            placeholder="Escribe tu número de celular"
            {...register("phone")}
          />
        </label>
        <label htmlFor="address">
          Dirección:
          <input
            type="text"
            placeholder="Escribe tu dirección"
            {...register("address")}
          />
        </label>
        <label htmlFor="state">
          Estado:
          <input
            type="text"
            placeholder="Escribe tu estado"
            {...register("state")}
          />
        </label>
        <label htmlFor="country">
          País:
          <input
            type="text"
            placeholder="Escribe tu país"
            {...register("country")}
          />
        </label>
        <label htmlFor="zipcode">
          Código Postal:
          <input
            type="text"
            placeholder="Escribe tu código postal"
            {...register("zipcode")}
          />
        </label>
        <label htmlFor="email">
          Paqueteria:
          <select name="Paqueteria" id="">
            <option value="5">Fedex</option>
            <option value="10">DHL</option>
            <option value="15">Estafeta</option>
          </select>
        </label>
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
      </form>
    </div>
  );
}

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./ShippingForm.css";
import "react-toastify/dist/ReactToastify.css";
import { shopCartStore } from "../../state/shopCartStore";
import { sendOrderService } from "../../services/orders.service";
import Modal from "../Modal/Modal";
import { ToastContainer, toast } from "react-toastify";
import useToken from "../../hooks/useToken";

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
    reset,
    formState: { errors }
  } = useForm<Inputs>();
  const [showConfirm, setShowConfirm] = useState(false);
  const [order, setOrder] = useState<Inputs | null>(null);
  const resetShopCart = shopCartStore((state) => state.resetShopCart);
  const { getToken } = useToken();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log("ERROS: ", errors); // Move console.log here to ensure errors is logged correctly
    if (!errors || Object.keys(errors).length === 0) {
      setOrder(data);
      setShowConfirm(true);
    } else {
      toast.error("Por favor, verifica los campos del formulario.");
    }
  };

  const sendOrder = async () => {
    try {
      reset();
      const response = await sendOrderService(order, String(getToken()));
      console.log("RESPONSE: ", response);
      toast.success("¡Orden enviada con éxito!");

      setTimeout(() => {
        resetShopCart();
      }, 5000);
    } catch (error) {
      console.log("ERROR AL ENVIAR LA ORDEN: ", error);
      toast.error(
        "Hubo un error al enviar la orden. Por favor, inténtalo de nuevo."
      );
    }
  };

  console.log(watch("name"));
  console.log("ERROS: ", errors);

  const total = shopCartStore((state) => state.total);
  const quantity = shopCartStore((state) => state.quantity);
  return (
    <div className="div-right">
      <ToastContainer />
      <h2>Orden</h2>
      <div className="items-right">
        <p>Productos {quantity}</p>
        <p>${total}</p>
      </div>
      <p>Datos del cliente</p>
      <form className="order-formulario" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Nombre:
          <input
            type="text"
            placeholder="Escribe tu nombre completo"
            required
            {...register("name")}
          />
        </label>
        <label htmlFor="address">
          Dirección:
          <input
            type="text"
            placeholder="Escribe tu dirección"
            required
            {...register("address")}
          />
        </label>
        <label htmlFor="email">
          Correo:
          <input
            type="email"
            placeholder="Escribe tu correo"
            required
            {...register("email")}
          />
        </label>
        <label htmlFor="state">
          Estado:
          <input
            type="text"
            placeholder="Escribe tu estado"
            required
            {...register("state")}
          />
        </label>
        <label htmlFor="phone">
          Celular:
          <input
            type="tel"
            placeholder="Escribe tu número de celular"
            required
            {...register("phone")}
          />
        </label>
        <label htmlFor="country">
          País:
          <input
            type="text"
            placeholder="Escribe tu país"
            required
            {...register("country")}
          />
        </label>
        <label htmlFor="">
          Cupón :
          <input type="text" placeholder="Ingresa tu cupon" />
        </label>

        <label htmlFor="email">
          Paqueteria:
          <select name="Paqueteria" id="">
            <option value="5">Fedex</option>
            <option value="10">DHL</option>
            <option value="15">Estafeta</option>
          </select>
        </label>
        <div className="order-total">
          <p>Total</p>
          <p>${total}</p>
        </div>

        <button id="button-pedido" type="submit">
          Realizar pedido
        </button>
      </form>
      <Modal
        title="¿Seguro que quieres enviar la orden?"
        open={showConfirm}
        close={() => setShowConfirm(!showConfirm)}
        description="Una vez enviada la orden de vinos, ya no podrás modificarla"
        action={() => sendOrder()}
      />
    </div>
  );
}

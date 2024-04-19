import { IResponseOrders, IResponseWines } from "../types/Wine";

export const sendOrderService = (
  order: object | null,
  token: string
): Promise<IResponseOrders> => {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(order)
  };

  return fetch(
    `https://codigo-facilito-api-vinos-1023f56b3ed9.herokuapp.com/api/order`,
    options
  )
    .then((response) => response.json())
    .then((data: IResponseWines) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

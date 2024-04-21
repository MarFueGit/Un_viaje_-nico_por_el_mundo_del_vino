import { sendOrderService } from "../../src/services/orders.service";

global.fetch = jest
  .fn()
  .mockImplementationOnce(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          ok: true,
          message: "order sent correct",
          response: {
            name: "Maricela Fuentes",
            address: "Paseo del mango manzana 5 lote 1-d",
            email: "maricelafuentes100@gmail.com",
            state: "Estado de México",
            phone: "5521436971",
            country: "México"
          },
          code: 200
        })
    })
  )
  .mockImplementationOnce(() =>
    Promise.reject(new Error("ERROR AL ENVIAR ORDEN"))
  );

describe("order.service", () => {
  it("sendOrderService envia la orden se envia de forma correcta ", async () => {
    //1. Preparar
    const order = {
      name: "Maricela Fuentes",
      address: "Paseo del mango manzana 5 lote 1-d",
      email: "maricelafuentes100@gmail.com",
      state: "Estado de México",
      phone: "5521436971",
      country: "México"
    };
    //2. Ejecutar
    const response = await sendOrderService(order, "TOKEN");
    //3. Verificar
    expect(response.message).toBe("order sent correct");
    expect(response.code).toBe(200);
  });

  it("sendOrderService da error al enviar la orden ", async () => {
    //1. Preparar
    const order = {
      name: "Maricela Fuentes",
      address: "Paseo del mango manzana 5 lote 1-d",
      email: "maricelafuentes100@gmail.com",
      state: "Estado de México",
      phone: "5521436971",
      country: "México"
    };

    //2. Ejecutar
    try {
      await sendOrderService(order, "TOKEN");
    } catch (error) {
      expect(error.message).toBe("ERROR AL ENVIAR ORDEN");
    }
  });
});

import {
  getWinesService,
  getWinesByTypeService,
  getWineDetails,
  searchByNameService
} from "../../src/services/wines.service";

global.fetch = jest
  .fn()
  .mockImplementationOnce(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          ok: true,
          message: "Success",
          response: {
            data: [
              {
                name: "Incógnito Tinto",
                type: "Tinto",
                price: 537,
                img: "https://res.cloudinary.com/dkkjgytmv/image/upload/v1710783738/wines/1_dqxbd6.png",
                barrica: "No tiene",
                description:
                  "El vino tinto Incógnito es la combinación perfecta entre elegancia y gran sabor. Su textura es suave con notas a frutos rojos con aroma a frutos maduros, de final especiado. Excelente vino para acompañar con carnes blancas, pastas y tabla de quesos ¡Prueba su gran sabor y adquiérelo!",
                grapes: "Cabernet Sauvignon, Zinfandel, Grenache",
                listInfo:
                  "Vino tinto ensamble (Cabernet Sauvignon, Zinfandel, Grenache) de La Estación de Oficios El Porvenir, Valle de Guadalupe",
                origin: "Valle de Guadalupe, B.C., México",
                productor: "Estación de Oficios El Porvenir",
                shippingInfo:
                  "🚚 Envío GRATIS en pedidos superiores a $2,500 o en Vinopacks. Entrega de 2 a 5 días hábiles (excepto zonas extendidas).",
                temperature: "15ºC ",
                id: "65f741039f857a93e5eb8e96"
              },
              {
                name: "Pruno",
                type: "Tinto",
                price: 628,
                img: "https://res.cloudinary.com/dkkjgytmv/image/upload/v1710793383/wines/2_snytzs.png",
                id: "65f857a270f00ee08b647f69"
              },
              {
                name: "Surco 2,7",
                type: "Tinto",
                price: 937,
                img: "https://res.cloudinary.com/dkkjgytmv/image/upload/v1710793385/wines/3_wkh6aw.png",
                id: "65f858f470f00ee08b647f6d"
              },
              {
                name: "Surco Rojo",
                type: "Tinto",
                price: 471,
                img: "https://res.cloudinary.com/dkkjgytmv/image/upload/v1710793382/wines/4_b3myiq.png",
                id: "65f85b1070f00ee08b647f71"
              },
              {
                name: "El Avión de Juguette",
                type: "Tinto",
                price: 480,
                img: "https://res.cloudinary.com/dkkjgytmv/image/upload/v1710793381/wines/5_iqh0uu.png",
                id: "65f85b3c70f00ee08b647f73"
              }
            ],
            totalCount: 46,
            totalPages: 10,
            pageSize: 5,
            currentPage: 1,
            nextPage: 2,
            prevPage: null
          },
          code: 200
        })
    })
  )
  .mockImplementationOnce(() =>
    Promise.reject(new Error("ERROR AL OBTENER VINOS"))
  )
  .mockImplementationOnce(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          ok: true,
          message: "ok",
          response: {
            data: [
              {
                name: "Mariatinto Moscato",
                type: "Blanco",
                price: 936,
                img: "https://res.cloudinary.com/dkkjgytmv/image/upload/v1710793606/wines/16_cd0zrb.png",
                id: "65f8a934d51c26a0e33c1ea5"
              },
              {
                name: "Casa Madero 2V",
                type: "Blanco",
                price: 456,
                img: "https://res.cloudinary.com/dkkjgytmv/image/upload/v1710793608/wines/17_ucwfnd.png",
                id: "65f8aabdd51c26a0e33c1eab"
              },
              {
                name: "Les Cocottes Chardonnay",
                type: "Blanco",
                price: 454,
                img: "https://res.cloudinary.com/dkkjgytmv/image/upload/v1710793609/wines/18_qbmdxl.png",
                id: "65f8aad6d51c26a0e33c1ead"
              },
              {
                name: "Sang Bleu Blanco",
                type: "Blanco",
                price: 447,
                img: "https://res.cloudinary.com/dkkjgytmv/image/upload/v1710793610/wines/19_enn1mz.png",
                id: "65f8ab02d51c26a0e33c1eaf"
              },
              {
                name: "Lagar de Cervera Albariño",
                type: "Blanco",
                price: 579,
                img: "https://res.cloudinary.com/dkkjgytmv/image/upload/v1710793612/wines/20_gwjyhb.png",
                id: "65f8ab16d51c26a0e33c1eb1"
              }
            ],
            totalCount: 15,
            totalPages: 3,
            pageSize: 5,
            currentPage: 1,
            nextPage: 2,
            prevPage: null
          },
          code: 200
        })
    })
  )
  .mockImplementationOnce(() =>
    Promise.reject(new Error("ERROR AL OBTENER VINOS POR TIPO"))
  )
  .mockImplementationOnce(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          ok: true,
          message: "Wine details retrieved successfully",
          response: {
            name: "Mariatinto Moscato",
            type: "Blanco",
            price: 936,
            img: "https://res.cloudinary.com/dkkjgytmv/image/upload/v1710793606/wines/16_cd0zrb.png",
            id: "65f8a934d51c26a0e33c1ea5"
          },
          code: 200
        })
    })
  )
  .mockImplementationOnce(() =>
    Promise.reject(new Error("ERROR AL OBTENER DETALLES DEL VINO"))
  )
  .mockImplementationOnce(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          ok: true,
          message: "Wines found successfully",
          response: {
            data: [
              {
                name: "Surco 2,7",
                type: "Tinto",
                price: 937,
                img: "https://res.cloudinary.com/dkkjgytmv/image/upload/v1710793385/wines/3_wkh6aw.png",
                id: "65f858f470f00ee08b647f6d"
              },
              {
                name: "Surco Rojo",
                type: "Tinto",
                price: 471,
                img: "https://res.cloudinary.com/dkkjgytmv/image/upload/v1710793382/wines/4_b3myiq.png",
                id: "65f85b1070f00ee08b647f71"
              }
            ],
            totalCount: 2,
            totalPages: 1,
            pageSize: 5,
            currentPage: 1,
            nextPage: null,
            prevPage: null
          },
          code: 200
        })
    })
  )
  .mockImplementationOnce(() =>
    Promise.reject(new Error("ERROR AL BUSCAR EL VINO"))
  );

describe("wines.service", () => {
  it("getWinesService retorna vinos de forma correcta", async () => {
    //1. Preparar
    const page = 1;
    const size = 5;
    const token = "TOKEN_TEST";
    //2. Ejecutar
    const response = await getWinesService(page, size, token);
    //3. Verificar
    expect(response.code).toBe(200);
    expect(response.message).toBe("Success");
  });

  it("getWinesService retorna error al obtener vinos", async () => {
    //1. Preparar
    const page = 1;
    const size = 5;
    const token = "TOKEN_TEST";
    //2. Ejecutar
    try {
      await getWinesService(page, size, token);
    } catch (error) {
      //3. Verificar
      expect(error.message).toBe("ERROR AL OBTENER VINOS");
    }
  });

  it("getWinesByTypeService retorna los vinos por tipo de forma correcta", async () => {
    //1. Preparar
    const wineType = "Blanco";
    const page = 1;
    const size = 5;
    const token = "TOKEN_TEST";
    //2. Ejecutar
    const response = await getWinesByTypeService(wineType, page, size, token);
    //3. Verificar
    expect(response.code).toBe(200);
    expect(response.message).toBe("ok");
  });

  it("getWinesByTypeService retorna error al obtener los vinos", async () => {
    //1. Preparar
    const wineType = "Blanco";
    const page = 1;
    const size = 5;
    const token = "TOKEN_TEST";
    //2. Ejecutar
    try {
      await getWinesByTypeService(wineType, page, size, token);
    } catch (error) {
      //3. Verificar
      expect(error.message).toBe("ERROR AL OBTENER VINOS POR TIPO");
    }
  });

  it("getWineDetails retorna los detalles del vino por id", async () => {
    //1. Preparar
    const id = "65f8a934d51c26a0e33c1ea5";
    const token = "TOKEN_TEST";
    //2. Ejecutar
    const response = await getWineDetails(id, token);
    //3. Verificar
    expect(response.code).toBe(200);
    expect(response.message).toBe("Wine details retrieved successfully");
  });

  it("getWineDetails retorna error al obtener los detalles del vino", async () => {
    //1. Preparar
    const id = "65f8a934d51c26a0e33c1ea5";
    const token = "TOKEN_TEST";
    //2. Ejecutar
    try {
      await getWineDetails(id, token);
    } catch (error) {
      //3. Verificar
      expect(error.message).toBe("ERROR AL OBTENER DETALLES DEL VINO");
    }
  });

  it("searchByNameService retorna las coincidencias de ese vino en BD", async () => {
    //1. Preparar
    const name = "Surco";
    const page = 1;
    const size = 5;
    const token = "TOKEN_TEST";
    //2. Ejecutar
    const response = await searchByNameService(name, page, size, token);
    //3. Verificar
    expect(response.code).toBe(200);
    expect(response.message).toBe("Wines found successfully");
  });

  it("searchByNameService retorna error al buscar", async () => {
    //1. Preparar
    const name = "Surco";
    const page = 1;
    const size = 5;
    const token = "TOKEN_TEST";
    //2. Ejecutar
    try {
      await searchByNameService(name, page, size, token);
    } catch (error) {
      //3. Verificar
      expect(error.message).toBe("ERROR AL BUSCAR EL VINO");
    }
  });
});

import { getAuthTokenService } from "../../src/services/auth.service";

// Mock inicial que retorna un token exitoso
global.fetch = jest
  .fn()
  .mockImplementationOnce(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          ok: true,
          message: "Authentication successful",
          token: "TOKEN_TEST",
          code: 200
        })
    })
  )
  .mockImplementationOnce(() =>
    Promise.reject(new Error("ERROR AL OBTENER TOKEN"))
  );

describe("auth.service", () => {
  it("getAuthTokenService retorn el token de forma correcta", async () => {
    //1. preparar el test
    const userName = "Mary";
    const pwd = "EJEMPLO";
    //2. ejecutar
    const response = await getAuthTokenService(userName, pwd);
    //3. verificar
    expect(response.token).not.toBeUndefined();
    expect(response.token).toBe("TOKEN_TEST");
  });

  it("getAuthTokenService da error al obtener token", async () => {
    //1. preparar el test
    const userName = "Mary";
    const pwd = "EJEMPLO";
    //2. ejecutar
    try {
      await getAuthTokenService(userName, pwd);
    } catch (error) {
      //3. verificar
      expect(error.message).toBe("ERROR AL OBTENER TOKEN");
    }
  });
});

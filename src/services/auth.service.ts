import { IToken } from "../types/Token";

export const getAuthTokenService = (
  username: string,
  password: string
): Promise<IToken> => {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ username, password })
  };

  return fetch(
    `https://codigo-facilito-api-vinos-1023f56b3ed9.herokuapp.com/api/auth`,
    options
  )
    .then((response) => response.json())
    .then((data: IToken) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

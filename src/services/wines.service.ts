import { IResponseWines } from "../types/Wine";

export const getWinesService = (
  page: number,
  pageSize: number
): Promise<IResponseWines> => {
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  };

  return fetch(
    `https://codigo-facilito-api-vinos-1023f56b3ed9.herokuapp.com/api/wines?page=${page}&pageSize=${pageSize}`,
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

export const getWinesByTypeService = (
  wineType: string,
  page: number,
  pageSize: number
): Promise<IResponseWines> => {
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  };

  return fetch(
    `https://codigo-facilito-api-vinos-1023f56b3ed9.herokuapp.com/api/wines/byType/${wineType}?page=${page}&pageSize=${pageSize}`,
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

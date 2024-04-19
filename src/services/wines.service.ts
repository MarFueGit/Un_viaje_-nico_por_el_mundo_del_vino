import { IResponseWineDetail, IResponseWines } from "../types/Wine";

export const getWinesService = (
  page: number,
  pageSize: number,
  token: string
): Promise<IResponseWines> => {
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`
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
  pageSize: number,
  token: string
): Promise<IResponseWines> => {
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`
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

export const getWineDetails = (
  id: string,
  token: string
): Promise<IResponseWineDetail> => {
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  return fetch(
    `https://codigo-facilito-api-vinos-1023f56b3ed9.herokuapp.com/api/wines/${id}`,
    options
  )
    .then((response) => response.json())
    .then((data: IResponseWineDetail) => {
      return data;
    })
    .catch((err) => {
      throw err;
    });
};

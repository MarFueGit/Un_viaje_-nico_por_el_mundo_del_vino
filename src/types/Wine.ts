export interface IWine {
  name: string;
  type: string;
  price: number;
  img: string;
  id: string;
}

export interface IResponseWines {
  ok: boolean;
  message: string;
  response: {
    data: IWine[];
    totalCount: number;
    totalPages: number;
    pageSize: number;
    currentPage: number;
    nextPage: number | null;
    prevPage: number | null;
  };
  code: number;
}

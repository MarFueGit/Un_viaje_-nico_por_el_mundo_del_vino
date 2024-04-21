export interface IWine {
  name: string;
  type: string;
  price: number;
  img: string;
  barrica: string;
  description: string;
  grapes: string;
  listInfo: string;
  origin: string;
  productor: string;
  shippingInfo: string;
  temperature: string;
  id: string;
}
export interface IResponseWineItem {
  data: IWine[];
  totalCount: number;
  totalPages: number;
  pageSize: number;
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
}
export interface IResponseWines {
  ok: boolean;
  message: string;
  response: IResponseWineItem;
  code: number;
}

export interface IResponseWineDetail {
  ok: boolean;
  message: string;
  response: {
    name: string;
    type: string;
    price: number;
    img: string;
    barrica: string;
    description: string;
    grapes: string;
    listInfo: string;
    origin: string;
    productor: string;
    shippingInfo: string;
    temperature: string;
    id: string;
  };
  code: number;
}

export interface IResponseOrders {
  ok: boolean;
  message: string;
  response: object;
  code: number;
}

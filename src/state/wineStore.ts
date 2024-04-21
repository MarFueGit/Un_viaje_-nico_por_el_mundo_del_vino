// @ts-ignore
import { devOnlyDevtools as devtools } from "./devTools";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand"; // Importamos State de zustand para tipar set
import { IResponseWineItem, IWine } from "../types/Wine";

// Definimos el tipo para el estado
export interface IWineState {
  searching: boolean;
  setSearching: (searching: boolean) => void; // Función setter para searching
  wines: IResponseWineItem;
  setWines: (data: IResponseWineItem) => void; // Función setter para wines
}

// Creamos el store con el tipo IWineState
export const wineStore = create<IWineState>(
  devtools(
    immer((set) => ({
      // Añadimos tipo State para set
      searching: false,
      setSearching: (searching: boolean) => {
        set({ searching }); // Actualizamos el estado de searching
      },
      wines: [],
      setWines: (data: IWine[]) => {
        set({ wines: data }); // Actualizamos el estado de wines
      }
    })),
    { name: "Wines App", store: "wines" }
  )
);

import { devOnlyDevtools as devtools } from "./devTools";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { IWine } from "../types/Wine";

export const wineStore = create(
  devtools(
    immer((set) => ({
      wines: [],
      setWines: (data: IWine[]) => {
        set({ wines: data }), false, { type: "setWines" };
      }
    })),
    { name: "Wines App", store: "wines" }
  )
);

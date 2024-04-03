import { devOnlyDevtools as devtools } from "./devTools";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { IWine } from "../types/Wine";

export interface ICartItem {
  product: IWine;
  quantity: number;
}

interface IShopCartState {
  quantity: number;
  total: number; // Total price for all wines in the shop cart
  wines: ICartItem[];
  addProduct: (product: IWine, quantity: number) => void;
  deleteProduct: (productId: string) => void;
  reduceProductQuantity: (productId: string, quantity: number) => void;
}

export const shopCartStore = create<IShopCartState>(
  devtools(
    immer((set) => ({
      quantity: 0,
      total: 0,
      wines: [],
      addProduct: (product: IWine, quantity: number) => {
        set((state: IShopCartState) => {
          // Find if the product already exists in the cart
          const existingProductIndex = state.wines.findIndex(
            (item) => item.product.id === product.id
          );

          // If the product exists, update its quantity
          if (existingProductIndex !== -1) {
            state.wines[existingProductIndex].quantity += quantity;
          } else {
            // If the product doesn't exist, add it to the cart
            state.wines.push({ product, quantity });
          }

          // Recalculate the total quantity
          state.quantity = state.wines.reduce(
            (total, item) => total + item.quantity,
            0
          );

          // Recalculate the total price
          state.total = state.wines.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
          );
        });
      },
      deleteProduct: (productId: string) => {
        set((state: IShopCartState) => {
          state.wines = state.wines.filter(
            (item) => item.product.id !== productId
          );
          // Recalculate the total quantity
          state.quantity = state.wines.reduce(
            (total, item) => total + item.quantity,
            0
          );
          // Recalculate the total price
          state.total = state.wines.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
          );
        });
      },
      reduceProductQuantity: (productId: string, quantity: number) => {
        set((state: IShopCartState) => {
          const productIndex = state.wines.findIndex(
            (item) => item.product.id === productId
          );
          if (productIndex !== -1) {
            state.wines[productIndex].quantity -= quantity;
            if (state.wines[productIndex].quantity <= 0) {
              // If quantity becomes zero or negative, remove the product from the cart
              state.wines.splice(productIndex, 1);
            }
            // Recalculate the total quantity
            state.quantity = state.wines.reduce(
              (total, item) => total + item.quantity,
              0
            );
            // Recalculate the total price
            state.total = state.wines.reduce(
              (total, item) => total + item.product.price * item.quantity,
              0
            );
          }
        });
      }
    })),
    { name: "Wines App", store: "shopCart" }
  )
);

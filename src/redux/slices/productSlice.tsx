import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Product, ProductsState } from "../../types/types";

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { loadProducts } = productsSlice.actions;
export default productsSlice.reducer;

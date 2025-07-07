import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { act } from "react";
const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    list: [],
    isError: "",
  },
  reducers: {
    fetchLoadingState(state) {
      state.isLoading = true;
    },
    fetchAllProducts(state, action) {
      state.isLoading = false;
      state.list = action.payload;
    },
    fetchCategoryProducts(state, action) {
      state.list = state.list.filter(
        (item: any) => item.category === action.payload
      );
    },
    fetchErrorState(state, action) {
      state.isError = action.payload || "Something went wrong";
    },
  },
});
export const { fetchAllProducts, fetchLoadingState, fetchErrorState } =
  productsSlice.actions;
export const products = (state: RootState) => state.products;
export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
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
    fetchErrorState(state, action) {
      state.isError = action.payload || "Something went wrong";
    },
  },
});
export const { fetchAllProducts, fetchLoadingState, fetchErrorState } =
  productsSlice.actions;
export const getAllProducts = (state: RootState) => state.products;
export default productsSlice.reducer;

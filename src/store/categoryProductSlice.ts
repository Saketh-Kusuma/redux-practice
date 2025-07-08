import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
const categoryProductsSlice = createSlice({
  name: "categoryProducts",
  initialState: {
    isLoading: false,
    list: [],
    isError: "",
  },
  reducers: {
    fetchLoadingCategoryProducts(state) {
      state.isLoading = true;
    },
    fetchCategoryProducts(state, action) {
      state.isLoading = false;
      state.list = action.payload;
    },
    fetchErrorCategoryProducts(state, action) {
      state.isError = action.payload || "Something went wrong";
    },
  },
});
export const {
  fetchLoadingCategoryProducts,
  fetchCategoryProducts,
  fetchErrorCategoryProducts,
} = categoryProductsSlice.actions;
export const categoryProducts = (state: RootState) => state.categoryProduct;
export default categoryProductsSlice.reducer;

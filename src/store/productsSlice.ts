import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
export const fetchAllProductsData = createAsyncThunk(
  "products/call",
  async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      return response.json();
    } catch (error) {
      throw error;
    }
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    list: [],
    isError: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProductsData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllProductsData.fulfilled, (state, action) => {
      state.isLoading = true;
      state.list = action.payload;
      state.isError = "";
    });
    builder.addCase(fetchAllProductsData.rejected, (state) => {
      state.isError = "Something went wrong";
    });
  },
});
export const getAllProducts = (state: RootState) => state.products;
export default productsSlice.reducer;

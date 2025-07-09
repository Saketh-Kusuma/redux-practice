import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
export const fetchCategoryProductsData = createAsyncThunk(
  "categoryProducts/call",
  async (categoryName: string | undefined) => {
    try {
      const respose = await fetch(
        `https://fakestoreapi.com/products/category/${categoryName}`
      );
      return respose.json();
    } catch (err) {
      throw err;
    }
  }
);

const categoryProductsSlice = createSlice({
  name: "categoryProducts",
  initialState: {
    isLoading: false,
    list: [],
    isError: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryProductsData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategoryProductsData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
      state.isError = "";
    });
    builder.addCase(fetchCategoryProductsData.rejected, (state) => {
      state.isLoading = false;
      state.isError = "Something went wrong";
    });
  },
});
export const categoryProducts = (state: RootState) => state.categoryProduct;
export default categoryProductsSlice.reducer;

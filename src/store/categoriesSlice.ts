import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
export const fetchAllCategoriesData = createAsyncThunk(
  "category/call",
  async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      return response.json();
    } catch (err) {
      throw err;
    }
  }
);
const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    isLoading: false,
    list: [],
    isError: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategoriesData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllCategoriesData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
      state.isError = "";
    });
    builder.addCase(
      fetchAllCategoriesData.rejected,
      (state, { payload }: any) => {
        state.isLoading = false;
        state.isError = payload.toString() || "Something went wrong";
      }
    );
  },
});

export const categories = (state: RootState) => state.categories;
export default categoriesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    isLoading: false,
    list: [],
    isError: "",
  },
  reducers: {
    fetchLoadingState(state) {
      state.isLoading = true;
    },
    fetchAllCategories(state, action) {
      state.isLoading = false;
      state.list = action.payload;
    },
    fetchErrorState(state, action) {
      state.isError = action.payload || "Something went wrong";
    },
  },
});

export const { fetchAllCategories, fetchErrorState, fetchLoadingState } =
  categoriesSlice.actions;
export const categories = (state: RootState) => state.categories;
export default categoriesSlice.reducer;

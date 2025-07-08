import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import productReducer from "./productsSlice";
import categoryProductsList from "./categoryProductSlice";
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productReducer,
    categoryProduct: categoryProductsList,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

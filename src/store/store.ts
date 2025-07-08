import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import productReducer from "./productsSlice";
import categoryProductsList from "./categoryProductSlice";
import { apiMiddleware } from "./api";
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productReducer,
    categoryProduct: categoryProductsList,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

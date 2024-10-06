import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/productsSlice";

export const store = configureStore({
  reducer: { products: productSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
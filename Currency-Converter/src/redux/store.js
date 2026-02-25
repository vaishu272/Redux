import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./features/currencySlice";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
});

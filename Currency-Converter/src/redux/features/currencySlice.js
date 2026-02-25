import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrencyData } from "../../api/currencyApi";

const initialState = {
  isLoading: false,
  data: null,
  error: false,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencyData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCurrencyData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCurrencyData.rejected, (state, action) => {
      state.error = true;
      state.error = action.payload;
    });
  },
});

export default currencySlice.reducer;

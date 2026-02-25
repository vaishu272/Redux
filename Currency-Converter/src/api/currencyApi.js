import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_CURRENCY_API_KEY;

export const fetchCurrencyData = createAsyncThunk(
  "currency/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`,
      );

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Error fetching data");
    }
  },
);

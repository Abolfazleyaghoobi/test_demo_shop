import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchbestseller = createAsyncThunk(
  "bestseller/fetchbestseller",
  async (arg, { rejectWithValue }) => {
    try {
      // const res = await axios.get(
      //   "http://localhost:5050/api/products/filter?seller=bestseller"
      // );
      const res = await axios.get(
        "https://server-eta-topaz-30.vercel.app/api/products/filter?seller=bestseller"
      );

      return res.data;
    } catch (error) {
      return rejectWithValue("Error fetching bestseller");
    }
  }
);

export const bestsellerSlice = createSlice({
  name: "bestseller",
  initialState: { bestseller: [], loading: false, errorMessage: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchbestseller.fulfilled, (state, action) => {
      (state.bestseller = action.payload), (state.loading = false);
      // console.log(action);
    });
  },
});


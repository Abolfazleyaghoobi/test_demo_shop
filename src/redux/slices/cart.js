import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { addedToCard: 0, total: 0, allProducts: [] },
  reducers: {
    addToCard: (state, action) => {},
    decreaseFromCard: (state, action) => {},
    increaseFromCard: (state, action) => {},
    deletFromCard: (state, action) => {},
  },
});
export const { addToCard, decreaseFromCard, deletFromCard, increaseFromCard } =
  cartSlice.actions;
  export default cartSlice.reducer;

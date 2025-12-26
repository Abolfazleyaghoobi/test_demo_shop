import { combineSlices } from "@reduxjs/toolkit";
import { cartSlice } from "./cart";
import { bestsellerSlice } from "./bestseller";
// import { favoriteProducts } from "./featchProduct";/
const routReducer=combineSlices(cartSlice , bestsellerSlice)
export default routReducer;
import { configureStore } from "@reduxjs/toolkit";
import routReducer from "./slices";
const store=configureStore({
    reducer:routReducer
})
export default store;
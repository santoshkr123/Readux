import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice";

const store = configureStore({
    reducer: {
        productSlice
    }
})

export default store
import { configureStore } from "@reduxjs/toolkit";
import partsReducer from "../features/parts/PartsSlice";

const store = configureStore({
    reducer: {
        parts: partsReducer
    }
})
export default store;
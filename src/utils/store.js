import { configureStore } from "@reduxjs/toolkit";
import aapSlice from "./aapSlice";

const store = configureStore({
    reducer : {
        app : aapSlice,
    }
})

export default store;
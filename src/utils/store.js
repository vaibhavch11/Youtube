import { configureStore } from "@reduxjs/toolkit";
import aapSlice from "./aapSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer : {
        app : aapSlice,
        chat : chatSlice,
    }
})

export default store;
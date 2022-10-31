import { configureStore } from "@reduxjs/toolkit";
import cellReducer from "./cellSlice";

export default configureStore({
    reducer: {
        cell: cellReducer,
    },
});
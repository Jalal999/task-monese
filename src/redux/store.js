import { configureStore } from "@reduxjs/toolkit";
import cellReducer from "./cellSlice";
import playerReducer from "./playerSlice";

export default configureStore({
    reducer: {
        cell: cellReducer,
        player: playerReducer
    },
});
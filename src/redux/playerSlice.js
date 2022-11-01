import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name: "player",
    initialState: {
        turn: '',
        winner: ''
    },
    reducers: {
        defineWinner: (state, action) => {
            state.winner = action.payload;
        },
        changeTurn: (state, action) => {
            state.turn = action.payload;
        },
    }
});

export const { defineWinner, changeTurn, } = playerSlice.actions;
export default playerSlice.reducer;
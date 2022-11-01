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
        resetPlayer: (state) => {
            state.turn = '';
            state.winner = '';
        }
    }
});

export const { defineWinner, changeTurn, resetPlayer} = playerSlice.actions;
export default playerSlice.reducer;
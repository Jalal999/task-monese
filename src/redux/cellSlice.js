import { createSlice } from "@reduxjs/toolkit";

const cellSlice = createSlice({
    name: "cell",
    initialState: {
        cells: ['', '', '', '', '', '', '', '', ''],
    },
    reducers: {
        addTicTac: (state, action) => {
            state.cells[action.payload.position] = action.payload.ticTac;
        },
        reset: (state) => {
            state.cells = ['', '', '', '', '', '', '', '', ''];
        },
    }
});

export const { addTicTac, reset, } = cellSlice.actions;
export default cellSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        incrementCounter: (state) => {
            state.count = state.count + 1;
        },
        decrementCounter: (state) => {
            state.count = state.count - 1;
        },
        resetCounter: (state) => {
            state.count = 0;
        }
    }
});

// Destructure actions from the counterSlice object
export const { incrementCounter, decrementCounter, resetCounter } = counterSlice.actions;

export default counterSlice.reducer;

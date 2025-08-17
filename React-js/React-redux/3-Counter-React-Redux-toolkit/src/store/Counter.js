import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState: {counterVal: 0},
    reducers: {
        increment: (state)=>{
            state.counterVal++;
        },
        decrement: (state)=>{
            state.counterVal--;
        },
        addtion: (state, action)=>{
            state.counterVal += Number(action.payload.number);
        },
        subtraction: (state, action)=>{
            state.counterVal -= Number(action.payload.number);
        },
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice;
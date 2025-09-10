import { createSlice } from '@reduxjs/toolkit';

const bagSlice = createSlice({
    name:'bag',
    initialState: [],
    reducers:{
        addToBag: (state, action) =>{
            const exist = state.find(item=> item.imdbID === action.payload.imdbID);
            if(!exist){
                state.push(action.payload);
            }
        },
        removeFromBag: (state, action) =>{
            return state.filter(item => item.imdbID !== action.payload);
        }
    }
})

export const bagActions = bagSlice.actions;

export default bagSlice;
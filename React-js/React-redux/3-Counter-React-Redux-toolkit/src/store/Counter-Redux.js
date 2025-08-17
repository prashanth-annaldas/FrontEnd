import {configureStore, createSlice} from "@reduxjs/toolkit";

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

const privacySlice = createSlice({
    name:'privacy',
    initialState:false,
    reducers: {
        toggle: (state)=>{
            return state = !state;
        }
    }
});

const counterStore = configureStore({reducer: {
    counter:counterSlice.reducer,
    privacy:privacySlice.reducer
}});

export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;
export default counterStore;

/*const INITIAL_VALUE = {
    counter:0,
    privacy: false,
}

const counterReducer = (store = INITIAL_VALUE, action)=>{
    let newStore = store;
    if(action.type === "INCREMENT"){
        newStore = {...store, counter: store.counter + 1};
    }
    else if(action.type === 'DECREMENT'){
        newStore = {...store, counter: store.counter - 1};
    }
    else if(action.type === 'ADD'){
        newStore = {...store, counter: store.counter + Number(action.payload.number)};
    }
    else if(action.type === 'SUBTRACT'){
        newStore = {...store, counter: store.counter - Number(action.payload.number)};
    }
    else if(action.type === 'PRIVACY_TOGGLE'){
        newStore = {...store, privacy: !store.privacy};
    }
    return newStore;
}*/
import { configureStore } from "@reduxjs/toolkit"
import bagSlice from "./BagSlice"

const netflixStore = configureStore({
    reducer:{
        bag: bagSlice.reducer,
    }
})

export default netflixStore;
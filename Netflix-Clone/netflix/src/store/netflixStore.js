import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieDatails";

const NetflixStore = configureStore({
    reducer:{
        movies: moviesReducer.reducer,
    },
})

export default NetflixStore;
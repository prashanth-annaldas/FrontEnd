import { createSlice } from '@reduxjs/toolkit';
import { fetchTrendingMovies } from "../api/tmdb";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        trending: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchStart: (state)=>{
            state.loading = true;
            state.error = null;
        },
        fetchSuccess: (state, action)=>{
            state.loading = false;
            state.trending = action.payload;
        },
        fetchFailure: (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { fetchStart, fetchSuccess, fetchFailure } = moviesSlice.actions;

export const getTrendingMovies = ()=> async (dispatch)=>{
    dispatch(fetchStart());
    try{
        const movies = await fetchTrendingMovies();
        dispatch(fetchSuccess(movies));
    }
    catch(error){
        dispatch(fetchFailure(error.message));
    }
}

export default moviesSlice;
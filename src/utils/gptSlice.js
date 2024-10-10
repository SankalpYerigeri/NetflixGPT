import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gptSlice",
    initialState : {
        toggleGptSearch : false,
        gptMovies : null,
        movieNames : null
    },
    reducers :
    {
        toggleGptSearch : (state) =>
        {
            state.toggleGptSearch = !state.toggleGptSearch;
        },

        addgptMovies : (state, action) =>
        {
            const {movieNames, movieResults} = action.payload;
            state.gptMovies = movieResults;
            state.movieNames = movieNames;
        }

    }
    
});

export const {toggleGptSearch, addgptMovies} = gptSlice.actions;

export default gptSlice.reducer;

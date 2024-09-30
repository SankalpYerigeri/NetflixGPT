import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gptSlice",
    initialState : {
        toggleGptSearch : false
    },
    reducers :
    {
        toggleGptSearch : (state) =>
        {
            state.toggleGptSearch = !state.toggleGptSearch;
        }
    }
    
});

export const {toggleGptSearch} = gptSlice.actions;

export default gptSlice.reducer;

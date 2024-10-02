import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name : "config",
    initialState : {
        languageMode : "en"
    },
    reducers : {
        changeLanguage : (state, action) =>
        {
            state.languageMode = action.payload;
        }
    }
})

export const {changeLanguage} = langSlice.actions;


export default langSlice.reducer;
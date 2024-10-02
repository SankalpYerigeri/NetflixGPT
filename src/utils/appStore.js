import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice"
import Gptsearch from "../components/GptSearch";
import gptReducer from "./gptSlice";
import configReducer from "./langSlice"

const appStore = configureStore({
    reducer :  {
        user : userReducer,
        movies : moviesReducer,
        gptSlice : gptReducer,
        config : configReducer
    }
});

export default appStore;

import {configureStore} from "@reduxjs/toolkit"
import  useReducer  from "./UserSlice"
import movieReducer from "./moviesSlice";
const appStore=configureStore(
    {
        reducer:{
            user:useReducer,
            movies:movieReducer,
        },
    }
);

export default appStore
import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        lang:"en",
    },
    reducers:{
        changeLanguaue:(state,action)=>{
            state.lang=action.payload;
        },
    },
});

export const {changeLanguaue}=configSlice.actions;
export default configSlice.reducer
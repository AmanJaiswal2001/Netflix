import { createSlice } from "@reduxjs/toolkit";
import { remove } from "react-tinymce-mention/lib/mention/actions/mentionActions";


const UserSlice=createSlice(
    {
     name:"user",
     initialState:null,
     reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:(state,action)=>{
            return null;
        }
     }   
    }
);
export const {addUser,removeUser}=UserSlice.actions;
export default UserSlice.reducer
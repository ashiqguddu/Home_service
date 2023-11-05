import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:'storeId',
    initialState:{
        value:''
    },
    reducers:{
        id:(state,action)=>{
            state.value = action.payload
        }
    }
})

export default slice.reducer;

export const {id} = slice.actions;
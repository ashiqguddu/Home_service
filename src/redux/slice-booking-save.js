import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name:"booking save id manage ",
    initialState:{
        value:[]
    },
    reducers:{
        bookingSaveId :(state,action)=>{
            console.log('slice action',action.payload)
            state.value= action.payload
           
            console.log('state ',state.value)
        }
    }
})

export default slice.reducer;

export const {bookingSaveId} = slice.actions
import { createSlice } from "@reduxjs/toolkit";


 

const slice=createSlice(
    {
        name:'categorylist',
        initialState: {
            value : []
        },
        reducers:{
            catogoryslice:(state,action) =>{
                // console.log('slice console  ',action.payload)
                // state.value = [...state.value,action.payload]
                state.value = action.payload.sort((a,b) =>(b.id -a.id))
                // console.log( 'slice',state.value)
            },
             
    }
}
)

export default slice.reducer;

export const {catogoryslice}=slice.actions;


import { createSlice } from "@reduxjs/toolkit";


 

const slice=createSlice(
    {
        name:'list',
        initialState: {
            value : []
        },
        reducers:{
            userlist:(state,action) =>{
                // console.log('slice console  ',action.payload)
                state.value = action.payload
                // console.log(state.value)
            },
             
    }
}
)

export default slice.reducer;

export const {userlist}=slice.actions;


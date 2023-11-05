import { createSlice } from "@reduxjs/toolkit";


var slice = createSlice(
    {
        name: 'booking_list_of_user',
        initialState:{
        value:[]
        },
        reducers:{
        bookingList:(state,action)=>{
            
            state.value = action.payload
            
        }
        }
    }
)

export default slice.reducer;
export const {bookingList} = slice.actions;
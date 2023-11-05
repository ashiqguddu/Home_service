import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name : "Booking",
    initialState : {
        value:[]
    },
    reducers :{
           Bookinguser : (state,action) =>{
            // console.log(action.payload)
               state.value = action.payload
            //    console.log(state.value)
           }
    }
})

export const {Bookinguser} = Slice.actions;
export default Slice.reducer;
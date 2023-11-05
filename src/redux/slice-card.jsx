import { createSlice } from "@reduxjs/toolkit";

 
// const initialState = {
//     object: {
//       id: null,
//       itemImage: undefined,
//       itemName: undefined,
//       description:  undefined,
//       price: null,
    
//     },
//   };

const slice = createSlice({
    name:'cart',
    initialState :{
      value:[]
    },
    reducers :{
        addItemToCart:(state,action) =>{
            state.value=  action.payload
            console.log(state.value)
        }
    }
})

export const {addItemToCart} = slice.actions
export default slice.reducer


 

 

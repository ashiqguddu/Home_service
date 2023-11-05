import { createSlice } from "@reduxjs/toolkit"

function initstate() {
    var ob = {
      status: false,
      name: undefined,
      token: undefined,
    };
  
    var data = localStorage.getItem("data");
    if (data != null) {
      var data1 = JSON.parse(data);
      ob = data1.counter.value;
    }
  
    return ob;
  }


const slice=createSlice(
    {
        name:'login',
        initialState: {
           value:initstate()
        },
        reducers:{
                loginstatus:(state,action)=>{
                state.value=action.payload
            }
    }
}
)

export default slice.reducer;

export const {loginstatus}=slice.actions;
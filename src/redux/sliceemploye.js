import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [], // Initial empty array for the list of services
};

const EmploySlice = createSlice({
  name: 'employeList',
  initialState,
  reducers: {
     Employeaction: (state, action) => {
       state.value = action.payload;
     } 
  },
});

export const { Employeaction, } =  EmploySlice.actions;

export default EmploySlice.reducer;

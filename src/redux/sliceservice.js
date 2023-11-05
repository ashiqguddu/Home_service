import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [], // Initial empty array for the list of services
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    setService: (state, action) => {
      state.value = action.payload;
    },
    addService: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { setService, addService } = serviceSlice.actions;

export default serviceSlice.reducer;

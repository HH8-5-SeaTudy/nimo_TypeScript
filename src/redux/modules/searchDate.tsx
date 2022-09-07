import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: [],
};


export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    updateDate: (state, action) => {
      state.date = action.payload; 
    }
  },
  extraReducers: {
},
}
);

export const {updateDate} = dateSlice.actions;
export default dateSlice.reducer; 
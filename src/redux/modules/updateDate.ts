import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: '',
};

export const __dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    updateDate: (state, action) => {
      state.date = action.payload;
    },
    selectDate: (state, action) => {
      state.date = action.payload;
    },
  },
  extraReducers: {},
});

export const { updateDate,selectDate } = __dateSlice.actions;
export default __dateSlice.reducer;

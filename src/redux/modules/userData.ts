import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};

export const __userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: {},
});

export const { updateUser } = __userSlice.actions;
export default __userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSample:any = createAsyncThunk(
  "sample/getSample",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://sample");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  sample: [],
  isLoading: false,
  error: null,
};


export const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    serchSample: (state, action) => {
      console.log(action.payload)
      state.sample = action.payload; 
    }
  },
  extraReducers: {
  [getSample.pending]: (state) => {
    state.isLoading = true; 
  },
  [getSample.fulfilled]: (state, action) => {
    state.isLoading = false; 
    state.sample = action.payload; 
  },
  [getSample.rejected]: (state, action) => {
    state.isLoading = false; 
    state.error = action.payload; 
  },
},
}
);

export const {serchSample} = sampleSlice.actions;
export default sampleSlice.reducer; 
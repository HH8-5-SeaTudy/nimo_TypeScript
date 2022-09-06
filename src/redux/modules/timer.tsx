import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getCheckInTimer: any = createAsyncThunk(
  "timer/postTimer",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://13.125.120.152/api/v1/checkIns",
        payload,
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyN0BuYXZlci5jb20iLCJpc3MiOiJoYW5naGFlNV9zZWF0dWR5IiwiZXhwIjoxNjYyNTUzNTM5fQ.7fy8-Y_BGidln7b8TJQ4OE7s7sPoAWtApNW3mUl0pz0",
          },
        }
      );
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getCheckOutTimer: any = createAsyncThunk(
  "timer/postTimer",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://13.125.120.152/api/v1/checkOuts",
        payload,
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyN0BuYXZlci5jb20iLCJpc3MiOiJoYW5naGFlNV9zZWF0dWR5IiwiZXhwIjoxNjYyNTUzNTM5fQ.7fy8-Y_BGidln7b8TJQ4OE7s7sPoAWtApNW3mUl0pz0",
          },
        }
      );
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  timer: [],
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  extraReducers: {
    [__getCheckInTimer.fulfilled]: (state, action) => {
      state.timer = action.payload;
    },
    [__getCheckOutTimer.fulfilled]: (state, action) => {
      state.timer = action.payload;
    },
  },
  reducers: {},
});

export default timerSlice.reducer;

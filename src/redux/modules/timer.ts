import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Itimer } from "../../api";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token: string = process.env.REACT_APP_TOKEN as string;

export const __getUserinquire: any = createAsyncThunk(
  "timer/userInquire",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/checkIns`, {
        headers: {
          Authorization: token,
        },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getCheckInTimer: any = createAsyncThunk(
  "timer/postCheckIn",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/checkIns`,
        payload,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getCheckOutTimer: any = createAsyncThunk(
  "timer/postCheckOut",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/checkOuts`,
        payload,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 초기 상태 타입

const initialState: Itimer = {
  dayStudyTime: "",
  totalStudyTime: "",
  todayLogs: [],
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getUserinquire.fulfilled, (state, action) => {
        state.dayStudyTime = action.payload.dayStudyTime;
      })
      .addCase(__getCheckInTimer.fulfilled, (state, action) => {
        // state.timer = action.payload;
      })
      .addCase(__getCheckOutTimer.fulfilled, (state, action) => {
        state = { ...state, ...action.payload };
      });
  },
});

export default timerSlice.reducer;

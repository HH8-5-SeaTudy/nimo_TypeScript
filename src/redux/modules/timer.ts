import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const __getCheckInTimer: any = createAsyncThunk(
  "timer/postTimer",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://54.180.79.105/api/v1/checkIns",
        payload,
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrbXMxMjNAZ21haWwuY29tIiwiaXNzIjoiaGFuZ2hhZTVfc2VhdHVkeSIsImV4cCI6MTY2MjcxMTUwN30.kF7tvGWZbhv5ovOKA3CPyY7KIwg2dSsGgw9o63M3kQ4",
          },
        }
      );
      console.log("checkIn", response);
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
        "http://54.180.79.105/api/v1/checkOuts",
        payload,
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrbXMxMjNAZ21haWwuY29tIiwiaXNzIjoiaGFuZ2hhZTVfc2VhdHVkeSIsImV4cCI6MTY2MjcxMTUwN30.kF7tvGWZbhv5ovOKA3CPyY7KIwg2dSsGgw9o63M3kQ4",
          },
        }
      );
      console.log("checkOut", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 초기 상태 타입
export type Itimer = {
  checkOut?: string;
  checkIn?: string;
  hh: number;
  mm: number;
  ss: number;
  timeWatch: string;
};

const initialState = {
  // checkOut: "",
  // checkIn: "",
  // hh: 0,
  // mm: 0,
  // ss: 0,
  // timeWatch: "",
  timer: [],
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {},
  extraReducers: {
    [__getCheckInTimer.fulfilled]: (state, action) => {
      state = action.payload;
      console.log(action.payload);
    },
    [__getCheckOutTimer.fulfilled]: (state, action) => {
      // state.timeWatch = action.payload.timeWatch;
      state = action.payload;
    },
  },
});

export default timerSlice.reducer;

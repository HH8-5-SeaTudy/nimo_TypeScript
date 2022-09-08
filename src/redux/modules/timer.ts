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
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrbXMxMjNAZ21haWwuY29tIiwiaXNzIjoiaGFuZ2hhZTVfc2VhdHVkeSIsImV4cCI6MTY2MjcxMTUwN30.kF7tvGWZbhv5ovOKA3CPyY7KIwg2dSsGgw9o63M3kQ4"
          },
        }
      );
      console.log('checkin',response);
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
      console.log('checkOut',response.data);
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

const initialState : Itimer = {
  checkOut: "",
  checkIn: "",
  hh: 0,
  mm: 0,
  ss: 0,
  timeWatch: "",
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  extraReducers: {
    [__getCheckInTimer.fulfilled.type]: (state, action: PayloadAction<Itimer>) => {
      state = action.payload;
      console.log('In',state)
      console.log(action.payload)
      return state

    },
    [__getCheckOutTimer.fulfilled.type]: (state, action : PayloadAction<Itimer>) => {
      state = {...state,...action.payload};
      console.log('out',state)
      console.log(action.payload)
      return state
    },
  },
  reducers: {},
});

export default timerSlice.reducer;

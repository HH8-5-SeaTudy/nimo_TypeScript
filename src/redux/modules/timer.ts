import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Itimer } from "../../api";
import { getCookie } from '../../components/social/Cookie';

const BASE_URL = process.env.REACT_APP_BASE_URL;
// const token: string = process.env.REACT_APP_TOKEN as string;
const token: string = getCookie('token') as string;

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
  isStudy : false,
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
        state.isStudy = true;
      })
      .addCase(__getCheckOutTimer.fulfilled, (state, action) => {
        state.isStudy = false;
      });
  },
});

export default timerSlice.reducer;

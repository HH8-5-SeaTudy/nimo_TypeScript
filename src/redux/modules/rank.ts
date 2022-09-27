import { IRankInitialState } from './../../api';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../components/social/Cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token: string = getCookie("token") as string;

export const __getDayRank: any = createAsyncThunk(
  "rank/__getDayRank",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/dayRanks`, {
        headers: {
          Authorization: token,
        },
      });
      console.log(response)
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getWeekRank: any = createAsyncThunk(
  "rank/__getWeekRank",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/weekDayRanks`, {
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

// 초기 상태 타입
const initialState: IRankInitialState = {
dayRank:[],
weekRank:[]
};

export const rankSlice = createSlice({
  name: "rank",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getDayRank.fulfilled, (state, action) => {
        state.dayRank = action.payload

      })
      .addCase(__getWeekRank.fulfilled, (state, action) => {
        state.weekRank = action.payload
      })

  },
});

export default rankSlice.reducer;

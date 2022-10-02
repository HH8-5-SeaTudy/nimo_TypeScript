import { IRankInitialState } from "./../../api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../components/social/Cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL;


export const __getDayRank: any = createAsyncThunk(
  "rank/__getDayRank",
  async (payload, thunkAPI) => {
    try {
      const token: string = getCookie("token") as string;
      const response = await axios.get(`${BASE_URL}/api/v1/dayRanks`, {
        headers: {
          Authorization: token,
        },
      });
      console.log('여기겟랭크토큰',token);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getWeekRank: any = createAsyncThunk(
  "rank/__getWeekRank",
  async (payload, thunkAPI) => {
    try {
      const token: string = getCookie("token") as string;
      const response = await axios.get(`${BASE_URL}/api/v1/weekDayRanks`, {
        headers: {
          Authorization: token,
        },
      });
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getDayMyRank: any = createAsyncThunk(
  "rank/__getdayMyRank",
  async (payload, thunkAPI) => {
    try {
      const token: string = getCookie("token") as string;
      const response = await axios.get(`${BASE_URL}/api/v1/dayMyRanks`, {
        headers: {
          Authorization: token,
        },
      });
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getWeekMyRank: any = createAsyncThunk(
  "rank/__getWeekMyRank",
  async (payload, thunkAPI) => {
    try {
      const token: string = getCookie("token") as string;
      const response = await axios.get(`${BASE_URL}/api/v1/weekDayMyRanks`, {
        headers: {
          Authorization: token,
        },
      });
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 초기 상태 타입
const initialState: IRankInitialState = {
  dayRank: [],
  weekRank: [],
  dayMyRank: {
    nickname: "",
    myRank: 0,
  },
  WeekMyRank: {
    nickname: "",
    myRank: 0,
  },
};

export const rankSlice = createSlice({
  name: "rank",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getDayRank.fulfilled, (state, action) => {
        state.dayRank = action.payload;
      })
      .addCase(__getWeekRank.fulfilled, (state, action) => {
        state.weekRank = action.payload;
      })
      .addCase(__getDayMyRank.fulfilled, (state, action) => {
        state.dayMyRank = action.payload;
      })
      .addCase(__getWeekMyRank.fulfilled, (state, action) => {
        state.WeekMyRank = action.payload;
      });
  },
});

export default rankSlice.reducer;

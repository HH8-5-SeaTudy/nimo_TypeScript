import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Itimer } from "../../api";
import { getCookie } from "../../components/social/Cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token: string = getCookie("token") as string;

export const __getSelectFish: any = createAsyncThunk(
  "timer/getselectfish",
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

// 초기 상태 타입
const initialState: Itimer = {
  dayStudyTime: "",
  totalStudyTime: "",
  todayLogs: [],
  isStudy: false,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getSelectFish.fulfilled, (state, action) => {
      state.dayStudyTime = action.payload.dayStudyTime;
      state.isStudy = action.payload.isStudy;
    });
  },
});

export default timerSlice.reducer;

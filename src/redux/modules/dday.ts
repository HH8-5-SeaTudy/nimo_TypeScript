import { IDdayInitialState } from './../../api';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from '../../components/social/Cookie';

const BASE_URL = process.env.REACT_APP_BASE_URL;
// const token: string = process.env.REACT_APP_TOKEN as string;
const token: string = getCookie('token') as string;


export const __getDday: any = createAsyncThunk(
  "Dday/__getDday",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/ddays`, {
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

export const __postDday: any = createAsyncThunk(
  "Dday/__postDday",
  async (payload: any, thunkAPI) => {
    try {
      const data = await axios.post(
        `${BASE_URL}/api/v1/ddays`,
        {
          title: payload.title,
          targetDay: payload.ddayDate,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// 초기 상태 타입

const initialState: IDdayInitialState = {
  DdayData:[]
};

export const DdaySlice = createSlice({
  name: "Dday",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getDday.fulfilled, (state, action) => {
        state.DdayData = action.payload;
      })
      .addCase(__postDday.fulfilled, (state, action) => {
        console.log(action.payload)
        state.DdayData.push(action.payload);
      })
  },
});

export default DdaySlice.reducer;

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
      const response = await axios.get(`${BASE_URL}/api/v1/ddays/dates?selectDate=${payload}`,
      {
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
    console.log(payload)
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
export const __deleteDday: any = createAsyncThunk(
  "Dday/__deleteDday",
  async (payload: any, thunkAPI) => {
    try {
      const data = await axios.delete(
        `${BASE_URL}/api/v1/ddays/${payload}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editDday: any = createAsyncThunk(
  "Dday/__editDday",
  async (payload: any, thunkAPI) => {
    try {
      const data = await axios.put(
        `${BASE_URL}/api/v1/ddays/${payload.id}`,
        {
          title: payload.title,
          targetDay: payload.targetDay,
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
        state.DdayData.push(action.payload);
      })
      .addCase(__editDday.fulfilled, (state, action) => {
        state.DdayData = state.DdayData.map((list) =>
        list.ddayId === action.payload.ddayId
          ? { ...list, title: action.payload.title }
          : list
      );
      })
      .addCase(__deleteDday.fulfilled, (state, action) => {
        state.DdayData = state.DdayData.filter(
          (list) => list.ddayId !== action.payload
        );
      })
  },
});

export default DdaySlice.reducer;

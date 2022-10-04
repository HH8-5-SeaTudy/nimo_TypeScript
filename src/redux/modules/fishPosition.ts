import { IPositionInitialState } from "./../../api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../components/social/Cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const __getFishPosition: any = createAsyncThunk(
  "Position/__getFishPosition",
  async (payload, thunkAPI) => {
    try {
      const token: string = getCookie("token") as string;
      const response = await axios.get(`${BASE_URL}/api/v1/fishes/locations`, {
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

export const __postFishPosition: any = createAsyncThunk(
  "Position/__postFishPosition",
  async (payload: any, thunkAPI) => {
    try {
      const token: string = getCookie("token") as string;
      const data = await axios.put(
        `${BASE_URL}/api/v1/fishes/relocations`,
        {
          fishNum: payload.fishNum,
          left: payload.left,
          top: payload.top,
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

export const __deleteFishPosition: any = createAsyncThunk(
  "Position/__deleteFishPosition",
  async (payload: any, thunkAPI) => {
    try {
      
      const token: string = getCookie("token") as string;
      const data = await axios.put(
        `${BASE_URL}/api/v1/fishes/relocations/${payload}`,
        {},
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

export const __AllDeleteFishPosition: any = createAsyncThunk(
  "Position/__AllDeleteFishPosition",
  async (payload: any, thunkAPI) => {
    try {
      const token: string = getCookie("token") as string;
      const data = await axios.put(
        `${BASE_URL}/api/v1/fishes/allRelocations`,
        {},
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
const initialState: IPositionInitialState = {
  position: [],
};

export const positionSlice = createSlice({
  name: "position",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__getFishPosition.fulfilled, (state, action) => {
        state.position = action.payload;
      })
      .addCase(__postFishPosition.fulfilled, (state, action) => {
        state.position = state.position.map((list) =>
          list.fishNum === action.payload.fishNum
            ? { ...list, left: action.payload.left, top: action.payload.top }
            : list
        );
      })
      .addCase(__deleteFishPosition.fulfilled, (state, action) => {
        state.position = state.position.map((list) =>
          list.fishNum === action.payload.fishNum
            ? { ...list, left: action.payload.left, top: action.payload.top }
            : list
        );
      })
      .addCase(__AllDeleteFishPosition.fulfilled, (state, action) => {
        state.position = action.payload;
      })
  },
});

export default positionSlice.reducer;

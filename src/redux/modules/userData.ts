import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../api";
import { getCookie } from "../../components/social/Cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token: string = getCookie("token") as string;

export const __getUserProfile: any = createAsyncThunk(
  "user/getUserProfile",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/members/myProfile`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState: IUser = {
  userData: [],
};
export const __userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__getUserProfile.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});

export const { updateUser } = __userSlice.actions;
export default __userSlice.reducer;

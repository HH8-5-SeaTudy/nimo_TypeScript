import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../api";
import { getCookie } from "../../components/social/Cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL;


export const __getUserProfile: any = createAsyncThunk(
  "user/getUserProfile",
  async (payload, thunkAPI) => { 
    try {
      const token: string = getCookie("token") as string;
      const response = await axios.get(`${BASE_URL}/api/v1/members/myProfile`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      console.log('겟데이트',response)
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editUserProfile: any = createAsyncThunk(
  "user/editUserProfile",
  async (payload, thunkAPI) => {
    try {
      const token: string = getCookie("token") as string;
      const response = await axios.put(
        `${BASE_URL}/api/v1/members/nickname`,
        {
          nickname: payload,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editUserFishProfile: any = createAsyncThunk(
  "user/editUserFishProfile",
  async (payload, thunkAPI) => {
    try {
      const token: string = getCookie("token") as string;
      const response = await axios.put(
        `${BASE_URL}/api/v1/members/myProfile/fishImages`,
        {
          fishName: payload,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState: IUser = {
  userData: [],
  userProfile: {
    id: 0,
    email: "",
    nickname: "",
    defaultFish: "",
    point: 0,
    totalStudy: ""
  },
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
      state.userProfile = action.payload;
    });
    builder.addCase(__editUserProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload;
    });
    builder.addCase(__editUserFishProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload;
    });
  },
});

export const { updateUser } = __userSlice.actions;
export default __userSlice.reducer;

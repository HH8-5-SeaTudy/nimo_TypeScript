import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../components/social/Cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token: string = getCookie("token") as string;

export const __getFishList: any = createAsyncThunk(
  "user/getfishlist",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/fishes/images?fishName=${payload}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export type IFishImage = {
  fishName: string;
  image: string;
};

export type IFhsh = {
  imageInfo: IFishImage;
};

const initialState: IFhsh = {
  imageInfo: {
    fishName: "",
    image: "",
  },
};

export const fishList = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getFishList.fulfilled, (state, action) => {
      state.imageInfo = action.palyload;
    });
  },
});

export default fishList.reducer;

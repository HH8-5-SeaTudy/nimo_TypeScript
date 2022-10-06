import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../components/social/Cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const token: string = getCookie("token") as string;

export const __getChatCount: any = createAsyncThunk(
  "get/chatCount",
  async (payload, thunkAPI) => {
    try {
      const token: string = getCookie("token") as string;
      const response = await axios.get(`${BASE_URL}/api/v1/chat/roomLists`, {
        headers: {
          contentType: "application/json",
          authorization: token,
        },
      });
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export type IRoomInfo = {
  isLoading: boolean;
  error: null;
  roomInfo: IChatCount[];
};

export type IChatCount = {
  roomId: string;
  userCount: number;
};

const initialState: IRoomInfo = {
  isLoading: false,
  error: null,
  roomInfo: [],
};

export const ChatCountSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getChatCount.fulfilled, (state, action) => {
      state.roomInfo = action.payload.roomInfo;
    });
  },
});

export default ChatCountSlice.reducer;

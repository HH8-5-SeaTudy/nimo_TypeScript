import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../components/social/Cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const __getChatroom: any = createAsyncThunk(
  "get/chatroom",
  async (payload, thunkAPI) => {
    try {
      const token: string = getCookie("token") as string;
      const response = await axios.get(
        `${BASE_URL}/api/v1/chat/room/${payload}`,
        {
          headers: {
            contentType: "application/json",
            authorization: token,
          },
        }
      );
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getChatenter: any = createAsyncThunk(
  "get/chatenter",
  async (payload, thunkAPI) => {
    try {
      const token: string = getCookie("token") as string;
      const response = await axios.get(`${BASE_URL}/pub/chat/enter`, {
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

export const __getRoom: any = createAsyncThunk(
  "get/__getRoom",
  async (payload, thunkAPI) => {
    try {
      const token: string = getCookie("token") as string;
      const response = await axios.get(`${BASE_URL}/sub/chat/room/${payload}`, {
        headers: {
          contentType: "application/json",
          authorization: token,
        },
      });
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export type IChat = {
  isLoading: boolean;
  error: null;
  chat: any;
};

const initialState: IChat = {
  isLoading: false,
  error: null,
  chat: [],
};

export const preChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.chat = [action.payload, ...state.chat];
    },
  },
  extraReducers: {
    [__getChatroom.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.chat = action.payload;
      console.log(action.payload);
    },
  },
});

export const { addUser } = preChatSlice.actions;
export default preChatSlice.reducer;

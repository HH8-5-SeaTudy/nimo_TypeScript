import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../components/social/Cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL;


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
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export type IChat = {
  isLoading: boolean;
  error: null;
  chat: IChatting[];
};

export type IChatting = {
  type?: string;
  roomId: string;
  sender: string;
  message: string;
  userCount?: number;
  defaultFish: string;
  rankByNickname: IChatInfo[];
};

export type IChatInfo = {
  nickname: string;
  point: number;
  defaultFish: string;
  totalStudy: string;
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
});

export const { addUser } = preChatSlice.actions;
export default preChatSlice.reducer;

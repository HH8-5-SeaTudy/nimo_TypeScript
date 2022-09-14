import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from '../../components/social/Cookie';

const BASE_URL = process.env.REACT_APP_BASE_URL;
// const token: string = process.env.REACT_APP_TOKEN as string;
const token: string = getCookie('token') as string;

const roomId = `hello`;

export const __getChatroom: any = createAsyncThunk(
  "get/chatroom",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/chat/room/${roomId}`,
        {
          headers: {
            contentType: "application/json",
            authorization: token,
          },
        }
      );
      return response.data.data.roomId;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
  chat: [],
};

export const preChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.chat.concat(action.payload);
    },
  },
  extraReducers: {
    [__getChatroom.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.roomId = action.payload;
    },
  },
});

export const { addMessage } = preChatSlice.actions;
export default preChatSlice.reducer;

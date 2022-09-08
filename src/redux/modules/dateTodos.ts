import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface date {
  content: any;
  selectDate: any;
  headers: string;
}
//일자별 목록 조회

export const getDateTodo: any = createAsyncThunk(
  "category/postCategory",
  async (payload: date, thunkAPI) => {
    console.log("axios", payload);
    try {
      const data = await axios.get(
        `http://54.180.79.105/api/v1/todoCategories/dates?selectDate=${payload}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrbXNAZ21haWwuY29tIiwiaXNzIjoiaGFuZ2hhZTVfc2VhdHVkeSIsImV4cCI6MTY2MjY0Mjk5Mn0.gGbOTw4oyHuqpxoxtQjti_ITyJxZ4-tqn2fi6HOH7WI",
          },
        }
      );
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  dateTodos: [],
};

export const getDateTodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [getDateTodo.fulfilled]: (state, action) => {
      state.dateTodos = action.payload;
    },
  },
});

export default getDateTodoSlice.reducer;

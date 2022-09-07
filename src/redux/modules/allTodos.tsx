import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface todoList {
  selectDate: string;
  content: string;
  id: string;
}

//전체 목록 조회
export const getAllTodo: any = createAsyncThunk(
  "todo/getTodo",
  async (payload: any, thunkAPI) => {
    try {
      const data: any = await axios.get(
        "http://54.180.79.105/api/v1/todoCategories",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrbXNAZ21haWwuY29tIiwiaXNzIjoiaGFuZ2hhZTVfc2VhdHVkeSIsImV4cCI6MTY2MjU1MDQzMX0.pl0AJBZaI_IJHqEfvfHKmlgaVqahoXHa1b4sGv6fSXQ",
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
  allTodos: [],
};

export const getAllTodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllTodo.fulfilled]: (state, action) => {
      state.allTodos = action.payload;
    },
  },
});

export default getAllTodoSlice.reducer;

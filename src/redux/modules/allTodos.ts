import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IDateTodosInitialState } from "../../api";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token: string = process.env.REACT_APP_TOKEN as string;

//전체 목록 조회
export const getAllTodo: any = createAsyncThunk(
  "todo/getTodo",
  async (payload, thunkAPI) => {
    try {
      const getData = await axios.get(`${BASE_URL}/api/v1/todoCategories`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      const data = getData.data.data;

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState: IDateTodosInitialState = {
  allTodos: [],
  dateTodos: [],
};

export const getAllTodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTodo.fulfilled, (state, action) => {
      state.allTodos = action.payload;
    });
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getAllTodo.fulfilled, (state, action) => {
  //     state.allTodos = action.payload;
  //   })
  // },
});

export default getAllTodoSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const name = 'todo';

//전체 목록 조회
export const getAllTodo :any = createAsyncThunk(
  "todo/getTodo",
  async (payload, thunkAPI) => {
    try {
      const getData = await axios.get(
        "http://54.180.79.105/api/v1/todoCategories",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrbXNAZ21haWwuY29tIiwiaXNzIjoiaGFuZ2hhZTVfc2VhdHVkeSIsImV4cCI6MTY2MjY0Mjk5Mn0.gGbOTw4oyHuqpxoxtQjti_ITyJxZ4-tqn2fi6HOH7WI",
          },
        }
      );
      
      const data :ITodos[] = getData.data.data;
      console.log(data);
      console.log(thunkAPI);
      
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);



export type IInitialState = {
  allTodos : Array<ITodos>;
}

export type ITodos = {
  categoryId: number,
  categoryName: string,
  memberCateDto: {
    memberId: number, 
    email: string,
  }
  selectDate: string,
  todoList: any,
}
const initialState : IInitialState = {
  allTodos: [],
};

export const getAllTodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
  },
  extraReducers: {
    [getAllTodo.fulfilled.type]: (state: IInitialState, action : PayloadAction<Array<ITodos>>) => {
      state.allTodos = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getAllTodo.fulfilled, (state, action) => {
  //     state.allTodos = action.payload;
  //   })
  // },
});

export default getAllTodoSlice.reducer;

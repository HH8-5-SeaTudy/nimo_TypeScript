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

export interface category {
  content: any;
  categoryName: any;
  headers: string;
  categoryId: number;
}

//카테고리 생성
export const postCategory: any = createAsyncThunk(
  "category/postCategory",
  async (payload: any, thunkAPI) => {
    console.log("카테생성", payload);
    try {
      const data = await axios.post(
        "http://13.125.120.152/api/v1/todoCategories",
        {
          categoryName: payload.categoryName,
          selectDate: payload.selectDate,
        },
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

// 카테고리 삭제
export const deleteCategory: any = createAsyncThunk(
  "category/deleteCategory",
  async (payload: any, thunkAPI) => {
    console.log("카테삭제", payload);
    try {
      const data = await axios.delete(
        `http://13.125.120.152/api/v1/todoCategories/${payload}`,
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

// 카테고리 수정
export const _editCategory: any = createAsyncThunk(
  "category/editCategory",
  async (payload: any, thunkAPI) => {
    console.log("카테수정", payload);
    try {
      const data = await axios.put(
        `http://13.125.120.152/api/v1/todoCategories/${payload.categoryId}`,
        {
          categoryName: payload.categoryName,
        },
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
      console.log('jeads')
    },

  },
});

export default getDateTodoSlice.reducer;
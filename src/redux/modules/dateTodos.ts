import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.BASE_URL;
const token: any = process.env.REACT_APP_TOKEN;

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
        `http://43.200.115.252/api/v1/todoCategories/dates?selectDate=${payload}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,

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
        `http://43.200.115.252/api/v1/todoCategories`,
        {
          categoryName: payload.categoryName,
          selectDate: payload.selectDate,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,

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
        `http://43.200.115.252/api/v1/todoCategories/${payload}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,

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
        `http://43.200.115.252/api/v1/todoCategories/${payload.categoryId}`,
        {
          categoryName: payload.categoryName,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          
          },
        }
      );
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 투두리스트 추가
export const postTodo: any = createAsyncThunk(
  "todo/postTodo",
  async (payload: any, thunkAPI) => {
    console.log("투두추가", payload);
    try {
      const data = await axios.post(
        `http://43.200.115.252/api/v1/${payload.categoryId}/todoLists`,{
          selectDate: payload.selectDate,
          content: payload.content
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//투두리스트 완료
export const doneTodo: any = createAsyncThunk(
  "todo/doneTodo",
  async (payload: any, thunkAPI) => {
    console.log("투두완료", payload);
    try {
      const data = await axios.post(
        `http://43.200.115.252/api/v1/todoLists/${payload}`,{},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJobGltOTAyMkBuYXZlci5jb20iLCJpc3MiOiJoYW5naGFlNV9zZWF0dWR5IiwiZXhwIjoxNjYyNzkxNzQ4fQ.Om2Seorp_4IThAooS9W4DFS1b8J2gX3fQY_XYFOXCqg"
          },
        }
      );
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//투두리스트 삭제
export const deleteTodo: any = createAsyncThunk(
  "todo/deleteTodo",
  async (payload: any, thunkAPI) => {
    console.log("투두삭제", payload);
    try {
      const data = await axios.delete(
        `http://43.200.115.252/api/v1/todoLists/${payload}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJobGltOTAyMkBuYXZlci5jb20iLCJpc3MiOiJoYW5naGFlNV9zZWF0dWR5IiwiZXhwIjoxNjYyNzkxNzQ4fQ.Om2Seorp_4IThAooS9W4DFS1b8J2gX3fQY_XYFOXCqg"
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
      console.log("jeads");
    },
  },
});

export default getDateTodoSlice.reducer;


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token: any = process.env.REACT_APP_TOKEN;

export interface date {
  content: any;
  selectDate: any;
  headers: string;
}
//일자별 목록 조회

export const getDateTodo: any = createAsyncThunk(
  "category/getDateTodo",
  async (payload: date, thunkAPI) => {
    try {
      const data = await axios.get(
        `${BASE_URL}/api/v1/todoCategories/dates?selectDate=${payload}`,
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
        `${BASE_URL}/api/v1/todoCategories`,
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
    try {
      const data = await axios.delete(
        `${BASE_URL}/api/v1/todoCategories/${payload}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,

          },
        }
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 카테고리 수정
export const _editCategory: any = createAsyncThunk(
  "category/editCategory",
  async (payload: any, thunkAPI) => {
    try {
      const data = await axios.put(
        `${BASE_URL}/api/v1/todoCategories/${payload.categoryId}`,
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
    try {
      const data = await axios.post(
        `${BASE_URL}/api/v1/${payload.categoryId}/todoLists`,{
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
    try {
      const data = await axios.post(
        `${BASE_URL}/api/v1/todoLists/${payload}`,{},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token
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
    try {
      const data = await axios.delete(
        `http://43.200.115.252/api/v1/todoLists/${payload.todoId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          },
        }
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export type IInitialState = {
  dateTodos: Array<ITodos>;
};
export type ITodoList = {
  content: string;
  done: number;
  selectDate: string;
  todoId: number;
}

export type ITodos = {
  categoryId: number;
  categoryName: string;
  memberCateDto: {
    memberId: number;
    email: string;
  };
  selectDate: string;
  todoList: Array<ITodoList>;
};

const initialState : IInitialState = {
  dateTodos: [
  ],
};



export const getDateTodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [getDateTodo.fulfilled]: (state, action) => {
      state.dateTodos = action.payload;
    },
    [postCategory.fulfilled]: (state, action) => {
      state.dateTodos.push(action.payload);
    },
    [deleteCategory.fulfilled]: (state, action) => {
      state.dateTodos = state.dateTodos.filter((list) => list.categoryId !== action.payload)
    },
    [_editCategory.fulfilled]: (state, action) => {
      state.dateTodos = state.dateTodos.map((list) => list.categoryId === action.payload.categoryId 
      ? { ...list, categoryName:action.payload.categoryName} 
      : list)
    },
    [postTodo.fulfilled]: (state, action) => {
        state.dateTodos.map((list)=>list.categoryId === action.payload.categoryId 
        ? list.todoList.push(action.payload)
        : list )
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.dateTodos.map((list)=>
      {
        if( list.categoryId === action.payload.categoryId ) {
          return list.todoList = list.todoList.filter((todo)=>todo.todoId !== action.payload.todoId)
        }
      }
      )
    },
    [doneTodo.fulfilled]: (state, action) => {
      state.dateTodos.map((list)=>
      {
        if( list.categoryId === action.payload.categoryId ) {
          return list.todoList = list.todoList.map((todo)=> todo.todoId == action.payload.todoId
          ? {...todo, done: action.payload.done}
          : todo )
        }
      }
      )
    },
  },
});

export default getDateTodoSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IDateTodosInitialState, ITodos } from "../../api";
import { getCookie } from "../../components/social/Cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token: string = getCookie("token") as string;

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

//일자별 목록 조회
export const __getDateTodo: any = createAsyncThunk(
  // 성공시 리턴 타입
  // ITodos[],
  // payload 타입
  // string,
  // { rejectValue: MyKnownError }
  "category/getDateTodo",
  async (payload, thunkAPI) => {
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
      return thunkAPI.rejectWithValue({ errorMessage: "에러가 발생" });
    }
  }
);

//카테고리 생성
export const __postCategory: any = createAsyncThunk(
  "category/postCategory",
  async (payload: any, thunkAPI) => {
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
export const __deleteCategory: any = createAsyncThunk(
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
      console.log(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 카테고리 수정
export const __editCategory: any = createAsyncThunk(
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
export const __postTodo: any = createAsyncThunk(
  "todo/postTodo",
  async (payload: any, thunkAPI) => {
    try {
      const data = await axios.post(
        `${BASE_URL}/api/v1/${payload.categoryId}/todoLists`,
        {
          selectDate: payload.selectDate,
          content: payload.content,
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
export const __doneTodo: any = createAsyncThunk(
  "todo/doneTodo",
  async (payload: any, thunkAPI) => {
    try {
      const data = await axios.post(
        `${BASE_URL}/api/v1/todoLists/${payload}`,
        {},
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
//투두리스트 삭제
export const __deleteTodo: any = createAsyncThunk(
  "todo/deleteTodo",
  async (payload: any, thunkAPI) => {
    try {
      const data = await axios.delete(
        `${BASE_URL}/api/v1/todoLists/${payload.todoId}`,
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

const initialState: IDateTodosInitialState = {
  dateTodos: [],
  allTodos: [],
};

export const getDateTodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // * Category Reducer
      .addCase(getAllTodo.fulfilled, (state, action) => {
        state.allTodos = action.payload;
      })
      .addCase(__getDateTodo.fulfilled, (state, action) => {
        state.dateTodos = action.payload;
      })
      .addCase(__postCategory.fulfilled, (state, action) => {
        state.dateTodos.push(action.payload);
        state.allTodos.push(action.payload);
      })
      .addCase(__deleteCategory.fulfilled, (state, action) => {
        state.dateTodos = state.dateTodos.filter(
          (list) => list.categoryId !== action.payload
        );
        state.allTodos = state.dateTodos.filter(
          (list) => list.categoryId !== action.payload
        );
      })
      .addCase(__editCategory.fulfilled, (state, action) => {
        state.dateTodos = state.dateTodos.map((list) =>
          list.categoryId === action.payload.categoryId
            ? { ...list, categoryName: action.payload.categoryName }
            : list
        );
      })

      // * Todo Reducer
      .addCase(__postTodo.fulfilled, (state, action) => {
        state.dateTodos.map((list) =>
          list.categoryId === action.payload.categoryId
            ? list.todoList && list.todoList.push(action.payload)
            : list
        );
        state.allTodos.map((list) =>
          list.categoryId === action.payload.categoryId
            ? list.todoList && list.todoList.push(action.payload)
            : list
        );
      })
      .addCase(__doneTodo.fulfilled, (state, action) => {
        state.dateTodos.map((list) => {
          if (list.categoryId === action.payload.categoryId) {
            return (list.todoList = list.todoList.map((todo) =>
              todo.todoId === action.payload.todoId
                ? { ...todo, done: action.payload.done }
                : todo
            ));
          }
        });
        state.allTodos.map((list) => {
          if (list.categoryId === action.payload.categoryId) {
            return (list.todoList = list.todoList.map((todo) =>
              todo.todoId === action.payload.todoId
                ? { ...todo, done: action.payload.done }
                : todo
            ));
          }
        });
      })
      .addCase(__deleteTodo.fulfilled, (state, action) => {
        state.dateTodos.map((list) => {
          if (list.categoryId === action.payload.categoryId) {
            return (list.todoList = list.todoList.filter(
              (todo) => todo.todoId !== action.payload.todoId
            ));
          }
        });
        state.allTodos.map((list) => {
          if (list.categoryId === action.payload.categoryId) {
            return (list.todoList = list.todoList.filter(
              (todo) => todo.todoId !== action.payload.todoId
            ));
          }
        });
      });
  },
});

export default getDateTodoSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IDateTodosInitialState, ITodos } from "../../api";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token: string = process.env.REACT_APP_TOKEN as string;

interface MyKnownError {
  errorMessage: string;
}
interface MyKnowSuccess {
  successMessage: string;
}

//일자별 목록 조회
export const getDateTodo: any = createAsyncThunk(
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
      console.log("확인", data.data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue({ errorMessage: "에러가 발생" });
    }
  }
);

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
    console.log("카테삭제", payload);
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
    console.log("카테수정", payload);
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
    console.log("투두추가", payload);
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
      return thunkAPI.fulfillWithValue(payload);
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
export const deleteTodo: any = createAsyncThunk(
  "todo/deleteTodo",
  async (payload: any, thunkAPI) => {
    console.log("투두삭제", payload);
    try {
      const data = await axios.delete(
        `http://43.200.115.252/api/v1/todoLists/${payload.todoId}`,
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
};

export const getDateTodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDateTodo.fulfilled, (state, action) => {
        state.dateTodos = action.payload;
        console.log("해당날짜", action.payload);
      })
      .addCase(postCategory.fulfilled, (state, action) => {
        state.dateTodos.push(action.payload);
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.dateTodos = state.dateTodos.filter(
          (list) => list.categoryId !== action.payload
        );
      })
      .addCase(_editCategory.fulfilled, (state, action) => {
        state.dateTodos = state.dateTodos.map((list) =>
          list.categoryId === action.payload.categoryId
            ? { ...list, categoryName: action.payload.categoryName }
            : list
        );
      })
      .addCase(postTodo.fulfilled, (state, action) => {
        console.log("투두리듀서", action.payload);
        state.dateTodos.map((list) =>
          list.categoryId === action.payload.categoryId
            ? list.todoList.push(action.payload)
            : list
        );
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.dateTodos.map((list) =>
          list.categoryId === action.payload.categoryId
            ? list.todoList.filter(
                (item: any) => item.categoryId !== action.payload.todoId
              )
            : list
        );
      });
  },
});

export default getDateTodoSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface todoList {
  selectDate : any,
  content : any,
  id : string,
}

export const postTodo : any = createAsyncThunk(
  "todo/postTodo",
  async (payload:todoList, thunkAPI) => {
    try {
      const data = await axios.post("http://54.180.79.105/api/v1/todoLists",{
        selectDate: payload.selectDate,
        content: payload.content,
      })
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
  return thunkAPI.rejectWithValue(error);
}
  }
);

export const getTodo : any = createAsyncThunk(
  "todo/getTodo",
  async (payload : any, thunkAPI) => {
    try {
      const data : any = await axios.get("http://54.180.79.105/api/v1/todoLists/months",
      {
        // selectDate: payload
      })
    return thunkAPI.fulfillWithValue(data.data.data);
  } catch (error) {
  return thunkAPI.rejectWithValue(error);
}
  }
);

export const deleteTodo : any = createAsyncThunk(
  "todo/deleteTodo",
  async (id, thunkAPI) => {
    try {
      const data = await axios.delete(`http://localhost:3001/todos/${id}`);
    return thunkAPI.fulfillWithValue(id);
  } catch (error) {
  return thunkAPI.rejectWithValue(error);
}
  }
);

export const editTodo : any = createAsyncThunk(
  "todo/editTodo",
  async (payload : todoList, thunkAPI) => {
    try {
      const data = await axios.patch(`http://localhost:3001/todos/${payload.id}`,{
        'content':`${payload.content}`,
      })
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
    return thunkAPI.rejectWithValue(error);
  };
  }
);
export const doneTodo : any = createAsyncThunk(
  "todo/doneTodo",
  async (id, thunkAPI) => {
    try {
      const data = await axios.patch(`http://localhost:3001/todos/${id}`,{
        'success': true,
      })
      return thunkAPI.fulfillWithValue(id);
    } catch (error) {
    return thunkAPI.rejectWithValue(error);
  };
  }
);

const initialState = {
  todos: [],
};


export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
  // [postTodo.fulfilled]: (state, action) => {
  //   state.todos.push(action.payload)
  // },
  // [getTodo.fulfilled]: (state, action) => {
  //   state.todos = action.payload
  // },
  // [deleteTodo.fulfilled]: (state, action) => {  
  //   state.todos = state.todos.filter((item) => item.id !== action.payload)
  // },
  // [editTodo.fulfilled]: (state, action) => {
  //   state.todos =  state.todos.map((item) => item.id === action.payload.id 
  //   ? { ...item, content: action.payload.content} 
  //   : item)
  // },
  // [doneTodo.fulfilled]: (state, action) => {
  //   state.todos =  state.todos.map((item) => item.id === action.payload
  //   ? { ...item, success: true} 
  //   : item)
  // },
},
}
);


export default todoSlice.reducer; 
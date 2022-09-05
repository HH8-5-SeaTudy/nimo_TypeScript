import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface category {
  content : any,
}

export const postCategory : any = createAsyncThunk(
  "category/postCategory",
  async (payload:category, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/category",{
        categoryName: payload
      })
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
  return thunkAPI.rejectWithValue(error);
}
  }
);


const initialState = {
  category: [],
};


export const categorySlice = createSlice({
  name: "category",
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


export default categorySlice.reducer; 
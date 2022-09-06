import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface category {
  content : any,
}

export const postCategory : any = createAsyncThunk(
  "category/postCategory",
  async (payload:category, thunkAPI) => {
    console.log('axios',payload)
    try {
      const data = await axios.post("http://54.180.79.105/api/v1/todoCategories",{
        categoryName: payload
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrbXNAZ21haWwuY29tIiwiaXNzIjoiaGFuZ2hhZTVfc2VhdHVkeSIsImV4cCI6MTY2MjU1MDQzMX0.pl0AJBZaI_IJHqEfvfHKmlgaVqahoXHa1b4sGv6fSXQ'
        },
      })
    return thunkAPI.fulfillWithValue(data.data.data);
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
  },
  extraReducers: {
      // [postCategory.fulfilled]: (state, action) => {
      //   {action.payload && state.category.push(action.payload)};
      //   console.log(action.payload)
      // }
    } 
}
);


export default categorySlice.reducer; 
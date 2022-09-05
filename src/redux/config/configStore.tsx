import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todos";
import timer from "../modules/timer";
import category from '../modules/category';
import updateDate from '../modules/updateDate';

const store = configureStore({
  reducer: {
    todos,
    timer,
    category,
    updateDate,
  } 
});
export type RootState = ReturnType<typeof store.getState>
export default store;

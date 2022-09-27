import { configureStore } from "@reduxjs/toolkit";
import dateTodos from "../modules/dateTodos";
import timer from "../modules/timer";
import updateDate from "../modules/searchDate";
import userData from "../modules/userData";
import socket from "../modules/socket";
import dday from "../modules/dday";
import fishList from "../modules/fishList";
import rank from '../modules/rank';
const store = configureStore({
  reducer: {
    updateDate,
    dateTodos,
    timer,
    socket,
    userData,
    dday,
    fishList,
    rank,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

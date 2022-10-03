import { configureStore } from "@reduxjs/toolkit";
import dateTodos from "../modules/dateTodos";
import timer from "../modules/timer";
import updateDate from "../modules/searchDate";
import userData from "../modules/userData";
import socket from "../modules/socket";
import dday from "../modules/dday";
import fishList from "../modules/fishList";
import rank from "../modules/rank";
import fishPosition from "../modules/fishPosition";
import chatCount from "../modules/chatCount";
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
    fishPosition,
    chatCount,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

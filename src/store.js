import { configureStore } from "@reduxjs/toolkit";
import configurationReducer from "./redux/slices/configurationSlice";
import userReducer from "./redux/slices/userSlice";
import todolistReducer from "./redux/slices/todolistSlice";

export const store = configureStore({
  reducer: {
    configuration: configurationReducer,
    user: userReducer,
    todolist: todolistReducer,
  },
});

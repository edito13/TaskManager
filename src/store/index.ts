import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./Tasks/tasks.reducer";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const InitialState: DataTask = {
  tasks: [],
  totalPages: 0,
};

const Tasks = createSlice({
  name: "Tasks",
  initialState: InitialState,
  reducers: {
    addTasks(state, { payload }: PayloadAction<DataTask>) {
      const { tasks, totalPages } = payload;
      return { ...state, tasks, totalPages };
    },
  },
});

export default Tasks.reducer;

export const { addTasks } = Tasks.actions;

export const selectAllTasks = (state: any) => state.tasks as DataTask;

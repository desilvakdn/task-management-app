import { ModifiedTaskInfoTypes, TaskInfoTypes } from "@/types/taskInfo";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { store } from "../store/store";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";

interface InitialStateType {
  tasks: ModifiedTaskInfoTypes[];
  viewTaskId: string;
}

const initialState: InitialStateType = getFromLocalStorage("tasks") || {
  tasks: [],
  viewTaskId: "",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    pushTask(state, action: PayloadAction<ModifiedTaskInfoTypes>) {
      const existingTask = state.tasks.find(
        (task) => task.id === action.payload.id,
      );
      const existingTaskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id,
      );
      if (existingTask) {
        state.tasks[existingTaskIndex] = action.payload;
      } else {
        state.tasks.push(action.payload);
      }
      setToLocalStorage("tasks", state);
    },
    pushViewTask(state, action: PayloadAction<string>) {
      if (state.viewTaskId === action.payload) return;
      state.viewTaskId = action.payload;
      setToLocalStorage("tasks", state);
    },
    deleteTask(state, action: PayloadAction<string>) {
      const existingTask = state.tasks.find(
        (task) => task.id === action.payload,
      );
      if (!existingTask) return;
      state.tasks = [...state.tasks].filter(
        (task) => task.id !== action.payload,
      );
      setToLocalStorage("tasks", state);
    },
  },
});

export const addTask = (task: ModifiedTaskInfoTypes) => {
  store.dispatch(pushTask(task));
};

export const addViewTask = (taskId: string) => {
  store.dispatch(pushViewTask(taskId));
};

export const removeTask = (taskId: string) => {
  store.dispatch(deleteTask(taskId));
};

export const { pushTask, pushViewTask, deleteTask } = tasksSlice.actions;
export default tasksSlice;

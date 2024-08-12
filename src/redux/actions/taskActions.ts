import { ModifiedTaskInfoTypes } from "@/types/taskInfo";
import { store } from "../store/store";
import {
  pushTask,
  pushViewTask,
  deleteTask,
  sortTasks,
  taskIntoContainer,
} from "../slices/tasksSlice";

export const addTask = (task: ModifiedTaskInfoTypes) => {
  store.dispatch(pushTask(task));
};

export const addViewTask = (taskId: number) => {
  store.dispatch(pushViewTask(taskId));
};

export const removeTask = (taskId: number) => {
  store.dispatch(deleteTask(taskId));
};

export const arrangeTasks = (active: number, over: number) => {
  store.dispatch(sortTasks({ active, over }));
};

export const arrangeTaskIntoContainer = (active: number, over: number) => {
  store.dispatch(taskIntoContainer({ active, over }));
};

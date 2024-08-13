import { ModifiedTaskInfoTypes } from "@/types/taskInfo";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import { arrayMove } from "@dnd-kit/sortable";

interface InitialStateType {
  tasks: ModifiedTaskInfoTypes[];
  viewTaskId: number;
}

const taskRecord = getFromLocalStorage("tasks");
const modifiedTaskLocalStorage = taskRecord && {
  ...taskRecord,
  viewTaskId: -1,
};

const initialState: InitialStateType = modifiedTaskLocalStorage || {
  tasks: [],
  viewTaskId: -1,
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
    pushViewTask(state, action: PayloadAction<number>) {
      if (state.viewTaskId === action.payload) return;
      state.viewTaskId = action.payload;
      setToLocalStorage("tasks", state);
    },
    deleteTask(state, action: PayloadAction<number>) {
      const existingTask = state.tasks.find(
        (task) => task.id === action.payload,
      );
      if (!existingTask) return;
      state.tasks = [...state.tasks].filter(
        (task) => task.id !== action.payload,
      );
      setToLocalStorage("tasks", state);
    },
    sortTasks(
      state,
      action: PayloadAction<{
        active: number;
        over: number;
      }>,
    ) {
      const { active, over } = action.payload;

      const activeitemIndex = state.tasks.findIndex(
        (task) => task.id === active,
      );
      const overitemIndex = state.tasks.findIndex((task) => task.id === over);
      const overItem = state.tasks.find((task) => task.id === over);
      if (!overItem) return;

      let TasksListCopy = [...state.tasks];
      TasksListCopy = arrayMove(TasksListCopy, activeitemIndex, overitemIndex);

      const newActiveitemIndex = TasksListCopy.findIndex(
        (task) => task.id === active,
      );
      TasksListCopy[newActiveitemIndex].categoryId = overItem?.categoryId;

      state.tasks = TasksListCopy;

      setToLocalStorage("tasks", state);
    },
    taskIntoContainer(
      state,
      action: PayloadAction<{
        active: number;
        over: number;
      }>,
    ) {
      const { active, over } = action.payload;
      const activeTask = state.tasks.find((task) => task.id === active);
      if (!activeTask) return;

      activeTask.categoryId = over;

      const filtered_ = state.tasks.filter((task) => task.id !== active);
      filtered_.push(activeTask);
      state.tasks = filtered_;

      setToLocalStorage("tasks", state);
    },
  },
});

export const {
  pushTask,
  pushViewTask,
  deleteTask,
  sortTasks,
  taskIntoContainer,
} = tasksSlice.actions;

export default tasksSlice.reducer;

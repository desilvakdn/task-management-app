import { ModifiedTaskInfoTypes, TaskInfoTypes } from "@/types/taskInfo";
import { store } from "../store/store";

export const getTasks = (): TaskInfoTypes[] => {
  const currentState = store.getState();
  return currentState.tasks.tasks.map((task: ModifiedTaskInfoTypes) => ({
    ...task,
    deadline: task.deadline ? new Date(task.deadline) : undefined,
  })) as TaskInfoTypes[];
};

export const getViewTaskId = (): number => {
  const currentState = store.getState();
  return currentState.tasks.viewTaskId;
};

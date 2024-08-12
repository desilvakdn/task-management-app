import { AssigneeType } from "./addTaskConfigTypes";

export interface TaskInfoTypes {
  id: string;
  task: string;
  categoryId: number;
  priority: string;
  assignee: AssigneeType;
  deadline: Date | undefined;
  description?: string;
}

export type ModifiedTaskInfoTypes = Omit<TaskInfoTypes, "deadline"> & {
  deadline: Date | string | undefined;
};

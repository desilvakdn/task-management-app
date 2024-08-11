import { AssigneeType } from "./addTaskConfigTypes";

export interface TaskInfoTypes {
  categoryId?: number;
  task: string;
  priority: string;
  assignee: AssigneeType;
  deadline: Date | undefined;
  description?: string;
}

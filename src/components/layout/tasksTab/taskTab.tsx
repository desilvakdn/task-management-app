"use client";
import React, { useEffect, useState } from "react";
import TaskColumn from "./taskColumn";
import { TaskInfoTypes } from "@/types/taskInfo";
import TaskSideBar from "./taskSideBar";
import { getTasks } from "@/redux/slices/tasksSlice";
import TASKCATEGORIES from "@/lib/taskCategories";

const TaskTab = () => {
  return (
    <div className="flex w-full flex-grow flex-row gap-4">
      <TaskColumn categoryId={TASKCATEGORIES.todo} />
      <TaskColumn categoryId={TASKCATEGORIES.inprogress} />
      <TaskColumn categoryId={TASKCATEGORIES.completed} />
      <TaskSideBar />
    </div>
  );
};

export default TaskTab;

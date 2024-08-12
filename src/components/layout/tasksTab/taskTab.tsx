"use client";
import React from "react";
import TaskColumn from "./taskColumn";
import TaskSideBar from "./taskSidebar/taskSideBar";
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

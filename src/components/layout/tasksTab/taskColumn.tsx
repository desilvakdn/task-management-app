"use client";
import useDataStore from "@/hooks/useDataStore";
import { Add } from "iconsax-react";
import React, { useCallback, useEffect, useState } from "react";
import AddTask from "./addTask";
import TaskCard from "./taskCard";
import { TaskInfoTypes } from "@/types/taskInfo";
import { twMerge } from "tailwind-merge";
import TASKCATEGORIES from "@/lib/taskCategories";
import { getTasks } from "@/redux/selectors/taskSelector";

interface TaskColumnTypes {
  categoryId: number;
}

const TaskColumn = ({ categoryId }: TaskColumnTypes) => {
  const [Tasks, setTasks] = useState<TaskInfoTypes[]>([]);

  const fetchTasks = useCallback(() => {
    const tasksFromStore = getTasks();
    const relaventTasks = tasksFromStore.filter(
      (task) => task.categoryId === categoryId,
    );
    setTasks(relaventTasks);
  }, [categoryId]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const { Config, updateConfig } = useDataStore({
    isNeedToAddTask: false,
  });

  return (
    <div className="w-full min-w-[364px] rounded-xl border-1 border-dashed border-dark-100 bg-whiteBg p-4">
      <div
        id="column-header"
        className="flex w-full items-center justify-between rounded-lg bg-white p-4"
      >
        <div className="flex flex-row items-center gap-3">
          <div
            className={twMerge(
              "aspect-square w-5 rounded-full border-2",
              categoryId === TASKCATEGORIES.todo && "border-warning-500",
              categoryId === TASKCATEGORIES.inprogress && "border-info-500",
              categoryId === TASKCATEGORIES.completed && "border-success-500",
            )}
          ></div>
          <label htmlFor="" className="b2 font-semibold">
            {categoryId === TASKCATEGORIES.todo && "To Do"}
            {categoryId === TASKCATEGORIES.inprogress && "In Progress"}
            {categoryId === TASKCATEGORIES.completed && "Completed"}
          </label>
          <span className="c1 flex aspect-square w-5 items-center justify-center rounded-full bg-primary-50 px-[6px] py-[2px] font-semibold text-primary-500">
            {Tasks.length}
          </span>
        </div>
        <label
          htmlFor=""
          className="cursor-pointer"
          onClick={updateConfig.bind(
            this,
            "isNeedToAddTask",
            !Config.isNeedToAddTask,
          )}
        >
          <Add />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {Tasks.map((task, index) => (
          <TaskCard key={index} TaskInfo={task} />
        ))}

        {Config.isNeedToAddTask && (
          <AddTask
            close={updateConfig.bind(this, "isNeedToAddTask", false)}
            categoryId={categoryId}
            onTaskAdded={fetchTasks}
          />
        )}
        {!Config.isNeedToAddTask && (
          <button
            onClick={updateConfig.bind(this, "isNeedToAddTask", true)}
            className="b1 mt- flex w-full flex-row items-center justify-center gap-3 p-3 font-semibold text-dark-300"
          >
            <Add />
            Add Task
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskColumn;

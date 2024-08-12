"use client";
import useDataStore from "@/hooks/useDataStore";
import { Add } from "iconsax-react";
import React from "react";
import AddTask from "./addTask";
import { twMerge } from "tailwind-merge";
import TASKCATEGORIES from "@/lib/taskCategories";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface TaskColumnTypes {
  categoryId: number;
  taskLength: number;
  children: React.ReactNode;
}

const TaskColumn = ({ categoryId, children, taskLength }: TaskColumnTypes) => {
  const { Config, updateConfig } = useDataStore({
    isNeedToAddTask: false,
  });

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: categoryId,
    data: {
      type: "container",
    },
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className="w-full min-w-[364px] rounded-xl border-1 border-dashed border-dark-100 bg-whiteBg p-4"
    >
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
            {taskLength}
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
        {children}

        {Config.isNeedToAddTask && (
          <AddTask
            close={updateConfig.bind(this, "isNeedToAddTask", false)}
            categoryId={categoryId}
            onTaskAdded={() => {}}
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

"use client";
import useDataStore from "@/hooks/useDataStore";
import { Add } from "iconsax-react";
import React from "react";
import AddTask from "./addTask";
import { twMerge } from "tailwind-merge";
import TASKCATEGORIES from "@/lib/taskCategories";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { AnimatePresence, motion } from "framer-motion";

interface TaskColumnTypes {
  categoryId: number;
  taskLength: number;
  children: React.ReactNode;
}

const TaskColumn = ({ categoryId, children, taskLength }: TaskColumnTypes) => {
  const { Config, updateConfig } = useDataStore({
    isNeedToAddTask: false,
  });

  const { setNodeRef, transform, transition } = useSortable({
    id: categoryId,
    data: {
      type: "container",
    },
  });

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
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
          className={twMerge(
            "cursor-pointer transition-all",
            Config.isNeedToAddTask && "rotate-45",
          )}
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

        <AnimatePresence>
          {Config.isNeedToAddTask && (
            <AddTask
              close={updateConfig.bind(this, "isNeedToAddTask", false)}
              categoryId={categoryId}
              onTaskAdded={() => {}}
            />
          )}
          {!Config.isNeedToAddTask && (
            <motion.button
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ delay: (taskLength - 1) * 0.2 }}
              onClick={updateConfig.bind(this, "isNeedToAddTask", true)}
              className="b1 mt- flex w-full flex-row items-center justify-center gap-3 p-3 font-semibold text-dark-300"
            >
              <Add />
              Add Task
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default TaskColumn;

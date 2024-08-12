import TASKCATEGORIES from "@/lib/taskCategories";
import React from "react";
import { twMerge } from "tailwind-merge";

const TaskStatus = ({ categoryId }: { categoryId: number }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <span
        className={twMerge(
          "aspect-square w-[18px] rounded-full border-2 border-solid border-warning-500",
          categoryId === TASKCATEGORIES.inprogress && "border-info-500",
          categoryId === TASKCATEGORIES.completed && "border-success-500",
        )}
      />
      <span className="b1 font-semibold">
        {categoryId === TASKCATEGORIES.todo && "Todo"}
        {categoryId === TASKCATEGORIES.inprogress && "Inprogress"}
        {categoryId === TASKCATEGORIES.completed && "Completed"}
      </span>
    </div>
  );
};

export default TaskStatus;

"use client";

import React from "react";
import { ModifiedTaskInfoTypes } from "@/types/taskInfo";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { UniqueIdentifier } from "@dnd-kit/core";
import { addViewTask } from "@/redux/actions/taskActions";
import TaskHeader from "./taskHeader";
import TaskAttributes from "./taskAttributes";
import TaskRemainTime from "./taskRemainingTime";
import { Category } from "iconsax-react";

const TaskCard = ({
  id,
  TaskInfo,
}: {
  id: UniqueIdentifier;
  TaskInfo: ModifiedTaskInfoTypes;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
      data: {
        type: "item",
      },
    });

  const addTaskView = () => {
    const taskId = TaskInfo.id;
    addViewTask(taskId);
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      onClick={addTaskView}
      className="group relative flex w-full cursor-default flex-col rounded-xl border-1 border-dark-50 bg-white text-dark-300"
    >
      <TaskHeader TaskInfo={TaskInfo} />
      {TaskInfo.description && (
        <div className="p-4 text-justify">
          <p>{TaskInfo.description?.slice(0, 110)}...</p>
        </div>
      )}
      <TaskAttributes TaskInfo={TaskInfo} />
      <TaskRemainTime TaskInfo={TaskInfo} />
      <button
        {...listeners}
        className="absolute -right-1 -top-1 rounded-lg border-1 border-solid border-dark-50 bg-white px-2 py-1 text-dark-300 opacity-0 transition-all hover:text-primary-400 group-hover:opacity-100"
      >
        <Category size={18} variant="Bold" />
      </button>
    </div>
  );
};

export default TaskCard;

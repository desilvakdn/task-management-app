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
import { motion } from "framer-motion";

const TaskCard = ({
  id,
  TaskInfo,
  animeDelay,
}: {
  id: UniqueIdentifier;
  TaskInfo: ModifiedTaskInfoTypes;
  animeDelay?: number;
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
    <motion.div
      initial={{ scale: 0, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0.5 }}
      transition={{ delay: (animeDelay || 0) * 0.2 }}
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
    </motion.div>
  );
};

export default TaskCard;

"use client";
import formatDate from "@/utils/formatDate";
import { Clock, TickCircle, User } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Calendar } from "iconsax-react";
import { TaskInfoTypes } from "@/types/taskInfo";
import remainingDays from "@/utils/remainingDays";
import { addViewTask } from "@/redux/slices/tasksSlice";

const TaskCard = ({ TaskInfo }: { TaskInfo: TaskInfoTypes }) => {
  const addTaskView = () => {
    const taskId = TaskInfo.id;
    addViewTask(taskId);
  };

  return (
    <div
      onClick={addTaskView}
      className="flex w-full cursor-pointer flex-col rounded-xl border-1 border-dark-50 bg-white text-dark-300"
    >
      <TaskHeader TaskInfo={TaskInfo} />
      {TaskInfo.description && (
        <div className="p-4 text-justify">
          <p>{TaskInfo.description?.slice(0, 110)}...</p>
        </div>
      )}
      <TaskAttributes TaskInfo={TaskInfo} />
      <TaskRemainTime TaskInfo={TaskInfo} />
    </div>
  );
};

const TaskHeader = ({ TaskInfo }: { TaskInfo: TaskInfoTypes }) => {
  return (
    <div className="relative flex flex-row items-center gap-3 border-b-1 border-dark-50 p-4">
      {TaskInfo.categoryId === 2 ? (
        <span className="text-success-500">
          <TickCircle variant="Bold" />
        </span>
      ) : (
        <TickCircle />
      )}
      <label htmlFor="" className="b2 font-semibold text-dark-500">
        {TaskInfo.task}
      </label>
    </div>
  );
};

const TaskAttributes = ({ TaskInfo }: { TaskInfo: TaskInfoTypes }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex flex-row items-center gap-2">
        <div
          className={twMerge(
            "relative flex aspect-square w-12 items-center justify-center overflow-hidden rounded-full border-1 border-dashed border-dark-100",
            TaskInfo.assignee.profilePic && "border-none",
          )}
        >
          {TaskInfo.assignee.profilePic ? (
            <Image
              src={TaskInfo.assignee.profilePic}
              alt="profile-pic"
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <User />
          )}
        </div>
        <label
          className={twMerge(
            "flex h-fit items-center justify-center rounded-full border-1 border-dashed border-dark-100",
            !TaskInfo.deadline && "aspect-square w-12",
            TaskInfo.deadline &&
              "c1 whitespace-nowrap rounded-sm border-none bg-primary-50 px-[6px] py-1 font-medium text-primary-500",
          )}
        >
          {TaskInfo.deadline ? formatDate(TaskInfo.deadline) : <Calendar />}
        </label>
      </div>

      <label
        className={twMerge(
          "c1 rounded border-1 border-dashed border-dark-50 px-[6px] py-1",
          TaskInfo.priority &&
            "flex flex-row items-center gap-2 px-[6px] py-1 font-semibold",
          TaskInfo.priority === "Low" && "bg-info-50 text-info-500",
          TaskInfo.priority === "Medium" && "bg-warning-50-50 text-warning-500",
          TaskInfo.priority === "High" && "bg-danger-50 text-danger-500",
        )}
      >
        {TaskInfo.priority ? (
          <>
            <span
              className={twMerge(
                "aspect-square w-[6px] rounded-full bg-danger-500",
                TaskInfo.priority === "Low" && "bg-info-500",
                TaskInfo.priority === "Medium" && "bg-warning-500",
                TaskInfo.priority === "High" && "bg-danger-500",
              )}
            />
            {TaskInfo.priority}
          </>
        ) : (
          "Select Priority"
        )}
      </label>
    </div>
  );
};

const TaskRemainTime = ({ TaskInfo }: { TaskInfo: TaskInfoTypes }) => {
  const differenceInDays = remainingDays(TaskInfo.deadline);

  const remainingDaysAnnouncement = () => {
    if (differenceInDays > 0)
      return `Should complete within ${differenceInDays} days`;
    else if (differenceInDays === 0) return "Should complete within today";
    else if (differenceInDays < -1)
      return `Should've completed within ${Math.abs(differenceInDays)} days ago`;

    return "Should've completed yesterday";
  };

  return (
    <div
      className={twMerge(
        "flex w-full flex-row items-center gap-2 border-t-1 border-solid border-dark-50 p-4 font-medium text-dark-400",
        differenceInDays < 0 && "text-danger-500",
      )}
    >
      <Clock size={16} />
      <span className="c1">{remainingDaysAnnouncement()}</span>
    </div>
  );
};

export default TaskCard;

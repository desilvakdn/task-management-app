import { ModifiedTaskInfoTypes } from "@/types/taskInfo";
import formatDate from "@/utils/formatDate";
import { Calendar, User } from "iconsax-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const TaskAttributes = ({ TaskInfo }: { TaskInfo: ModifiedTaskInfoTypes }) => {
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

export default TaskAttributes;

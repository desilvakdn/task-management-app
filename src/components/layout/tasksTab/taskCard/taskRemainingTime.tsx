import { ModifiedTaskInfoTypes } from "@/types/taskInfo";
import remainingDays from "@/utils/remainingDays";
import { Clock } from "iconsax-react";
import { twMerge } from "tailwind-merge";

const TaskRemainTime = ({ TaskInfo }: { TaskInfo: ModifiedTaskInfoTypes }) => {
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

export default TaskRemainTime;

import { ModifiedTaskInfoTypes } from "@/types/taskInfo";
import { TickCircle } from "iconsax-react";

const TaskHeader = ({ TaskInfo }: { TaskInfo: ModifiedTaskInfoTypes }) => {
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

export default TaskHeader;

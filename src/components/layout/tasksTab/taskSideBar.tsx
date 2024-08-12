import FloatingSideBar from "@/components/ui/wrappers/floatingSideBar";
import { TickCircle } from "iconsax-react";
import React from "react";

const TaskSideBar = () => {
  return (
    <FloatingSideBar>
      <div className="flex h-full w-full flex-col">
        <div className="border-b-1 flex w-full flex-row items-center justify-between border-solid border-dark-50 p-4 px-6">
          <button className="b1 border-1 flex flex-row items-center gap-2 rounded-lg border-solid border-dark-50 p-2 font-medium">
            <span>
              <TickCircle />
            </span>
            <span>Mark Complete</span>
          </button>
        </div>
      </div>
    </FloatingSideBar>
  );
};

export default TaskSideBar;

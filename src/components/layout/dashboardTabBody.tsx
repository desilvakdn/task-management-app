import React from "react";
import TaskTab from "./tasksTab/taskTab";

const DashboardTabBody = () => {
  return (
    <div className="flex flex-grow flex-row justify-between gap-4 px-4 py-8">
      <TaskTab />
    </div>
  );
};

export default DashboardTabBody;

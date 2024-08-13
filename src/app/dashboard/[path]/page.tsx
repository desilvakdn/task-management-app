import DashboardError from "@/components/layout/error/dashboardError";
import TaskTab from "@/components/layout/tasksTab/taskTab";
import React from "react";

const Page = ({ params }: { params: { path: string } }) => {
  const renderComponent = () => {
    switch (params.path) {
      case "tasks":
        return <TaskTab />;
      default:
        return <DashboardError />;
    }
  };

  return <>{renderComponent()}</>;
};

export default Page;

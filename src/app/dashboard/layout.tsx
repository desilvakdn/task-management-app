import DashboardTabBody from "@/components/layout/dashboardTabBody";
import LeftSideBar from "@/components/layout/leftSideBar/leftSideBar";
import TopNavBar from "@/components/layout/topNavBar";
import React from "react";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-full w-full flex-col">
      <TopNavBar />
      <div className="flex flex-grow flex-row">
        <LeftSideBar />
        <DashboardTabBody>{children}</DashboardTabBody>
      </div>
    </main>
  );
};

export default Dashboard;

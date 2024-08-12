import DashboardTabBody from "@/components/layout/dashboardTabBody";
import LeftSideBar from "@/components/layout/leftSideBar/leftSideBar";
import TopNavBar from "@/components/layout/topNavBar";
import React from "react";

const Dashboard = () => {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <TopNavBar />
      <div className="flex flex-grow flex-row">
        <LeftSideBar />
        <DashboardTabBody />
      </div>
    </main>
  );
};

export default Dashboard;

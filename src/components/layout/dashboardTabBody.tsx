"use client";
import React from "react";

const DashboardTabBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-grow basis-0 flex-row justify-between gap-4 px-4 py-8">
      {children}
    </div>
  );
};

export default DashboardTabBody;

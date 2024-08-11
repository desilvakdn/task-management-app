"use client";
import React from "react";
import LeftSideBarButton from "./button";
import {
  Diagram,
  Home2,
  LampCharge,
  NotificationBing,
  Setting2,
  TaskSquare,
} from "iconsax-react";
import useDataStore from "@/hooks/useDataStore";

const LeftSideBar = () => {
  const { Config, updateConfig } = useDataStore({
    selectedButtonId: -1,
  });

  const buttonAction = (id: number) => {
    updateConfig("selectedButtonId", id);
  };

  return (
    <div className="border-r-1 flex min-w-[276px] flex-col gap-4 border-dark-50 bg-white px-6 py-12">
      <LeftSideBarButton
        labelText="Home"
        icon={<Home2 />}
        onClick={buttonAction.bind(this, 0)}
        isSelected={Config.selectedButtonId === 0}
      />
      <LeftSideBarButton
        labelText="Tasks"
        icon={<TaskSquare />}
        onClick={buttonAction.bind(this, 1)}
        isSelected={Config.selectedButtonId === 1}
      />
      <LeftSideBarButton
        labelText="Report"
        icon={<Diagram />}
        onClick={buttonAction.bind(this, 2)}
        isSelected={Config.selectedButtonId === 2}
      />
      <LeftSideBarButton
        labelText="Insights"
        icon={<LampCharge />}
        onClick={buttonAction.bind(this, 3)}
        isSelected={Config.selectedButtonId === 3}
      />
      <LeftSideBarButton
        labelText="Inbox"
        icon={<NotificationBing />}
        onClick={buttonAction.bind(this, 4)}
        isSelected={Config.selectedButtonId === 4}
      />
      <LeftSideBarButton
        labelText="Settings"
        icon={<Setting2 />}
        onClick={buttonAction.bind(this, 5)}
        isSelected={Config.selectedButtonId === 5}
      />
    </div>
  );
};

export default LeftSideBar;

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
import { usePathname, useRouter } from "next/navigation";
import ROUTES from "@/lib/routes";

const LeftSideBar = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const { Config, updateConfig } = useDataStore({
    selectedButtonId: -1,
  });

  const buttonAction = (id: number) => {
    updateConfig("selectedButtonId", id);
    if (id === 0) return push(ROUTES.dashboard);
    if (id === 1) return push(ROUTES.tasks);
    if (id === 2) return push(ROUTES.report);
    if (id === 3) return push(ROUTES.insights);
    if (id === 4) return push(ROUTES.inbox);
    if (id === 5) return push(ROUTES.settings);
  };

  const isSelectedBasedOnUrl = (id: number): boolean => {
    const routes = [
      { id: 1, path: ROUTES.tasks },
      { id: 2, path: ROUTES.report },
      { id: 3, path: ROUTES.insights },
      { id: 4, path: ROUTES.inbox },
      { id: 5, path: ROUTES.settings },
    ];

    const matchingRoute = routes.find((route) => route.id === id);
    if (matchingRoute && pathname.includes(matchingRoute.path)) {
      return true;
    }

    if (
      id === Config.selectedButtonId ||
      (id === 0 && pathname === ROUTES.dashboard)
    )
      return true;

    return false;
  };

  return (
    <div className="flex min-w-[276px] flex-col gap-4 border-r-1 border-dark-50 bg-white px-6 py-12">
      <LeftSideBarButton
        labelText="Home"
        icon={<Home2 />}
        onClick={buttonAction.bind(this, 0)}
        isSelected={isSelectedBasedOnUrl(0)}
      />
      <LeftSideBarButton
        labelText="Tasks"
        icon={<TaskSquare />}
        onClick={buttonAction.bind(this, 1)}
        isSelected={isSelectedBasedOnUrl(1)}
      />
      <LeftSideBarButton
        labelText="Report"
        icon={<Diagram />}
        onClick={buttonAction.bind(this, 2)}
        isSelected={isSelectedBasedOnUrl(2)}
      />
      <LeftSideBarButton
        labelText="Insights"
        icon={<LampCharge />}
        onClick={buttonAction.bind(this, 3)}
        isSelected={isSelectedBasedOnUrl(3)}
      />
      <LeftSideBarButton
        labelText="Inbox"
        icon={<NotificationBing />}
        onClick={buttonAction.bind(this, 4)}
        isSelected={isSelectedBasedOnUrl(4)}
      />
      <LeftSideBarButton
        labelText="Settings"
        icon={<Setting2 />}
        onClick={buttonAction.bind(this, 5)}
        isSelected={isSelectedBasedOnUrl(5)}
      />
    </div>
  );
};

export default LeftSideBar;

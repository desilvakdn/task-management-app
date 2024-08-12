"use client";
import FloatingWrapper from "@/components/ui/wrappers/floatingWrapper";
import useDataStore from "@/hooks/useDataStore";
import addTaskConfig from "@/lib/addTaskConfig";
import { User } from "iconsax-react";
import React from "react";
import DropDownItem from "./dropDownItem";
import { AssigneeType } from "@/types/addTaskConfigTypes";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface SelectAssigneeTypes extends React.HTMLAttributes<HTMLDivElement> {
  currentAssignee?: AssigneeType;
  changeassignee: (assignee: AssigneeType) => void;
  children?: React.ReactNode;
}

const SelectAssignee = ({
  currentAssignee,
  changeassignee,
  children,
}: SelectAssigneeTypes) => {
  const { Config, updateConfig } = useDataStore({
    isAssigneePopOpen: false,
  });
  return (
    <div className="relative">
      {children && (
        <div onClick={updateConfig.bind(this, "isAssigneePopOpen", true)}>
          {children}
        </div>
      )}
      {!children && (
        <button
          type="button"
          onClick={updateConfig.bind(this, "isAssigneePopOpen", true)}
          className={twMerge(
            "relative flex aspect-square w-12 items-center justify-center overflow-hidden rounded-full border-1 border-dashed border-dark-100",
            currentAssignee?.profilePic && "border-none",
          )}
        >
          {currentAssignee?.profilePic ? (
            <Image
              src={currentAssignee.profilePic}
              alt="profile-pic"
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <User />
          )}
        </button>
      )}
      {Config.isAssigneePopOpen && (
        <FloatingWrapper
          close={updateConfig.bind(this, "isAssigneePopOpen", false)}
        >
          {addTaskConfig.assignees.map((assignee, index) => (
            <DropDownItem
              onClick={changeassignee.bind(this, assignee)}
              key={index}
              value={assignee.name}
              isSelected={currentAssignee?.profilePic === assignee.profilePic}
              profilePic={assignee.profilePic}
            />
          ))}
        </FloatingWrapper>
      )}
    </div>
  );
};

export default SelectAssignee;

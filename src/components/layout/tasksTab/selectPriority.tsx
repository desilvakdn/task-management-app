"use client";
import FloatingWrapper from "@/components/ui/wrappers/floatingWrapper";
import useDataStore from "@/hooks/useDataStore";
import addTaskConfig from "@/lib/addTaskConfig";
import React from "react";
import { twMerge } from "tailwind-merge";
import DropDownItem from "./dropDownItem";

interface SelectPriorityTypes {
  priority: string;
  changePriorityLevel: (level: string) => void;
  isError?: boolean;
}

const SelectPriority = ({
  priority,
  changePriorityLevel,
  isError,
}: SelectPriorityTypes) => {
  const { Config, updateConfig } = useDataStore({
    isProrityPopOpen: false,
  });
  return (
    <div className="relative">
      <button
        type="button"
        className={twMerge(
          "c1 border-1 rounded border-dashed border-dark-50 px-[6px] py-1",
          priority &&
            "flex flex-row items-center gap-2 px-[6px] py-1 font-semibold",
          priority === "Low" && "bg-success-50 text-success-500",
          priority === "Medium" && "bg-warning-50-50 text-warning-500",
          priority === "High" && "bg-danger-50 text-danger-500",
          isError &&
            "border-solid border-danger-500 bg-danger-50 text-danger-500",
        )}
        onClick={updateConfig.bind(this, "isProrityPopOpen", true)}
      >
        {priority ? (
          <>
            <span
              className={twMerge(
                "aspect-square w-[6px] rounded-full bg-danger-500",
                priority === "Low" && "bg-success-500",
                priority === "Medium" && "bg-warning-500",
                priority === "High" && "bg-danger-500",
              )}
            />
            {priority}
          </>
        ) : (
          "Select Priority"
        )}
      </button>

      {Config.isProrityPopOpen && (
        <FloatingWrapper
          close={updateConfig.bind(this, "isProrityPopOpen", false)}
        >
          {addTaskConfig.priority.map((level, index) => (
            <DropDownItem
              onClick={changePriorityLevel.bind(this, level)}
              key={index}
              value={level}
              isSelected={priority === level}
            />
          ))}
        </FloatingWrapper>
      )}
    </div>
  );
};

export default SelectPriority;

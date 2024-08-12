"use client";
import formatDate from "@/utils/formatDate";
import { CloseCircle } from "iconsax-react";
import React, { useState } from "react";
import SelectDate from "../selectDate";
import { twMerge } from "tailwind-merge";
import { Calendar as CalenderIcon } from "iconsax-react";
import remainingDays from "@/utils/remainingDays";

const DueDate = ({
  date,
  setDeadline,
}: {
  date: Date | undefined;
  setDeadline: (date: Date | undefined) => void;
}) => {
  const remainingDays_ = remainingDays(date);

  return (
    <div className="flex flex-row items-center gap-2">
      {date && (
        <>
          <label
            htmlFor=""
            className={twMerge(
              "b1 font-semibold text-info-500",
              remainingDays_ < 0 && "text-danger-500",
            )}
          >
            {formatDate(date, true)}
          </label>
          <span
            onClick={setDeadline.bind(this, undefined)}
            className="cursor-pointer text-dark-300"
          >
            <CloseCircle />
          </span>
        </>
      )}
      {!date && (
        <SelectDate deadline={date} setDeadline={(date) => setDeadline(date)}>
          <button
            type="button"
            className="flex flex-row items-center gap-2 rounded-[4px] bg-whiteBg p-[6px] text-dark-300"
          >
            <span
              className={twMerge(
                "flex items-center justify-center rounded-full border-1 border-dashed border-dark-100 p-[6px]",
              )}
            >
              <CalenderIcon size={17} />
            </span>
            <span className="b1 font-medium">No due date</span>
          </button>
        </SelectDate>
      )}
    </div>
  );
};

export default DueDate;

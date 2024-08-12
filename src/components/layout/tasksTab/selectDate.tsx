"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar as CalenderIcon } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import formatDate from "@/utils/formatDate";

interface SelectDateTypes {
  deadline: Date | undefined;
  setDeadline: (date: Date | undefined) => void;
  isError?: boolean;
}

const SelectDate = ({ deadline, setDeadline, isError }: SelectDateTypes) => {
  const [date, setDate] = useState<Date | undefined>(deadline);

  useEffect(() => {
    if (date) {
      setDeadline(date);
    }
  }, [date]);

  return (
    <div className="relative flex items-center justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className={twMerge(
              "border-1 flex items-center justify-center rounded-full border-dashed border-dark-100",
              !date && "aspect-square w-12",
              date &&
                "c1 whitespace-nowrap rounded-sm border-none bg-primary-50 px-[6px] py-1 font-medium text-primary-500",
              isError && "border-danger-500 bg-danger-50 text-danger-500",
            )}
          >
            {date ? formatDate(date) : <CalenderIcon />}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SelectDate;

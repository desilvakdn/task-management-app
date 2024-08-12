import { AssigneeType } from "@/types/addTaskConfigTypes";
import { CloseCircle, User } from "iconsax-react";
import React from "react";
import SelectAssignee from "../selectAssignee";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const Assignee = ({
  assignee,
  setAssignee,
}: {
  assignee?: AssigneeType;
  setAssignee: (assignee: AssigneeType) => void;
}) => {
  return (
    <div className="flex flex-row items-center gap-2">
      {assignee?.name && (
        <>
          <div className="relative aspect-square w-6 overflow-hidden rounded-full">
            <Image
              src={assignee.profilePic}
              alt="profile-pic"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <label htmlFor="" className="b1 font-semibold">
            {assignee.name}
          </label>
          <span
            onClick={setAssignee.bind(this, { name: "", profilePic: "" })}
            className="cursor-pointer text-dark-300"
          >
            <CloseCircle />
          </span>
        </>
      )}
      {!assignee?.name && (
        <SelectAssignee changeassignee={setAssignee}>
          <button
            type="button"
            className="flex flex-row items-center gap-2 rounded-[4px] bg-whiteBg p-[6px] text-dark-300"
          >
            <span
              className={twMerge(
                "flex items-center justify-center rounded-full border-1 border-dashed border-dark-100 p-[6px]",
              )}
            >
              <User size={17} />
            </span>
            <span className="b1 font-medium">No assignee</span>
          </button>
        </SelectAssignee>
      )}
    </div>
  );
};

export default Assignee;

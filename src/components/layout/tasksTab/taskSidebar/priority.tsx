import React from "react";
import { ArrowDown2, CloseCircle } from "iconsax-react";
import SelectPriority from "../selectPriority";

const Priority = ({
  priority,
  setPriority,
}: {
  priority?: string;
  setPriority: (level: string) => void;
}) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <SelectPriority priority={priority} changePriorityLevel={setPriority}>
        {!priority ? (
          <button
            type="button"
            className="flex flex-row items-center gap-2 rounded-[4px] bg-whiteBg p-[6px] text-dark-300"
          >
            <span className="b1 font-medium">Set priority</span>
          </button>
        ) : (
          <label className="b1 flex cursor-pointer flex-row items-center gap-2 p-[6px] font-semibold">
            {priority}
            <ArrowDown2 size={20} />
          </label>
        )}
      </SelectPriority>
      {priority && (
        <>
          <span
            onClick={setPriority.bind(this, "")}
            className="cursor-pointer text-dark-300"
          >
            <CloseCircle />
          </span>
        </>
      )}
    </div>
  );
};

export default Priority;

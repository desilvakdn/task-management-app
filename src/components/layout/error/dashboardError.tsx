import { EmojiSad } from "iconsax-react";
import React from "react";

const DashboardError = () => {
  return (
    <div className="flex w-full items-center justify-center gap-2 opacity-50">
      <span>
        <EmojiSad size={40} />
      </span>
      <span className="b1 font-semibold">
        Not Available. Please Click On Tasks Tab
      </span>
    </div>
  );
};

export default DashboardError;

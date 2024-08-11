import React from "react";
import { SearchNormal1 } from "iconsax-react";

const Input = () => {
  return (
    <div className="relative">
      <span>
        <SearchNormal1 size={20} />
      </span>
      <input
        type="text"
        name=""
        id=""
        className="rounded-lg border-[1px] border-solid border-dark-50"
      />
    </div>
  );
};

export { Input };

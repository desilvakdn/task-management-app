import React from "react";
import { SearchNormal1 } from "iconsax-react";
import { twMerge } from "tailwind-merge";

interface InputType extends React.HTMLAttributes<HTMLInputElement> {
  type?: string;
  icon?: React.ReactNode;
  [key: string]: any;
}

const Input: React.FC<InputType> = ({ icon, type, ...props }) => {
  return (
    <div className="relative">
      {icon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</span>
      )}
      <input
        type={type ? type : "text"}
        name=""
        id=""
        className={twMerge(
          "b1 min-w-[408px] rounded-lg border-[1px] border-solid border-dark-50 p-3 font-normal",
          icon && "pl-10",
        )}
        {...props}
      />
    </div>
  );
};

export { Input };

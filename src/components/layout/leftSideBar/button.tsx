import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  labelText: string;
  icon: React.ReactNode;
  isSelected?: boolean;
}

const LeftSideBarButton: React.FC<ButtonType> = ({
  labelText,
  icon,
  isSelected,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        "border-1 flex w-full cursor-pointer flex-row items-center justify-start gap-2 rounded-lg border-whiteBg bg-whiteBg p-3 font-semibold text-dark-400 transition-all",
        isSelected && "border-1 border-primary-100 bg-primary-500 text-white",
      )}
      {...props}
    >
      {icon}
      <span>{labelText}</span>
    </button>
  );
};

export default LeftSideBarButton;

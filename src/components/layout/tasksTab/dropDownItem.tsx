import { TickCircle } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface DropDownItemTypes extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  isSelected?: boolean;
  profilePic?: string;
}

const DropDownItem: React.FC<DropDownItemTypes> = ({
  value,
  isSelected,
  profilePic,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        "flex min-w-[124px] cursor-pointer flex-row items-center justify-between gap-2 whitespace-nowrap rounded p-[6px]",
        isSelected && "bg-primary-50",
      )}
      {...props}
    >
      <div className="flex flex-row items-center gap-2">
        {profilePic && (
          <div className="relative aspect-square w-6 overflow-hidden rounded-full">
            <Image
              src={profilePic}
              alt="profile-pic"
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <span>{value}</span>
      </div>
      {isSelected && <TickCircle size={16} />}
    </div>
  );
};

export default DropDownItem;

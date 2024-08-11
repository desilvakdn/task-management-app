import { HambergerMenu, SearchNormal1 } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { Input } from "../common/input";

const TopNavBar = () => {
  return (
    <div className="flex h-[72px] w-full flex-row items-center border-b border-l-0 border-r-0 border-t-0 border-solid border-dark-50 bg-white">
      <div className="relative flex h-full w-[70px] items-center justify-center gap-2 md:w-[276px]">
        <Image
          src={"/images/code94labsLogo.png"}
          alt="code94labs-logo"
          width={40}
          height={40}
        />
        <label htmlFor="" className="hidden text-[20px] font-semibold md:block">
          Code94 Labs
        </label>
      </div>
      <div className="flex h-full flex-grow items-center justify-between p-4">
        <Input icon={<SearchNormal1 />} placeholder={"Search Tasks"} />
        <div className="shadow-custom-shadow border-1 flex flex-row items-center gap-2 rounded-full border-whiteBg bg-white px-2 py-1">
          <span>
            <HambergerMenu />
          </span>
          <div className="border-1 relative flex aspect-square w-8 items-center justify-center rounded-full border-dark-50 bg-white">
            <Image
              src={"/images/code94labsLogo.png"}
              alt="code94labs-logo"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;

import { HambergerMenu, SearchNormal1 } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { TextField } from "../common/inputTextField";
import Link from "next/link";

const TopNavBar = () => {
  return (
    <div className="flex h-[72px] w-full flex-row items-center border-b border-l-0 border-r-0 border-t-0 border-solid border-dark-50 bg-white">
      <Link href={"/"}>
        <div className="relative flex h-full w-[70px] cursor-pointer items-center justify-center gap-2 md:w-[276px]">
          <Image
            src={"/images/verified.png"}
            alt="verified-logo"
            width={40}
            height={40}
          />
          <label
            htmlFor=""
            className="hidden cursor-pointer text-[20px] font-semibold md:block"
          >
            Task Manger
          </label>
        </div>
      </Link>
      <div className="flex h-full flex-grow items-center justify-between p-4">
        <TextField icon={<SearchNormal1 />} placeholder={"Search Tasks"} />
        <div className="flex flex-row items-center gap-2 rounded-full border-1 border-whiteBg bg-white px-2 py-1 shadow-custom-shadow">
          <span>
            <HambergerMenu />
          </span>
          <div className="relative flex aspect-square w-8 items-center justify-center rounded-full border-1 border-dark-50 bg-white">
            <Image
              src={"/images/verified.png"}
              alt="verified-logo"
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

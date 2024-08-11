import { Input } from "@/components/common/input";
import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <div className="flex h-[72px] w-full flex-row items-center border-b border-l-0 border-r-0 border-t-0 border-solid border-dark-50 bg-white">
        <div className="flex h-full w-[276px] items-center justify-center gap-2">
          <Image
            src={"/images/code94labsLogo.png"}
            alt="code94labs-logo"
            width={40}
            height={40}
          />
          <label htmlFor="" className="text-[20px] font-semibold">
            Code94 Labs
          </label>
        </div>
        <div className="flex h-full flex-grow items-center justify-between">
          <Input />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

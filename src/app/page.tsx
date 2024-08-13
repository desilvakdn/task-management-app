"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Hierarchy } from "iconsax-react";
import { useRouter } from "next/navigation";
import ROUTES from "@/lib/routes";

export default function Home() {
  const { push } = useRouter();
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-4 p-24 shadow-custom-shadow">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ease: "backInOut" }}
        className="relative flex aspect-square w-20 items-center justify-center rounded-xl bg-white"
      >
        <Image
          src={"/images/code94labsLogo.png"}
          alt="code94labs-logo"
          width={43}
          height={43}
        />
      </motion.div>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", delay: 0.2 }}
        className="font-bold text-dark-400"
      >
        TASK MANAGEMENT APP
      </motion.h1>
      <motion.label
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", delay: 0.4 }}
        htmlFor=""
      >
        Never Miss A Single Task To Do
      </motion.label>
      <div className="flex flex-row items-center gap-2">
        <button
          onClick={() =>
            window.open(
              "https://github.com/desilvakdn/task-management-app.git",
              "_blank",
            )
          }
          className="flex flex-row items-center gap-3 rounded-lg bg-dark-600 px-3 py-2 text-whiteBg transition-all hover:scale-[1.03] hover:bg-primary-400"
        >
          <span>
            <Hierarchy />
          </span>
          <span>Git Repo</span>
        </button>
        <button
          onClick={() => push(ROUTES.tasks)}
          className="flex flex-row items-center gap-3 rounded-lg bg-dark-600 px-3 py-2 text-whiteBg transition-all hover:scale-[1.03] hover:bg-primary-400"
        >
          <span>
            <ArrowRight />
          </span>
          <span>Dashboard</span>
        </button>
      </div>

      <motion.div
        initial={{ top: -1100, opacity: 0 }}
        animate={{ top: -1500, opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 0.7, duration: 0.8 }}
        className="absolute -top-[1500px] z-[-1] aspect-square w-full rounded-full bg-gradient-to-b from-dark-200 to-transparent"
      ></motion.div>

      <label
        htmlFor=""
        className="absolute bottom-2 right-2 flex flex-row items-center gap-2 rounded-lg bg-white px-3 py-1 shadow-custom-shadow"
      >
        <span className="c1">By</span>
        <span className="c1 font-semibold">Code94 Labs</span>
      </label>
    </main>
  );
}

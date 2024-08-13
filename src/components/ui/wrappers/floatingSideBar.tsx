"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

interface FloatingSideBarTypes {
  children: React.ReactNode;
  close: () => void;
}

const FloatingSideBar = ({
  children,
  close,
  ...props
}: FloatingSideBarTypes) => {
  const ref_ = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 top-0 bg-dark-600/40">
        <motion.div
          initial={{ right: -600 }}
          animate={{ right: 0 }}
          exit={{ right: -(ref_.current?.clientWidth || 0) - 30 }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          ref={ref_}
          className="absolute bottom-0 top-0 z-10 border-l-1 border-solid border-dark-50 bg-white"
          {...props}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default FloatingSideBar;

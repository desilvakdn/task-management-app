"use client";
import React from "react";
import { motion } from "framer-motion";
import useOutsideClick from "@/hooks/useOutsideClick";

interface FloatingModelTypes {
  children: React.ReactNode;
  close: () => void;
}

const FloatingModel = ({ children, close, ...props }: FloatingModelTypes) => {
  const ref_ = useOutsideClick(close);
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center bg-dark-600/40">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          ref={ref_}
          className="rounded-xl border-l-1 border-solid border-dark-50 bg-white p-6"
          {...props}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default FloatingModel;

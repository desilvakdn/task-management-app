"use client";
import useOutsideClick from "@/hooks/useOutsideClick";
import React from "react";

interface FloatingSideBarTypes extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  close: () => void;
}

const FloatingSideBar = ({
  children,
  close,
  ...props
}: FloatingSideBarTypes) => {
  return (
    <div
      className="absolute bottom-0 right-0 top-0 z-10 border-l-1 border-solid border-dark-50 bg-white"
      {...props}
    >
      {children}
    </div>
  );
};

export default FloatingSideBar;

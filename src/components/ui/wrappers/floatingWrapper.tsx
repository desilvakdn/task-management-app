"use client";
import useOutsideClick from "@/hooks/useOutsideClick";
import React from "react";

const FloatingWrapper = ({
  children,
  close,
}: {
  children: React.ReactNode;
  close: () => void;
}) => {
  const ref = useOutsideClick(close);

  const wrappedChildren = React.Children.map(children, (child) => (
    <div className="cursor-pointer" onClick={close}>
      {child}
    </div>
  ));

  return (
    <div
      ref={ref}
      className="b1 absolute z-10 mt-1 flex flex-col gap-1 rounded-lg border-1 border-solid border-dark-50 bg-white p-3 font-medium"
      style={{ top: `calc(100% + 6px)` }}
    >
      {wrappedChildren}
    </div>
  );
};

export default FloatingWrapper;

import React from "react";

const FloatingSideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-l-1 absolute bottom-0 right-0 top-0 z-10 border-solid border-dark-50 bg-white">
      {children}
    </div>
  );
};

export default FloatingSideBar;

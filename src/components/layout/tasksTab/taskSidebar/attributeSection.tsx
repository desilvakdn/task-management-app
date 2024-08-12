import React from "react";

interface TaskSideBarAttributeSectionTypes
  extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  attributename: string;
  children: React.ReactNode;
  isError?: boolean | undefined | null;
}

const TaskSideBarAttributeSection = ({
  icon,
  attributename,
  children,
  isError,
  ...props
}: TaskSideBarAttributeSectionTypes) => {
  return (
    <div id="attribute-section" className="flex w-full flex-row" {...props}>
      <label
        htmlFor=""
        className="b1 flex min-w-48 flex-row items-center gap-3 whitespace-nowrap font-medium text-dark-300"
      >
        {icon}
        {attributename}
        {isError && (
          <span className="c1 bg-danger-50 px-1 font-semibold text-danger-500">
            Required
          </span>
        )}
      </label>
      <div className="w-full flex-grow flex-row justify-between">
        {children}
      </div>
    </div>
  );
};

export default TaskSideBarAttributeSection;

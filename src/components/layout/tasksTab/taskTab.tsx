import React from "react";
import TaskColumn from "./taskColumn";
import { TaskInfoTypes } from "@/types/taskInfo";
import TaskSideBar from "./taskSideBar";

const TaskTab = () => {
  const Tasks: TaskInfoTypes[] = [
    {
      categoryId: 2,
      task: "Optimize Database Queries",
      priority: "Medium",
      assignee: {
        name: "Liam Johnson",
        profilePic: "/images/profilePics/liam-johnson.jpg",
      },
      deadline: new Date("2024-08-22"),
      description:
        "Review and optimize database queries to improve application performance. Identify and resolve any slow-running queries.",
    },
    {
      categoryId: 0,
      task: "Update Project Documentation",
      priority: "Low",
      assignee: {
        name: "Liam Johnson",
        profilePic: "/images/profilePics/liam-johnson.jpg",
      },
      deadline: new Date("2024-09-01"),
      description:
        "Update the project documentation to reflect the latest changes in the application architecture and design patterns. Ensure all diagrams and references are accurate.",
    },
    {
      categoryId: 1,
      task: "Design New Landing Page",
      priority: "High",
      assignee: {
        name: "Liam Johnson",
        profilePic: "/images/profilePics/liam-johnson.jpg",
      },
      deadline: new Date("2024-08-25"),
      description:
        "Create a new design for the company’s landing page. Focus on user experience, responsiveness, and modern design principles.",
    },
    {
      categoryId: 0,
      task: "Prepare for Client Meeting",
      priority: "High",
      assignee: {
        name: "Liam Johnson",
        profilePic: "/images/profilePics/liam-johnson.jpg",
      },
      deadline: new Date("2024-08-20"),
      description:
        "Prepare all necessary materials and presentations for the upcoming client meeting. Focus on key deliverables and project timelines.",
    },
    {
      categoryId: 1,
      task: "Code Review for Feature X",
      priority: "Low",
      assignee: {
        name: "Liam Johnson",
        profilePic: "/images/profilePics/liam-johnson.jpg",
      },
      deadline: new Date("2024-08-18"),
      description:
        "Perform a thorough code review for the newly developed Feature X. Check for code quality, adherence to guidelines, and potential bugs.",
    },
  ];

  return (
    <div className="flex w-full flex-grow flex-row gap-4">
      <TaskColumn categoryId={0} tasks={Tasks} />
      <TaskColumn categoryId={1} tasks={Tasks} />
      <TaskColumn categoryId={2} tasks={Tasks} />
      <TaskSideBar />
    </div>
  );
};

export default TaskTab;

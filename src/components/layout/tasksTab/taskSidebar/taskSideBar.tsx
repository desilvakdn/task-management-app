"use client";
import FloatingSideBar from "@/components/ui/wrappers/floatingSideBar";
import {
  ArrowRight,
  Calendar,
  DocumentText1,
  Flag,
  Record,
  TickCircle,
  Trash,
  User,
} from "iconsax-react";
import React, { useEffect, useState } from "react";
import TaskSideBarAttributeSection from "./attributeSection";
import TaskStatus from "./taskStatus";
import DueDate from "./dueDate";
import Assignee from "./assignee";
import Priority from "./priority";
import Description from "./description";
import { useFormik } from "formik";
import { TaskInfoTypes } from "@/types/taskInfo";
import { addTask, addViewTask, removeTask } from "@/redux/slices/tasksSlice";
import * as Yup from "yup";
import { getTasks } from "@/redux/selectors/taskSelector";
import { AssigneeType } from "@/types/addTaskConfigTypes";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { twMerge } from "tailwind-merge";
import TASKCATEGORIES from "@/lib/taskCategories";

const TaskSideBar = () => {
  const [Task, setTask] = useState<TaskInfoTypes | null>();
  const viewTaskId = useSelector((state: RootState) => state.tasks.viewTaskId);
  const Tasks = useSelector((state: RootState) => state.tasks.tasks);

  useEffect(() => {
    const tasksFromStore = getTasks();
    const selectedTask = tasksFromStore.find((task) => task.id === viewTaskId);
    if (selectedTask) {
      setTask(selectedTask);
    } else {
      setTask(null);
    }
  }, [viewTaskId, Tasks]);

  const formik = useFormik<TaskInfoTypes>({
    initialValues: Task || {
      id: "",
      categoryId: 0,
      task: "",
      priority: "",
      assignee: {
        name: "",
        profilePic: "",
      },
      deadline: undefined,
      description: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      if (!values.deadline) return;
      const dateIsoString = new Date(values.deadline).toISOString();
      addTask({ ...values, deadline: dateIsoString });
    },
    validationSchema: Yup.object({
      task: Yup.string().required("Task name is required"),
      priority: Yup.string().required("Priority is required"),
      assignee: Yup.object({
        name: Yup.string(),
      }),
      deadline: Yup.date().required("Deadline is Required"),
    }),
  });

  useEffect(() => {
    formik.submitForm();
  }, [formik.values]);

  const closeSideBar = () => {
    addViewTask("");
  };

  const markTaskCompleted = () => {
    if (!Task) return;
    if (Task.categoryId === TASKCATEGORIES.completed) return;
    const modifiedTask = { ...Task, categoryId: TASKCATEGORIES.completed };
    const dateIsoString =
      modifiedTask?.deadline && new Date(modifiedTask.deadline).toISOString();
    addTask({ ...modifiedTask, deadline: dateIsoString });
  };

  const deleteTask = () => {
    if (!Task) return;
    console.log("here");
    removeTask(Task.id);
    closeSideBar();
  };

  return (
    <>
      {Task && (
        <FloatingSideBar close={closeSideBar}>
          <div className="flex h-full w-[483px] flex-col">
            <div className="flex w-full flex-row items-center justify-between border-b-1 border-solid border-dark-50 p-4 px-6">
              <button
                type="button"
                onClick={markTaskCompleted}
                className={twMerge(
                  "b1 flex flex-row items-center gap-2 rounded-lg border-1 border-solid border-dark-50 p-2 font-medium",
                  Task.categoryId === TASKCATEGORIES.completed &&
                    "cursor-default bg-whiteBg text-dark-200",
                )}
              >
                <span>
                  <TickCircle />
                </span>
                <span>
                  {Task.categoryId === TASKCATEGORIES.completed
                    ? "Completed"
                    : "Mark Complete"}
                </span>
              </button>
              <div className="flex flex-row items-center gap-4">
                <button onClick={deleteTask}>
                  <Trash />
                </button>
                <button onClick={closeSideBar}>
                  <ArrowRight />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="w-full rounded-lg border-1 border-dark-50 p-6">
                <h3 className="font-semibold">{formik.values.task}</h3>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-7 p-6">
                <TaskSideBarAttributeSection
                  icon={<Record size={20} />}
                  attributename="Status"
                >
                  <TaskStatus categoryId={formik.values.categoryId} />
                </TaskSideBarAttributeSection>
                <TaskSideBarAttributeSection
                  icon={<Calendar size={20} />}
                  attributename="Due Date"
                >
                  <DueDate
                    date={
                      formik.values.deadline && new Date(formik.values.deadline)
                    }
                    setDeadline={(date: Date | undefined) =>
                      formik.setFieldValue("deadline", date || undefined)
                    }
                  />
                </TaskSideBarAttributeSection>
                <TaskSideBarAttributeSection
                  icon={<User size={20} />}
                  attributename="Assignee"
                >
                  <Assignee
                    assignee={formik.values.assignee}
                    setAssignee={(assignee: AssigneeType) =>
                      formik.setFieldValue("assignee", assignee)
                    }
                  />
                </TaskSideBarAttributeSection>
                <TaskSideBarAttributeSection
                  icon={<Flag size={20} />}
                  attributename="Priority"
                >
                  <Priority
                    priority={formik.values.priority}
                    setPriority={(priority: string) =>
                      formik.setFieldValue("priority", priority)
                    }
                  />
                </TaskSideBarAttributeSection>
                <TaskSideBarAttributeSection
                  icon={<DocumentText1 size={20} />}
                  attributename="Description"
                  className="flex flex-col gap-4"
                >
                  <Description
                    description={formik.values.description || ""}
                    changeDescription={(value) =>
                      formik.setFieldValue("description", value)
                    }
                  />
                </TaskSideBarAttributeSection>
              </div>
            </form>
          </div>
        </FloatingSideBar>
      )}
    </>
  );
};

export default TaskSideBar;

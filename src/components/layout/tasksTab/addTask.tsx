"use client";
import { TextField } from "@/components/common/inputTextField";
import useDataStore from "@/hooks/useDataStore";
import { Calendar, TickCircle, User } from "iconsax-react";
import React, { useEffect } from "react";
import SelectPriority from "./selectPriority";
import SelectAssignee from "./selectAssignee";
import { AssigneeType } from "@/types/addTaskConfigTypes";
import { useFormik } from "formik";
import * as Yup from "yup";
import SelectDate from "./selectDate";
import { twMerge } from "tailwind-merge";
import { TaskInfoTypes } from "@/types/taskInfo";

interface AddTaskTypes {
  close: () => void;
}

const AddTask = ({ close }: AddTaskTypes) => {
  const formik = useFormik<TaskInfoTypes>({
    initialValues: {
      task: "",
      priority: "",
      assignee: {
        name: "",
        profilePic: "",
      },
      deadline: undefined,
    },
    onSubmit: (values) => {
      console.log(values);
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

  return (
    <div className="border-1 flex w-full flex-col rounded-xl border-dark-50 bg-white text-dark-300">
      <form onSubmit={formik.handleSubmit}>
        <div className="border-b-1 relative flex flex-row items-center gap-3 border-dark-50 p-4">
          <TickCircle />
          <TextField
            name="task"
            className={twMerge(
              "b2 w-full border-none outline-none",
              formik.values.task && "font-semibold text-dark-500",
            )}
            placeholder="Write Task Name"
            value={formik.values.task}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.task && formik.errors.task ? (
            <label className="shadow-custom-shadow border-1 absolute -top-3 right-2 whitespace-nowrap rounded-md border-solid border-danger-500 bg-danger-50 px-2 text-danger-500">
              {formik.errors.task}
            </label>
          ) : null}
        </div>
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex flex-row gap-2">
            <SelectAssignee
              currentAssignee={formik.values.assignee}
              changeassignee={(assignee: AssigneeType) =>
                formik.setFieldValue("assignee", assignee)
              }
            />
            <SelectDate
              deadline={formik.values.deadline}
              setDeadline={(date: Date | undefined) =>
                formik.setFieldValue("deadline", date || "")
              }
              isError={
                formik.touched.deadline && formik.errors.deadline ? true : false
              }
            />
          </div>
          <SelectPriority
            priority={formik.values.priority}
            changePriorityLevel={(level: string) =>
              formik.setFieldValue("priority", level)
            }
            isError={
              formik.touched.priority && formik.errors.priority ? true : false
            }
          />
        </div>
      </form>
    </div>
  );
};

export default AddTask;

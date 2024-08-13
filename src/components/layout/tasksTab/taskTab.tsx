"use client";
import React, { useEffect, useState } from "react";
import TaskColumn from "./taskColumn";
import TaskSideBar from "./taskSidebar/taskSideBar";
import TASKCATEGORIES from "@/lib/taskCategories";
import { DndContext, DragOverlay, closestCorners } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import useDataStore from "@/hooks/useDataStore";
import TaskCard from "./taskCard/taskCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { ModifiedTaskInfoTypes, TaskInfoTypes } from "@/types/taskInfo";
import useDragAndDrop from "@/hooks/useDragAndDrop";
import { AnimatePresence } from "framer-motion";

const TaskTab = () => {
  const allTasks = useSelector((state: RootState) => state.tasks.tasks);
  const [Tasks, setTasks] = useState<ModifiedTaskInfoTypes[] | []>([]);
  const { Config, updateConfig } = useDataStore({
    activeId: -1,
  });
  const { sensors, handleDragStart, handleDragEnd } = useDragAndDrop(
    Tasks,
    updateConfig,
  );

  useEffect(() => {
    setTasks(allTasks);
  }, [allTasks]);

  const filterTasks = (categoryId: number) => {
    if (!Tasks) return [];
    return Tasks.filter((task_) => task_.categoryId === categoryId);
  };

  return (
    <div className="flex w-full flex-row gap-4">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {Object.values(TASKCATEGORIES).map((categoryId) => (
          <SortableContext
            key={categoryId}
            items={filterTasks(categoryId).map((i) => i.id)}
          >
            <TaskColumn
              key={categoryId}
              categoryId={categoryId}
              taskLength={filterTasks(categoryId).length}
            >
              <AnimatePresence>
                {filterTasks(categoryId).map((task, index) => (
                  <TaskCard
                    id={task.id}
                    key={task.id}
                    TaskInfo={task}
                    animeDelay={index}
                  />
                ))}
              </AnimatePresence>
            </TaskColumn>
          </SortableContext>
        ))}
        <DragOverlay adjustScale={false} style={{ rotate: "-2deg" }}>
          {Config.activeId ? (
            <TaskCard
              id={Config.activeId}
              TaskInfo={
                Tasks.find((i) => i.id === Config.activeId) as TaskInfoTypes
              }
            />
          ) : null}
        </DragOverlay>
      </DndContext>
      <TaskSideBar />
    </div>
  );
};

export default TaskTab;

"use client";
import {
  DragEndEvent,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrangeTaskIntoContainer,
  arrangeTasks,
} from "@/redux/actions/taskActions";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { ModifiedTaskInfoTypes } from "@/types/taskInfo";

const useDragAndDrop = (Tasks: ModifiedTaskInfoTypes[], updateConfig: any) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const { id } = active;
    updateConfig("activeId", id as number);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!active || !over || !Tasks || active.id === over.id) return;

    if (over.data.current?.type === "item") {
      arrangeTasks(active.id as number, over.id as number);
    }

    if (over.data.current?.type === "container") {
      arrangeTaskIntoContainer(active.id as number, over.id as number);
    }

    updateConfig("activeId", -1);
  };

  return { sensors, handleDragStart, handleDragEnd };
};

export default useDragAndDrop;

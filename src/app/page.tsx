"use client";

import { useState, useMemo } from "react";
import TaskHeader from "@/components/KanbanHeader";
import TaskModal from "@/components/TaskModal";
import { Status } from "./types";
import useTasks from "@/hooks/useTasks";
import KanbanColumn from "@/components/KanbanColumn";
import Loading from "./loading";
import Error from "./error";

const statuses: Status[] = ["scheduled", "in-progress", "done"];

const HomePage = () => {
  const {
    tasks,
    isLoading,
    error,
    addTask,
    updateTask,
    deleteTask,
    moveTask,
    getAllTasks,
  } = useTasks();

  const [filterTerm, setFilterTerm] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<any>(null);

  const handleOpenModal = (task = null) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTaskToEdit(null);
  };

  const handleSaveTask = (taskData: any) => {
    if (taskToEdit) {
      updateTask(taskToEdit?.id, taskData);
    } else {
      addTask(taskData);
    }
  };

  const filteredTasks = useMemo(() => {
    if (isLoading) return [];

    if (!filterTerm) return tasks;

    const lowerFilter = filterTerm?.toLowerCase();

    return tasks?.filter((task) => {
      const titleMatch = task?.title?.toLowerCase()?.includes(lowerFilter);
      const descriptionMatch = task?.description
        ?.toLowerCase()
        ?.includes(lowerFilter);
      const assigneeMatch = task?.assignee
        ?.toLowerCase()
        ?.includes(lowerFilter);
      const tagsMatch = task?.tags?.some((tag) =>
        tag?.toLowerCase()?.includes(lowerFilter)
      );
      return titleMatch || assigneeMatch || tagsMatch || descriptionMatch;
    });
  }, [tasks, filterTerm, isLoading]);

  if (isLoading) return Loading();

  if (error) return Error(() => getAllTasks());

  return (
    <main className="mx-auto p-4 max-w-[1280px] ">
      <TaskHeader
        onFilterChange={setFilterTerm}
        onSearchChange={setSearchTerm}
        onAddTask={() => handleOpenModal()}
      />

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
        {statuses?.map((status) => (
          <KanbanColumn
            key={status}
            status={status}
            tasks={filteredTasks?.filter((task) => task?.status === status)}
            highlightTerm={searchTerm}
            onMoveTask={moveTask}
            onEditTask={handleOpenModal}
            onDeleteTask={deleteTask}
          />
        ))}
      </div>

      {isModalOpen && (
        <TaskModal
          task={taskToEdit}
          onClose={handleCloseModal}
          onSave={handleSaveTask}
        />
      )}
    </main>
  );
};

export default HomePage;

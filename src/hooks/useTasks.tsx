"use client";

import { useState, useEffect } from "react";
import { Task, Status } from "../app/types";
import { nanoid } from "nanoid";
import initialTasks from "@/lib/mockData";

const APP_KEY = "kanban-tasks";

const reviveDates = (tasks: any): Task[] => {
  return tasks?.map((task: any) => ({
    ...(task ?? []),
    createdAt: new Date(task?.createdAt),
    dueDate: task?.dueDate ? new Date(task?.dueDate) : undefined,
  }));
};

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllTasks();
  }, []);

  const updateLocalStorage = (updatedTasks: Task[]) => {
    try {
      localStorage.setItem(APP_KEY, JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
    } catch (err) {
      setError("Failed to save tasks.");
      console.error(err);
    }
  };

  const addTask = (taskData: Task) => {
    const newTask: Task = {
      ...taskData,
      id: nanoid(),
      createdAt: new Date(),
      status: "scheduled",
    };
    const updatedTasks = [...tasks, newTask];
    updateLocalStorage(updatedTasks);
  };

  const updateTask = (taskId: string, updatedData: any) => {
    const updatedTasks = tasks?.map((task) =>
      task?.id === taskId ? { ...task, ...updatedData } : task
    );
    updateLocalStorage(updatedTasks);
  };

  const moveTask = (taskId: string, newStatus: Status) => {
    updateTask(taskId, { status: newStatus });
  };

  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks?.filter((task) => task?.id !== taskId);
    updateLocalStorage(updatedTasks);
  };

  const getTaskById = (taskId: string) => {
    return tasks?.find((task) => task?.id === taskId);
  };

  const getTasksByStatus = (status: string) => {
    return tasks?.filter((task) => task?.status?.toLowerCase() === status);
  };

  const getAllTasks = () => {
    try {
      const storedTasks = localStorage.getItem(APP_KEY);
      if (storedTasks) {
        // Parse and convert date strings back to Date objects
        setTasks(reviveDates(JSON.parse(storedTasks)));
      } else {
        // Use initial mock data if no data in local storage
        setTasks(initialTasks);
        localStorage.setItem(APP_KEY, JSON.stringify(initialTasks));
      }
    } catch (err) {
      setError("Failed to load tasks data");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    tasks,
    isLoading,
    error,
    addTask,
    updateTask,
    deleteTask,
    moveTask,
    getTaskById,
    getTasksByStatus,
    getAllTasks,
  };
};

export default useTasks;

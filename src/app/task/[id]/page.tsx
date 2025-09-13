"use client";

import Error from "@/app/error";
import Loading from "@/app/loading";
import NotFound from "@/app/not-found";
import { formatDate, formatDistanceToNow } from "@/app/utils";
import useTasks from "@/hooks/useTasks";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const params = useParams<{ id: string }>();
  const { isLoading, error, getTaskById } = useTasks();

  const task = getTaskById(params.id);

  const priorityColors: any = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800",
  };

  if (isLoading) {
    return Loading();
  }

  if (error) {
    return Error(() => getTaskById(params.id));
  }

  if (!task) {
    return NotFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
      <Link
        href="/"
        className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 mb-6"
      >
        <span>{"<"}</span>
        <span className="ml-1 font-medium">Back to Kanban Board</span>
      </Link>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between md:items-center gap-2 items-center flex-wrap">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 break-words">
            {task?.title}
          </h1>
          <span
            className={`px-3 py-1 text-sm font-semibold rounded-full w-max ${
              priorityColors[task?.priority]
            }`}
          >
            {task?.priority}
          </span>
        </div>

        <div className="flex flex-row items-center justify-start gap-6">
          <div className="flex flex-row gap-0.5 items-center">
            <p className="text-sm font-medium text-gray-500">Status:</p>
            <p className="flex items-center text-gray-800 text-sm">
              {task?.status}
            </p>
          </div>
          <div className="flex flex-row gap-0.5">
            <p className="text-sm font-medium text-gray-500">Assignee:</p>
            <div className="flex items-center">
              {task.assignee ? (
                <>
                  <span className="font-medium text-gray-800 text-sm">
                    {task?.assignee}
                  </span>
                </>
              ) : (
                <span className="text-gray-500">Unassigned</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* Main Description */}
          <div className="md:col-span-2">
            <h2 className="text-base font-semibold text-gray-700 border-b pb-2 mb-2">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
              {task?.description}
            </p>
          </div>

          {/* Metadata Sidebar */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 items-center flex-wrap">
              {task?.tags?.map((tag: any, index: any) => (
                <span
                  key={index}
                  className="w-max bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              className={`flex flex-row items-center ${
                task?.dueDate ? "justify-between" : "justify-end"
              } gap-2 flex-wrap`}
            >
              <div className="flex flex-row items-center gap-1">
                <h3 className="text-xs font-medium text-gray-500">Create at</h3>
                <p className="flex items-center text-gray-800 text-xs">
                  {formatDistanceToNow(task?.createdAt)}
                </p>
              </div>
              {task?.dueDate && (
                <div className="flex flex-row items-center gap-1">
                  <h3 className="text-xs font-medium text-gray-500">Due</h3>
                  <p className="flex items-center text-gray-800 text-xs">
                    {formatDate(task?.dueDate)}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

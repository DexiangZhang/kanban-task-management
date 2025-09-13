"use client";

import { formatDate, formatDistanceToNow } from "@/app/utils";
import { HighlightedText } from "./HighlightedText";
import { useRouter } from "next/navigation";

const TaskCard = ({ task, highlightTerm, onEdit, onDelete }: any) => {
  const priorityColors: any = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800",
  };

  const priorityClass =
    priorityColors[task?.priority] || "bg-gray-100 text-gray-800";

  const router = useRouter();

  const handleDragStart = (e: any) => {
    e?.dataTransfer?.setData("text/plain", task?.id);
  };

  return (
    <div
      className="flex flex-col gap-3 bg-white p-4 rounded-lg shadow-sm mb-4 border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow duration-200 touch-none"
      draggable="true"
      onDragStart={handleDragStart}
      onClick={() => {
        router.push(`/task/${task.id}`);
      }}
    >
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-gray-800 text-sm">
          <HighlightedText text={task?.title} highlight={highlightTerm} />
        </h3>
        <div className="flex gap-2 text-gray-400 text-sm">
          {onEdit && (
            <button
              onClick={(e) => {
                // Add event parameter 'e'
                e.stopPropagation(); // Stop event from bubbling up
                onEdit(task);
              }}
              className="hover:text-blue-500 transition-colors"
              aria-label="Edit task"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          )}
          {onDelete && (
            <button
              onClick={(e) => {
                // Add event parameter 'e'
                e.stopPropagation(); // Stop event from bubbling up
                onDelete(task?.id);
              }}
              className="hover:text-red-500 transition-colors"
              aria-label="Delete task"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      {task?.description && (
        <p className="text-xs text-gray-600">
          <HighlightedText text={task?.description} highlight={highlightTerm} />
        </p>
      )}
      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${priorityClass}`}
        >
          <HighlightedText text={task?.priority} highlight={highlightTerm} />
        </span>
        {task?.tags?.map((tag: any, index: any) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
          >
            <HighlightedText text={tag} highlight={highlightTerm} />
          </span>
        ))}
      </div>
      <div className="text-xs text-gray-500 flex flex-row items-center justify-between gap-2 flex-wrap">
        <span className="font-medium text-gray-700">
          By:{" "}
          <HighlightedText text={task?.assignee} highlight={highlightTerm} />
        </span>
        {task?.dueDate && (
          <span className=" font-medium text-xs text-gray-500">
            Due: {formatDate(task?.dueDate)}
          </span>
        )}
      </div>

      <span className=" font-medium text-xs text-gray-500">
        Created at{" "}
        {task?.createdAt ? formatDistanceToNow(task?.createdAt) : "N/A"}
      </span>
    </div>
  );
};

export default TaskCard;

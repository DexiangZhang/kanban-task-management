"use client";

import { useRouter } from "next/navigation";
import TaskCard from "./TaskCard";

const statusConfig: any = {
  scheduled: { title: "Scheduled", color: "border-gray-400" },
  "in-progress": { title: "In Progress", color: "border-orange-400" },
  done: { title: "Done", color: "border-green-500" },
};

const KanbanColumn = ({
  status,
  tasks,
  highlightTerm,
  onMoveTask,
  onEditTask,
  onDeleteTask,
}: any) => {
  const { title, color } = statusConfig[status];

  const router = useRouter();

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    const taskId = e?.dataTransfer?.getData("text/plain");
    onMoveTask(taskId, status);
  };

  return (
    <div
      className="w-full md:w-1/3 flex flex-col py-4 "
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div
        className={`bg-[#f5f4f4] shadow-md pb-2 rounded-tr-lg rounded-tl-lg border-b-4 p-4 ${color}`}
      >
        <h2
          onClick={() => {
            router.push(
              `/status/${
                title?.toLowerCase() === "in progress"
                  ? "progress"
                  : title?.toLowerCase()
              }`
            );
          }}
          className="text-lg font-semibold text-gray-700 flex items-center cursor-pointer"
        >
          {title}
          <span className="ml-2 bg-gray-200 text-gray-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            {tasks?.length}
          </span>
        </h2>
      </div>
      <div className="mt-4 flex-grow min-h-[200px]">
        {tasks?.length > 0 ? (
          tasks?.map((task: any) => (
            <TaskCard
              key={task.id}
              task={task}
              highlightTerm={highlightTerm}
              onEdit={onEditTask}
              onDelete={onDeleteTask}
            />
          ))
        ) : (
          <div className="flex items-center justify-center px-2 h-full max-h-[190px] text-gray-400 rounded-lg shadow-sm border border-gray-200 text-center text-base">
            No tasks assigned to this column
          </div>
        )}
      </div>
    </div>
  );
};

export default KanbanColumn;

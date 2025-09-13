"use client";

import Error from "@/app/error";
import Loading from "@/app/loading";
import NotFound from "@/app/not-found";
import TaskCard from "@/components/TaskCard";
import useTasks from "@/hooks/useTasks";
import Link from "next/link";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams<{ status: string }>();
  const { isLoading, error, getTasksByStatus } = useTasks();

  let statusKey =
    params?.status === "progress" ? "in-progress" : params?.status;

  const tasks = getTasksByStatus(statusKey);

  const priorityColors: any = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800",
  };

  const priorityBorderColors = {
    low: "border-l-blue-500",
    medium: "border-l-yellow-500",
    high: "border-l-orange-500",
  };

  if (isLoading) {
    return Loading();
  }

  if (error) {
    return Error(() => getTasksByStatus(params?.status));
  }

  if (!tasks) {
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

      <div className="mt-4 flex-grow min-h-[200px]">
        {tasks?.length > 0 ? (
          tasks?.map((task: any) => (
            <TaskCard
              key={task.id}
              task={task}
              highlightTerm={""}
              onEdit={null}
              onDelete={null}
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-full min-h-[300px] text-gray-400 rounded-lg shadow-sm border border-gray-200 text-center text-base">
            No tasks currently in the {statusKey} status
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

"use client";

import { Priority, Status } from "@/app/types";
import { formatDate } from "@/app/utils";
import { useState } from "react";

const TaskModal = ({ task, onClose, onSave }: any) => {
  const statuses: Status[] = ["scheduled", "in-progress", "done"];
  const priorities: Priority[] = ["low", "medium", "high"];

  const [formData, setFormData] = useState({
    title: task?.title || "",
    description: task?.description || "",
    priority: task?.priority || "medium",
    assignee: task?.assignee || "",
    tags: task?.tags ? task?.tags?.join(", ") : "",
    dueDate: task?.dueDate ? formatDate(task?.dueDate) : "",
    status: task?.status || "scheduled",
  });

  const handleChange = (e: any) => {
    const { name, value } = e?.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const taskData = {
      ...formData,
      tags: formData?.tags
        ?.split(",")
        ?.map((tag: any) => tag?.trim())
        ?.filter((tag: String) => tag),
      dueDate: formData?.dueDate ? new Date(formData?.dueDate) : null,
      createdAt: task?.createdAt || new Date(),
    };

    console.log("taskData", taskData);
    onSave(taskData);
    onClose();
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-md w-11/12 md:w-2/4 shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-4">
          {task ? "Edit Task" : "Add New Task"}
        </h2>
        <form onSubmit={handleSubmit} className="">
          <div className="space-y-4 sm:max-h-full max-h-[450px] overflow-auto">
            <div>
              <label className="flex text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={formData?.title}
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="flex text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData?.description}
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="flex text-gray-700">Assignee</label>
              <input
                type="text"
                name="assignee"
                value={formData?.assignee}
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="flex text-gray-700">Priority</label>
              <select
                name="priority"
                value={formData?.priority}
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
              >
                {priorities?.map((priority, index) => (
                  <option key={index} value={priority}>
                    {priority}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="flex text-gray-700">Status</label>
              <select
                name="status"
                value={formData?.status}
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
              >
                {statuses?.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="flex text-gray-700">
                Tags (comma separated)
              </label>
              <input
                type="text"
                name="tags"
                value={formData?.tags}
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="flex text-gray-700">Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={formData?.dueDate}
                onChange={handleChange}
                className="mt-1 w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {task ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;

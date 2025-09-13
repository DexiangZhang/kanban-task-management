"use client";

const KanbanHeader = ({ onFilterChange, onSearchChange, onAddTask }: any) => {
  return (
    <div className="w-full mb-6 flex flex-col gap-4">
      <div className="w-full flex gap-4 flex-row justify-between items-center flex-wrap ">
        <h1 className="text-3xl font-bold text-gray-800">
          Kanban Task Manager
        </h1>
        <button
          onClick={onAddTask}
          className="w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add New Task
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <input
          type="text"
          placeholder="Filter by title, assignee, tags or description..."
          onChange={(e) => onFilterChange(e?.target?.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Search text..."
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default KanbanHeader;

import React from "react";

const TaskCount = () => {
  return (
    <>
      <div className="flex justify-between gap-5 mt-10">
        <div className="px-6 py-9 w-[45%] bg-red-400 rounded-xl">
          <h2 className="text-3xl font-semibold">0</h2>
          <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className="p-10 w-[45%] bg-orange-400 rounded-xl">
          <h2 className="text-3xl font-semibold">0</h2>
          <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className="p-10 w-[45%] bg-red-400 rounded-xl">
          <h2 className="text-3xl font-semibold">0</h2>
          <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className="p-10 w-[45%] bg-red-400 rounded-xl">
          <h2 className="text-3xl font-semibold">0</h2>
          <h3 className="text-xl font-medium">New Task</h3>
        </div>
      </div>
    </>
  );
};
export default TaskCount;

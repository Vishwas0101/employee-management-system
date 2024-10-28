import React from "react";
import Header from "../sections/Header";
import TaskCount from "../sections/TaskCount";

const EmployeeDashboard = () => {
  return (
    <>
      <div className="p-10 bg-[#1c1c1c] h-screen">
        <Header />
        <TaskCount />
      </div>
    </>
  );
};
export default EmployeeDashboard;

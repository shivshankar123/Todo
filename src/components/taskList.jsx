import React from "react";

function TaskList({ tasks }) {
  return (
    <ul className="list-none pt-4 ">
      {tasks.map((task, index) => (
        <li key={index} className="p-3 mb-2 bg-blue-70 rounded-lg shadow-sm">
          {task}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

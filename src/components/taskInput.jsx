import React, { useState } from "react";

function TaskInput({ onAddTask }) {
  const [taskInput, setTaskInput] = useState(""); // State to manage the input field value

  const handleInputChange = (e) => {
    setTaskInput(e.target.value); // Update state with the current input value
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      onAddTask(taskInput); // Call the callback function passed as a prop with the new task
      setTaskInput(""); // Clear the input field
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Enter a new task"
        className="input input-bordered w-full"
      />
      <button onClick={handleAddTask} className="btn btn-primary w-full">
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;

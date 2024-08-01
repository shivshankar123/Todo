import React, { useState } from "react";
import TaskInput from "../components/taskInput";
import TaskList from "../components/taskList";
//import Header from "../components/header";

function Home() {
  const [tasks, setTasks] = useState([]); // State to manage the list of tasks

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-black-1000 mb-6">To-Do List</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default Home;

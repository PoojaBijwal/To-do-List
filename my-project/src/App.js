import React, { useState } from "react";
import "./index.css";
import TodoItems from "./components/TodoItems";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const addTask = () => {
    if (taskInput.trim() !== "") {
      if (editIndex !== -1) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = taskInput;
        setTasks(updatedTasks);
        setTaskInput("");
        setEditIndex(-1);
      } else {
        setTasks([...tasks, taskInput]);
        setTaskInput("");
      }
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setTaskInput(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold">To-Do App</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="w-3" onClick={addTask}>
        {editIndex !== -1 ? "Update Task" : "Add Task"}
      </button>

      <TodoItems tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}

export default App;

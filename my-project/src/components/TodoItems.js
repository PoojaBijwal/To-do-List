import React from "react";

const TodoItems = ({ tasks, deleteTask, editTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => deleteTask(index)}>Delete</button>
          <button onClick={() => editTask(index)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoItems;

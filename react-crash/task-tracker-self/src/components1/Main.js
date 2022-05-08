import React from "react";
import Task from "./Task";

const Main = ({ tasks, onDelete }) => {
  return (
    <main>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
        // task={task} ??
      ))}
    </main>
  );
};

export default Main;

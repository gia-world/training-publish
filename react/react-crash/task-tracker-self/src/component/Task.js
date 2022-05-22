import React from "react";

const Task = ({ task, setTasks }) => {
  return (
    <div className="task">
      <h3>
        {task.name}
        <span
          onClick={() => {
            setTasks((prev) => {
              return prev.filter((prevTask) => task.id !== prevTask.id);
            });
          }}
        >
          ❌
        </span>
      </h3>
    </div>
  );
};

export default Task;

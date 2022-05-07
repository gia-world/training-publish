import React from "react";

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {task.text}
        <span onClick={() => onDelete(task.id)}>❌</span>
      </h3>
    </div>
  );
};

export default Task;

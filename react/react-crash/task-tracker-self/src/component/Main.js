import React from "react";
import Task from "./Task";

const Main = ({ tasks, setTasks }) => {
  return (
    <main>
      {/* length>0? <Task/> : 'No Tasks' */}
      {tasks.length > 0
        ? tasks.map((task, i) => (
            <Task key={i} task={task} setTasks={setTasks}></Task>
          ))
        : "No Tasks"}
    </main>
  );
};

export default Main;

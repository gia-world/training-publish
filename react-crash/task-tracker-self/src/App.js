import React, { useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";

const App = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="container">
      <Header setTasks={setTasks} />
      <Main tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;

import React, { FC, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./component/Todos";

export type TodoType = {
  id: number;
  text: string;
  done: boolean;
};
export type TodosType = TodoType[];
function App<FC>() {
  const [todos, setTodos] = useState<TodosType>([
    {
      id: 0,
      text: "d",
      done: false,
    },
  ]);
  const appRef = useRef<HTMLDivElement>(null);
  const addTodo = (id: number, text: string) => {
    setTodos((prev) => [...todos, { id: id, text: text, done: true }]);
  };

  const a = appRef.current?.classList.contains;
  return (
    <div className="App" ref={appRef}>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;

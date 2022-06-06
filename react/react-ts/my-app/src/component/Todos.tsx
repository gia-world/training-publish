import React, { FC } from "react";
import { TodosType } from "../App";

interface Params {
  todos: TodosType;
}

const Todos: FC<Params> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div>{todo.text}</div>
      ))}
    </div>
  );
};

export default Todos;

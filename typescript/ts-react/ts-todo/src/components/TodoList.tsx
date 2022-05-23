import React from "react";
import { FC } from "react";
import { Todos } from "src/container/TodosContainer";

interface Params {
  todos: Todos;
}
const TodoList: FC<Params> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <strong>{todo.text}</strong>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

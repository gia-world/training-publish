import React, { useState } from "react";
import TodoList from "src/components/TodoList";
//rface
export type Todo = {
  text: string | null;
  done: boolean;
  id: number | null;
  // name: string;
};
export type Todos = Todo[];
const TodosContainer = () => {
  const [todos, setTodos] = useState<Todos>([
    { text: "a1", done: true, id: 0 },
    {
      text: "a2",
      done: false,
      id: 1,
    },
  ]);

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosContainer;

import React from "react";
import Todo from "./Todo";
import useTodo from '../hooks/use-todo';

const TodoList = () => {
  const { todos } = useTodo();
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map(todo => <Todo key={`todo-${todo.id}`} todo={todo} />)
        : "No todos, yay!"}
    </ul>
  );
};

export default TodoList;

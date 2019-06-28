import React from "react";
import cx from "classnames";
import useTodo from "../hooks/use-todo";

const Todo = ({ todo }) => {
  const { toggleTodo } = useTodo();
  return (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
      {todo && todo.completed ? "👌" : "👋"}
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo.content}
      </span>
    </li>
  );
};

export default Todo;

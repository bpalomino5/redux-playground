import React, { useState } from "react";
import useTodo from "../hooks/use-todo";

const AddTodo = () => {
  const { addTodo } = useTodo();
  const [input, setInput] = useState("");

  const updateInput = ({ target: { value } }) => {
    setInput(value);
  };

  const handleAddTodo = () => {
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <input onChange={updateInput} value={input} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;

import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = ({ addTodo }) => {
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

export default connect(
  null,
  { addTodo }
)(AddTodo);

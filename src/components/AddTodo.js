import React, { useState } from "react";
import PropTypes from "prop-types";

import "./AddTodo.css";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");

  const inputChangeHandler = (e) =>
    setTitle(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTodo(title);

    setTitle("");
  };

  return (
    <form className="add-todo" onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Something to finish..."
        value={title}
        onChange={inputChangeHandler}
      />
      <input
        type="submit"
        value="Add"
        className="btn btn-blue"
      />
    </form>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;

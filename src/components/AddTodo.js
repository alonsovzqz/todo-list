import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = (props) => {
  const [title, setTitle] = useState({
    title: "",
  });

  const inputChangeHandler = (e) =>
    setTitle({ [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTodo(title.title);

    setTitle({ title: "" });
  };

  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="title"
        style={{ flex: "10", padding: "5px" }}
        placeholder="Add Todo..."
        value={title.title}
        onChange={inputChangeHandler}
      />
      <input
        type="submit"
        value="submit"
        className="btn"
        style={{ flex: "1" }}
      />
    </form>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;

import React, { Component } from "react";
import PropTypes from "prop-types";

import "./TodoItem.css";

const TodoItem = (props) => {
  const { id, title, completed } = props.todo;
  return (
    <div class={`todo-item ${completed && "completed"}`}>
      <p>
        <input
          type="checkbox"
          onChange={props.markComplete.bind(this, id)}
        />{" "}
        {title}
        <button class="btn-item" onClick={props.delTodo.bind(this, id)}>
          &times;
        </button>
      </p>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;

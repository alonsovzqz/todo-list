import React from "react";
import PropTypes from "prop-types";

import "./TodoItem.css";

const TodoItem = (props) => {
  const { id, title, completed } = props.todo;
  return (
    <div className={`todo-item ${completed && "completed"}`}>
      <p>
        <input type="checkbox" onChange={() => props.markComplete(id)} />{" "}
        {title}
        <button className="btn-item" onClick={() => props.delTodo(id)}>
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

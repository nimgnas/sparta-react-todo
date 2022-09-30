import React from "react";
import "./style.css";

function Todo({ todo, onDeleteHandler, isDoneToggle }) {
  const { title, body, id, isDone } = todo;

  return (
    <div className="todo-container">
      <div>
        <h2>{title}</h2>
        <div>{body}</div>
      </div>
      <div className="button-group">
        <button
          className="todo-delete-button button"
          onClick={() => onDeleteHandler(id)}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => isDoneToggle(id)}
        >
          {isDone ? "되돌리기" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;

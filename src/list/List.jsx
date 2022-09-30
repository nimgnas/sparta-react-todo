import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ todos, onDeleteHandler, isDoneToggle }) {
  return (
    <div className="list-container">
      <h2 className="list-title">Working🔥</h2>
      <div className="list-wrapper">
        {todos.map(
          (todo) =>
            !todo.isDone && (
              <Todo
                todo={todo}
                key={todo.id}
                onDeleteHandler={onDeleteHandler}
                isDoneToggle={isDoneToggle}
              />
            )
        )}
      </div>
      <h2 className="list-title">Done!!</h2>
      <div className="list-wrapper">
        {todos.map(
          (todo) =>
            todo.isDone && (
              <Todo
                todo={todo}
                key={todo.id}
                onDeleteHandler={onDeleteHandler}
                isDoneToggle={isDoneToggle}
              />
            )
        )}
      </div>
    </div>
  );
}

export default List;

import React from "react";

const Todos = ({ todo, i }) => {
  return (
    <div>
      <div
        className={todo.completed ? "bg-green-300 mb-3" : "bg-red-300 mb-3"}
        key={i}
      >
        {todo.title}
      </div>
    </div>
  );
};

export default Todos;

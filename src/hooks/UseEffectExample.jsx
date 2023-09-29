/*
  UseEffect
  - UseEffect akan berjalan ketika ada state yang berubah atau dirender
  - Jika menambahkan depedensi [] pada useEffect maka akan berjalan di awal saja
*/

import React, { useEffect, useState } from "react";
import Todos from "../training/Todos";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("running");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
      });
  }, []); // menjalankan state yang ada di dalam depedensinya

  const handlePlus = () => {
    setCount((count) => count + 1);
  };

  const handleMinus = () => {
    setCount2(count2 - 1);
  };

  return (
    <div className="flex items-center">
      <div>
        <div className="flex items-center justify-center mb-10">
          <button
            className="text-white bg-black rounded-md w-7 h-7"
            onClick={handleMinus}
          >
            -
          </button>
          <h1 className="mx-3 text-2xl font-bold">{count2}</h1>
          <h1 className="mx-3 text-2xl font-bold">{count}</h1>
          <button
            className="text-white bg-black rounded-md w-7 h-7"
            onClick={handlePlus}
          >
            +
          </button>
        </div>
        <div>
          {todos.map((todo, i) => {
            return <Todos todo={todo} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UseEffectExample;

import React, { useState } from "react";

const UseStateExample = () => {
  const [count, setCount] = useState(0);

  // const handleDec = () => {
  //   setCount(count - 1);
  // };

  // const handleInc = () => {
  //   setCount((count) => count + 1);
  //   setCount((count) => count + 1); // mengembalikan nilai count
  // };

  return (
    <div className="flex items-center">
      <button
        className="text-white bg-black rounded-md w-7 h-7"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <h1 className="mx-3 text-2xl font-bold">{count}</h1>
      <button
        className="text-white bg-black rounded-md w-7 h-7"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default UseStateExample;

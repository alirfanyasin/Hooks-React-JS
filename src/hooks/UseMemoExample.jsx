import React, { useMemo, useState } from "react";

const heavyFunction = (counter) => {
  for (let i = 0; i <= 2000000000; i++) {}
  return counter * 3;
};

const UseMemoExample = () => {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState({ color: "text-red-400", title: "Red" });

  const counter3x = useMemo(() => {
    return heavyFunction(counter);
  }, [counter]);

  // const counter3x = heavyFunction(counter);

  const handlePlus = () => {
    setCounter((count) => count + 1);
  };

  const handleMinus = () => {
    setCounter((count) => count - 1);
  };

  return (
    <div>
      <h1 className="mx-3 text-2xl font-bold">3x count : {counter3x}</h1>

      <div className="flex items-center">
        <button
          className="text-white bg-black rounded-md w-7 h-7"
          onClick={handleMinus}
        >
          -
        </button>
        <h1 className="mx-3 text-2xl font-bold">{counter}</h1>
        <button
          className="text-white bg-black rounded-md w-7 h-7"
          onClick={handlePlus}
        >
          +
        </button>
      </div>
      <div className="flex items-center">
        <h2 className={`text-2xl font-bold ${color.color}`}>
          Color : {color.title}
        </h2>
      </div>
      <div>
        <button
          className="px-5 py-1 bg-red-400 rounded-lg"
          onClick={() => setColor({ color: "text-red-400", title: "Red" })}
        >
          Red
        </button>
        <button
          className="px-5 py-1 bg-green-400 rounded-lg"
          onClick={() => setColor({ color: "text-green-400", title: "Green" })}
        >
          Green
        </button>
        <button
          className="px-5 py-1 bg-blue-400 rounded-lg"
          onClick={() => setColor({ color: "text-blue-400", title: "Blue" })}
        >
          Blue
        </button>
      </div>
    </div>
  );
};

export default UseMemoExample;

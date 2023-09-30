import React, { useCallback, useState } from "react";
import Display from "../training/Display";

const UseCallbackExample = () => {
  const [count, setCount] = useState(1);
  const [showData, setShowData] = useState(false);

  const GetCounterData = useCallback(() => {
    return [count * 2, count * 3, count * 4];
  }, [count]);

  // const GetRandomData = () => {
  //   const random = Math.floor(Math.random() * 100) + 1;
  //   return [random * 2, random * 3, random * 4];
  // };

  return (
    <div>
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

      <div>
        <h2>Show Data : {showData.toString()}</h2>
        <button
          className="px-8 py-2 rounded-lg bg-sky-400"
          onClick={() => setShowData(!showData)}
        >
          Show / Hide
        </button>

        <div>
          <Display getData={GetCounterData} />
        </div>
      </div>
    </div>
  );
};

export default UseCallbackExample;

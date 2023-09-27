import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center">
        <button
          className="p-2 bg-sky-600 text-white rounded-lg"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <h1 className="mx-5 font-bold text-4xl">{count}</h1>
        <button
          className="p-2 bg-sky-600 text-white rounded-lg"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;

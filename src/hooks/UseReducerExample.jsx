import { useReducer } from "react";

const UseReducerExample = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "plus":
        return { count: state.count + action.payload };
      case "minus":
        return { count: state.count - 1 };
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handlePlus = () => {
    return dispatch({ type: "plus", payload: 20 }); // mengirim payload
  };

  const handleMinus = () => {
    return dispatch({ type: "minus" });
  };

  return (
    <div className="flex items-center">
      <button
        className="text-white bg-black rounded-md w-7 h-7"
        onClick={handleMinus}
      >
        -
      </button>
      <h1 className="mx-3 text-2xl font-bold">{state.count}</h1>
      <button
        className="text-white bg-black rounded-md w-7 h-7"
        onClick={handlePlus}
      >
        +
      </button>
    </div>
  );
};

export default UseReducerExample;

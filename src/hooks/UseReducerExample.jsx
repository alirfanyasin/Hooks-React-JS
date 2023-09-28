import { useReducer } from "react";

const UseReducerExample = () => {
  function reducer(state, action) {
    switch (action.type) {
      case ACTION.PLUS:
        return { count: state.count + action.payload };
      case ACTION.MINUS:
        return { count: state.count - 1 };
    }
  }

  const ACTION = {
    PLUS: "plus",
    MINUS: "minus",
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handlePlus = () => {
    return dispatch({ type: ACTION.PLUS, payload: 10 });
  };

  const handleMinus = () => {
    return dispatch({ type: ACTION.MINUS });
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

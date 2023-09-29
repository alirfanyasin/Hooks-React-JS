/*
 *  UseRef
 * - Ref hook biasa digunakan dalam melakukan hold informasi yang tidak di lakukan render
 * - Ada 2 ref hook useRef dan useImperativeHandle
 */

import { useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        className="mr-5 border border-green-400 border-1"
      />
      <button
        className="px-5 py-2 font-semibold text-center text-white bg-blue-400 rounded-md"
        onClick={focusInput}
      >
        Focus
      </button>
    </div>
  );
};

export default UseRefExample;

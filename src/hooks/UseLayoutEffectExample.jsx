/*
  UseLayoutEffect
  - useEffect menganut sistem syncronos
*/

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffectExample = () => {
  const [number, setNumber] = useState(0);
  const [sectionStyle, setSectionStyle] = useState({});
  const sectionRef = useRef();

  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500);
    for (let i = 0; i <= 100000000; i++) {
      if (i === 100000) setSectionStyle({ paddingTop: `${random}px` });
    }
  }, [number]);

  return (
    <div className="flex items-center" style={sectionStyle}>
      <button
        className="text-white bg-black rounded-md w-7 h-7"
        onClick={() => setNumber(number - 1)}
      >
        -
      </button>
      <h1 className={`mx-3 text-2xl font-bold`} ref={sectionRef}>
        {number}
      </h1>
      <button
        className="text-white bg-black rounded-md w-7 h-7"
        onClick={() => setNumber(number + 1)}
      >
        +
      </button>
    </div>
  );
};

export default UseLayoutEffectExample;
